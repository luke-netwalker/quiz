// Ottenere i riferimenti agli elementi del DOM
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const firstQuestionInput = document.getElementById("firstQuestion");
let shuffledQuestions;
// Aggiungere un listener per il cambiamento dell'opzione selezionata
select1.addEventListener("change", function() {
  if (select1.checked) {
    // Disabilitare il campo di input "firstQuestion" se select1 è selezionato
    firstQuestionInput.disabled = true;
    firstQuestionInput.value = 0
  }
});

select2.addEventListener("change", function() {
  if (select2.checked) {
    // Abilitare il campo di input "firstQuestion" se select2 è selezionato
    firstQuestionInput.disabled = false;
  }
});

// Ottenere il riferimento al pulsante "submit"
const submitButton = document.getElementById("submit");

// Aggiungere un listener per l'evento di click del pulsante "submit"
submitButton.addEventListener("click", function() {
  // Ottenere i valori dei campi di input
  const firstQuestionValue = document.getElementById("firstQuestion").value;
  const hmqValue = document.getElementById("hmq").value;
  const timeCorrectValue = document.getElementById("time_correct").value;
  const timeIncorrectValue = document.getElementById("time_incorrect").value;
 
  window.currentQuestionIndex = firstQuestionValue;
  window.correctAnswersCount = 0;
  window.lastQuestions = parseInt(firstQuestionValue) + parseInt(hmqValue);
  window.firstQuestionValue = firstQuestionValue;
  window.hmqValue = hmqValue;
  window.timeCorrectValue = timeCorrectValue;
  window.timeIncorrectValue = timeIncorrectValue;
  
    // Rendi visibile la progress bar
    document.getElementById('progress-bar').style.display = 'block';
    // Rendi visibile il question-container
    document.getElementById('question-container').style.display = 'flex';
    // Rendi invisibile il settings-container
    document.getElementById('settings-container').style.display = 'none';

  check_pre_exam();
  showQuestion();
});



//json contenente tutte le domande
const all_questions = [
    {
        "question": "Which ITIL guiding principle recommends using existing services, processes and tools when improving services?",
        "options": [
            "Progress iteratively with feedback",
            "Keep is simple and practical",
            "Start where you are",
            "Focus on value"
        ],
        "correctAnswer": "Start where you are"
    },
    {
        "question": "Which practice has a purpose that includes ensuring that risks have been properly assessed?",
        "options": [
            "Service configuration management",
            "Problem management",
            "Service level management",
            "Change control"
        ],
        "correctAnswer": "Change control"
    },
    {
        "question": "When should a full risk assessment and authorization be carried out for a standard change?",
        "options": [
            "Each time the standard change is implemented",
            "When the procedure for the standard change is created",
            "At least once a year",
            "When an emergency change is requested"
        ],
        "correctAnswer": "When the procedure for the standard change is created"
    },
    {
        "question": "Which statement about emergency changes is CORRECT?",
        "options": [
            "The testing of emergency can be eliminated in order to implement the change quickly",
            "The assessment and authorization of emergency changes is expedited to ensure they can be implemented quickly",
            "Emergency changes should be authorized and implemented as service requests",
            "Emergency changes must be fully documented before authorization and implementation"
        ],
        "correctAnswer": "The assessment and authorization of emergency changes is expedited to ensure they can be implemented quickly"
    },
    {
        "question": "Which practice coordinates the classification, ownership and communication of service requests and incidents?",
        "options": [
            "Supplier management",
            "Service desk",
            "Problem management",
            "Relationship management"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "What is warranty?",
        "options": [
            "Assurance that a product or service will meet agreed requirements",
            "The amount of money spent on a specific activity or resource",
            "The functionality offered by a product or service to meet a particular need",
            "The perceived benefits, usefulness and importance of something"
        ],
        "correctAnswer": "Assurance that a product or service will meet agreed requirements"
    },
    {
        "question": "Which is part of service provision?",
        "options": [
            "The management of resources configured to deliver the service",
            "The management of resources needed to consume the service",
            "The grouping of one or more services based on one or more products",
            "The joint activities performed to ensure continual value co-creation"
        ],
        "correctAnswer": "The management of resources configured to deliver the service"
    },
    {
        "question": "Which statement about a 'continual improvement register' is CORRECT?",
        "options": [
            "It should be managed at the senior level of the organization",
            "It should be used to capture user demand",
            "There should only be one for the whole organization",
            "It should be re-prioritized as ideas are documented",
        ],
        "correctAnswer": "It should be re-prioritized as ideas are documented"
    },
    {
        "question": "What are 'engage', 'plan' and 'improve' examples of?",
        "options": [
            "Service value chain activities",
            "Service level management",
            "Service value chain inputs",
            "Change control"
        ],
        "correctAnswer": "Service value chain activities"
    },
    {
        "question": "Which statement about outcomes is CORRECT?",
        "options": [
            "An outcome can be enabled by more than one output",
            "Outcomes are how the service performs",
            "An output can be enabled by one or more outcomes",
            "An outcome is a tangible or intangible activity"
        ],
        "correctAnswer": "An outcome can be enabled by more than one output"
    },
    {
        "question": "Which statement about service desks is CORRECT?",
        "options": [
            "The service desk should work in close collaboration with support and development teams",
            "The service desk should rely on self-service portals instead of escalation to support teams",
            "The service desk should remain isolated from technical support teams",
            "The service desk should escalate all technical issues to support and development teams"
        ],
        "correctAnswer": "The service desk should work in close collaboration with support and development teams"
    },
    {
        "question": "Which practice updates information relating to symptoms and business impact?",
        "options": [
            "Service level management",
            "Change control",
            "Service request management",
            "Incident management",
        ],
        "correctAnswer": "Incident management"
    },
    {
        "question": "Which is included in the purpose of the 'design and transition' value chain activity?",
        "options": [
            "Ensuring that service components are available when needed",
            "Providing transparency and good stakeholder relationships",
            "Supporting services according to specifications",
            "Continually meeting stakeholder expectations for costs"
        ],
        "correctAnswer": "Continually meeting stakeholder expectations for costs"
    },
    {
        "question": "Which practice has a purpose to support the quality of the service by handling all agreed user initiated service requests?",
        "options": [
            "Change control",
            "IT asset management",
            "Service desk",
            "Service request management"
        ],
        "correctAnswer": "Service request management"
    },
    {
        "question": "Which is NOT a component of the service value system?",
        "options": [
            "The guiding principles",
            "Governance",
            "Practices",
            "The four dimensions of service management"
        ],
        "correctAnswer": "The four dimensions of service management"
    },
    {
        "question": "Which statement about the steps to fulfill a service request is CORRECT?",
        "options": [
            "They should be complex and detailed",
            "They should be well-known and proven",
            "They should include incident handling",
            "They should be brief and simple"
        ],
        "correctAnswer": "They should be well-known and proven"
    },
    {
        "question": "What is defined as a cause, or potential cause, of one or more incidents?",
        "options": [
            "Change",
            "Event",
            "Known error",
            "Problem"
        ],
        "correctAnswer": "Problem"
    },
    {
        "question": "Which guiding principle recommends eliminating activities that do not contribute to the creation of value?",
        "options": [
            "Start where you are",
            "Collaborate and promote visibility",
            "Keep it simple and practical",
            "Optimize and automate"
        ],
        "correctAnswer": "Keep it simple and practical"
    },
    {
        "question": "When should the effectiveness of a problem workaround be assessed?",
        "options": [
            "Whenever the workaround is used",
            "Whenever the problem is resolved",
            "Whenever the workaround becomes a known error",
            "Whenever the problem is prioritized"
        ],
        "correctAnswer": "Whenever the workaround is used"
    },
    {
        "question": "Identify the missing word in the following sentence. A change is defined as the addition, modification, or removal of anything that could have a direct or indirect effect on [?].",
        "options": [
            "assets",
            "values",
            "elements",
            "services"
        ],
        "correctAnswer": "services"
    },
    {
        "question": "Which dimension considers how knowledge assets should be protected?",
        "options": [
            "Organizations and people",
            "Partners and suppliers",
            "Information and technology",
            "Value streams and processes"
        ],
        "correctAnswer": "Information and technology"
    },
    {
        "question": "What is a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks?",
        "options": [
            "Service management",
            "Continual improvement",
            "A service",
            "An IT asset"
        ],
        "correctAnswer": "A service"
    },
    {
        "question": "Identify the missing words in the following sentence. The management of information security incidents usually requires [?].",
        "options": [
            "Immediate escalation",
            "Specialist teams",
            "A separate process",
            "Third party support"
        ],
        "correctAnswer": "A separate process"
    },
    {
        "question": "What are the ITIL guiding principles used for?",
        "options": [
            "To help an organization make good decisions",
            "To direct and control an organization",
            "To identify activities that an organization must perform in order to deliver a valuable service",
            "To ensure that an organization's performance continually meets stakeholders' expectations"
        ],
        "correctAnswer": "To help an organization make good decisions"
    },
    {
        "question": "Which is the CORRECT approach for managing a large improvement initiative as smaller iterations?",
        "options": [
            "Each iteration should be designed before starting the initiative and implemented without feedback",
            "Feedback should only be taken into account when one iteration fails to meet its objective",
            "Feedback should be reduced for large improvements as it is unlikely that circumstances will change",
            "Each iteration should be continually re-evaluated based on feedback"
        ],
        "correctAnswer": "Each iteration should be continually re-evaluated based on feedback"
    },
    {
        "question": "What is the purpose of the 'deployment management' practice?",
        "options": [
            "To ensure services achieve agreed and expected performance",
            "To make new or changed services available for use",
            "To move new or changed components to live environments",
            "To set clear business-based targets for service performance"
        ],
        "correctAnswer": "To move new or changed components to live environments"
    },
    {
        "question": "Which is a service request?",
        "options": [
            "Requesting a workaround for an issue",
            "Requesting information about how to create a document",
            "Requesting an enhancement to an application",
            "Requesting investigation of a degraded service"
        ],
        "correctAnswer": "Requesting information about how to create a document"
    },
    {
        "question": "Identify the missing word in the following sentence. The purpose of the supplier management practice is to ensure that the organization's suppliers and their [?] are managed appropriately to support the seamless provision of quality products and services.",
        "options": [
            "costs",
            "users",
            "value",
            "performances"
        ],
        "correctAnswer": "performances"
    },
    {
        "question": "What is a recommendation of the 'focus on value' guiding principle?",
        "options": [
            "Make 'focus on value' a responsibility of the management",
            "Focus on the value of new and significant projects first",
            "Focus on value for the service provider first",
            "Focus on value at every step of the improvement"
        ],
        "correctAnswer": "Focus on value at every step of the improvement"
    },
    {
        "question": "Which guiding principle recommends standardizing and streamlining manual tasks?",
        "options": [
            "Optimize and automate",
            "Collaborate and promote visibility",
            "Focus on value",
            "Think and work holistically"
        ],
        "correctAnswer": "Optimize and automate"
    },
    {
        "question": "Which describes a set of defined steps for implementing improvements?",
        "options": [
            "The 'improve' value chain activity",
            "The 'continual improvement register'",
            "The 'continual improvement model'",
            "The 'engage' value chain activity",
        ],
        "correctAnswer": "The 'continual improvement model'"
    },
    {
        "question": "Which is a key requirement for a successful service level agreement?",
        "options": [
            "It should be written in legal language",
            "It should be simply written and easy to understand",
            "It should be based on the service provider's view of the service",
            "It should relate to simple operational metrics"
        ],
        "correctAnswer": "It should be simply written and easy to understand"
    },
    {
        "question": "When planning 'continual improvement', which approach for assessing the current state of a service is CORRECT?",
        "options": [
            "An organization should always use a single technique to ensure metrics are consistent",
            "An organization should always use a strength, weakness, opportunity and threat (SWOT) analysis",
            "An organization should always develop competencies in methodologies and techniques that will meet their needs",
            "An organization should always use an approach that combines Lean, Agile and DevOps methodologies"
        ],
        "correctAnswer": "An organization should always develop competencies in methodologies and techniques that will meet their needs"
    },
    {
        "question": "How does a service consumer contribute to the reduction of disk?",
        "options": [
            "By paying for the service",
            "By managing server hardware",
            "By communicating constraints",
            "By managing staff availability"
        ],
        "correctAnswer": "By communicating constraints"
    },
    {
        "question": "What helps diagnose and resolve a simple incident?",
        "options": [
            "Rapid escalation",
            "Formation of a temporary team",
            "The use of scripts",
            "Problem prioritization"
        ],
        "correctAnswer": "The use of scripts"
    },
    {
        "question": "Which ITIL practice has a purpose that includes reducing the likelihood of incidents?",
        "options": [
            "Change control",
            "Continual improvement",
            "Problem management",
            "Service desk"
        ],
        "correctAnswer": "Problem management"
    },
    {
        "question": "Which service level metrics are BEST for measuring user experience?",
        "options": [
            "Single system-based metrics",
            "Metrics for the percentage of uptime of a service",
            "Operational metrics",
            "Metrics linked to defined outcomes"
        ],
        "correctAnswer": "Metrics linked to defined outcomes"
    },
    {
        "question": "What are the MOST important skills required by service desk staff?",
        "options": [
            "Incident analysis skills",
            "Technical skills",
            "Problem resolution skills",
            "Supplier management skills"
        ],
        "correctAnswer": "Incident analysis skills"
    },
    {
        "question": "Which two statements about an organization's culture are CORRECT?",
        "options": [
            "1. It is created from shared values based on how it carries out its work",
            "2. It is determined by the type of technology used to support services",
            "3. It should be based on the culture of prospective suppliers",
            "4. It should be based on the objectives of the organization",
            "1 and 2",
            "2 and 3",
            "3 and 4",
            "1 and 4"
        ],
        "correctAnswer": "1 and 4"
    },
    {
        "question": "When should a change request be submitted to resolve a problem?",
        "options": [
            "As soon as a solution for the problem has been identified",
            "As soon as a workaround for the problem has been identified",
            "As soon as the analysis of the frequency and impact of incidents justifies the change",
            "As soon as the analysis of cost, risks and benefits justifies the change"
        ],
        "correctAnswer": "As soon as the analysis of cost, risks and benefits justifies the change"
    },
    {
        "question": "Which guiding principle helps to ensure that better information is available for decision making?",
        "options": [
            "Keep it simple and practical",
            "Think and work holistically",
            "Optimize and automate",
            "Collaborate and promote visibility"
        ],
        "correctAnswer": "Collaborate and promote visibility"
    },
    {
        "question": "Which practice has a purpose that includes observing a service to report selected changes of state identified as events?",
        "options": [
            "Information security management",
            "Monitoring and event management",
            "Incident management",
            "Change control"
        ],
        "correctAnswer": "Monitoring and event management"
    },
    {
        "question": "Which describes a standard change?",
        "options": [
            "A change that needs to be scheduled, assessed and authorized following a defined process",
            "A change that is typically implemented as a service request",
            "A high-risk change that needs very thorough assessment",
            "A change that must be implemented as soon as possible"
        ],
        "correctAnswer": "A change that is typically implemented as a service request"
    },
    {
        "question": "How does information about problems and known errors contribute to 'incident management'?",
        "options": [
            "It enables quick and efficient diagnosis of incidents",
            "It removes the need for regular customer updates",
            "It removes the need for collaboration during incident resolution",
            "It enables the reassessment of known errors"
        ],
        "correctAnswer": "It enables quick and efficient diagnosis of incidents"
    },
    {
        "question": "Which practice owns and manages issues, queries and requests from users?",
        "options": [
            "Incident management",
            "Service desk",
            "Change control",
            "Problem management"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "What defines the requirements for a service and takes responsibility for the outcomes of service consumption?",
        "options": [
            "An IT asset",
            "A customer",
            "A configuration item (CI)",
            "A user"
        ],
        "correctAnswer": "A customer"
    },
    {
        "question": "Which stakeholders co-create value in a service relationship?",
        "options": [
            "Investor and supplier",
            "Consumer and provider",
            "Provider and supplier",
            "Investor and consumer"
        ],
        "correctAnswer": "Consumer and provider"
    },
    {
        "question": "Which describes normal changes?",
        "options": [
            "Changes that are low-risk and pre-authorized",
            "Changes that need to be scheduled and assessed following a process",
            "Changes that are typically initiated as service requests",
            "Changes that must be implemented as soon as possible"
        ],
        "correctAnswer": "Changes that need to be scheduled and assessed following a process"
    },
    {
        "question": "What is the expected outcome from using a service value chain?",
        "options": [
            "Service value streams",
            "Customer engagement",
            "Value realization",
            "The application of practices"
        ],
        "correctAnswer": "Value realization"
    },
    {
        "question": "Which statement about outcomes is CORRECT?",
        "options": [
            "Outcomes are one or more services that fulfill the needs of a service consumer",
            "Service providers help service consumers achieve outcomes",
            "Outcomes help service consumers achieve outputs",
            "Helping service consumers achieve outcomes reduces service provider costs",
        ],
        "correctAnswer": "Service providers help service consumers achieve outcomes"
    },
    {
        "question": "Which skill is an essential part of the 'service level management' practice?",
        "options": [
            "Technical knowledge",
            "Listening",
            "Diagnosis",
            "Problem analysis"
        ],
        "correctAnswer": "Listening"
    },
    {
        "question": "What are the three phases of 'problem management'?",
        "options": [
            "Problem logging, problem classification, problem resolution",
            "Incident management, problem management, change enablement",
            "Problem identification, problem control, error control",
            "Problem analysis, error identification, incident resolution"
        ],
        "correctAnswer": "Problem identification, problem control, error control"
    },
    {
        "question": "Which is a purpose of the 'engage' value chain activity?",
        "options": [
            "Meeting expectations for quality, costs and time-to-market",
            "Providing transparency and good relationships",
            "Ensuring the continual improvement of services",
            "Ensuring that the organization's vision is understood"
        ],
        "correctAnswer": "Providing transparency and good relationships"
    },
    {
        "question": "Identify the missing word in the following sentence.The purpose of the service configuration management practice is to ensure that accurate and reliable information about the configuration of services, and the [?] that support them, is available when and where it is needed.",
        "options": [
            "suppliers",
            "CIs",
            "customers",
            "assets"
        ],
        "correctAnswer": "CIs"
    },
    {
        "question": "What is described by the service value system?",
        "options": [
            "How all the components and activities of the organization work together as a system to enable value creation",
            "Services based on one or more products, designed to address needs of a target consumer group",
            "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation",
            "How to apply the systems approach of the guiding principle think and work holistically"
        ],
        "correctAnswer": "How all the components and activities of the organization work together as a system to enable value creation"
    },
    {
        "question": "Which practice requires that staff demonstrate excellent customer service skills, such as empathy and emotional intelligence?",
        "options": [
            "Problem management",
            "Supplier management",
            "Release management",
            "Service desk"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "What is defined as any component that needs to be managed in order to deliver an IT service?",
        "options": [
            "A service request",
            "A configuration item (CI)",
            "An incident",
            "An IT asset"
        ],
        "correctAnswer": "A configuration item (CI)"
    },
    {
        "question": "Which guiding principle recommends using the minimum number of steps necessary to achieve an objective?",
        "options": [
            "Progress iteratively with feedback",
            "Focus on value",
            "Think and work holistically",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Keep it simple and practical"
    },
    {
        "question": "Which two statements about the 'service request management' practice are CORRECT?",
        "options": [
            "1. Service requests are part of normal service delivery",
            "2. Complaints can be handled as service requests",
            "3. Service requests result from a failure in service",
            "4. Normal changes should be handled as service requests",
            "1 and 2",
            "2 and 3",
            "3 and 4",
            "1 and 4"
        ],
        "correctAnswer": "1 and 2"
    },
    {
        "question": "What is an IT asset?",
        "options": [
            "Any financially valuable component that can contribute to delivery of an IT product or service",
            "Any component that needs to be managed in order to deliver a service",
            "A request from a user mat initiates a service action",
            "The removal of anything that could have a direct or indirect effect on services"
        ],
        "correctAnswer": "Any financially valuable component that can contribute to delivery of an IT product or service"
    },
    {
        "question": "Which dimension includes a workflow management system?",
        "options": [
            "Organizations and people",
            "Partners and suppliers",
            "Information and technology",
            "Value streams and processes",
        ],
        "correctAnswer": "Value streams and processes"
    },
    {
        "question": "Identify the missing word in the following sentence. A service is a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific [?] and risks.",
        "options": [
            "information",
            "costs",
            "utility",
            "warranty"
        ],
        "correctAnswer": "costs"
    },
    {
        "question": "Which of these should be logged and managed as a problem?",
        "options": [
            "A user requests delivery of a laptop",
            "A monitoring tool detects a change of state for a service",
            "Trend analysis shows a large number of similar incidents",
            "'Continual improvement' needs to prioritize an improvement opportunity"
        ],
        "correctAnswer": "Trend analysis shows a large number of similar incidents"
    },
    {
        "question": "In which two situations should the ITIL guiding principles be considered?",
        "options": [
            "1. In every initiative",
            "2. In relationships with all stakeholders",
            "3. Only in specific initiatives where the principle is relevant",
            "4. Only in specific stakeholder relationships where the principle is relevant",
            "1 and 2",
            "2 and 3",
            "3 and 4",
            "1 and 4"
        ],
        "correctAnswer": "1 and 2"
    },
    {
        "question": "Which guiding principle recommends coordinating all dimensions of service management?",
        "options": [
            "Start where you are",
            "Progress iteratively with feedback",
            "Think and work holistically",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Think and work holistically"
    },
    {
        "question": "What is the purpose of the 'relationship management' practice?",
        "options": [
            "To establish and nurture the links between the organization and its stakeholders",
            "To align the organization's practices and services with changing business needs",
            "To set clear business-based targets for service performance",
            "To support the agreed quality of a service handling all agreed, user-initiated service requests"
        ],
        "correctAnswer": "To establish and nurture the links between the organization and its stakeholders"
    },
    {
        "question": "How should the workflow for a new service request be designed?",
        "options": [
            "Use a single workflow for all types of service request",
            "Use different workflows for each type of service request",
            "Avoid workflows for simple service requests",
            "Leverage existing workflows whenever possible"
        ],
        "correctAnswer": "Leverage existing workflows whenever possible"
    },
    {
        "question": "What is the purpose of the 'information security management' practice?",
        "options": [
            "To protect the information needed by the organization to conduct its business",
            "To observe services and service components",
            "To ensure that accurate and reliable information about the configuration of services is available when and where it is needed",
            "To plan and manage the full lifecycle of all IT assets"
        ],
        "correctAnswer": "To protect the information needed by the organization to conduct its business"
    },
    {
        "question": "Identify the missing word in the following sentence. The use of [?] should support, not replace what is observed, when using the 'start where you are' guiding principle.",
        "options": [
            "measurement",
            "tools",
            "plans",
            "process"
        ],
        "correctAnswer": "measurement"
    },
    {
        "question": "How should automation be implemented?",
        "options": [
            "By replacing human intervention wherever possible",
            "By replacing the existing tools first",
            "By initially concentrating on the most complex tasks",
            "By optimizing as much as possible first"
        ],
        "correctAnswer": "By replacing human intervention wherever possible"
    },
    {
        "question": "Which activity is part of the 'continual improvement' practice?",
        "options": [
            "Identifying and logging opportunities",
            "Delivering tactical and operational engagement with customers",
            "Populating and maintaining the asset register",
            "Providing a clear path for users to report issues, queries, and requests"
        ],
        "correctAnswer": "Identifying and logging opportunities"
    },
    {
        "question": "Which competencies are required by the 'service level management' practice?",
        "options": [
            "Problem investigation and resolution",
            "Business analysis and commercial management",
            "Incident analysis and prioritization",
            "Balanced scorecard reviews and maturity assessment"
        ],
        "correctAnswer": "Business analysis and commercial management"
    },
    {
        "question": "Which practice uses techniques such as SWOT analysis, balanced scorecard reviews, and maturity assessments?",
        "options": [
            "Incident management",
            "Problem management",
            "Continual improvement",
            "Service request management"
        ],
        "correctAnswer": "Continual improvement"
    },
    {
        "question": "Which statement about costs is CORRECT?",
        "options": [
            "Costs imposed on the consumer are costs of service utility",
            "Costs removed from the consumer are part of the value proposition",
            "Costs imposed on the consumer are costs of service warranty",
            "Costs removed from the consumer are part of service consumption"
        ],
        "correctAnswer": "Costs removed from the consumer are part of the value proposition"
    },
    {
        "question": "What is typically needed to assign complex incidents to support groups?",
        "options": [
            "A self-help tool",
            "The incident priority",
            "A change schedule",
            "The incident category"
        ],
        "correctAnswer": "The incident category"
    },
    {
        "question": "Which practice has a purpose that includes aligning the organization's practices and services with changing business needs?",
        "options": [
            "Service level management",
            "Service configuration management",
            "Relationship management",
            "Continual improvement"
        ],
        "correctAnswer": "Continual improvement"
    },
    {
        "question": "A major incident has been closed, but there is a risk that it might happen again. How should this be logged and managed?",
        "options": [
            "As a change request",
            "As a service request",
            "As an event",
            "As a problem"
        ],
        "correctAnswer": "As a problem"
    },
    {
        "question": "What should be done to determine the appropriate metrics for measuring a new service?",
        "options": [
            "Measuring the performance over the first six months, and basing a solution on the results",
            "Asking customers to provide numerical targets that meet their needs",
            "Asking customers open questions to establish their requirements",
            "Using operational data to provide detailed service reports"
        ],
        "correctAnswer": "Using operational data to provide detailed service reports"
    },
    {
        "question": "Which dimension includes activities and workflows?",
        "options": [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        "correctAnswer": "Value streams and processes"
    },
    {
        "question": "What should be used to set user expectations for request fulfillment times?",
        "options": [
            "The time that the customer indicates for service delivery",
            "The consumer demand for the service",
            "The time needed to realistically deliver the service",
            "The service levels of the supplier"
        ],
        "correctAnswer": "The time needed to realistically deliver the service"
    },
    {
        "question": "Which is one of the five aspects of service design?",
        "options": [
            "Management information systems and tools",
            "Risk analysis and management approach",
            "Management policy for business case creation",
            "Corporate governance and policy"
        ],
        "correctAnswer": "Management information systems and tools"
    },
    {
        "question": "Which statement about IT service management is CORRECT?",
        "options": [
            "It is performed by customers using a mix of IT systems, services and processes",
            "It is performed by IT service providers using a mix of suppliers and their products",
            "It is performed by the service desk using a mix of people, process and technology",
            "It is performed by IT service providers using a mix of people, process and technology"
        ],
        "correctAnswer": "It is performed by IT service providers using a mix of people, process and technology"
    },
    {
        "question": "Which is the CORRECT explanation of the 'R' role in a RACI matrix?",
        "options": [
            "This role ensures that activities are executed correctly",
            "This role has ownership of the end result",
            "This role is involved in providing knowledge and input",
            "This role ensures the flow of information to stakeholders"
        ],
        "correctAnswer": "This role has ownership of the end result"
    },
    {
        "question": "Which statement about change management is CORRECT?",
        "options": [
            "It optimizes overall business risk",
            "It optimizes financial exposure",
            "It ensures that all changes are authorized by the change advisory board (CAB)",
            "It ensures that service requests follow the normal change management process"
        ],
        "correctAnswer": "It ensures that all changes are authorized by the change advisory board (CAB)"
    },
    {
        "question": "Which statement about the 'four Ps' of service design is CORRECT?",
        "options": [
            "Processes refers to skill and training",
            "Partners refers to suppliers and vendors",
            "People refers to technology and tools",
            "Products refers to producers and metrics"
        ],
        "correctAnswer": "Partners refers to suppliers and vendors"
    },
    {
        "question": "What is the primary focus of business capacity management?",
        "options": [
            "Management, control and prediction of the performance, utilization and capacity of individual elements of IT technology",
            "Review of all capacity supplier agreements and underpinning contracts with supplier management",
            "Management, control and prediction of the end-to-end performance and capacity of the live operational IT services",
            "Future business requirements for IT services are quantified, designed, planned and implemented in a timely fashion"
        ],
        "correctAnswer": "Future business requirements for IT services are quantified, designed, planned and implemented in a timely fashion"
    },
    {
        "question": "Which is NOT a structure of service desk that is described in the ITIL service operation guidance?",
        "options": [
            "Local",
            "Centralized",
            "Outsourced",
            "Virtual"
        ],
        "correctAnswer": "Outsourced"
    },
    {
        "question": "What type of change is pre-authorized, low risk, relatively common, and follows a procedure or work instruction?",
        "options": [
            "A standard change",
            "An emergency change",
            "An internal change",
            "A normal change"
        ],
        "correctAnswer": "A standard change"
    },
    {
        "question": "Which service transition process provides guidance about converting data into information?",
        "options": [
            "Change evaluation",
            "Knowledge management",
            "Service validation and testing",
            "Service asset and configuration management"
        ],
        "correctAnswer": "Knowledge management"
    },
    {
        "question": "Which service catalogue view is considered beneficial when constructing the relationship between services, SLAs, OLAs, and other underpinning agreements?",
        "options": [
            "Service-based SLA view",
            "Wholesale customer view",
            "Retail customer view",
            "Supporting services view"
        ],
        "correctAnswer": "Supporting services view"
    },
    {
        "question": "Service transition contains detailed descriptions of which processes?",
        "options": [
            "Change management, service asset and configuration management, release and deployment management",
            "Change management, capacity management, event management, service request management",
            "Service level management, service portfolio management, service asset and configuration management",
            "Service asset and configuration management, release and deployment management, request fulfillment",
        ],
        "correctAnswer": "Change management, service asset and configuration management, release and deployment management"
    },
    {
        "question": "Which is an objective of the design coordination process?",
        "options": [
            "To produce service design packages and ensure they are handed over to service transition",
            "To assess and evaluate all changes and their impact on service designs",
            "To document the initial structure and relationship between services and customers",
            "To gather and document new service level requirements from the customer"
        ],
        "correctAnswer": "To produce service design packages and ensure they are handed over to service transition"
    },
    {
        "question": "What MAIN factors are considered to assess the priority of an incident?",
        "options": [
            "The urgency and impact",
            "The impact and complexity",
            "The cost and urgency",
            "The complexity and cost"
        ],
        "correctAnswer": "The urgency and impact"
    },
    {
        "question": "Which term is used to describe the prediction and control of income and expenditure within an organization?",
        "options": [            
            "Charging",
            "Governance",
            "Budgeting",
            "Accounting"
        ],
        "correctAnswer": "Budgeting"
    },
    {
        "question": "Where should all master copies of controlled software and documentation be stored?",
        "options": [
            "In the definitive capacity library",
            "In the definitive media library",
            "In the definitive security library",
            "In the definitive production library"
        ],
        "correctAnswer": "In the definitive media library"
    },
    {
        "question": "Which stage of the service lifecycle has the purpose of looking for ways to improve process efficiency and cost effectiveness?",
        "options": [
            "Service operation",
            "Service transition",
            "Continual service improvement",
            "Service strategy"
        ],
        "correctAnswer": "Continual service improvement"
    },
    {
        "question": "Which of the following should IT service continuity strategy be based on?",
        "options": [
            "1. Design of the service metrics",
            "2. Business continuity strategy",
            "3. Business impact analysis (BIA)",
            "4. Risk assessment",
            "1, 2 and 4 only",
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 3 and 4 only"
        ],
        "correctAnswer": "2, 3 and 4 only"
    },
    {
        "question": "What is NOT within the scope of service catalogue management?",
        "options": [
            "Contribution to the definition of services",
            "Interfaces between all services and supporting services",
            "Interfaces between the service catalogue and service portfolio",
            "Fulfilment of business service requests"
        ],
        "correctAnswer": "Fulfilment of business service requests"
    },
    {
        "question": "What three elements make up the Service Portfolio?",
        "options": [
            "Customer portfolio, service catalogue and retired services",
            "Customer portfolio, configuration management system and service catalogue",
            "Service pipeline, service catalogue and retired services",
            "Service pipeline, configuration management system and service catalogue"
        ],
        "correctAnswer": "Service pipeline, service catalogue and retired services"
    },
    {
        "question": "Who is responsible for defining metrics for change management?",
        "options": [
            "The change management process owner",
            "The change advisory board (CAB)",
            "The service owner",
            "The continual service improvement manager"
        ],
        "correctAnswer": "The change management process owner"
    },
    {
        "question": "Which is a supplier category?",
        "options": [
            "Technical",
            "Commodity",
            "Customer",
            "Resource"
        ],
        "correctAnswer": "Resource"
    },
    {
        "question": "Which process is used to compare the value that new services offer with the value of the services they have replaced?",
        "options": [
            "Availability management",
            "Capacity management",
            "Service portfolio management",
            "Service catalogue management"
        ],
        "correctAnswer": "Service portfolio management"
    },
    {
        "question": "Which is an important principle of communication in service operation?",
        "options": [
            "Information should always be communicated",
            "It has an intended purpose or a resultant action",
            "Meetings are always the best method of communication",
            "It is stored in the configuration management system"
        ],
        "correctAnswer": "It has an intended purpose or a resultant action"
    },
    {
        "question": "What do customer perceptions and business outcomes help to define?",
        "options": [
            "The value of a service",
            "Service metrics",
            "The total cost of a service",
            "Key performance indicators (KPIs)"
        ],
        "correctAnswer": "The value of a service"
    },
    {
        "question": "Which statement about metrics is CORRECT?",
        "options": [
            "Process metrics can be used to measure end-to-end service performance",
            "Technology metrics can be used to measure component performance and availability",
            "Process metrics can be used to measure the utilization of a supplier's network",
            "Technology metrics can be used to determine the overall health of a process"
        ],
        "correctAnswer": "Technology metrics can be used to measure component performance and availability"
    },
    {
        "question": "What takes place in the 'Did we get there?' step of the continual service improvement (CSI) approach?",
        "options": [
            "An initial baseline assessment",
            "The production of a detailed CSI plan",
            "Verifying that improvement targets have been achieved",
            "Understanding priorities for improvement"
        ],
        "correctAnswer": "Verifying that improvement targets have been achieved"
    },
    {
        "question": "Which is an example of improving service utility using service management automation?",
        "options": [
            "Pre-determined routing of a service request",
            "Reducing the time to compile service data",
            "Monitoring service availability",
            "Faster resource allocation"
        ],
        "correctAnswer": "Faster resource allocation"
    },
    {
        "question": "What is the CORRECT definition of service management?",
        "options": [
            "A set of specialized assets for transitioning services into the live operational environment",
            "A set of specialized organizational capabilities for delivering value to customers in the form of services",
            "The capability of supplier to deliver services to providers in exchange for money",
            "The capability of service providers to minimize their costs without reducing the value of the services"
        ],
        "correctAnswer": "A set of specialized organizational capabilities for delivering value to customers in the form of services"
    },
    {
        "question": "Which is the correct combination of items that makes up an IT service?",
        "options": [
            "Customers, providers and documents",
            "Information technology, people and processes",
            "Information technology, networks and people",
            "People, processes and customers"
        ],
        "correctAnswer": "Information technology, people and processes"
    },
    {
        "question": "Which problem management activity ensures that a problem can be easily tracked and management information can be obtained?",
        "options": [
            "Categorization",
            "Detection",
            "Prioritization",
            "Escalation"
        ],
        "correctAnswer": "Categorization"
    },
    {
        "question": "What can be used to help determine the impact level of a problem?",
        "options": [
            "Definitive media library (DML)",
            "Configuration management system (CMS)",
            "Statement of requirements (SOR)",
            "Standard operating procedures (SOP)"
        ],
        "correctAnswer": "Configuration management system (CMS)"
    },
    {
        "question": "Which are phases of the release and deployment process?",
        "options": [
            "1. Release build and test",
            "2. Review and close",
            "3. Categorize and record",
            "4. Change authorization and schedule",
            "1 and 2",
            "1 and 3",
            "2 and 4",
            "3 and 4"
        ],
        "correctAnswer": "1 and 2"
    },
    {
        "question": "Which function is responsible for the management of a data centre?",
        "options": [
            "Technical management",
            "Service desk",
            "Application management",
            "Facilities management"
        ],
        "correctAnswer": "Facilities management"
    },
    {
        "question": "Which are the elements of process control?",
        "options": [
            "Inputs, outputs and triggers",
            "Work instructions, procedures and roles",
            "Resources, capabilities and metrics",
            "Process owner, policy and objectives"
        ],
        "correctAnswer": "Process owner, policy and objectives"
    },
    {
        "question": "Which processes are responsible for the regular review of underpinning contracts?",
        "options": [
            "Supplier management and service level management",
            "Supplier management and change management",
            "Availability management and service level management",
            "Supplier management and availability management"
        ],
        "correctAnswer": "Supplier management and service level management"
    },
    {
        "question": "Which statement BEST describes the value of service strategy to the business?",
        "options": [
            "It allows higher volumes of successful change",
            "It reduces unplanned costs through optimized handling of service outages",
            "It reduces the duration and frequency of service outages",
            "It enables the service provider to understand what levels of service will make their customers successful"
        ],
        "correctAnswer": "It enables the service provider to understand what levels of service will make their customers successful"
    },
    {
        "question": "What is a definition of a service improvement plan (SIP)?",
        "options": [
            "A formal plan to implement improvements to a customer's business processes",
            "An input from availability management to service level management, detailing the service design plan",
            "A formal plan to implement improvements to a service or process",
            "An input from financial management for IT services to service level management, detailing the budget plan"
        ],
        "correctAnswer": "A formal plan to implement improvements to a service or process"
    },
    {
        "question": "Which statement about the known error database (KEDB) is CORRECT?",
        "options": [
            "It is maintained by the service desk and updated with the details of each new incident",
            "It is a part of the configuration management database (CMDB) and contains workarounds",
            "It is maintained by problem management and is used by the service desk to help resolve incidents",
            "It is maintained by incident management and contains solutions to be implemented by problem management"
        ],
        "correctAnswer": "It is maintained by problem management and is used by the service desk to help resolve incidents"
    },
    {
        "question": "Which process works with incident management to ensure that security breaches are detected and logged?",
        "options": [
            "Change management",
            "Service level management",
            "Access management",
            "Continual service improvement"
        ],
        "correctAnswer": "Access management"
    },
    {
        "question": "What should a release policy include?",
        "options": [
            "The process owner and process manager for each type of release",
            "The roles and responsibilities for incident and problem resolution",
            "The naming convention and expected frequency of each type of release",
            "The naming convention for all configuration items (CI) recorded in the configuration management system (CMS)"
        ],
        "correctAnswer": "The naming convention and expected frequency of each type of release"
    },
    {
        "question": "Which guiding principle is PRIMARILY concerned with end-to-end service delivery?",
        "options": [
            "Focus on value",
            "Think and work holistically",
            "Optimize and automate",
            "Collaborate and promote"
        ],
        "correctAnswer": "Think and work holistically"
    },
    {
        "question": "What is the purpose of the 'problem management' practice?",
        "options": [
            "To protect the information needed by the organization to conduct its business",
            "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents",
            "To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services",
            "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
        ],
        "correctAnswer": "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents"
    },
    {
        "question": "Which practice would help a user gain access to an application that they need to use?",
        "options": [
            "Service configuration management",
            "Change enablement",
            "Service request management",
            "Service level management"
        ],
        "correctAnswer": "Change enablement"
    },
    {
        "question": "Why should some service requests be fulfilled with no additional approvals?",
        "options": [
            "To ensure that spending is properly accounted for",
            "To ensure that information security requirements are met",
            "To streamline the fulfillment workflow",
            "To set user expectations for fulfillment times"
        ],
        "correctAnswer": "To streamline the fulfillment workflow"
    },
    {
        "question": "Which is a purpose of the 'service desk' practice?",
        "options": [
            "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
            "To be the entry point and single point of contact for the service provider with all of its users",
            "To support the agreed quality of a service by handling all pre-defined, user-initiated service requests",
            "To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels",
        ],
        "correctAnswer": "To be the entry point and single point of contact for the service provider with all of its users"
    },
    {
        "question": "Which are elements of the service value system?",
        "options": [
            "Service provision, service consumption, service relationship management",
            "Governance, service value chain, practices",
            "Outcomes, utility, warranty",
            "Customer value, stakeholder value, organization"
        ],
        "correctAnswer": "Governance, service value chain, practices"
    },
    {
        "question": "What is defined as an unplanned interruption or reduction in the quality of a service?",
        "options": [
            "An incident",
            "A problem",
            "A change",
            "An event"
        ],
        "correctAnswer": "An incident"
    },
    {
        "question": "Which statement about the use of measurement in the 'start where you are' guiding principle is CORRECT?",
        "options": [
            "It should always be used to support direct observation",
            "It should always be used instead of direct observation",
            "Measured data is always more accurate than direct observation",
            "The act of measuring always positively impacts results"
        ],
        "correctAnswer": "It should always be used to support direct observation"
    },
    {
        "question": "What is an incident?",
        "options": [
            "The planned removal of an item that might affect a service",
            "A result enabled by one or more outputs",
            "A possible future event that could cause harm",
            "A service interruption resolved by the use of self-help tools"
        ],
        "correctAnswer": "A possible future event that could cause harm"
    },
    {
        "question": "What is defined as a change of state that has significate for the management of an IT service?",
        "options": [
            "Event",
            "Incident",
            "Problem",
            "Known error"
        ],
        "correctAnswer": "Event"
    },
    {
        "question": "Which dimension includes the knowledge needed for the management of services?",
        "options": [
            "Organizations and people",
            "Value streams and processes",
            "Information and technology",
            "Partners and suppliers"
        ],
        "correctAnswer": "Information and technology"
    },
    {
        "question": "What is a set of specialized organizational capabilities for enabling value for customers in the form of services?",
        "options": [
            "Service offering",
            "Service provision",
            "Service management",
            "Service consumption"
        ],
        "correctAnswer": "Service management"
    },
    {
        "question": "What is the PRIMARY use of a change schedule?",
        "options": [
            "To support the 'incident management' practice and improvement planning",
            "To manage emergency changes",
            "To plan changes and help avoid conflicts",
            "To manage standard changes"
        ],
        "correctAnswer": "To plan changes and help avoid conflicts"
    },
    {
        "question": "What are guiding principles?",
        "options": [
            "A set of interconnected activities that help an organization deliver a valuable service",
            "A description of one or more services that help address the needs of a target consumer group",
            "A set of specialized organizational capabilities for enabling value for customers",
            "Recommendations that help an organization when adopting a service management approach"
        ],
        "correctAnswer": "Recommendations that help an organization when adopting a service management approach"
    },
    {
        "question": "Which guiding principle focuses on reducing costs and human errors?",
        "options": [
            "Focus and value",
            "Collaborate and promote visibility",
            "Optimize and automate",
            "Think and work holistically"
        ],
        "correctAnswer": "Optimize and automate"
    },
    {
        "question": "What is the purpose of the 'incident management' practice?",
        "options": [
            "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
            "To capture demand for incident resolution and service requests",
            "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents",
            "To support the agreed service quality by effective handling of all agreed user-initiated service requests"
        ],
        "correctAnswer": "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
    },
    {
        "question": "Which practice makes new services available for use?",
        "options": [
            "Change enablement",
            "Release management",
            "Deployment management",
            "IT asset management"
        ],
        "correctAnswer": "Release management"
    },
    {
        "question": "Which guiding principle considers the importance of customer loyalty?",
        "options": [
            "Progress iteratively with feedback",
            "Focus on value",
            "Optimize and automate",
            "Start where you are"
        ],
        "correctAnswer": "Focus on value"
    },
    {
        "question": "Which guiding principle helps to ensure that each improvement effort has more focus and is easier to maintain?",
        "options": [
            "Start where you are",
            "Collaborate and promote visibility",
            "Progress iteratively with feedback",
            "Think and work holistically"
        ],
        "correctAnswer": "Progress iteratively with feedback"
    },
    {
        "question": "Which is a key activity carried out in the 'did we get there?' step of the 'continual improvement' model?",
        "options": [
            "Define measurable targets",
            "Perform baseline assessments",
            "Execute improvement actions",
            "Evaluate measurements and metrics"
        ],
        "correctAnswer": "Evaluate measurements and metrics"
    },
    {
        "question": "What is important for a 'continual improvement register' (CIR)?",
        "options": [
            "Improvement ideas are documented, assessed and prioritized",
            "Improvement ideas from many sources are kept in a single CIR",
            "Improvement ideas that are not being actioned immediately are removed from the CIR",
            "Improvement ideas are tested, funded and agreed"
        ],
        "correctAnswer": "Improvement ideas are documented, assessed and prioritized"
    },
    {
        "question": "What can a service remove from the consumer and impose on the consumer?",
        "options": [
            "Utility",
            "Asset",
            "Cost",
            "Outcome"
        ],
        "correctAnswer": "Cost"
    },
    {
        "question": "In which step of the 'continual improvement model' is an improvement plan implemented?",
        "options": [
            "What is the vision?",
            "How do we get there?",
            "Take action",
            "Did we get there?"
        ],
        "correctAnswer": "Take action"
    },
    {
        "question": "Which is a purpose of the 'service level management' practice?",
        "options": [
            "To establish and nurture the links between the organization and its stakeholders",
            "To ensure that the organization's suppliers and their performance are managed appropriately",
            "To set clear business-based targets for service levels",
            "To support the agreed quality of a service handling all agreed, user-initiated service requests"
        ],
        "correctAnswer": "To set clear business-based targets for service levels"
    },
    {
        "question": "Which is an example of a business related measurement?",
        "options": [
            "The number of passengers checked in",
            "The average time to response to change requests",
            "The average resolution time for incidents",
            "The number of problems resolved"
        ],
        "correctAnswer": "The number of passengers checked in"
    },
    {
        "question": "What describes the steps needed to create and deliver a specific service to a consumer?",
        "options": [
            "Service management",
            "Practices",
            "A value stream",
            "Service level management"
        ],
        "correctAnswer": "Service level management"
    },
    {
        "question": "Which statement about the automation of service requests is CORRECT?",
        "options": [
            "Service requests that cannot be automated should be handled as incidents",
            "Service requests and their fulfillment should be automated as much as possible",
            "Service requests that cannot be automated should be handled as problems",
            "Service requests and their fulfillment should be carried out by service desk staff without automation"
        ],
        "correctAnswer": "Service requests and their fulfillment should be automated as much as possible"
    },
    {
        "question": "Identify the missing word in the following sentence. A user is [?] that uses services.",
        "options": [
            "an organization",
            "a role",
            "a team",
            "a supplier"
        ],
        "correctAnswer": "a role"
    },
    {
        "question": "Which gives a user access to a system?",
        "options": [
            "Service requirement",
            "Service agreement",
            "Service consumption",
            "Service provision"
        ],
        "correctAnswer": "Service provision"
    },
    {
        "question": "What is a change schedule PRIMARILY used for?",
        "options": [
            "To help plan, authorize and schedule emergency changes",
            "To publish a list of service requests that users can select",
            "To ensure that a single change authority reviews every change",
            "To help plan changes, assist in communication and avoid conflicts"
        ],
        "correctAnswer": "To help plan changes, assist in communication and avoid conflicts"
    },
    {
        "question": "What is used to link activities within the service value chain?",
        "options": [
            "Service level agreements",
            "Inputs, outputs and triggers",
            "Opportunity, demand and value",
            "Service desk"
        ],
        "correctAnswer": "Opportunity, demand and value"
    },
    {
        "question": "Which describes the utility of a service?",
        "options": [
            "A service that is fit for use",
            "A service that meets its service level targets",
            "A service that increases constraints on the consumer",
            "A service that supports the performance of the consumer"
        ],
        "correctAnswer": "A service that supports the performance of the consumer"
    },
    {
        "question": "Which two practices use workarounds?",
        "options": [
            "Change enablement and continual improvement",
            "Change enablement and problem management",
            "Problem management and incident management",
            "Incident management and continual improvement"
        ],
        "correctAnswer": "Problem management and incident management"
    },
    {
        "question": "Which statement about the 'change enablement' practice is CORRECT?",
        "options": [
            "Standard changes are those that need to be scheduled, assessed and authorized following a standard process",
            "Normal changes are triggered by the creation of a change request which can be created manually or automated",
            "Assessment and authorization of normal changes should be expedited to ensure they can be implemented quickly",
            "There should be a separate change authority for standard changes which includes senior managers who understand the risks involved"
        ],
        "correctAnswer": "Normal changes are triggered by the creation of a change request which can be created manually or automated"
    },
    {
        "question": "Which is included in the purpose of the 'deliver and support' value chain activity?",
        "options": [
            "Meeting stakeholder expectations for time to market",
            "Understanding the organization's service vision",
            "Understanding stakeholder needs",
            "Providing services to agreed specifications"
        ],
        "correctAnswer": "Meeting stakeholder expectations for time to market"
    },
    {
        "question": "What must always be done before an activity is automated?",
        "options": [
            "Check that the activity has already been optimized",
            "Check that suitable new technology has been purchased",
            "Ensure that DevOps has been successfully implemented",
            "Ensure the solution removes the need for human intervention"
        ],
        "correctAnswer": "Check that the activity has already been optimized"
    },
    {
        "question": "Which practice has a purpose that includes managing risks to confidentiality, integrity and availability?",
        "options": [
            "Information security management",
            "Continual improvement",
            "Monitoring and event management",
            "Service level management"
        ],
        "correctAnswer": "Information security management"
    },
    {
        "question": "What is a change schedule used for?",
        "options": [
            "To help plan emergency changes",
            "To help authorize standard changes",
            "To help assign a change authority",
            "To help manage normal changes"
        ],
        "correctAnswer": "To help manage normal changes"
    },
    {
        "question": "Which ITIL practice recommends performing service reviews to ensure that services continue to meet the needs of the organization?",
        "options": [
            "Service desk",
            "Service request management",
            "Service level management",
            "Service configuration management"
        ],
        "correctAnswer": "Service level management"
    },
    {
        "question": "Which role approves the cost of services?",
        "options": [
            "User",
            "Change authority",
            "Sponsor",
            "Customer"
        ],
        "correctAnswer": "Sponsor"
    },
    {
        "question": "What actions does a service desk take for all issues, queries and requests that are reported to them?",
        "options": [
            "Schedule, assess, authorize",
            "Diagnose, investigate, resolve",
            "Initiate, approve, fulfill",
            "Acknowledge, classify, own"
        ],
        "correctAnswer": "Initiate, approve, fulfill"
    },
    {
        "question": "Which is an external input to the service value chain?",
        "options": [
            "The 'improve' value chain activity",
            "An overall plan",
            "Customer requirements",
            "Feedback loops"
        ],
        "correctAnswer": "Customer requirements"
    },
    {
        "question": "Which is included in the purpose of the 'service level management' practice?",
        "options": [
            "To maximize the number of successful service and product changes",
            "To ensure accurate information about the configuration of services is available",
            "To set clear business-based targets for service levels",
            "To ensure that suppliers and their performance are managed appropriately"
        ],
        "correctAnswer": "To set clear business-based targets for service levels"
    },
    {
        "question": "Which usually requires a team of representatives from many stakeholder groups?",
        "options": [
            "Fulfilling a service request",
            "Authorizing an emergency change",
            "Logging a new problem",
            "Investigating a major incident"
        ],
        "correctAnswer": "Investigating a major incident"
    },
    {
        "question": "Which value chain activity ensures that service components meet agreed specifications?",
        "options": [
            "Plan",
            "Design and transition",
            "Obtain/build",
            "Deliver and support"
        ],
        "correctAnswer": "Obtain/build"
    },
    {
        "question": "Which ITIL practice has the purpose to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels?",
        "options": [
            "Supplier management",
            "Change enablement",
            "Relationship management",
            "Service desk"
        ],
        "correctAnswer": "Relationship management"
    },
    {
        "question": "What includes governance as a component?",
        "options": [
            "Practices",
            "The service value chain",
            "The service value system",
            "The guiding principles"
        ],
        "correctAnswer": "The service value system"
    },
    {
        "question": "Which practice needs people who understand complex systems and have creative and analytical skills?",
        "options": [
            "Change enablement",
            "Service level management",
            "Service request management",
            "Problem management"
        ],
        "correctAnswer": "Problem management"
    },
    {
        "question": "What is the definition of a known error?",
        "options": [
            "An unplanned interruption to a service, or reduction in the quality of a service",
            "A cause, or potential cause, of one or more incidents",
            "A problem that has been analyzed and has not been resolved",
            "Any change of state that has significance for the management of a service or other configuration item (CI)"
        ],
        "correctAnswer": "A problem that has been analyzed and has not been resolved"
    },
    {
        "question": "Which will NOT be handled as a service request?",
        "options": [
            "The degradation of a service",
            "The replacement of a toner cartridge",
            "The provision of a laptop",
            "A complaint about a support team"
        ],
        "correctAnswer": "The degradation of a service"
    },
    {
        "question": "What are typically recognized through notifications created by an IT service, CI or monitoring tool?",
        "options": [
            "Incidents",
            "Problems",
            "Events",
            "Requests"
        ],
        "correctAnswer": "Events"
    },
    {
        "question": "Which dimension considers data security and privacy?",
        "options": [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        "correctAnswer": "Information and technology"
    },
    {
        "question": "Which term relates to service levels aligned with the needs of service consumers?",
        "options": [
            "Service management",
            "Warranty",
            "Cost",
            "Utility"
        ],
        "correctAnswer": "Warranty"
    },
    {
        "question": "Which directly assists with the diagnosis and resolution of simple incidents?",
        "options": [
            "Scripts for collecting user information",
            "Use of shift working patterns",
            "Fulfillment of service requests",
            "Creation of a temporary team"
        ],
        "correctAnswer": "Scripts for collecting user information"
    },
    {
        "question": "Which approach is CORRECT when applying the guiding principle 'keep it simple and practical'?",
        "options": [
            "Only add controls and metrics when they are needed",
            "Design controls and metrics first, then remove those not adding value",
            "Design controls and metrics and add them individually until all are implemented",
            "Only add controls and metrics that are required for compliance"
        ],
        "correctAnswer": "Design controls and metrics first, then remove those not adding value"
    },
    {
        "question": "Which practice forms a link between the service provider and the users of services?",
        "options": [
            "Change enablement",
            "Service level management",
            "Problem management",
            "Service desk"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "Which is a purpose of release management?",
        "options": [
            "To protect the organization's information",
            "To handle user-initiated service requests",
            "To make new and changed services available for use",
            "To move hardware and software to live environments"
        ],
        "correctAnswer": "To make new and changed services available for use"
    },
    {
        "question": "What is recommended by the guiding principle 'progress iteratively with feedback'?",
        "options": [
            "A current state assessment that is carried out at the start of an improvement initiative",
            "The identification of all interested parts at the start of an improvement initiative",
            "An improvement initiative that is broken into a number of manageable sections",
            "An assessment of how all the parts of an organization will affect an improvement initiative"
        ],
        "correctAnswer": "An improvement initiative that is broken into a number of manageable sections"
    },
    {
        "question": "Which guiding principle considers customer and user experience?",
        "options": [
            "Collaborate and promote visibility",
            "Focus on value",
            "Start where you are",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Focus on value"
    },
    {
        "question": "Which statement about the 'change enablement' practice is CORRECT?",
        "options": [
            "Service requests are usually normal changes that can be implemented quickly without authorization",
            "Emergency changes are changes that must be fully tested and fully documented prior to implementation",
            "Standard changes are changes that need to be scheduled, assessed and authorized following a standard process",
            "Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
        ],
        "correctAnswer": "Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
    },
    {
        "question": "Which of these activities is carried out as part of 'problem management'?",
        "options": [
            "Creating incident records",
            "Diagnosing and resolving incidents",
            "Escalating incidents to a support team for resolution",
            "Trend analysis of incident records"
        ],
        "correctAnswer": "Trend analysis of incident records"
    },
    {
        "question": "What does 'change enablement' PRIMARILY focus on?",
        "options": [
            "Changes to service levels",
            "Changes to products and services",
            "Changes to organizational structure",
            "Changes to skills and competencies"
        ],
        "correctAnswer": "Changes to products and services"
    },
    {
        "question": "Identify the missing word(s) in the following sentence. The service desk should be the entry point and single point of contact for the [?] with all of its users.",
        "options": [
            "Service consumer",
            "Service provider",
            "Customer",
            "Supplier"
        ],
        "correctAnswer": "Service provider"
    },
    {
        "question": "Which is handled as a service request?",
        "options": [
            "An investigation to identify the cause of an incident",
            "A compliment about an IT support team",
            "The failure of an IT service",
            "An emergency change to implement a security patch"
        ],
        "correctAnswer": "The failure of an IT service"
    },
    {
        "question": "Which is a key requirement for a successful service level agreement (SLA)?",
        "options": [
            "Using individual metrics that relate to the service catalogue",
            "Using bundled metrics to relate performance to outcomes",
            "Using single-system-based metrics that relate to outputs",
            "Using an agreement between the service provider and service supplier"
        ],
        "correctAnswer": "Using bundled metrics to relate performance to outcomes"
    },
    {
        "question": "Which is considered by the 'partners and suppliers' dimension?",
        "options": [
            "Using artificial intelligence",
            "Defining controls and procedures",
            "Using formal roles and responsibilities",
            "Working with an integrator to manage relationships"
        ],
        "correctAnswer": "Working with an integrator to manage relationships"
    },
    {
        "question": "Which practice recommends using tools for collaboration and the automated matching of symptoms?",
        "options": [
            "Problem management",
            "Service level management",
            "Incident management",
            "Service request management"
        ],
        "correctAnswer": "Incident management"
    },
    {
        "question": "Which helps to manage an incident when it is unclear which support team should be working on the incident?",
        "options": [
            "Disaster recovery plans",
            "Swarming",
            "Target resolution times",
            "Self-help"
        ],
        "correctAnswer": "Swarming"
    },
    {
        "question": "Which statement about the 'continual improvement' practice is CORRECT?",
        "options": [
            "Continual improvement participation should be limited to a small dedicated team.",
            "It is the role of senior management to authorize improvement initiatives.",
            "Training should be provided to those involved in continual improvement.",
            "A single continual improvement register should be maintained by senior management."
        ],
        "correctAnswer": "Training should be provided to those involved in continual improvement."
    },
    {
        "question": "Which does the ITIL service value system discourage?",
        "options": [
            "Coordinated authorities and responsibilities",
            "Organizational silos",
            "Interfaces among practices",
            "Organizational agility"
        ],
        "correctAnswer": "Organizational silos"
    },
    {
        "question": "An SLA is a service level agreement. Which describes the 'watermelon SLA' effect?",
        "options": [
            "A single SLA defines target service levels for multiple customer, so every customer sees reports about other customers' experiences.",
            "The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied.",
            "SLA targets change very frequently, so that each report includes new measures and trends cannot be analyzed.",
            "Introducing SLAs for a service enables customer to see that the service provider is doing a really good job, so this improves satisfaction."
        ],
        "correctAnswer": "The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied."
    },
    {
        "question": "Which practice includes conducting regular reviews to ensure that services are still appropriate and relevant?",
        "options": [
            "Service level management",
            "Service desk",
            "Continual improvement",
            "Change enablement"
        ],
        "correctAnswer": "Service level management"
    },
    {
        "question": "What is a service?",
        "options": [
            "A possible event that could cause harm or loss, or make it more difficult to achieve objectives",
            "A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks",
            "A tangible or intangible deliverable of an activity",
            "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings",
        ],
        "correctAnswer": "A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks"
    },
    {
        "question": "Which TWO are important aspects of the 'service request management' practice?",
        "options": [
            "1. Standardization and automation",
            "2. Providing a variety of channels for access",
            "3. Establishing a shared view of targets",
            "4. Policies for approvals",
            "1 and 2",
            "2 and 3",
            "3 and 4",
            "1 and 4"
        ],
        "correctAnswer": "1 and 4"
    },
    {
        "question": "What is required by all service desk staff?",
        "options": [
            "Excellent technical knowledge",
            "Root cause analysis skills",
            "Demonstration of emotional intelligence",
            "Knowledge of telephony technology"
        ],
        "correctAnswer": "Demonstration of emotional intelligence"
    },
    {
        "question": "Which practice establishes a channel between the service provider and its users?",
        "options": [
            "Relationship management",
            "Change enablement",
            "Supplier management",
            "Service desk"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "Which practice includes the use of approaches such as Lean, Agile and DevOps with the aim of facilitating a greater amount of change at a quicker rate?",
        "options": [
            "Service desk",
            "Monitoring and event management",
            "Service level management",
            "Continual improvement"
        ],
        "correctAnswer": "Service level management"
    },
    {
        "question": "Which practice has a purpose that includes maximizing success by ensuring that risks have been properly assessed?",
        "options": [
            "Relationship management",
            "Change enablement",
            "Release management",
            "Monitoring and event management"
        ],
        "correctAnswer": "Change enablement"
    },
    {
        "question": "Which practice provides users with a way to get various requests arranged, explained and coordinated?",
        "options": [
            "Service level management",
            "Relationship management",
            "Continual improvement",
            "Service desk"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "Which helps to streamline the fulfilment of service requests?",
        "options": [
            "Understanding which service requests can be accomplished with limited approvals",
            "Creating new workflows for every service request",
            "Separating requests relating to service failures from the degradation of services",
            "Eliminating service requests which have complex workflows",
        ],
        "correctAnswer": "Understanding which service requests can be accomplished with limited approvals"
    },
    {
        "question": "Which statement about outcomes is CORRECT?",
        "options": [
            "They are deliverables provided to service consumers.",
            "They allow service consumers to achieve a desired result.",
            "They provide products to service providers based on outputs.",
            "The co-create value for service providers by reducing costs and risks."
        ],
        "correctAnswer": "They allow service consumers to achieve a desired result."
    },
    {
        "question": "Which guiding principle says that services and processes should NOT provide a solution for every exception?",
        "options": [
            "Keep it simple and practical",
            "Think and work holistically",
            "Optimize and automate",
            "Collaborate and promote visibility"
        ],
        "correctAnswer": "Optimize and automate"
    },
    {
        "question": "Identify the missing word in the following sentence. The purpose of the 'supplier management' practice is to ensure that the organization's suppliers and their performances are [?] appropriately to support the seamless provision of quality products and services.",
        "options": [
            "measured",
            "rewarded",
            "managed",
            "defined"
        ],
        "correctAnswer": "managed"
    },
    {
        "question": "Identify the missing word in the following sentence. The purpose of the service configuration management practice is to ensure that accurate and reliable information about the [?], and the CIs that support them, is available when and where it is needed.",
        "options": [
            "relationships with suppliers",
            "configuration of services",
            "skills of people",
            "authorization of changes"
        ],
        "correctAnswer": "configuration of services"
    },
    {
        "question": "Which practice requires skills and competencies related to business analysis, supplier management and relationship management?",
        "options": [
            "Monitoring and event management",
            "Incident management",
            "Service level management",
            "IT asset management"
        ],
        "correctAnswer": "Service level management"
    },
    {
        "question": "When should a workaround be created?",
        "options": [
            "As soon as possible, once the incident is logged",
            "After the resolution of a problem",
            "When a problem cannot be resolved quickly",
            "When a potential permanent solution has been identified"
        ],
        "correctAnswer": "When a problem cannot be resolved quickly"
    },
    {
        "question": "What is a configuration item?",
        "options": [
            "Any financially valuable component that can contribute to delivery of an IT product or service",
            "Any component that needs to be managed in order to deliver an IT service",
            "Any change of state that has significance for the management of a service",
            "A problem that has been analyzed but has not been resolved"
        ],
        "correctAnswer": "Any component that needs to be managed in order to deliver an IT service"
    },
    {
        "question": "Identify the missing words in the following sentence. When an organization has decided to improve a service, it should start by considering [?].",
        "options": [
            "existing information",
            "new methods",
            "additional measurements",
            "revised processes"
        ],
        "correctAnswer": "existing information"
    },
    {
        "question": "Which is a use of the change schedule?",
        "options": [
            "Assigning resources to changes",
            "Deciding the approval authority for changes",
            "Automating the change process",
            "Creating change models"
        ],
        "correctAnswer": "Assigning resources to changes"
    },
    {
        "question": "Which dimension of service management considers the workflows and controls needed to deliver services?",
        "options": [
            "Organization and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        "correctAnswer": "Information and technology"
    },
    {
        "question": "Which guiding principle considers how the steps of a process can be performed as efficiently as possible?",
        "options": [
            "Start where you are",
            "Focus on value",
            "Think and work holistically",
            "Optimize and automate"
        ],
        "correctAnswer": "Optimize and automate"
    },
    {
        "question": "Which statement about the 'incident management' practice is CORRECT?",
        "options": [
            "It identifies the cause of major incidents.",
            "It authorizes changes to resolve incidents.",
            "It maintains detailed procedures for diagnosing incidents.",
            "It resolves the highest impact incidents first."
        ],
        "correctAnswer": "It resolves the highest impact incidents first."
    },
    {
        "question": "How should an organization prioritize incidents?",
        "options": [
            "Ask the user for their preferred resolution timeframe.",
            "Assess the availability of the appropriate support team.",
            "Use an agreed classification which is based on the business impact of the incident.",
            "Create an order of incidents based on the dates and times when they were logged."
        ],
        "correctAnswer": "Use an agreed classification which is based on the business impact of the incident."
    },
    {
        "question": "Which is a purpose of the 'relationship management' practice?",
        "options": [
            "To systematically observe services and service components",
            "To protect the information needed by the organization to conduct its business",
            "To be the entry point and single point of contact for the service provider with all of its users",
            "To identify, analyze, monitor, and continually improve links with stakeholders"
        ],
        "correctAnswer": "To identify, analyze, monitor, and continually improve links with stakeholders"
    },
    {
        "question": "Which statement about problems is CORRECT?",
        "options": [
            "Problems are not related to incidents.",
            "Problems must be resolved quickly in order to restore normal business activity.",
            "Problem analysis should focus on one of the four dimensions to achieve a fast diagnosis.",
            "Problem prioritization involves risk assessment."
        ],
        "correctAnswer": "Problems must be resolved quickly in order to restore normal business activity."
    },
    {
        "question": "Which is a risk that might be removed from a service consumer by an IT service?",
        "options": [
            "Service provider ceasing to trade",
            "Security breach",
            "Failure of server hardware",
            "Cost of purchasing servers"
        ],
        "correctAnswer": "Failure of server hardware"
    },
    {
        "question": "Which is one of the MAIN concerns of the 'design and transition' value chain activity?",
        "options": [
            "Understanding the organization's vision",
            "Understanding stakeholder needs",
            "Meeting stakeholder expectations",
            "Ensuring service components are available"
        ],
        "correctAnswer": "Ensuring service components are available"
    },
    {
        "question": "Which is a result of applying the guiding principle 'progress iteratively with feedback'?",
        "options": [
            "The ability to discover and respond to failure earlier",
            "Standardization of practices and services",
            "Understanding the customer's perception of value",
            "Understanding the current state and identifying what can be reused"
        ],
        "correctAnswer": "Understanding the customer's perception of value"
    },
    {
        "question": "Which practice is responsible for moving new or changed components to live or other environments?",
        "options": [
            "Release management",
            "Deployment management",
            "Change enablement",
            "Supplier management"
        ],
        "correctAnswer": "Deployment management"
    },
    {
        "question": "Which should be handled by 'service request management'?",
        "options": [
            "A request to implement a security patch",
            "A request to provide a laptop",
            "A request to resolve an error in a service",
            "A request to change a target in a service level agreement"
        ],
        "correctAnswer": "A request to implement a security patch"
    },
    {
        "question": "What can help to reduce resistance to a planned improvement when applying the guiding principle 'collaborate and promote visibility'?",
        "options": [
            "Restricting information about the improvement to essential stakeholders only.",
            "Increasing collaboration and visibility for the improvement.",
            "Involving customers after all planning has been completed.",
            "Engaging every stakeholder group in the same way, with the same communication."
        ],
        "correctAnswer": "Increasing collaboration and visibility for the improvement."
    },
    {
        "question": "What can be described as an operating model for the creating and management of products and services?",
        "options": [
            "Governance",
            "Service value chain",
            "Guiding principles",
            "Practices"
        ],
        "correctAnswer": "Service value chain"
    },
    {
        "question": "What is a definition of a problem?",
        "options": [
            "An unplanned interruption to a service, or reduction in the quality of a service",
            "A cause, or potential cause, of one or more incidents",
            "An incident for which a full resolution is not yet available",
            "Any change of state that has significance for the management of a configuration item (CI)"
        ],
        "correctAnswer": "A cause, or potential cause, of one or more incidents"
    },
    {
        "question": "Which action is performed by a service provider?",
        "options": [
            "Requesting required service actions",
            "Authorizing budget for service consumption",
            "Ensuring access to agreed resources",
            "Receiving of the agreed goods"
        ],
        "correctAnswer": "Requesting required service actions"
    },
    {
        "question": "Which statement about 'continual improvement' is CORRECT?",
        "options": [
            "All improvement ideas should be logged in a single 'continual improvement register'",
            "A single team should carry out 'continual improvement' across the organization",
            "'Continual improvement' should have minimal interaction with other practices",
            "Everyone in the organization is responsible for some aspects of 'continual improvement'"
        ],
        "correctAnswer": "Everyone in the organization is responsible for some aspects of 'continual improvement'"
    },
    {
        "question": "Which step of the continual improvement model includes baseline assessments?",
        "options": [
            "Did we get there?",
            "Where are we now?",
            "What is the vision?",
            "Where do we want to be?",
        ],
        "correctAnswer": "Where are we now?"
    },
    {
        "question": "Which describes a 'change authority'?",
        "options": [
            "A model used to determine who will assess a change",
            "A person who approves a change",
            "A tool used to help changes",
            "A way to manage the people aspects of change"
        ],
        "correctAnswer": "A person who approves a change"
    },
    {
        "question": "Which is NOT a component of the service value system?",
        "options": [
            "The service value chain",
            "Opportunity and demand",
            "Continual improvement",
            "Governance"
        ],
        "correctAnswer": "Opportunity and demand"
    },
    {
        "question": "Which practice has a strong influence on the user experience and perception of the service provider?",
        "options": [
            "Service desk",
            "Change enablement",
            "Service level management",
            "Supplier management"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "Which statement about service relationship management is CORRECT?",
        "options": [
            "It focuses on the service actions performed by users",
            "It requires the service consumer to create resources for the service provider",
            "It requires co-operation of both the service provider and service consumer",
            "It focuses on the fulfilment of the agreed service actions",
        ],
        "correctAnswer": "It requires co-operation of both the service provider and service consumer"
    },
    {
        "question": "What is the MOST important reason for prioritizing incidents?",
        "options": [
            "To ensure that user expectations are realistic",
            "To ensure that incidents with highest impact are resolved first",
            "To help information-sharing are learning",
            "To provide links to related changes and known errors"
        ],
        "correctAnswer": "To ensure that incidents with highest impact are resolved first"
    },
    {
        "question": "Which 'service level management' activity helps staff to deliver a more business-focused service?",
        "options": [
            "Creating targets based on the percentage of uptime of a service",
            "Understanding the ongoing requirements of customers",
            "Using complex technical terminology in service level agreements (SLAs)",
            "Measuring low-level operational activities"
        ],
        "correctAnswer": "Understanding the ongoing requirements of customers"
    },
    {
        "question": "Which practice has a purpose that includes the handling of pre-defined, user-initiated demands for service?",
        "options": [
            "Service request management",
            "Service configuration management",
            "Deployment management",
            "Change enablement"
        ],
        "correctAnswer": "Service request management"
    },
    {
        "question": "Which guiding principle considers which parts of an existing process should be kept by identifying how they contribute to value creation?",
        "options": [
            "Progress iteratively with feedback",
            "Collaborate and promote visibility",
            "Think and work holistically",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Keep it simple and practical"
    },
    {
        "question": "What is the purpose of the 'monitoring and event management' practice?",
        "options": [
            "To restore normal service operation as quickly as possible",
            "To manage workarounds and known errors",
            "To capture demand for incident resolution and service requests",
            "To systematically observe services and service components"
        ],
        "correctAnswer": "To systematically observe services and service components"
    },
    {
        "question": "Which statement about outcome is CORRECT?",
        "options": [
            "Outcomes rely on outputs to deliver results for a stakeholder",
            "Outcomes use activities to produce tangible or intangible deliverables",
            "Outcomes give service consumers assurance of products or services",
            "Outcomes help a service consumer to assess the cost of a specific activity"
        ],
        "correctAnswer": "Outcomes rely on outputs to deliver results for a stakeholder"
    },
    {
        "question": "Which skill is required by the 'service level management' practice?",
        "options": [
            "Supplier management",
            "Technical expertise",
            "Event monitoring",
            "Problem management"
        ],
        "correctAnswer": "Supplier management"
    },
    {
        "question": "Which statement about the 'continual improvement model' is CORRECT?",
        "options": [
            "Organizations should work through the steps of the model in the sequence in which they are presented",
            "The flow of the model helps organizations to link improvements to its goals",
            "The model is applicable to only certain parts of the service value system",
            "Organizations should use an additional model or method to link improvements to customer value"
        ],
        "correctAnswer": "Organizations should work through the steps of the model in the sequence in which they are presented"
    },
    {
        "question": "What is the definition of warranty?",
        "options": [
            "A means of identifying events that could cause harm or loss",
            "A means of determining whether a service is fit for purpose",
            "A means of identifying a result for a stakeholder",
            "A means of determining whether a service is fit for use"
        ],
        "correctAnswer": "A means of determining whether a service is fit for use"
    },
    {
        "question": "Which practice has a purpose that includes managing risks relating to confidentiality, integrity and availability?",
        "options": [
            "Information security management",
            "Change enablement",
            "Problem management",
            "Service configuration management"
        ],
        "correctAnswer": "Information security management"
    },
    {
        "question": "Which statement about value creating activities is CORRECT?",
        "options": [
            "Each value stream should be designed with a specific combination of service value chain activities",
            "Service value chain activities have pre-determined dependencies on ITIL practices",
            "A value stream is an operating model for creating value through products and services",
            "Organizations should ensure that each value stream is applicable to many scenarios"
        ],
        "correctAnswer": "Each value stream should be designed with a specific combination of service value chain activities"
    },
    {
        "question": "Which is provided by the 'engage' value chain activity?",
        "options": [
            "Ensuring that stakeholder expectations for quality are met",
            "Ensuring that stakeholder needs are understood by the organization",
            "Ensuring that service components are available when needed",
            "Ensuring that services are operated to meet agreed specifications"
        ],
        "correctAnswer": "Ensuring that stakeholder needs are understood by the organization"
    },
    {
        "question": "Which is part of the 'focus on value' guiding principle?",
        "options": [
            "Understanding what services help the service consumer",
            "Reducing the number of steps in the customer experience",
            "Assessing services to identify parts that can be reused",
            "Identifying activities that can be achieved in smaller iterations"
        ],
        "correctAnswer": "Understanding what services help the service consumer"
    },
    {
        "question": "Which is part of the definition of a customer?",
        "options": [
            "The role that defines the requirements for a service",
            "A means of enabling value co-creation",
            "The role that authorizes budget for service consumption",
            "A set of specialized organizational capabilities for enabling value"
        ],
        "correctAnswer": "The role that defines the requirements for a service"
    },
    {
        "question": "Which guiding principle helps an organization to understand the impact of an altered element on other elements in a system?",
        "options": [
            "Focus on value",
            "Start where you are",
            "Think and work holistically",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Think and work holistically"
    },
    {
        "question": "Identify the missing words in the following sentence. The 'incident management' practice should maintain [?] for logging and managing incidents.",
        "options": [
            "a dedicated team",
            "a formal process",
            "detailed procedures",
            "a value chain activity"
        ],
        "correctAnswer": "a formal process"
    },
    {
        "question": "An organization asks a stakeholder to review a planned change. Which guiding principle does this demonstrate?",
        "options": [
            "Collaborate and promote visibility",
            "Start where you are",
            "Focus on value",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Collaborate and promote visibility"
    },
    {
        "question": "What is the purpose of the 'deployment management' practice?",
        "options": [
            "To protect the information needed by the organization to conduct its business",
            "To make new and changed services and features available for use",
            "To move new or changed components to live environments",
            "To plan and manage the full lifecycle of all IT assets."
        ],
        "correctAnswer": "To move new or changed components to live environments"
    },
    {
        "question": "Which two statements about the guiding principles are CORRECT?",
        "options": [
            "1. The guiding principles support continual improvement",
            "2. Each guiding principle applies to a selection of the available stakeholder groups",
            "3. Organizations should decide which one of the guiding principles is relevant to them",
            "4. Organizations should consider how the guiding principles interact with each other",
            "1 and 2",
            "2 and 3",
            "3 and 4",
            "1 and 4"
        ],
        "correctAnswer": "1 and 4"
    },
    {
        "question": "Which statement about change authorities is CORRECT?",
        "options": [
            "Change authorities are only required for authorizing emergency changes",
            "Change authorities are assigned when each change is deployed",
            "Change authorities are only required for authorizing normal changes",
            "Change authorities are assigned for each type of change and change model"
        ],
        "correctAnswer": "Change authorities are assigned for each type of change and change model"
    },
    {
        "question": "When is the earliest that a workaround can be documented in 'problem management'?",
        "options": [
            "After the problem has been logged",
            "After the problem has been prioritized",
            "After the problem has been analyzed",
            "After the problem has been resolved"
        ],
        "correctAnswer": "After the problem has been analyzed"
    },
    {
        "question": "Which is an activity of 'problem identification'?",
        "options": [
            "Analyzing information from software developers",
            "Establishing problem workarounds",
            "Analyzing the cause of problems",
            "Establishing potential permanent solutions"
        ],
        "correctAnswer": "Analyzing information from software developers"
    },
    {
        "question": "Which practice uses technologies such as intelligent telephony systems, a knowledge base and monitoring tools?",
        "options": [
            "Service configuration management",
            "Service desk",
            "Problem management",
            "Deployment management"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "Which statement about standard changes is CORRECT?",
        "options": [
            "A full assessment should be completed each time the change is implemented",
            "The change can be implemented with less testing if necessary",
            "The appropriate change authority should be assigned to each type of change",
            "The change does not require additional authorization"
        ],
        "correctAnswer": "The change does not require additional authorization"
    },
    {
        "question": "Which two are considered part of the 'organizations and people' dimension of service management?",
        "options": [
            "1. Systems of authority",
            "2. Culture",
            "3. Relationships between organizations",
            "4. Workflows",
            "1 and 2",
            "2 and 3",
            "3 and 4",
            "1 and 4"
        ],
        "correctAnswer": "1 and 2"
    },
    {
        "question": "Which statement about the 'service request management' practice is CORRECT?",
        "options": [
            "Service requests are fulfilled using simple workflows",
            "A new workflow is created for each type of request",
            "Additional approval is sometimes needed for restoration of service",
            "Financial authorization is sometimes required for service requests"
        ],
        "correctAnswer": "Service requests are fulfilled using simple workflows"
    },
    {
        "question": "What is a cause, or potential cause, of one or more incidents?",
        "options": [
            "A configuration item",
            "A workaround",
            "An incident",
            "A problem"
        ],
        "correctAnswer": "A problem"
    },
    {
        "question": "Which guiding principle says that it is not usually necessary to build something new?",
        "options": [
            "Focus on value",
            "Start where you are",
            "Progress iteratively with feedback",
            "Think and work holistically"
        ],
        "correctAnswer": "Start where you are"
    },
    {
        "question": "Which practice includes management of workarounds and known errors?",
        "options": [
            "Monitoring and event management",
            "Service configuration management",
            "Problem management",
            "Incident management"
        ],
        "correctAnswer": "Problem management"
    },
    {
        "question": "Which activity is part of the 'continual improvement' practice?",
        "options": [
            "Handling compliments and complaints from users to identify improvements",
            "Improving relationships with and between stakeholders",
            "Prioritizing and creating business cases for improvement initiatives",
            "Identifying the cause of unplanned interruptions to service"
        ],
        "correctAnswer": "Prioritizing and creating business cases for improvement initiatives"
    },
    {
        "question": "A service offering may include goods, access to resources, and service actions. Which is an example of a service action?",
        "options": [
            "A mobile phone enables a user to work remotely",
            "A password allows a user connect to a WiFi network.",
            "A license allows a user to install a software product",
            "A service desk agent provides support to a user"
        ],
        "correctAnswer": "A service desk agent provides support to a user"
    },
    {
        "question": "Identify the missing word in the following sentence. A service is a means of enabling value co-creation by facilitating [?] that customers want to achieve, without the customer having to manage specific costs and risks.",
        "options": [
            "utility",
            "warranty",
            "outcomes",
            "outputs"
        ],
        "correctAnswer": "outcomes"
    },
    {
        "question": "Which statement about a service value stream is CORRECT?",
        "options": [
            "It uses inputs and outputs prescribed by ITIL",
            "It is a service value chain activity",
            "It integrates practices for a specific scenario",
            "It provides an operating model for service providers"
        ],
        "correctAnswer": "It integrates practices for a specific scenario"
    },
    {
        "question": "What term is used to describe whether a service will meet availability, capacity and security requirements?",
        "options": [
            "Outcomes",
            "Value",
            "Utility",
            "Warranty"
        ],
        "correctAnswer": "Warranty"
    },
    {
        "question": "Which is a low risk change that has been pre-approved so that no additional authorization is needed?",
        "options": [
            "A standard change",
            "A change model",
            "An emergency change",
            "A normal change"
        ],
        "correctAnswer": "A standard change"
    },
    {
        "question": "Which describes the 'plan' value chain activity?",
        "options": [
            "It ensures a shared understanding of the current status and vision for all products and services across the organization",
            "It ensures that services are delivered and supported according to agreed specifications and stakeholders' expectations",
            "It ensures that service components are available when and where they are needed, and meet agreed specifications",
            "It ensures continual improvement of products, services, and practices across all value chain activities"
        ],
        "correctAnswer": "It ensures a shared understanding of the current status and vision for all products and services across the organization"
    },
    {
        "question": "Which practice has the purpose of ensuring that the organization's suppliers and their performance and managed appropriately to support the provision of seamless, quality products and services?",
        "options": [
            "Release management",
            "Supplier management",
            "Service management",
            "Relationship management"
        ],
        "correctAnswer": "Supplier management"
    },
    {
        "question": "Which includes governance, management practices, and continual improvement?",
        "options": [
            "The service value system",
            "The 'deliver and support' value chain activity",
            "The 'focus on value' guiding principle",
            "The 'value stream and processes' dimension"
        ],
        "correctAnswer": "The service value system"
    },
    {
        "question": "Which phase of problem management includes analysing incidents to look for patterns and trends?",
        "options": [
            "Problem identification",
            "Problem control",
            "Error control",
            "Post-implementation review"
        ],
        "correctAnswer": "Problem identification"
    },
    {
        "question": "Which statement about the 'optimize and automate' guiding principle is CORRECT?",
        "options": [
            "Activities should be automated before they are optimized",
            "Automation is best applied to non-standard tasks",
            "Technology eliminates the need for human intervention",
            "Automation frees human resources for more complex activities"
        ],
        "correctAnswer": "Automation frees human resources for more complex activities"
    },
    {
        "question": "What is defined as any financially valuable component that can contribute to the delivery of a service?",
        "options": [
            "Configuration item",
            "Product",
            "IT asset",
            "Event"
        ],
        "correctAnswer": "IT asset"
    },
    {
        "question": "Which dimension focuses on relationships with other organizations that are involved in the design development, deployment and delivery of services?",
        "options": [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        "correctAnswer": "Partners and suppliers"
    },
    {
        "question": "Which statement about service requests is CORRECT?",
        "options": [
            "Complex service requests should be dealt with as normal changes",
            "Service requests that require simple workflows should be dealt with as incidents",
            "Service requests require workflows that should use manual procedures and avoid automation",
            "Service requests are usually formalized using standard procedures for initiation, approval and fulfilment"
        ],
        "correctAnswer": "Service requests are usually formalized using standard procedures for initiation, approval and fulfilment"
    },
    {
        "question": "Which MOST helps an organization adapt ITIL concepts so that they apply to the organization's specific circumstances?",
        "options": [
            "Continual improvement",
            "Service value chain",
            "Practices",
            "Guiding principles"
        ],
        "correctAnswer": "Continual improvement"
    },
    {
        "question": "What is the MAIN benefit of 'problem management'?",
        "options": [
            "Restoring normal service as quickly as possible",
            "Reducing the number and impact of incidents",
            "Maximizing the number of successful changes",
            "Managing workarounds and known errors"
        ],
        "correctAnswer": "Managing workarounds and known errors"
    },
    {
        "question": "Which guiding principle discourages 'silo activity'?",
        "options": [
            "Focus on value",
            "Start where you are",
            "Collaborate and promote visibility",
            "Keep it simple and practical"
        ],
        "correctAnswer": "Collaborate and promote visibility"
    },
    {
        "question": "Which will help solve incidents more quickly?",
        "options": [
            "Target resolution times",
            "Escalating all incidents to support teams",
            "Collaboration between teams",
            "Detailed procedural steps for incident investigation"
        ],
        "correctAnswer": "Collaboration between teams"
    },
    {
        "question": "What varies in size and complexity, and uses functions to achieve its objectives?",
        "options": [
            "A risk",
            "An organization",
            "A practice",
            "An outcome"
        ],
        "correctAnswer": "An organization"
    },
    {
        "question": "Which practice facilitates operational communication between the service provider organization and users in the service consumer organization?",
        "options": [
            "Service level management",
            "Relationship management",
            "Service desk",
            "Monitoring and event management"
        ],
        "correctAnswer": "Service desk"
    },
    {
        "question": "Which dimension considers the application of artificial intelligence to service management?",
        "options": [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        "correctAnswer": "Information and technology"
    },
    {
        "question": "Which type of change is MOST LIKELY to be initiated as part of the 'service request management' practice?",
        "options": [
            "A normal change",
            "An emergency change",
            "A standard change",
            "A change model"
        ],
        "correctAnswer": "A standard change"
    }
];

//funzione per eseguire alcuni check preliminari
function check_pre_exam() {
const questions = all_questions.slice(firstQuestionValue, lastQuestions);

if (parseInt(hmqValue) > all_questions.length) {
    hmqValue = 280
}
if ((parseInt(firstQuestionValue) + parseInt(hmqValue)) > all_questions.length) {
    firstQuestionValue = all_questions.length - parseInt(hmqValue)
}

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
  const resultContainer = document.getElementById("result-container");
  const progressBar = document.getElementById("progress-bar");

  questionContainer.style.display = "block";
  optionsContainer.innerHTML = "";
  resultContainer.innerHTML = "";

  if (currentQuestionIndex >= lastQuestions) {
    questionContainer.style.display = "none";
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
  const rQuestion = shuffledQuestions[parseInt(currentQuestionIndex)-parseInt(firstQuestionValue)];
  const shuffledQuestion = shuffleQuestionOptions(rQuestion);
  questionText.innerHTML = rQuestion.question;
  
  for (let i = 0; i < rQuestion.options.length ; i++) {
    const option = document.createElement("div");
    option.className = "option";
    option.textContent = shuffledQuestion.options[i];
    option.addEventListener("click", () =>checkAnswer(option, rQuestion.correctAnswer));
    optionsContainer.appendChild(option);
  }

  console.clear()
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
function checkAnswer(option, correctAnswer) {
  option.classList.add("incorrect-answer");
  const optionsContainer = document.getElementById("options-container");
  const c_option = optionsContainer.getElementsByClassName("option");
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
    currentQuestionIndex++;
    return;
  }

  currentQuestionIndex++;
  setTimeout(showQuestion, timeCorrectValue);


}

// funzione per riprovare il quiz una volta finito l'esame
function retryQuiz() {
  currentQuestionIndex = firstQuestionValue
  lastQuestions = firstQuestionValue + hmqValue;
  correctAnswersCount = 0;
  showQuestion();
}

//funzione per cercare la domanda su Bing chat
function search() {
    const query = document.getElementById("question-text");
    var encodedQuery = encodeURIComponent(query.textContent) + " mi rispondi in italiano dettagliando in modo approfondito la risposta (tema ITIL v4)";
    var baseUrl = "https://www.bing.com/search?q=";
    var searchUrl = baseUrl + encodedQuery;
    window.open(searchUrl, "_blank");
}
