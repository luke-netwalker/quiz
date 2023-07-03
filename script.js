const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const firstQuestionInput = document.getElementById("firstQuestion");
const submitButton = document.getElementById("submit");

var exams = document.getElementById('exams');
var exam = exams.firstElementChild.value;
var title = exams.firstElementChild.textContent;
let shuffledQuestions;
var all_questions;
var selectedOption;
var incorrectQuestion = [];

// Aggiungere un listener per il cambiamento dell'esame selezionata
exams.addEventListener('change', function() {
    exam = exams.value;
});

// Aggiungere un listener per il cambiamento dell'opzione selezionata
select1.addEventListener("change", function() {
  if (select1.checked) {
    // Disabilitare il campo di input "firstQuestion" se select1 è selezionato
    firstQuestionInput.disabled = true;
    firstQuestionInput.value = 0;
    document.getElementById("hmq").value = 40;

  }
});

select2.addEventListener("change", function() {
  if (select2.checked) {
    // Abilitare il campo di input "firstQuestion" se select2 è selezionato
    firstQuestionInput.disabled = false;
    firstQuestionInput.value = 0;
    document.getElementById("hmq").value = 10;
  }
});

// Aggiungere un listener per l'evento di click del pulsante "submit"
submitButton.addEventListener("click", function() {

  $(document).ready(function() {
    $.ajax({
        url: exam,
        dataType: "json",
        async: false, // Imposta la chiamata come sincrona
        success: function(data) {
        all_questions = data;
        window.all_questions = all_questions;
        },
        error: function() {
        console.log('Errore nel caricamento del file JSON.');
        }
    });
        
        const firstQuestionValue = document.getElementById("firstQuestion").value;
        const hmqValue = document.getElementById("hmq").value;
        const timeCorrectValue = document.getElementById("time_correct").value * 1000;
        const timeIncorrectValue = document.getElementById("time_incorrect").value * 1000;
       
        window.correctAnswersCount = 0;
        window.lastQuestions = parseInt(firstQuestionValue) + parseInt(hmqValue);

        if (lastQuestions>all_questions.length) {
          window.lastQuestions = all_questions.length
        }

        if (parseInt(hmqValue) > all_questions.length) {
          hmqValue = all_questions.length
        }

        if ((parseInt(firstQuestionValue) + parseInt(hmqValue)) > all_questions.length) {
          window.firstQuestionValue = all_questions.length - parseInt(hmqValue)
          console.log("i valori inseriti vanno fuori scala, i nuovi valori sono:")
          console.log("prima domanda (indice)", window.firstQuestionValue)
          console.log("numero domande", parseInt(hmqValue))
          console.log("ultima domanda (indice)", window.lastQuestions-1)
        }
        else {
          window.firstQuestionValue = parseInt(firstQuestionValue)
          console.log("i valori inseriti sono:")
          console.log("prima domanda (indice)", window.firstQuestionValue)
          console.log("numero domande", parseInt(hmqValue))
          console.log("ultima domanda (indice)", window.lastQuestions-1)
        }

        window.currentQuestionIndex = window.firstQuestionValue;
        window.hmqValue = hmqValue;
        window.timeCorrectValue = timeCorrectValue;
        window.timeIncorrectValue = timeIncorrectValue;
       
          // Rendi visibile la progress bar
          document.getElementById('progress-bar').style.display = 'block';
          // Rendi visibile il question-container
          document.getElementById('question-container').style.display = 'flex';
          // Rendi invisibile il settings-container
          document.getElementById('settings-container').style.display = 'none';
          // Rendi invisibile il retry-button
          document.getElementById('retry-button').style.display = 'none';
        check_pre_exam();
        showQuestion();   
    });
  
});

//funzione per eseguire alcuni check preliminari
function check_pre_exam() {
const questions = all_questions.slice(window.firstQuestionValue, window.lastQuestions);

if (select1.checked) {
    shuffledQuestions = shuffleArray(all_questions);
}
else {
    shuffledQuestions = shuffleArray(questions);
}
}

//funzione principale, serve a mostrare la domanda e le relative opzioni
function showQuestion() {
  
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result");
  const progressBar = document.getElementById("progress-bar");

  questionContainer.style.display = "block";
  optionsContainer.innerHTML = "";
  resultContainer.innerHTML = "";

  optionsContainer.classList.remove("disable-interaction");

  if (currentQuestionIndex >= lastQuestions) {
    questionContainer.style.display = "none";
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('retry-button').removeAttribute('style');
    if (correctAnswersCount === lastQuestions-firstQuestionValue) {
      document.getElementById('retry-button').style.display = 'none';
    }
    document.getElementById('settings-container').style.display = 'flex';

    if (((correctAnswersCount / (lastQuestions - firstQuestionValue)) * 100) > 65) {
        resultContainer.innerHTML = `Hai superato l'esame! Risposte corrette: ${correctAnswersCount}/${(lastQuestions-firstQuestionValue)} (${(correctAnswersCount / (lastQuestions - firstQuestionValue)) * 100}%)`;
    }
    else {
        resultContainer.innerHTML = `Non hai superato l'esame! Risposte corrette: ${correctAnswersCount}/${(lastQuestions-firstQuestionValue)} (${(correctAnswersCount / (lastQuestions - firstQuestionValue)) * 100}%)<br> per superare l'esame serve il 65% di risposte corrette`;
      }
    progressBar.style.width = "100%";
    return;
  }
  console.log(parseInt(currentQuestionIndex),parseInt(firstQuestionValue));
  const rQuestion = shuffledQuestions[parseInt(currentQuestionIndex)-parseInt(firstQuestionValue)];
  const shuffledQuestion = shuffleQuestionOptions(rQuestion);
  questionText.innerHTML = rQuestion.question;
  
  for (let i = 0; i < rQuestion.options.length ; i++) {
    const option = document.createElement("div");
    option.className = "option";
    option.textContent = shuffledQuestion.options[i];
    option.addEventListener("click", () =>checkAnswer(option, rQuestion.correctAnswer, rQuestion));
    optionsContainer.appendChild(option);
  }

  //console.clear()
  console.log("domanda:", currentQuestionIndex - firstQuestionValue + 1, "/", lastQuestions - firstQuestionValue)

  progressBar.style.width = `${((currentQuestionIndex - firstQuestionValue + 1) / (lastQuestions - firstQuestionValue)) * 100}%`;
}

// Funzione per mescolare un array utilizzando l'algoritmo di Fisher-Yates
  function shuffleArray(array) {;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

}

// Funzione per mescolare le risposte all'interno di ogni domanda
function shuffleQuestionOptions(question) {
    question.options = shuffleArray(question.options);
    return question;
}

// Funzione per verificare la risposta data dall'utente
function checkAnswer(option, correctAnswer, rQuestion) {
  option.classList.add("incorrect-answer");
  const optionsContainer = document.getElementById("options-container");
  const c_option = optionsContainer.getElementsByClassName("option");
  optionsContainer.classList.add("disable-interaction");
  for (let i = 0; i < c_option.length; i++) {
    if (c_option[i].textContent === correctAnswer) {
      c_option[i].classList.add("correct-answer");
    }
  }

  if (option.textContent === correctAnswer) {
    option.classList.remove("incorrect-answer");
    option.classList.add("correct-answer");
    correctAnswersCount++;
  } else {
    setTimeout(showQuestion, timeIncorrectValue);
    incorrectQuestion.push(rQuestion);
    currentQuestionIndex++;
    return;
  }

  currentQuestionIndex++;
  setTimeout(showQuestion, timeCorrectValue);


}

// funzione per riprovare il quiz una volta finito l'esame
function retryIncorrectQuestion() {
  console.clear();
  document.getElementById('settings-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'none';
  shuffledQuestions = shuffleArray(incorrectQuestion);
  currentQuestionIndex = 0;
  firstQuestionValue = 0;
  window.lastQuestions = incorrectQuestion.length;
  correctAnswersCount = 0;
  incorrectQuestion = [];
  showQuestion();
}

//funzione per cercare la domanda su Bing chat
function search() {
    const query = document.getElementById("question-text");
    const answers = document.getElementById("options-container");
    var encodedQuery = encodeURIComponent(query.textContent) + " ; quali tra queste è la risposta corretta: [" + answers.getElementsByClassName("option")[0].textContent + " ; " + answers.getElementsByClassName("option")[1].textContent + " ; " + answers.getElementsByClassName("option")[2].textContent + " ; " + answers.getElementsByClassName("option")[3].textContent + " ] (contesto " + title + " ; rispondi in italiano)";
    var baseUrl = "https://www.bing.com/search?q=";
    var searchUrl = baseUrl + encodedQuery;
    window.open(searchUrl, "_blank");
}