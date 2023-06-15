let firstQuestion = 0; //da quale domanda parto [0-280] [0-39 | 40-79 | 80-119 | 120-159 | 160-199 | 200-239 | 240-280]
let hmq = 40 //quante domande provo [40 è la simulazione d'esame]

const questions = [
    {
        "question": "Which ITIL guiding principle recommends using existing services, processes and tools when improving services?",
        "options": [
            "A. Progress iteratively with feedback",
            "B. Keep is simple and practical",
            "C. Start where you are",
            "D. Focus on value"
        ],
        "correctAnswer": "C. Start where you are"
    },
    {
        "question": "Which practice has a purpose that includes ensuring that risks have been properly assessed?",
        "options": [
            "A. Service configuration management",
            "B. Problem management",
            "C. Service level management",
            "D. Change control"
        ],
        "correctAnswer": "D. Change control"
    },
    {
        "question": "When should a full risk assessment and authorization be carried out for a standard change?",
        "options": [
            "A. Each time the standard change is implemented",
            "B. When the procedure for the standard change is created",
            "C. At least once a year",
            "D. When an emergency change is requested"
        ],
        "correctAnswer": "B. When the procedure for the standard change is created"
    },
    {
        "question": "Which statement about emergency changes is CORRECT?",
        "options": [
            "A. The testing of emergency can be eliminated in order to implement the change quickly",
            "B. The assessment and authorization of emergency changes is expedited to ensure they can be implemented quickly",
            "C. Emergency changes should be authorized and implemented as service requests",
            "D. Emergency changes must be fully documented before authorization and implementation"
        ],
        "correctAnswer": "B. The assessment and authorization of emergency changes is expedited to ensure they can be implemented quickly"
    },
    {
        "question": "Which practice coordinates the classification, ownership and communication of service requests and incidents?",
        "options": [
            "A. Supplier management",
            "B. Service desk",
            "C. Problem management",
            "D. Relationship management"
        ],
        "correctAnswer": "B. Service desk"
    },
    {
        "question": "What is warranty?",
        "options": [
            "A. Assurance that a product or service will meet agreed requirements",
            "B. The amount of money spent on a specific activity or resource",
            "C. The functionality offered by a product or service to meet a particular need",
            "D. The perceived benefits, usefulness and importance of something"
        ],
        "correctAnswer": "A. Assurance that a product or service will meet agreed requirements"
    },
    {
        "question": "Which is part of service provision?",
        "options": [
            "A. The management of resources configured to deliver the service",
            "B. The management of resources needed to consume the service",
            "C. The grouping of one or more services based on one or more products",
            "D. The joint activities performed to ensure continual value co-creation"
        ],
        "correctAnswer": "A. The management of resources configured to deliver the service"
    },
    {
        "question": "Which statement about a 'continual improvement register' is CORRECT?",
        "options": [
            "A. It should be managed at the senior level of the organization",
            "B. It should be used to capture user demand",
            "C. There should only be one for the whole organization",
            "D. It should be re-prioritized as ideas are documented",
        ],
        "correctAnswer": "D. It should be re-prioritized as ideas are documented"
    },
    {
        "question": "What are 'engage', 'plan' and 'improve' examples of?",
        "options": [
            "A. Service value chain activities",
            "B. Service level management",
            "C. Service value chain inputs",
            "D. Change control"
        ],
        "correctAnswer": "A. Service value chain activities"
    },
    {
        "question": "Which statement about outcomes is CORRECT?",
        "options": [
            "A. An outcome can be enabled by more than one output",
            "B. Outcomes are how the service performs",
            "C. An output can be enabled by one or more outcomes",
            "D. An outcome is a tangible or intangible activity"
        ],
        "correctAnswer": "A. An outcome can be enabled by more than one output"
    },
    {
        "question": "Which statement about service desks is CORRECT?",
        "options": [
            "A. The service desk should work in close collaboration with support and development teams",
            "B. The service desk should rely on self-service portals instead of escalation to support teams",
            "C. The service desk should remain isolated from technical support teams",
            "D. The service desk should escalate all technical issues to support and development teams"
        ],
        "correctAnswer": "A. The service desk should work in close collaboration with support and development teams"
    },
    {
        "question": "Which practice updates information relating to symptoms and business impact?",
        "options": [
            "A. Service level management",
            "B. Change control",
            "C. Service request management",
            "D. Incident management",
        ],
        "correctAnswer": "D. Incident management"
    },
    {
        "question": "Which is included in the purpose of the 'design and transition' value chain activity?",
        "options": [
            "A. Ensuring that service components are available when needed",
            "B. Providing transparency and good stakeholder relationships",
            "C. Supporting services according to specifications",
            "D. Continually meeting stakeholder expectations for costs"
        ],
        "correctAnswer": "D. Continually meeting stakeholder expectations for costs"
    },
    {
        "question": "Which practice has a purpose to support the quality of the service by handling all agreed user initiated service requests?",
        "options": [
            "A. Change control",
            "B. IT asset management",
            "C. Service desk",
            "D. Service request management"
        ],
        "correctAnswer": "D. Service request management"
    },
    {
        "question": "Which is NOT a component of the service value system?",
        "options": [
            "A. The guiding principles",
            "B. Governance",
            "C. Practices",
            "D. The four dimensions of service management"
        ],
        "correctAnswer": "D. The four dimensions of service management"
    },
    {
        "question": "Which statement about the steps to fulfill a service request is CORRECT?",
        "options": [
            "A. They should be complex and detailed",
            "B. They should be well-known and proven",
            "C. They should include incident handling",
            "D. They should be brief and simple"
        ],
        "correctAnswer": "B. They should be well-known and proven"
    },
    {
        "question": "What is defined as a cause, or potential cause, of one or more incidents?",
        "options": [
            "A. Change",
            "B. Event",
            "C. Known error",
            "D. Problem"
        ],
        "correctAnswer": "D. Problem"
    },
    {
        "question": "Which guiding principle recommends eliminating activities that do not contribute to the creation of value?",
        "options": [
            "A. Start where you are",
            "B. Collaborate and promote visibility",
            "C. Keep it simple and practical",
            "D. Optimize and automate"
        ],
        "correctAnswer": "C. Keep it simple and practical"
    },
    {
        "question": "When should the effectiveness of a problem workaround be assessed?",
        "options": [
            "A. Whenever the workaround is used",
            "B. Whenever the problem is resolved",
            "C. Whenever the workaround becomes a known error",
            "D. Whenever the problem is prioritized"
        ],
        "correctAnswer": "A. Whenever the workaround is used"
    },
    {
        "question": "Identify the missing word in the following sentence. A change is defined as the addition, modification, or removal of anything that could have a direct or indirect effect on [?].",
        "options": [
            "A. assets",
            "B. values",
            "C. elements",
            "D. services"
        ],
        "correctAnswer": "D. services"
    },
    {
        "question": "Which dimension considers how knowledge assets should be protected?",
        "options": [
            "A. Organizations and people",
            "B. Partners and suppliers",
            "C. Information and technology",
            "D. Value streams and processes"
        ],
        "correctAnswer": "C. Information and technology"
    },
    {
        "question": "What is a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks?",
        "options": [
            "A. Service management",
            "B. Continual improvement",
            "C. A service",
            "D. An IT asset"
        ],
        "correctAnswer": "C. A service"
    },
    {
        "question": "Identify the missing words in the following sentence. The management of information security incidents usually requires [?].",
        "options": [
            "A. Immediate escalation",
            "B. Specialist teams",
            "C. A separate process",
            "D. Third party support"
        ],
        "correctAnswer": "C. A separate process"
    },
    {
        "question": "What are the ITIL guiding principles used for?",
        "options": [
            "A. To help an organization make good decisions",
            "B. To direct and control an organization",
            "C. To identify activities that an organization must perform in order to deliver a valuable service",
            "D. To ensure that an organization's performance continually meets stakeholders' expectations"
        ],
        "correctAnswer": "A. To help an organization make good decisions"
    },
    {
        "question": "Which is the CORRECT approach for managing a large improvement initiative as smaller iterations?",
        "options": [
            "A. Each iteration should be designed before starting the initiative and implemented without feedback",
            "B. Feedback should only be taken into account when one iteration fails to meet its objective",
            "C. Feedback should be reduced for large improvements as it is unlikely that circumstances will change",
            "D. Each iteration should be continually re-evaluated based on feedback"
        ],
        "correctAnswer": "D. Each iteration should be continually re-evaluated based on feedback"
    },
    {
        "question": "What is the purpose of the 'deployment management' practice?",
        "options": [
            "A. To ensure services achieve agreed and expected performance",
            "B. To make new or changed services available for use",
            "C. To move new or changed components to live environments",
            "D. To set clear business-based targets for service performance"
        ],
        "correctAnswer": "C. To move new or changed components to live environments"
    },
    {
        "question": "Which is a service request?",
        "options": [
            "A. Requesting a workaround for an issue",
            "B. Requesting information about how to create a document",
            "C. Requesting an enhancement to an application",
            "D. Requesting investigation of a degraded service"
        ],
        "correctAnswer": "B. Requesting information about how to create a document"
    },
    {
        "question": "Identify the missing word in the following sentence. The purpose of the supplier management practice is to ensure that the organization's suppliers and their, [?] are managed appropriately to support the seamless provision of quality products and services.",
        "options": [
            "A. costs",
            "B. users",
            "C. value",
            "D. performances"
        ],
        "correctAnswer": "D. performances"
    },
    {
        "question": "What is a recommendation of the 'focus on value' guiding principle?",
        "options": [
            "A. Make 'focus on value' a responsibility of the management",
            "B. Focus on the value of new and significant projects first",
            "C. Focus on value for the service provider first",
            "D. Focus on value at every step of the improvement"
        ],
        "correctAnswer": "D. Focus on value at every step of the improvement"
    },
    {
        "question": "Which guiding principle recommends standardizing and streamlining manual tasks?",
        "options": [
            "A. Optimize and automate",
            "B. Collaborate and promote visibility",
            "C. Focus on value",
            "D. Think and work holistically"
        ],
        "correctAnswer": "A. Optimize and automate"
    },
    {
        "question": "Which describes a set of defined steps for implementing improvements?",
        "options": [
            "A. The 'improve' value chain activity",
            "B. The 'continual improvement register'",
            "C. The 'continual improvement model'",
            "D. The 'engage' value chain activity",
        ],
        "correctAnswer": "C. The 'continual improvement model'"
    },
    {
        "question": "Which is a key requirement for a successful service level agreement?",
        "options": [
            "A. It should be written in legal language",
            "B. It should be simply written and easy to understand",
            "C. It should be based on the service provider's view of the service",
            "D. It should relate to simple operational metrics"
        ],
        "correctAnswer": "B. It should be simply written and easy to understand"
    },
    {
        "question": "When planning 'continual improvement', which approach for assessing the current state of a service is CORRECT?",
        "options": [
            "A. An organization should always use a single technique to ensure metrics are consistent",
            "B. An organization should always use a strength, weakness, opportunity and threat (SWOT) analysis",
            "C. An organization should always develop competencies in methodologies and techniques that will meet their needs",
            "D. An organization should always use an approach that combines Lean, Agile and DevOps methodologies"
        ],
        "correctAnswer": "C. An organization should always develop competencies in methodologies and techniques that will meet their needs"
    },
    {
        "question": "How does a service consumer contribute to the reduction of disk?",
        "options": [
            "A. By paying for the service",
            "B. By managing server hardware",
            "C. By communicating constraints",
            "D. By managing staff availability"
        ],
        "correctAnswer": "C. By communicating constraints"
    },
    {
        "question": "What helps diagnose and resolve a simple incident?",
        "options": [
            "A. Rapid escalation",
            "B. Formation of a temporary team",
            "C. The use of scripts",
            "D. Problem prioritization"
        ],
        "correctAnswer": "C. The use of scripts"
    },
    {
        "question": "Which ITIL practice has a purpose that includes reducing the likelihood of incidents?",
        "options": [
            "A. Change control",
            "B. Continual improvement",
            "C. Problem management",
            "D. Service desk"
        ],
        "correctAnswer": "C. Problem management"
    },
    {
        "question": "Which service level metrics are BEST for measuring user experience?",
        "options": [
            "A. Single system-based metrics",
            "B. Metrics for the percentage of uptime of a service",
            "C. Operational metrics",
            "D. Metrics linked to defined outcomes"
        ],
        "correctAnswer": "D. Metrics linked to defined outcomes"
    },
    {
        "question": "What are the MOST important skills required by service desk staff?",
        "options": [
            "A. Incident analysis skills",
            "B. Technical skills",
            "C. Problem resolution skills",
            "D. Supplier management skills"
        ],
        "correctAnswer": "A. Incident analysis skills"
    },
    {
        "question": "Which two statements about an organization's culture are CORRECT?",
        "options": [
            "1. It is created from shared values based on how it carries out its work",
            "2. It is determined by the type of technology used to support services",
            "3. It should be based on the culture of prospective suppliers",
            "4. It should be based on the objectives of the organization",
            "A. 1 and 2",
            "B. 2 and 3",
            "C. 3 and 4",
            "D. 1 and 4"
        ],
        "correctAnswer": "D. 1 and 4"
    },
    {
        "question": "When should a change request be submitted to resolve a problem?",
        "options": [
            "A. As soon as a solution for the problem has been identified",
            "B. As soon as a workaround for the problem has been identified",
            "C. As soon as the analysis of the frequency and impact of incidents justifies the change",
            "D. As soon as the analysis of cost, risks and benefits justifies the change"
        ],
        "correctAnswer": "D. As soon as the analysis of cost, risks and benefits justifies the change"
    },
    {
        "question": "Which guiding principle helps to ensure that better information is available for decision making?",
        "options": [
            "A. Keep it simple and practical",
            "B. Think and work holistically",
            "C. Optimize and automate",
            "D. Collaborate and promote visibility"
        ],
        "correctAnswer": "D. Collaborate and promote visibility"
    },
    {
        "question": "Which practice has a purpose that includes observing a service to report selected changes of state identified as events?",
        "options": [
            "A. Information security management",
            "B. Monitoring and event management",
            "C. Incident management",
            "D. Change control"
        ],
        "correctAnswer": "B. Monitoring and event management"
    },
    {
        "question": "Which describes a standard change?",
        "options": [
            "A. A change that needs to be scheduled, assessed and authorized following a defined process",
            "B. A change that is typically implemented as a service request",
            "C. A high-risk change that needs very thorough assessment",
            "D. A change that must be implemented as soon as possible"
        ],
        "correctAnswer": "B. A change that is typically implemented as a service request"
    },
    {
        "question": "How does information about problems and known errors contribute to 'incident management'?",
        "options": [
            "A. It enables quick and efficient diagnosis of incidents",
            "B. It removes the need for regular customer updates",
            "C. It removes the need for collaboration during incident resolution",
            "D. It enables the reassessment of known errors"
        ],
        "correctAnswer": "A. It enables quick and efficient diagnosis of incidents"
    },
    {
        "question": "Which practice owns and manages issues, queries and requests from users?",
        "options": [
            "A. Incident management",
            "B. Service desk",
            "C. Change control",
            "D. Problem management"
        ],
        "correctAnswer": "B. Service desk"
    },
    {
        "question": "What defines the requirements for a service and takes responsibility for the outcomes of service consumption?",
        "options": [
            "A. An IT asset",
            "B. A customer",
            "C. A configuration item (CI)",
            "D. A user"
        ],
        "correctAnswer": "B. A customer"
    },
    {
        "question": "Which stakeholders co-create value in a service relationship?",
        "options": [
            "A. Investor and supplier",
            "B. Consumer and provider",
            "C. Provider and supplier",
            "D. Investor and consumer"
        ],
        "correctAnswer": "B. Consumer and provider"
    },
    {
        "question": "Which describes normal changes?",
        "options": [
            "A. Changes that are low-risk and pre-authorized",
            "B. Changes that need to be scheduled and assessed following a process",
            "C. Changes that are typically initiated as service requests",
            "D. Changes that must be implemented as soon as possible"
        ],
        "correctAnswer": "B. Changes that need to be scheduled and assessed following a process"
    },
    {
        "question": "What is the expected outcome from using a service value chain?",
        "options": [
            "A. Service value streams",
            "B. Customer engagement",
            "C. Value realization",
            "D. The application of practices"
        ],
        "correctAnswer": "C. Value realization"
    },
    {
        "question": "Which statement about outcomes is CORRECT?",
        "options": [
            "A. Outcomes are one or more services that fulfill the needs of a service consumer",
            "B. Service providers help service consumers achieve outcomes",
            "C. Outcomes help service consumers achieve outputs",
            "D. Helping service consumers achieve outcomes reduces service provider costs",
        ],
        "correctAnswer": "B. Service providers help service consumers achieve outcomes"
    },
    {
        "question": "Which skill is an essential part of the 'service level management' practice?",
        "options": [
            "A. Technical knowledge",
            "B. Listening",
            "C. Diagnosis",
            "D. Problem analysis"
        ],
        "correctAnswer": "B. Listening"
    },
    {
        "question": "What are the three phases of 'problem management'?",
        "options": [
            "A. Problem logging, problem classification, problem resolution",
            "B. Incident management, problem management, change enablement",
            "C. Problem identification, problem control, error control",
            "D. Problem analysis, error identification, incident resolution"
        ],
        "correctAnswer": "C. Problem identification, problem control, error control"
    },
    {
        "question": "Which is a purpose of the 'engage' value chain activity?",
        "options": [
            "A. Meeting expectations for quality, costs and time-to-market",
            "B. Providing transparency and good relationships",
            "C. Ensuring the continual improvement of services",
            "D. Ensuring that the organization's vision is understood"
        ],
        "correctAnswer": "B. Providing transparency and good relationships"
    },
    {
        "question": "Identify the missing word in the following sentence.The purpose of the service configuration management practice is to ensure that accurate and reliable information about the configuration of services, and the [?] that support them, is available when and where it is needed.",
        "options": [
            "A. suppliers",
            "B. CIs",
            "C. customers",
            "D. assets"
        ],
        "correctAnswer": "B. CIs"
    },
    {
        "question": "What is described by the service value system?",
        "options": [
            "A. How all the components and activities of the organization work together as a system to enable value creation",
            "B. Services based on one or more products, designed to address needs of a target consumer group",
            "C. Joint activities performed by a service provider and a service consumer to ensure continual value co-creation",
            "D. How to apply the systems approach of the guiding principle think and work holistically"
        ],
        "correctAnswer": "A. How all the components and activities of the organization work together as a system to enable value creation"
    },
    {
        "question": "Which practice requires that staff demonstrate excellent customer service skills, such as empathy and emotional intelligence?",
        "options": [
            "A. Problem management",
            "B. Supplier management",
            "C. Release management",
            "D. Service desk"
        ],
        "correctAnswer": "D. Service desk"
    },
    {
        "question": "What is defined as any component that needs to be managed in order to deliver an IT service?",
        "options": [
            "A. A service request",
            "B. A configuration item (CI)",
            "C. An incident",
            "D. An IT asset"
        ],
        "correctAnswer": "B. A configuration item (CI)"
    },
    {
        "question": "Which guiding principle recommends using the minimum number of steps necessary to achieve an objective?",
        "options": [
            "A. Progress iteratively with feedback",
            "B. Focus on value",
            "C. Think and work holistically",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "D. Keep it simple and practical"
    },
    {
        "question": "Which two statements about the 'service request management' practice are CORRECT?",
        "options": [
            "1. Service requests are part of normal service delivery",
            "2. Complaints can be handled as service requests",
            "3. Service requests result from a failure in service",
            "4. Normal changes should be handled as service requests",
            "A. 1 and 2",
            "B. 2 and 3",
            "C. 3 and 4",
            "D. 1 and 4"
        ],
        "correctAnswer": "A. 1 and 2"
    },
    {
        "question": "What is an IT asset?",
        "options": [
            "A. Any financially valuable component that can contribute to delivery of an IT product or service",
            "B. Any component that needs to be managed in order to deliver a service",
            "C. A request from a user mat initiates a service action",
            "D. The removal of anything that could have a direct or indirect effect on services"
        ],
        "correctAnswer": "A. Any financially valuable component that can contribute to delivery of an IT product or service"
    },
    {
        "question": "Which dimension includes a workflow management system?",
        "options": [
            "A. Organizations and people",
            "B. Partners and suppliers",
            "C. Information and technology",
            "D. Value streams and processes",
        ],
        "correctAnswer": "D. Value streams and processes"
    },
    {
        "question": "Identify the missing word in the following sentence. A service is a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific [?] and risks.",
        "options": [
            "A. information",
            "B. costs",
            "C. utility",
            "D. warranty"
        ],
        "correctAnswer": "B. costs"
    },
    {
        "question": "Which of these should be logged and managed as a problem?",
        "options": [
            "A. A user requests delivery of a laptop",
            "B. A monitoring tool detects a change of state for a service",
            "C. Trend analysis shows a large number of similar incidents",
            "D. 'Continual improvement' needs to prioritize an improvement opportunity"
        ],
        "correctAnswer": "C. Trend analysis shows a large number of similar incidents"
    },
    {
        "question": "In which two situations should the ITIL guiding principles be considered?",
        "options": [
            "1. In every initiative",
            "2. In relationships with all stakeholders",
            "3. Only in specific initiatives where the principle is relevant",
            "4. Only in specific stakeholder relationships where the principle is relevant",
            "A. 1 and 2",
            "B. 2 and 3",
            "C. 3 and 4",
            "D. 1 and 4"
        ],
        "correctAnswer": "A. 1 and 2"
    },
    {
        "question": "Which guiding principle recommends coordinating all dimensions of service management?",
        "options": [
            "A. Start where you are",
            "B. Progress iteratively with feedback",
            "C. Think and work holistically",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "C. Think and work holistically"
    },
    {
        "question": "What is the purpose of the 'relationship management' practice?",
        "options": [
            "A. To establish and nurture the links between the organization and its stakeholders",
            "B. To align the organization's practices and services with changing business needs",
            "C. To set clear business-based targets for service performance",
            "D. To support the agreed quality of a service handling all agreed, user-initiated service requests"
        ],
        "correctAnswer": "A. To establish and nurture the links between the organization and its stakeholders"
    },
    {
        "question": "How should the workflow for a new service request be designed?",
        "options": [
            "A. Use a single workflow for all types of service request",
            "B. Use different workflows for each type of service request",
            "C. Avoid workflows for simple service requests",
            "D. Leverage existing workflows whenever possible"
        ],
        "correctAnswer": "D. Leverage existing workflows whenever possible"
    },
    {
        "question": "What is the purpose of the 'information security management' practice?",
        "options": [
            "A. To protect the information needed by the organization to conduct its business",
            "B. To observe services and service components",
            "C. To ensure that accurate and reliable information about the configuration of services is available when and where it is needed",
            "D. To plan and manage the full lifecycle of all IT assets"
        ],
        "correctAnswer": "A. To protect the information needed by the organization to conduct its business"
    },
    {
        "question": "Identify the missing word in the following sentence. The use of [?] should support, not replace what is observed, when using the 'start where you are' guiding principle.",
        "options": [
            "A. measurement",
            "B. tools",
            "C. plans",
            "D. process"
        ],
        "correctAnswer": "A. measurement"
    },
    {
        "question": "How should automation be implemented?",
        "options": [
            "A. By replacing human intervention wherever possible",
            "B. By replacing the existing tools first",
            "C. By initially concentrating on the most complex tasks",
            "D. By optimizing as much as possible first"
        ],
        "correctAnswer": "A. By replacing human intervention wherever possible"
    },
    {
        "question": "Which activity is part of the 'continual improvement' practice?",
        "options": [
            "A. Identifying and logging opportunities",
            "B. Delivering tactical and operational engagement with customers",
            "C. Populating and maintaining the asset register",
            "D. Providing a clear path for users to report issues, queries, and requests"
        ],
        "correctAnswer": "A. Identifying and logging opportunities"
    },
    {
        "question": "Which competencies are required by the 'service level management' practice?",
        "options": [
            "A. Problem investigation and resolution",
            "B. Business analysis and commercial management",
            "C. Incident analysis and prioritization",
            "D. Balanced scorecard reviews and maturity assessment"
        ],
        "correctAnswer": "B. Business analysis and commercial management"
    },
    {
        "question": "Which practice uses techniques such as SWOT analysis, balanced scorecard reviews, and maturity assessments?",
        "options": [
            "A. Incident management",
            "B. Problem management",
            "C. Continual improvement",
            "D. Service request management"
        ],
        "correctAnswer": "C. Continual improvement"
    },
    {
        "question": "Which statement about costs is CORRECT?",
        "options": [
            "A. Costs imposed on the consumer are costs of service utility",
            "B. Costs removed from the consumer are part of the value proposition",
            "C. Costs imposed on the consumer are costs of service warranty",
            "D. Costs removed from the consumer are part of service consumption"
        ],
        "correctAnswer": "B. Costs removed from the consumer are part of the value proposition"
    },
    {
        "question": "What is typically needed to assign complex incidents to support groups?",
        "options": [
            "A. A self-help tool",
            "B. The incident priority",
            "C. A change schedule",
            "D. The incident category"
        ],
        "correctAnswer": "D. The incident category"
    },
    {
        "question": "Which practice has a purpose that includes aligning the organization's practices and services with changing business needs?",
        "options": [
            "A. Service level management",
            "B. Service configuration management",
            "C. Relationship management",
            "D. Continual improvement"
        ],
        "correctAnswer": "D. Continual improvement"
    },
    {
        "question": "A major incident has been closed, but there is a risk that it might happen again. How should this be logged and managed?",
        "options": [
            "A. As a change request",
            "B. As a service request",
            "C. As an event",
            "D. As a problem"
        ],
        "correctAnswer": "D. As a problem"
    },
    {
        "question": "What should be done to determine the appropriate metrics for measuring a new service?",
        "options": [
            "A. Measuring the performance over the first six months, and basing a solution on the results",
            "B. Asking customers to provide numerical targets that meet their needs",
            "C. Asking customers open questions to establish their requirements",
            "D. Using operational data to provide detailed service reports"
        ],
        "correctAnswer": "D. Using operational data to provide detailed service reports"
    },
    {
        "question": "Which dimension includes activities and workflows?",
        "options": [
            "A. Organizations and people",
            "B. Information and technology",
            "C. Partners and suppliers",
            "D. Value streams and processes"
        ],
        "correctAnswer": "D. Value streams and processes"
    },
    {
        "question": "What should be used to set user expectations for request fulfillment times?",
        "options": [
            "A. The time that the customer indicates for service delivery",
            "B. The consumer demand for the service",
            "C. The time needed to realistically deliver the service",
            "D. The service levels of the supplier"
        ],
        "correctAnswer": "C. The time needed to realistically deliver the service"
    },
    {
        "question": "Which is one of the five aspects of service design?",
        "options": [
            "A. Management information systems and tools",
            "B. Risk analysis and management approach",
            "C. Management policy for business case creation",
            "D. Corporate governance and policy"
        ],
        "correctAnswer": "A. Management information systems and tools"
    },
    {
        "question": "Which statement about IT service management is CORRECT?",
        "options": [
            "A. It is performed by customers using a mix of IT systems, services and processes",
            "B. It is performed by IT service providers using a mix of suppliers and their products",
            "C. It is performed by the service desk using a mix of people, process and technology",
            "D. It is performed by IT service providers using a mix of people, process and technology"
        ],
        "correctAnswer": "D. It is performed by IT service providers using a mix of people, process and technology"
    },
    {
        "question": "Which is the CORRECT explanation of the 'R' role in a RACI matrix?",
        "options": [
            "A. This role ensures that activities are executed correctly",
            "B. This role has ownership of the end result",
            "C. This role is involved in providing knowledge and input",
            "D. This role ensures the flow of information to stakeholders"
        ],
        "correctAnswer": "B. This role has ownership of the end result"
    },
    {
        "question": "Which statement about change management is CORRECT?",
        "options": [
            "A. It optimizes overall business risk",
            "B. It optimizes financial exposure",
            "C. It ensures that all changes are authorized by the change advisory board (CAB)",
            "D. It ensures that service requests follow the normal change management process"
        ],
        "correctAnswer": "C. It ensures that all changes are authorized by the change advisory board (CAB)"
    },
    {
        "question": "Which statement about the 'four Ps' of service design is CORRECT?",
        "options": [
            "A. Processes refers to skill and training",
            "B. Partners refers to suppliers and vendors",
            "C. People refers to technology and tools",
            "D. Products refers to producers and metrics"
        ],
        "correctAnswer": "B. Partners refers to suppliers and vendors"
    },
    {
        "question": "What is the primary focus of business capacity management?",
        "options": [
            "A. Management, control and prediction of the performance, utilization and capacity of individual elements of IT technology",
            "B. Review of all capacity supplier agreements and underpinning contracts with supplier management",
            "C. Management, control and prediction of the end-to-end performance and capacity of the live operational IT services",
            "D. Future business requirements for IT services are quantified, designed, planned and implemented in a timely fashion"
        ],
        "correctAnswer": "D. Future business requirements for IT services are quantified, designed, planned and implemented in a timely fashion"
    },
    {
        "question": "Which is NOT a structure of service desk that is described in the ITIL service operation guidance?",
        "options": [
            "A. Local",
            "B. Centralized",
            "C. Outsourced",
            "D. Virtual"
        ],
        "correctAnswer": "C. Outsourced"
    },
    {
        "question": "What type of change is pre-authorized, low risk, relatively common, and follows a procedure or work instruction?",
        "options": [
            "A. A standard change",
            "B. An emergency change",
            "C. An internal change",
            "D. A normal change"
        ],
        "correctAnswer": "A. A standard change"
    },
    {
        "question": "Which service transition process provides guidance about converting data into information?",
        "options": [
            "A. Change evaluation",
            "B. Knowledge management",
            "C. Service validation and testing",
            "D. Service asset and configuration management"
        ],
        "correctAnswer": "B. Knowledge management"
    },
    {
        "question": "Which service catalogue view is considered beneficial when constructing the relationship between services, SLAs, OLAs, and other underpinning agreements?",
        "options": [
            "A. Service-based SLA view",
            "B. Wholesale customer view",
            "C. Retail customer view",
            "D. Supporting services view"
        ],
        "correctAnswer": "D. Supporting services view"
    },
    {
        "question": "Service transition contains detailed descriptions of which processes?",
        "options": [
            "A. Change management, service asset and configuration management, release and deployment management",
            "B. Change management, capacity management, event management, service request management",
            "C. Service level management, service portfolio management, service asset and configuration management",
            "D. Service asset and configuration management, release and deployment management, request fulfillment",
        ],
        "correctAnswer": "A. Change management, service asset and configuration management, release and deployment management"
    },
    {
        "question": "Which is an objective of the design coordination process?",
        "options": [
            "A. To produce service design packages and ensure they are handed over to service transition",
            "B. To assess and evaluate all changes and their impact on service designs",
            "C. To document the initial structure and relationship between services and customers",
            "D. To gather and document new service level requirements from the customer"
        ],
        "correctAnswer": "A. To produce service design packages and ensure they are handed over to service transition"
    },
    {
        "question": "What MAIN factors are considered to assess the priority of an incident?",
        "options": [
            "A. The urgency and impact",
            "B. The impact and complexity",
            "C. The cost and urgency",
            "D. The complexity and cost"
        ],
        "correctAnswer": "A. The urgency and impact"
    },
    {
        "question": "Which term is used to describe the prediction and control of income and expenditure within an organization?",
        "options": [            
            "A. Charging",
            "B. Governance",
            "C. Budgeting",
            "D. Accounting"
        ],
        "correctAnswer": "C. Budgeting"
    },
    {
        "question": "Where should all master copies of controlled software and documentation be stored?",
        "options": [
            "A. In the definitive capacity library",
            "B. In the definitive media library",
            "C. In the definitive security library",
            "D. In the definitive production library"
        ],
        "correctAnswer": "B. In the definitive media library"
    },
    {
        "question": "Which stage of the service lifecycle has the purpose of looking for ways to improve process efficiency and cost effectiveness?",
        "options": [
            "A. Service operation",
            "B. Service transition",
            "C. Continual service improvement",
            "D. Service strategy"
        ],
        "correctAnswer": "C. Continual service improvement"
    },
    {
        "question": "Which of the following should IT service continuity strategy be based on?",
        "options": [
            "1. Design of the service metrics",
            "2. Business continuity strategy",
            "3. Business impact analysis (BIA)",
            "4. Risk assessment",
            "A. 1, 2 and 4 only",
            "B. 1, 2 and 3 only",
            "C. 2, 3 and 4 only",
            "D. 1, 3 and 4 only"
        ],
        "correctAnswer": "C. 2, 3 and 4 only"
    },
    {
        "question": "What is NOT within the scope of service catalogue management?",
        "options": [
            "A. Contribution to the definition of services",
            "B. Interfaces between all services and supporting services",
            "C. Interfaces between the service catalogue and service portfolio",
            "D. Fulfilment of business service requests"
        ],
        "correctAnswer": "D. Fulfilment of business service requests"
    },
    {
        "question": "What three elements make up the Service Portfolio?",
        "options": [
            "A. Customer portfolio, service catalogue and retired services",
            "B. Customer portfolio, configuration management system and service catalogue",
            "C. Service pipeline, service catalogue and retired services",
            "D. Service pipeline, configuration management system and service catalogue"
        ],
        "correctAnswer": "C. Service pipeline, service catalogue and retired services"
    },
    {
        "question": "Who is responsible for defining metrics for change management?",
        "options": [
            "A. The change management process owner",
            "B. The change advisory board (CAB)",
            "C. The service owner",
            "D. The continual service improvement manager"
        ],
        "correctAnswer": "A. The change management process owner"
    },
    {
        "question": "Which is a supplier category?",
        "options": [
            "A. Technical",
            "B. Commodity",
            "C. Customer",
            "D. Resource"
        ],
        "correctAnswer": "D. Resource"
    },
    {
        "question": "Which process is used to compare the value that new services offer with the value of the services they have replaced?",
        "options": [
            "A. Availability management",
            "B. Capacity management",
            "C. Service portfolio management",
            "D. Service catalogue management"
        ],
        "correctAnswer": "C. Service portfolio management"
    },
    {
        "question": "Which is an important principle of communication in service operation?",
        "options": [
            "A. Information should always be communicated",
            "B. It has an intended purpose or a resultant action",
            "C. Meetings are always the best method of communication",
            "D. It is stored in the configuration management system"
        ],
        "correctAnswer": "B. It has an intended purpose or a resultant action"
    },
    {
        "question": "What do customer perceptions and business outcomes help to define?",
        "options": [
            "A. The value of a service",
            "B. Service metrics",
            "C. The total cost of a service",
            "D. Key performance indicators (KPIs)"
        ],
        "correctAnswer": "A. The value of a service"
    },
    {
        "question": "Which statement about metrics is CORRECT?",
        "options": [
            "A. Process metrics can be used to measure end-to-end service performance",
            "B. Technology metrics can be used to measure component performance and availability",
            "C. Process metrics can be used to measure the utilization of a supplier's network",
            "D. Technology metrics can be used to determine the overall health of a process"
        ],
        "correctAnswer": "B. Technology metrics can be used to measure component performance and availability"
    },
    {
        "question": "What takes place in the 'Did we get there?' step of the continual service improvement (CSI) approach?",
        "options": [
            "A. An initial baseline assessment",
            "B. The production of a detailed CSI plan",
            "C. Verifying that improvement targets have been achieved",
            "D. Understanding priorities for improvement"
        ],
        "correctAnswer": "C. Verifying that improvement targets have been achieved"
    },
    {
        "question": "Which is an example of improving service utility using service management automation?",
        "options": [
            "A. Pre-determined routing of a service request",
            "B. Reducing the time to compile service data",
            "C. Monitoring service availability",
            "D. Faster resource allocation"
        ],
        "correctAnswer": "D. Faster resource allocation"
    },
    {
        "question": "What is the CORRECT definition of service management?",
        "options": [
            "A. A set of specialized assets for transitioning services into the live operational environment",
            "B. A set of specialized organizational capabilities for delivering value to customers in the form of services",
            "C. The capability of supplier to deliver services to providers in exchange for money",
            "D. The capability of service providers to minimize their costs without reducing the value of the services"
        ],
        "correctAnswer": "B. A set of specialized organizational capabilities for delivering value to customers in the form of services"
    },
    {
        "question": "Which is the correct combination of items that makes up an IT service?",
        "options": [
            "A. Customers, providers and documents",
            "B. Information technology, people and processes",
            "C. Information technology, networks and people",
            "D. People, processes and customers"
        ],
        "correctAnswer": "B. Information technology, people and processes"
    },
    {
        "question": "Which problem management activity ensures that a problem can be easily tracked and management information can be obtained?",
        "options": [
            "A. Categorization",
            "B. Detection",
            "C. Prioritization",
            "D. Escalation"
        ],
        "correctAnswer": "A. Categorization"
    },
    {
        "question": "What can be used to help determine the impact level of a problem?",
        "options": [
            "A. Definitive media library (DML)",
            "B. Configuration management system (CMS)",
            "C. Statement of requirements (SOR)",
            "D. Standard operating procedures (SOP)"
        ],
        "correctAnswer": "B. Configuration management system (CMS)"
    },
    {
        "question": "Which are phases of the release and deployment process?",
        "options": [
            "1. Release build and test",
            "2. Review and close",
            "3. Categorize and record",
            "4. Change authorization and schedule",
            "A. 1 and 2",
            "B. 1 and 3",
            "C. 2 and 4",
            "D. 3 and 4"
        ],
        "correctAnswer": "A. 1 and 2"
    },
    {
        "question": "Which function is responsible for the management of a data centre?",
        "options": [
            "A. Technical management",
            "B. Service desk",
            "C. Application management",
            "D. Facilities management"
        ],
        "correctAnswer": "D. Facilities management"
    },
    {
        "question": "Which are the elements of process control?",
        "options": [
            "A. Inputs, outputs and triggers",
            "B. Work instructions, procedures and roles",
            "C. Resources, capabilities and metrics",
            "D. Process owner, policy and objectives"
        ],
        "correctAnswer": "D. Process owner, policy and objectives"
    },
    {
        "question": "Which processes are responsible for the regular review of underpinning contracts?",
        "options": [
            "A. Supplier management and service level management",
            "B. Supplier management and change management",
            "C. Availability management and service level management",
            "D. Supplier management and availability management"
        ],
        "correctAnswer": "A. Supplier management and service level management"
    },
    {
        "question": "Which statement BEST describes the value of service strategy to the business?",
        "options": [
            "A. It allows higher volumes of successful change",
            "B. It reduces unplanned costs through optimized handling of service outages",
            "C. It reduces the duration and frequency of service outages",
            "D. It enables the service provider to understand what levels of service will make their customers successful"
        ],
        "correctAnswer": "D. It enables the service provider to understand what levels of service will make their customers successful"
    },
    {
        "question": "What is a definition of a service improvement plan (SIP)?",
        "options": [
            "A. A formal plan to implement improvements to a customer's business processes",
            "B. An input from availability management to service level management, detailing the service design plan",
            "C. A formal plan to implement improvements to a service or process",
            "D. An input from financial management for IT services to service level management, detailing the budget plan"
        ],
        "correctAnswer": "C. A formal plan to implement improvements to a service or process"
    },
    {
        "question": "Which statement about the known error database (KEDB) is CORRECT?",
        "options": [
            "A. It is maintained by the service desk and updated with the details of each new incident",
            "B. It is a part of the configuration management database (CMDB) and contains workarounds",
            "C. It is maintained by problem management and is used by the service desk to help resolve incidents",
            "D. It is maintained by incident management and contains solutions to be implemented by problem management"
        ],
        "correctAnswer": "C. It is maintained by problem management and is used by the service desk to help resolve incidents"
    },
    {
        "question": "Which process works with incident management to ensure that security breaches are detected and logged?",
        "options": [
            "A. Change management",
            "B. Service level management",
            "C. Access management",
            "D. Continual service improvement"
        ],
        "correctAnswer": "C. Access management"
    },
    {
        "question": "What should a release policy include?",
        "options": [
            "A. The process owner and process manager for each type of release",
            "B. The roles and responsibilities for incident and problem resolution",
            "C. The naming convention and expected frequency of each type of release",
            "D. The naming convention for all configuration items (CI) recorded in the configuration management system (CMS)"
        ],
        "correctAnswer": "C. The naming convention and expected frequency of each type of release"
    },
    {
        "question": "Which guiding principle is PRIMARILY concerned with end-to-end service delivery?",
        "options": [
            "A. Focus on value",
            "B. Think and work holistically",
            "C. Optimize and automate",
            "D. Collaborate and promote"
        ],
        "correctAnswer": "B. Think and work holistically"
    },
    {
        "question": "What is the purpose of the 'problem management' practice?",
        "options": [
            "A. To protect the information needed by the organization to conduct its business",
            "B. To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents,",
            "C. To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services",
            "D. To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
        ],
        "correctAnswer": "B. To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents,"
    },
    {
        "question": "Which practice would help a user gain access to an application that they need to use?",
        "options": [
            "A. Service configuration management",
            "B. Change enablement",
            "C. Service request management",
            "D. Service level management"
        ],
        "correctAnswer": "B. Change enablement"
    },
    {
        "question": "Why should some service requests be fulfilled with no additional approvals?",
        "options": [
            "A. To ensure that spending is properly accounted for",
            "B. To ensure that information security requirements are met",
            "C. To streamline the fulfillment workflow",
            "D. To set user expectations for fulfillment times"
        ],
        "correctAnswer": "C. To streamline the fulfillment workflow"
    },
    {
        "question": "Which is a purpose of the 'service desk' practice?",
        "options": [
            "A. To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
            "B. To be the entry point and single point of contact for the service provider with all of its users",
            "C. To support the agreed quality of a service by handling all pre-defined, user-initiated service requests",
            "D. To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels",
        ],
        "correctAnswer": "B. To be the entry point and single point of contact for the service provider with all of its users"
    },
    {
        "question": "Which are elements of the service value system?",
        "options": [
            "A. Service provision, service consumption, service relationship management",
            "B. Governance, service value chain, practices",
            "C. Outcomes, utility, warranty",
            "D. Customer value, stakeholder value, organization"
        ],
        "correctAnswer": "B. Governance, service value chain, practices"
    },
    {
        "question": "What is defined as an unplanned interruption or reduction in the quality of a service?",
        "options": [
            "A. An incident",
            "B. A problem",
            "C. A change",
            "D. An event"
        ],
        "correctAnswer": "A. An incident"
    },
    {
        "question": "Which statement about the use of measurement in the 'start where you are' guiding principle is CORRECT?",
        "options": [
            "A. It should always be used to support direct observation",
            "B. It should always be used instead of direct observation",
            "C. Measured data is always more accurate than direct observation",
            "D. The act of measuring always positively impacts results"
        ],
        "correctAnswer": "A. It should always be used to support direct observation"
    },
    {
        "question": "What is an incident?",
        "options": [
            "A. The planned removal of an item that might affect a service",
            "B. A result enabled by one or more outputs",
            "C. A possible future event that could cause harm",
            "D. A service interruption resolved by the use of self-help tools"
        ],
        "correctAnswer": "C. A possible future event that could cause harm"
    },
    {
        "question": "What is defined as a change of state that has significate for the management of an IT service?",
        "options": [
            "A. Event",
            "B. Incident",
            "C. Problem",
            "D. Known error"
        ],
        "correctAnswer": "A. Event"
    },
    {
        "question": "Which dimension includes the knowledge needed for the management of services?",
        "options": [
            "A. Organizations and people",
            "B. Value streams and processes",
            "C. Information and technology",
            "D. Partners and suppliers"
        ],
        "correctAnswer": "C. Information and technology"
    },
    {
        "question": "What is a set of specialized organizational capabilities for enabling value for customers in the form of services?",
        "options": [
            "A. Service offering",
            "B. Service provision",
            "C. Service management",
            "D. Service consumption"
        ],
        "correctAnswer": "C. Service management"
    },
    {
        "question": "What is the PRIMARY use of a change schedule?",
        "options": [
            "A. To support the 'incident management' practice and improvement planning",
            "B. To manage emergency changes",
            "C. To plan changes and help avoid conflicts",
            "D. To manage standard changes"
        ],
        "correctAnswer": "C. To plan changes and help avoid conflicts"
    },
    {
        "question": "What are guiding principles?",
        "options": [
            "A. A set of interconnected activities that help an organization deliver a valuable service",
            "B. A description of one or more services that help address the needs of a target consumer group",
            "C. A set of specialized organizational capabilities for enabling value for customers",
            "D. Recommendations that help an organization when adopting a service management approach"
        ],
        "correctAnswer": "D. Recommendations that help an organization when adopting a service management approach"
    },
    {
        "question": "Which guiding principle focuses on reducing costs and human errors?",
        "options": [
            "A. Focus and value",
            "B. Collaborate and promote visibility",
            "C. Optimize and automate",
            "D. Think and work holistically"
        ],
        "correctAnswer": "C. Optimize and automate"
    },
    {
        "question": "What is the purpose of the 'incident management' practice?",
        "options": [
            "A. To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
            "B. To capture demand for incident resolution and service requests",
            "C. To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents",
            "D. To support the agreed service quality by effective handling of all agreed user-initiated service requests"
        ],
        "correctAnswer": "A. To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
    },
    {
        "question": "Which practice makes new services available for use?",
        "options": [
            "A. Change enablement",
            "B. Release management",
            "C. Deployment management",
            "D. IT asset management"
        ],
        "correctAnswer": "B. Release management"
    },
    {
        "question": "Which guiding principle considers the importance of customer loyalty?",
        "options": [
            "A. Progress iteratively with feedback",
            "B. Focus on value",
            "C. Optimize and automate",
            "D. Start where you are"
        ],
        "correctAnswer": "B. Focus on value"
    },
    {
        "question": "Which guiding principle helps to ensure that each improvement effort has more focus and is easier to maintain?",
        "options": [
            "A. Start where you are",
            "B. Collaborate and promote visibility",
            "C. Progress iteratively with feedback",
            "D. Think and work holistically"
        ],
        "correctAnswer": "C. Progress iteratively with feedback"
    },
    {
        "question": "Which is a key activity carried out in the 'did we get there?' step of the 'continual improvement' model?",
        "options": [
            "A. Define measurable targets",
            "B. Perform baseline assessments",
            "C. Execute improvement actions",
            "D. Evaluate measurements and metrics"
        ],
        "correctAnswer": "D. Evaluate measurements and metrics"
    },
    {
        "question": "What is important for a 'continual improvement register' (CIR)?",
        "options": [
            "A. Improvement ideas are documented, assessed and prioritized",
            "B. Improvement ideas from many sources are kept in a single CIR",
            "C. Improvement ideas that are not being actioned immediately are removed from the CIR",
            "D. Improvement ideas are tested, funded and agreed"
        ],
        "correctAnswer": "A. Improvement ideas are documented, assessed and prioritized"
    },
    {
        "question": "What can a service remove from the consumer and impose on the consumer?",
        "options": [
            "A. Utility",
            "B. Asset",
            "C. Cost",
            "D. Outcome"
        ],
        "correctAnswer": "C. Cost"
    },
    {
        "question": "In which step of the 'continual improvement model' is an improvement plan implemented?",
        "options": [
            "A. What is the vision?",
            "B. How do we get there?",
            "C. Take action",
            "D. Did we get there?"
        ],
        "correctAnswer": "C. Take action"
    },
    {
        "question": "Which is a purpose of the 'service level management' practice?",
        "options": [
            "A. To establish and nurture the links between the organization and its stakeholders",
            "B. To ensure that the organization's suppliers and their performance are managed appropriately",
            "C. To set clear business-based targets for service levels",
            "D. To support the agreed quality of a service handling all agreed, user-initiated service requests"
        ],
        "correctAnswer": "C. To set clear business-based targets for service levels"
    },
    {
        "question": "Which is an example of a business related measurement?",
        "options": [
            "A. The number of passengers checked in",
            "B. The average time to response to change requests",
            "C. The average resolution time for incidents",
            "D. The number of problems resolved"
        ],
        "correctAnswer": "A. The number of passengers checked in"
    },
    {
        "question": "What describes the steps needed to create and deliver a specific service to a consumer?",
        "options": [
            "A. Service management",
            "B. Practices",
            "C. A value stream",
            "D. Service level management"
        ],
        "correctAnswer": "D. Service level management"
    },
    {
        "question": "Which statement about the automation of service requests is CORRECT?",
        "options": [
            "A. Service requests that cannot be automated should be handled as incidents",
            "B. Service requests and their fulfillment should be automated as much as possible",
            "C. Service requests that cannot be automated should be handled as problems",
            "D. Service requests and their fulfillment should be carried out by service desk staff without automation"
        ],
        "correctAnswer": "B. Service requests and their fulfillment should be automated as much as possible"
    },
    {
        "question": "Identify the missing word in the following sentence. A user is [?] that uses services.",
        "options": [
            "A. an organization",
            "B. a role",
            "C. a team",
            "D. a supplier"
        ],
        "correctAnswer": "B. a role"
    },
    {
        "question": "Which gives a user access to a system?",
        "options": [
            "A. Service requirement",
            "B. Service agreement",
            "C. Service consumption",
            "D. Service provision"
        ],
        "correctAnswer": "D. Service provision"
    },
    {
        "question": "What is a change schedule PRIMARILY used for?",
        "options": [
            "A. To help plan, authorize and schedule emergency changes",
            "B. To publish a list of service requests that users can select",
            "C. To ensure that a single change authority reviews every change",
            "D. To help plan changes, assist in communication and avoid conflicts"
        ],
        "correctAnswer": "D. To help plan changes, assist in communication and avoid conflicts"
    },
    {
        "question": "What is used to link activities within the service value chain?",
        "options": [
            "A. Service level agreements",
            "B. Inputs, outputs and triggers",
            "C. Opportunity, demand and value",
            "D. Service desk"
        ],
        "correctAnswer": "C. Opportunity, demand and value"
    },
    {
        "question": "Which describes the utility of a service?",
        "options": [
            "A. A service that is fit for use",
            "B. A service that meets its service level targets",
            "C. A service that increases constraints on the consumer",
            "D. A service that supports the performance of the consumer"
        ],
        "correctAnswer": "D. A service that supports the performance of the consumer"
    },
    {
        "question": "Which two practices use workarounds?",
        "options": [
            "A. Change enablement and continual improvement",
            "B. Change enablement and problem management",
            "C. Problem management and incident management",
            "D. Incident management and continual improvement"
        ],
        "correctAnswer": "C. Problem management and incident management"
    },
    {
        "question": "Which statement about the 'change enablement' practice is CORRECT?",
        "options": [
            "A. Standard changes are those that need to be scheduled, assessed and authorized following a standard process",
            "B. Normal changes are triggered by the creation of a change request which can be created manually or automated",
            "C. Assessment and authorization of normal changes should be expedited to ensure they can be implemented quickly",
            "D. There should be a separate change authority for standard changes which includes senior managers who understand the risks involved"
        ],
        "correctAnswer": "B. Normal changes are triggered by the creation of a change request which can be created manually or automated"
    },
    {
        "question": "Which is included in the purpose of the 'deliver and support' value chain activity?",
        "options": [
            "A. Meeting stakeholder expectations for time to market",
            "B. Understanding the organization's service vision",
            "C. Understanding stakeholder needs",
            "D. Providing services to agreed specifications"
        ],
        "correctAnswer": "A. Meeting stakeholder expectations for time to market"
    },
    {
        "question": "What must always be done before an activity is automated?",
        "options": [
            "A. Check that the activity has already been optimized",
            "B. Check that suitable new technology has been purchased",
            "C. Ensure that DevOps has been successfully implemented",
            "D. Ensure the solution removes the need for human intervention"
        ],
        "correctAnswer": "A. Check that the activity has already been optimized"
    },
    {
        "question": "Which practice has a purpose that includes managing risks to confidentiality, integrity and availability?",
        "options": [
            "A. Information security management",
            "B. Continual improvement",
            "C. Monitoring and event management",
            "D. Service level management"
        ],
        "correctAnswer": "A. Information security management"
    },
    {
        "question": "What is a change schedule used for?",
        "options": [
            "A. To help plan emergency changes",
            "B. To help authorize standard changes",
            "C. To help assign a change authority",
            "D. To help manage normal changes"
        ],
        "correctAnswer": "D. To help manage normal changes"
    },
    {
        "question": "Which ITIL practice recommends performing service reviews to ensure that services continue to meet the needs of the organization?",
        "options": [
            "A. Service desk",
            "B. Service request management",
            "C. Service level management",
            "D. Service configuration management"
        ],
        "correctAnswer": "C. Service level management"
    },
    {
        "question": "Which role approves the cost of services?",
        "options": [
            "A. User",
            "B. Change authority",
            "C. Sponsor",
            "D. Customer"
        ],
        "correctAnswer": "C. Sponsor"
    },
    {
        "question": "What actions does a service desk take for all issues, queries and requests that are reported to them?",
        "options": [
            "A. Schedule, assess, authorize",
            "B. Diagnose, investigate, resolve",
            "C. Initiate, approve, fulfill",
            "D. Acknowledge, classify, own"
        ],
        "correctAnswer": "C. Initiate, approve, fulfill"
    },
    {
        "question": "Which is an external input to the service value chain?",
        "options": [
            "A. The 'improve' value chain activity",
            "B. An overall plan",
            "C. Customer requirements",
            "D. Feedback loops"
        ],
        "correctAnswer": "C. Customer requirements"
    },
    {
        "question": "Which is included in the purpose of the 'service level management' practice?",
        "options": [
            "A. To maximize the number of successful service and product changes",
            "B. To ensure accurate information about the configuration of services is available",
            "C. To set clear business-based targets for service levels",
            "D. To ensure that suppliers and their performance are managed appropriately"
        ],
        "correctAnswer": "C. To set clear business-based targets for service levels"
    },
    {
        "question": "Which usually requires a team of representatives from many stakeholder groups?",
        "options": [
            "A. Fulfilling a service request",
            "B. Authorizing an emergency change",
            "C. Logging a new problem",
            "D. Investigating a major incident"
        ],
        "correctAnswer": "D. Investigating a major incident"
    },
    {
        "question": "Which value chain activity ensures that service components meet agreed specifications?",
        "options": [
            "A. Plan",
            "B. Design and transition",
            "C. Obtain/build",
            "D. Deliver and support"
        ],
        "correctAnswer": "C. Obtain/build"
    },
    {
        "question": "Which ITIL practice has the purpose to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels?",
        "options": [
            "A. Supplier management",
            "B. Change enablement",
            "C. Relationship management",
            "D. Service desk"
        ],
        "correctAnswer": "C. Relationship management"
    },
    {
        "question": "What includes governance as a component?",
        "options": [
            "A. Practices",
            "B. The service value chain",
            "C. The service value system",
            "D. The guiding principles"
        ],
        "correctAnswer": "C. The service value system"
    },
    {
        "question": "Which practice needs people who understand complex systems and have creative and analytical skills?",
        "options": [
            "A. Change enablement",
            "B. Service level management",
            "C. Service request management",
            "D. Problem management"
        ],
        "correctAnswer": "D. Problem management"
    },
    {
        "question": "What is the definition of a known error?",
        "options": [
            "A. An unplanned interruption to a service, or reduction in the quality of a service",
            "B. A cause, or potential cause, of one or more incidents",
            "C. A problem that has been analyzed and has not been resolved",
            "D. Any change of state that has significance for the management of a service or other configuration item (CI)"
        ],
        "correctAnswer": "C. A problem that has been analyzed and has not been resolved"
    },
    {
        "question": "Which will NOT be handled as a service request?",
        "options": [
            "A. The degradation of a service",
            "B. The replacement of a toner cartridge",
            "C. The provision of a laptop",
            "D. A complaint about a support team"
        ],
        "correctAnswer": "A. The degradation of a service"
    },
    {
        "question": "What are typically recognized through notifications created by an IT service, CI or monitoring tool?",
        "options": [
            "A. Incidents",
            "B. Problems",
            "C. Events",
            "D. Requests"
        ],
        "correctAnswer": "C. Events"
    },
    {
        "question": "Which dimension considers data security and privacy?",
        "options": [
            "A. Organizations and people",
            "B. Information and technology",
            "C. Partners and suppliers",
            "D. Value streams and processes"
        ],
        "correctAnswer": "B. Information and technology"
    },
    {
        "question": "Which term relates to service levels aligned with the needs of service consumers?",
        "options": [
            "A. Service management",
            "B. Warranty",
            "C. Cost",
            "D. Utility"
        ],
        "correctAnswer": "B. Warranty"
    },
    {
        "question": "Which directly assists with the diagnosis and resolution of simple incidents?",
        "options": [
            "A. Scripts for collecting user information",
            "B. Use of shift working patterns",
            "C. Fulfillment of service requests",
            "D. Creation of a temporary team"
        ],
        "correctAnswer": "A. Scripts for collecting user information"
    },
    {
        "question": "Which approach is CORRECT when applying the guiding principle 'keep it simple and practical'?",
        "options": [
            "A. Only add controls and metrics when they are needed",
            "B. Design controls and metrics first, then remove those not adding value",
            "C. Design controls and metrics and add them individually until all are implemented",
            "D. Only add controls and metrics that are required for compliance"
        ],
        "correctAnswer": "B. Design controls and metrics first, then remove those not adding value"
    },
    {
        "question": "Which practice forms a link between the service provider and the users of services?",
        "options": [
            "A. Change enablement",
            "B. Service level management",
            "C. Problem management",
            "D. Service desk"
        ],
        "correctAnswer": "D. Service desk"
    },
    {
        "question": "Which is a purpose of release management?",
        "options": [
            "A. To protect the organization's information",
            "B. To handle user-initiated service requests",
            "C. To make new and changed services available for use",
            "D. To move hardware and software to live environments"
        ],
        "correctAnswer": "C. To make new and changed services available for use"
    },
    {
        "question": "What is recommended by the guiding principle 'progress iteratively with feedback'?",
        "options": [
            "A. A current state assessment that is carried out at the start of an improvement initiative",
            "B. The identification of all interested parts at the start of an improvement initiative",
            "C. An improvement initiative that is broken into a number of manageable sections",
            "D. An assessment of how all the parts of an organization will affect an improvement initiative"
        ],
        "correctAnswer": "C. An improvement initiative that is broken into a number of manageable sections"
    },
    {
        "question": "Which guiding principle considers customer and user experience?",
        "options": [
            "A. Collaborate and promote visibility",
            "B. Focus on value",
            "C. Start where you are",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "B. Focus on value"
    },
    {
        "question": "Which statement about the 'change enablement' practice is CORRECT?",
        "options": [
            "A. Service requests are usually normal changes that can be implemented quickly without authorization",
            "B. Emergency changes are changes that must be fully tested and fully documented prior to implementation",
            "C. Standard changes are changes that need to be scheduled, assessed and authorized following a standard process",
            "D. Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
        ],
        "correctAnswer": "D. Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
    },
    {
        "question": "Which of these activities is carried out as part of 'problem management'?",
        "options": [
            "A. Creating incident records",
            "B. Diagnosing and resolving incidents",
            "C. Escalating incidents to a support team for resolution",
            "D. Trend analysis of incident records"
        ],
        "correctAnswer": "D. Trend analysis of incident records"
    },
    {
        "question": "What does 'change enablement' PRIMARILY focus on?",
        "options": [
            "A. Changes to service levels",
            "B. Changes to products and services",
            "C. Changes to organizational structure",
            "D. Changes to skills and competencies"
        ],
        "correctAnswer": "B. Changes to products and services"
    },
    {
        "question": "Identify the missing word(s) in the following sentence. The service desk should be the entry point and single point of contact for the [?] with all of its users.",
        "options": [
            "A. Service consumer",
            "B. Service provider",
            "C. Customer",
            "D. Supplier"
        ],
        "correctAnswer": "B. Service provider"
    },
    {
        "question": "Which is handled as a service request?",
        "options": [
            "A. An investigation to identify the cause of an incident",
            "B. A compliment about an IT support team",
            "C. The failure of an IT service",
            "D. An emergency change to implement a security patch"
        ],
        "correctAnswer": "C. The failure of an IT service"
    },
    {
        "question": "Which is a key requirement for a successful service level agreement (SLA)?",
        "options": [
            "A. Using individual metrics that relate to the service catalogue",
            "B. Using bundled metrics to relate performance to outcomes",
            "C. Using single-system-based metrics that relate to outputs",
            "D. Using an agreement between the service provider and service supplier"
        ],
        "correctAnswer": "B. Using bundled metrics to relate performance to outcomes"
    },
    {
        "question": "Which is considered by the 'partners and suppliers' dimension?",
        "options": [
            "A. Using artificial intelligence",
            "B. Defining controls and procedures",
            "C. Using formal roles and responsibilities",
            "D. Working with an integrator to manage relationships"
        ],
        "correctAnswer": "D. Working with an integrator to manage relationships"
    },
    {
        "question": "Which practice recommends using tools for collaboration and the automated matching of symptoms?",
        "options": [
            "A. Problem management",
            "B. Service level management",
            "C. Incident management",
            "D. Service request management"
        ],
        "correctAnswer": "C. Incident management"
    },
    {
        "question": "Which helps to manage an incident when it is unclear which support team should be working on the incident?",
        "options": [
            "A. Disaster recovery plans",
            "B. Swarming",
            "C. Target resolution times",
            "D. Self-help"
        ],
        "correctAnswer": "B. Swarming"
    },
    {
        "question": "Which statement about the 'continual improvement' practice is CORRECT?",
        "options": [
            "A. Continual improvement participation should be limited to a small dedicated team.",
            "B. It is the role of senior management to authorize improvement initiatives.",
            "C. Training should be provided to those involved in continual improvement.",
            "D. A single continual improvement register should be maintained by senior management."
        ],
        "correctAnswer": "C. Training should be provided to those involved in continual improvement."
    },
    {
        "question": "Which does the ITIL service value system discourage?",
        "options": [
            "A. Coordinated authorities and responsibilities",
            "B. Organizational silos",
            "C. Interfaces among practices",
            "D. Organizational agility"
        ],
        "correctAnswer": "B. Organizational silos"
    },
    {
        "question": "An SLA is a service level agreement. Which describes the 'watermelon SLA' effect?",
        "options": [
            "A. A single SLA defines target service levels for multiple customer, so every customer sees reports about other customers' experiences.",
            "B. The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied.",
            "C. SLA targets change very frequently, so that each report includes new measures and trends cannot be analyzed.",
            "D. Introducing SLAs for a service enables customer to see that the service provider is doing a really good job, so this improves satisfaction."
        ],
        "correctAnswer": "B. The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied."
    },
    {
        "question": "Which practice includes conducting regular reviews to ensure that services are still appropriate and relevant?",
        "options": [
            "A. Service level management",
            "B. Service desk",
            "C. Continual improvement",
            "D. Change enablement"
        ],
        "correctAnswer": "A. Service level management"
    },
    {
        "question": "What is a service?",
        "options": [
            "A. A possible event that could cause harm or loss, or make it more difficult to achieve objectives",
            "B. A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks",
            "C. A tangible or intangible deliverable of an activity",
            "D. Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings",
        ],
        "correctAnswer": "B. A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks"
    },
    {
        "question": "Which TWO are important aspects of the 'service request management' practice?",
        "options": [
            "1. Standardization and automation",
            "2. Providing a variety of channels for access",
            "3. Establishing a shared view of targets",
            "4. Policies for approvals",
            "A. 1 and 2",
            "B. 2 and 3",
            "C. 3 and 4",
            "D. 1 and 4"
        ],
        "correctAnswer": "D. 1 and 4"
    },
    {
        "question": "What is required by all service desk staff?",
        "options": [
            "A. Excellent technical knowledge",
            "B. Root cause analysis skills",
            "C. Demonstration of emotional intelligence",
            "D. Knowledge of telephony technology"
        ],
        "correctAnswer": "C. Demonstration of emotional intelligence"
    },
    {
        "question": "Which practice establishes a channel between the service provider and its users?",
        "options": [
            "A. Relationship management",
            "B. Change enablement",
            "C. Supplier management",
            "D. Service desk"
        ],
        "correctAnswer": "D. Service desk"
    },
    {
        "question": "Which practice includes the use of approaches such as Lean, Agile and DevOps with the aim of facilitating a greater amount of change at a quicker rate?",
        "options": [
            "A. Service desk",
            "B. Monitoring and event management",
            "C. Service level management",
            "D. Continual improvement"
        ],
        "correctAnswer": "C. Service level management"
    },
    {
        "question": "Which practice has a purpose that includes maximizing success by ensuring that risks have been properly assessed?",
        "options": [
            "A. Relationship management",
            "B. Change enablement",
            "C. Release management",
            "D. Monitoring and event management"
        ],
        "correctAnswer": "B. Change enablement"
    },
    {
        "question": "Which practice provides users with a way to get various requests arranged, explained and coordinated?",
        "options": [
            "A. Service level management",
            "B. Relationship management",
            "C. Continual improvement",
            "D. Service desk"
        ],
        "correctAnswer": "D. Service desk"
    },
    {
        "question": "Which helps to streamline the fulfilment of service requests?",
        "options": [
            "A. Understanding which service requests can be accomplished with limited approvals",
            "B. Creating new workflows for every service request",
            "C. Separating requests relating to service failures from the degradation of services",
            "D. Eliminating service requests which have complex workflows",
        ],
        "correctAnswer": "A. Understanding which service requests can be accomplished with limited approvals"
    },
    {
        "question": "Which statement about outcomes is CORRECT?",
        "options": [
            "A. They are deliverables provided to service consumers.",
            "B. They allow service consumers to achieve a desired result.",
            "C. They provide products to service providers based on outputs.",
            "D. The co-create value for service providers by reducing costs and risks."
        ],
        "correctAnswer": "B. They allow service consumers to achieve a desired result."
    },
    {
        "question": "Which guiding principle says that services and processes should NOT provide a solution for every exception?",
        "options": [
            "A. Keep it simple and practical",
            "B. Think and work holistically",
            "C. Optimize and automate",
            "D. Collaborate and promote visibility"
        ],
        "correctAnswer": "C. Optimize and automate"
    },
    {
        "question": "Identify the missing word in the following sentence. The purpose of the 'supplier management' practice is to ensure that the organization's suppliers and their performances are [?] appropriately to support the seamless provision of quality products and services.",
        "options": [
            "A. measured",
            "B. rewarded",
            "C. managed",
            "D. defined"
        ],
        "correctAnswer": "C. managed"
    },
    {
        "question": "Identify the missing word in the following sentence. The purpose of the service configuration management practice is to ensure that accurate and reliable information about the [?], and the CIs that support them, is available when and where it is needed.",
        "options": [
            "A. relationships with suppliers",
            "B. configuration of services",
            "C. skills of people",
            "D. authorization of changes"
        ],
        "correctAnswer": "B. configuration of services"
    },
    {
        "question": "Which practice requires skills and competencies related to business analysis, supplier management and relationship management?",
        "options": [
            "A. Monitoring and event management",
            "B. Incident management",
            "C. Service level management",
            "D. IT asset management"
        ],
        "correctAnswer": "C. Service level management"
    },
    {
        "question": "When should a workaround be created?",
        "options": [
            "A. As soon as possible, once the incident is logged",
            "B. After the resolution of a problem",
            "C. When a problem cannot be resolved quickly",
            "D. When a potential permanent solution has been identified"
        ],
        "correctAnswer": "C. When a problem cannot be resolved quickly"
    },
    {
        "question": "What is a configuration item?",
        "options": [
            "A. Any financially valuable component that can contribute to delivery of an IT product or service",
            "B. Any component that needs to be managed in order to deliver an IT service",
            "C. Any change of state that has significance for the management of a service",
            "D. A problem that has been analyzed but has not been resolved"
        ],
        "correctAnswer": "B. Any component that needs to be managed in order to deliver an IT service"
    },
    {
        "question": "Identify the missing words in the following sentence. When an organization has decided to improve a service, it should start by considering [?].",
        "options": [
            "A. existing information",
            "B. new methods",
            "C. additional measurements",
            "D. revised processes"
        ],
        "correctAnswer": "A. existing information"
    },
    {
        "question": "Which is a use of the change schedule?",
        "options": [
            "A. Assigning resources to changes",
            "B. Deciding the approval authority for changes",
            "C. Automating the change process",
            "D. Creating change models"
        ],
        "correctAnswer": "A. Assigning resources to changes"
    },
    {
        "question": "Which dimension of service management considers the workflows and controls needed to deliver services?",
        "options": [
            "A. Organization and people",
            "B. Information and technology",
            "C. Partners and suppliers",
            "D. Value streams and processes"
        ],
        "correctAnswer": "B. Information and technology"
    },
    {
        "question": "Which guiding principle considers how the steps of a process can be performed as efficiently as possible?",
        "options": [
            "A. Start where you are",
            "B. Focus on value",
            "C. Think and work holistically",
            "D. Optimize and automate"
        ],
        "correctAnswer": "D. Optimize and automate"
    },
    {
        "question": "Which statement about the 'incident management' practice is CORRECT?",
        "options": [
            "A. It identifies the cause of major incidents.",
            "B. It authorizes changes to resolve incidents.",
            "C. It maintains detailed procedures for diagnosing incidents.",
            "D. It resolves the highest impact incidents first."
        ],
        "correctAnswer": "D. It resolves the highest impact incidents first."
    },
    {
        "question": "How should an organization prioritize incidents?",
        "options": [
            "A. Ask the user for their preferred resolution timeframe.",
            "B. Assess the availability of the appropriate support team.",
            "C. Use an agreed classification which is based on the business impact of the incident.",
            "D. Create an order of incidents based on the dates and times when they were logged."
        ],
        "correctAnswer": "C. Use an agreed classification which is based on the business impact of the incident."
    },
    {
        "question": "Which is a purpose of the 'relationship management' practice?",
        "options": [
            "A. To systematically observe services and service components",
            "B. To protect the information needed by the organization to conduct its business",
            "C. To be the entry point and single point of contact for the service provider with all of its users",
            "D. To identify, analyze, monitor, and continually improve links with stakeholders"
        ],
        "correctAnswer": "D. To identify, analyze, monitor, and continually improve links with stakeholders"
    },
    {
        "question": "Which statement about problems is CORRECT?",
        "options": [
            "A. Problems are not related to incidents.",
            "B. Problems must be resolved quickly in order to restore normal business activity.",
            "C. Problem analysis should focus on one of the four dimensions to achieve a fast diagnosis.",
            "D. Problem prioritization involves risk assessment."
        ],
        "correctAnswer": "B. Problems must be resolved quickly in order to restore normal business activity."
    },
    {
        "question": "Which is a risk that might be removed from a service consumer by an IT service?",
        "options": [
            "A. Service provider ceasing to trade",
            "B. Security breach",
            "C. Failure of server hardware",
            "D. Cost of purchasing servers"
        ],
        "correctAnswer": "C. Failure of server hardware"
    },
    {
        "question": "Which is one of the MAIN concerns of the 'design and transition' value chain activity?",
        "options": [
            "A. Understanding the organization's vision",
            "B. Understanding stakeholder needs",
            "C. Meeting stakeholder expectations",
            "D. Ensuring service components are available"
        ],
        "correctAnswer": "D. Ensuring service components are available"
    },
    {
        "question": "Which is a result of applying the guiding principle 'progress iteratively with feedback'?",
        "options": [
            "A. The ability to discover and respond to failure earlier",
            "B. Standardization of practices and services",
            "C. Understanding the customer's perception of value",
            "D. Understanding the current state and identifying what can be reused"
        ],
        "correctAnswer": "C. Understanding the customer's perception of value"
    },
    {
        "question": "Which practice is responsible for moving new or changed components to live or other environments?",
        "options": [
            "A. Release management",
            "B. Deployment management",
            "C. Change enablement",
            "D. Supplier management"
        ],
        "correctAnswer": "B. Deployment management"
    },
    {
        "question": "Which should be handled by 'service request management'?",
        "options": [
            "A. A request to implement a security patch",
            "B. A request to provide a laptop",
            "C. A request to resolve an error in a service",
            "D. A request to change a target in a service level agreement"
        ],
        "correctAnswer": "A. A request to implement a security patch"
    },
    {
        "question": "What can help to reduce resistance to a planned improvement when applying the guiding principle 'collaborate and promote visibility'?",
        "options": [
            "A. Restricting information about the improvement to essential stakeholders only.",
            "B. Increasing collaboration and visibility for the improvement.",
            "C. Involving customers after all planning has been completed.",
            "D. Engaging every stakeholder group in the same way, with the same communication."
        ],
        "correctAnswer": "B. Increasing collaboration and visibility for the improvement."
    },
    {
        "question": "What can be described as an operating model for the creating and management of products and services?",
        "options": [
            "A. Governance",
            "B. Service value chain",
            "C. Guiding principles",
            "D. Practices"
        ],
        "correctAnswer": "B. Service value chain"
    },
    {
        "question": "What is a definition of a problem?",
        "options": [
            "A. An unplanned interruption to a service, or reduction in the quality of a service",
            "B. A cause, or potential cause, of one or more incidents",
            "C. An incident for which a full resolution is not yet available",
            "D. Any change of state that has significance for the management of a configuration item (CI)"
        ],
        "correctAnswer": "B. A cause, or potential cause, of one or more incidents"
    },
    {
        "question": "Which action is performed by a service provider?",
        "options": [
            "A. Requesting required service actions",
            "B. Authorizing budget for service consumption",
            "C. Ensuring access to agreed resources",
            "D. Receiving of the agreed goods"
        ],
        "correctAnswer": "A. Requesting required service actions"
    },
    {
        "question": "Which statement about 'continual improvement' is CORRECT?",
        "options": [
            "A. All improvement ideas should be logged in a single 'continual improvement register'",
            "B. A single team should carry out 'continual improvement' across the organization",
            "C. 'Continual improvement' should have minimal interaction with other practices",
            "D. Everyone in the organization is responsible for some aspects of 'continual improvement'"
        ],
        "correctAnswer": "D. Everyone in the organization is responsible for some aspects of 'continual improvement'"
    },
    {
        "question": "Which step of the continual improvement model includes baseline assessments?",
        "options": [
            "A. Did we get there?",
            "B. Where are we now?",
            "C. What is the vision?",
            "D. Where do we want to be?",
        ],
        "correctAnswer": "B. Where are we now?"
    },
    {
        "question": "Which describes a 'change authority'?",
        "options": [
            "A. A model used to determine who will assess a change",
            "B. A person who approves a change",
            "C. A tool used to help changes",
            "D. A way to manage the people aspects of change"
        ],
        "correctAnswer": "B. A person who approves a change"
    },
    {
        "question": "Which is NOT a component of the service value system?",
        "options": [
            "A. The service value chain",
            "B. Opportunity and demand",
            "C. Continual improvement",
            "D. Governance"
        ],
        "correctAnswer": "B. Opportunity and demand"
    },
    {
        "question": "Which practice has a strong influence on the user experience and perception of the service provider?",
        "options": [
            "A. Service desk",
            "B. Change enablement",
            "C. Service level management",
            "D. Supplier management"
        ],
        "correctAnswer": "A. Service desk"
    },
    {
        "question": "Which statement about service relationship management is CORRECT?",
        "options": [
            "A. It focuses on the service actions performed by users",
            "B. It requires the service consumer to create resources for the service provider",
            "C. It requires co-operation of both the service provider and service consumer",
            "D. It focuses on the fulfilment of the agreed service actions",
        ],
        "correctAnswer": "C. It requires co-operation of both the service provider and service consumer"
    },
    {
        "question": "What is the MOST important reason for prioritizing incidents?",
        "options": [
            "A. To ensure that user expectations are realistic",
            "B. To ensure that incidents with highest impact are resolved first",
            "C. To help information-sharing are learning",
            "D. To provide links to related changes and known errors"
        ],
        "correctAnswer": "B. To ensure that incidents with highest impact are resolved first"
    },
    {
        "question": "Which 'service level management' activity helps staff to deliver a more business-focused service?",
        "options": [
            "A. Creating targets based on the percentage of uptime of a service",
            "B. Understanding the ongoing requirements of customers",
            "C. Using complex technical terminology in service level agreements (SLAs)",
            "D. Measuring low-level operational activities"
        ],
        "correctAnswer": "B. Understanding the ongoing requirements of customers"
    },
    {
        "question": "Which practice has a purpose that includes the handling of pre-defined, user-initiated demands for service?",
        "options": [
            "A. Service request management",
            "B. Service configuration management",
            "C. Deployment management",
            "D. Change enablement"
        ],
        "correctAnswer": "A. Service request management"
    },
    {
        "question": "Which guiding principle considers which parts of an existing process should be kept by identifying how they contribute to value creation?",
        "options": [
            "A. Progress iteratively with feedback",
            "B. Collaborate and promote visibility",
            "C. Think and work holistically",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "D. Keep it simple and practical"
    },
    {
        "question": "What is the purpose of the 'monitoring and event management' practice?",
        "options": [
            "A. To restore normal service operation as quickly as possible",
            "B. To manage workarounds and known errors",
            "C. To capture demand for incident resolution and service requests",
            "D. To systematically observe services and service components"
        ],
        "correctAnswer": "D. To systematically observe services and service components"
    },
    {
        "question": "Which statement about outcome is CORRECT?",
        "options": [
            "A. Outcomes rely on outputs to deliver results for a stakeholder",
            "B. Outcomes use activities to produce tangible or intangible deliverables",
            "C. Outcomes give service consumers assurance of products or services",
            "D. Outcomes help a service consumer to assess the cost of a specific activity"
        ],
        "correctAnswer": "A. Outcomes rely on outputs to deliver results for a stakeholder"
    },
    {
        "question": "Which skill is required by the 'service level management' practice?",
        "options": [
            "A. Supplier management",
            "B. Technical expertise",
            "C. Event monitoring",
            "D. Problem management"
        ],
        "correctAnswer": "A. Supplier management"
    },
    {
        "question": "Which statement about the 'continual improvement model' is CORRECT?",
        "options": [
            "A. Organizations should work through the steps of the model in the sequence in which they are presented",
            "B. The flow of the model helps organizations to link improvements to its goals",
            "C. The model is applicable to only certain parts of the service value system",
            "D. Organizations should use an additional model or method to link improvements to customer value"
        ],
        "correctAnswer": "A. Organizations should work through the steps of the model in the sequence in which they are presented"
    },
    {
        "question": "What is the definition of warranty?",
        "options": [
            "A. A means of identifying events that could cause harm or loss",
            "B. A means of determining whether a service is fit for purpose",
            "C. A means of identifying a result for a stakeholder",
            "D. A means of determining whether a service is fit for use"
        ],
        "correctAnswer": "D. A means of determining whether a service is fit for use"
    },
    {
        "question": "Which practice has a purpose that includes managing risks relating to confidentiality, integrity and availability?",
        "options": [
            "A. Information security management",
            "B. Change enablement",
            "C. Problem management",
            "D. Service configuration management"
        ],
        "correctAnswer": "A. Information security management"
    },
    {
        "question": "Which statement about value creating activities is CORRECT?",
        "options": [
            "A. Each value stream should be designed with a specific combination of service value chain activities",
            "B. Service value chain activities have pre-determined dependencies on ITIL practices",
            "C. A value stream is an operating model for creating value through products and services",
            "D. Organizations should ensure that each value stream is applicable to many scenarios"
        ],
        "correctAnswer": "A. Each value stream should be designed with a specific combination of service value chain activities"
    },
    {
        "question": "Which is provided by the 'engage' value chain activity?",
        "options": [
            "A. Ensuring that stakeholder expectations for quality are met",
            "B. Ensuring that stakeholder needs are understood by the organization",
            "C. Ensuring that service components are available when needed",
            "D. Ensuring that services are operated to meet agreed specifications"
        ],
        "correctAnswer": "B. Ensuring that stakeholder needs are understood by the organization"
    },
    {
        "question": "Which is part of the 'focus on value' guiding principle?",
        "options": [
            "A. Understanding what services help the service consumer",
            "B. Reducing the number of steps in the customer experience",
            "C. Assessing services to identify parts that can be reused",
            "D. Identifying activities that can be achieved in smaller iterations"
        ],
        "correctAnswer": "A. Understanding what services help the service consumer"
    },
    {
        "question": "Which is part of the definition of a customer?",
        "options": [
            "A. The role that defines the requirements for a service",
            "B. A means of enabling value co-creation",
            "C. The role that authorizes budget for service consumption",
            "D. A set of specialized organizational capabilities for enabling value"
        ],
        "correctAnswer": "A. The role that defines the requirements for a service"
    },
    {
        "question": "Which guiding principle helps an organization to understand the impact of an altered element on other elements in a system?",
        "options": [
            "A. Focus on value",
            "B. Start where you are",
            "C. Think and work holistically",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "C. Think and work holistically"
    },
    {
        "question": "Identify the missing words in the following sentence. The 'incident management' practice should maintain [?] for logging and managing incidents.",
        "options": [
            "A. a dedicated team",
            "B. a formal process",
            "C. detailed procedures",
            "D. a value chain activity"
        ],
        "correctAnswer": "B. a formal process"
    },
    {
        "question": "An organization asks a stakeholder to review a planned change. Which guiding principle does this demonstrate?",
        "options": [
            "A. Collaborate and promote visibility",
            "B. Start where you are",
            "C. Focus on value",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "A. Collaborate and promote visibility"
    },
    {
        "question": "What is the purpose of the 'deployment management' practice?",
        "options": [
            "A. To protect the information needed by the organization to conduct its business",
            "B. To make new and changed services and features available for use",
            "C. To move new or changed components to live environments",
            "D. To plan and manage the full lifecycle of all IT assets."
        ],
        "correctAnswer": "C. To move new or changed components to live environments"
    },
    {
        "question": "Which two statements about the guiding principles are CORRECT?",
        "options": [
            "1. The guiding principles support continual improvement",
            "2. Each guiding principle applies to a selection of the available stakeholder groups",
            "3. Organizations should decide which one of the guiding principles is relevant to them",
            "4. Organizations should consider how the guiding principles interact with each other",
            "A. 1 and 2",
            "B. 2 and 3",
            "C. 3 and 4",
            "D. 1 and 4"
        ],
        "correctAnswer": "D. 1 and 4"
    },
    {
        "question": "Which statement about change authorities is CORRECT?",
        "options": [
            "A. Change authorities are only required for authorizing emergency changes",
            "B. Change authorities are assigned when each change is deployed",
            "C. Change authorities are only required for authorizing normal changes",
            "D. Change authorities are assigned for each type of change and change model"
        ],
        "correctAnswer": "D. Change authorities are assigned for each type of change and change model"
    },
    {
        "question": "When is the earliest that a workaround can be documented in 'problem management'?",
        "options": [
            "A. After the problem has been logged",
            "B. After the problem has been prioritized",
            "C. After the problem has been analyzed",
            "D. After the problem has been resolved"
        ],
        "correctAnswer": "C. After the problem has been analyzed"
    },
    {
        "question": "Which is an activity of 'problem identification'?",
        "options": [
            "A. Analyzing information from software developers",
            "B. Establishing problem workarounds",
            "C. Analyzing the cause of problems",
            "D. Establishing potential permanent solutions"
        ],
        "correctAnswer": "A. Analyzing information from software developers"
    },
    {
        "question": "Which practice uses technologies such as intelligent telephony systems, a knowledge base and monitoring tools?",
        "options": [
            "A. Service configuration management",
            "B. Service desk",
            "C. Problem management",
            "D. Deployment management"
        ],
        "correctAnswer": "B. Service desk"
    },
    {
        "question": "Which statement about standard changes is CORRECT?",
        "options": [
            "A. A full assessment should be completed each time the change is implemented",
            "B. The change can be implemented with less testing if necessary",
            "C. The appropriate change authority should be assigned to each type of change",
            "D. The change does not require additional authorization"
        ],
        "correctAnswer": "D. The change does not require additional authorization"
    },
    {
        "question": "Which two are considered part of the 'organizations and people' dimension of service management?",
        "options": [
            "1. Systems of authority",
            "2. Culture",
            "3. Relationships between organizations",
            "4. Workflows",
            "A. 1 and 2",
            "B. 2 and 3",
            "C. 3 and 4",
            "D. 1 and 4"
        ],
        "correctAnswer": "A. 1 and 2"
    },
    {
        "question": "Which statement about the 'service request management' practice is CORRECT?",
        "options": [
            "A. Service requests are fulfilled using simple workflows",
            "B. A new workflow is created for each type of request",
            "C. Additional approval is sometimes needed for restoration of service",
            "D. Financial authorization is sometimes required for service requests"
        ],
        "correctAnswer": "A. Service requests are fulfilled using simple workflows"
    },
    {
        "question": "What is a cause, or potential cause, of one or more incidents?",
        "options": [
            "A. A configuration item",
            "B. A workaround",
            "C. An incident",
            "D. A problem"
        ],
        "correctAnswer": "D. A problem"
    },
    {
        "question": "Which guiding principle says that it is not usually necessary to build something new?",
        "options": [
            "A. Focus on value",
            "B. Start where you are",
            "C. Progress iteratively with feedback",
            "D. Think and work holistically"
        ],
        "correctAnswer": "B. Start where you are"
    },
    {
        "question": "Which practice includes management of workarounds and known errors?",
        "options": [
            "A. Monitoring and event management",
            "B. Service configuration management",
            "C. Problem management",
            "D. Incident management"
        ],
        "correctAnswer": "C. Problem management"
    },
    {
        "question": "Which activity is part of the 'continual improvement' practice?",
        "options": [
            "A. Handling compliments and complaints from users to identify improvements",
            "B. Improving relationships with and between stakeholders",
            "C. Prioritizing and creating business cases for improvement initiatives",
            "D. Identifying the cause of unplanned interruptions to service"
        ],
        "correctAnswer": "C. Prioritizing and creating business cases for improvement initiatives"
    },
    {
        "question": "A service offering may include goods, access to resources, and service actions. Which is an example of a service action?",
        "options": [
            "A. A mobile phone enables a user to work remotely",
            "B. A password allows a user connect to a WiFi network.",
            "C. A license allows a user to install a software product",
            "D. A service desk agent provides support to a user"
        ],
        "correctAnswer": "D. A service desk agent provides support to a user"
    },
    {
        "question": "Identify the missing word in the following sentence. A service is a means of enabling value co-creation by facilitating [?] that customers want to achieve, without the customer having to manage specific costs and risks.",
        "options": [
            "A. utility",
            "B. warranty",
            "C. outcomes",
            "D. outputs"
        ],
        "correctAnswer": "C. outcomes"
    },
    {
        "question": "Which statement about a service value stream is CORRECT?",
        "options": [
            "A. It uses inputs and outputs prescribed by ITIL",
            "B. It is a service value chain activity",
            "C. It integrates practices for a specific scenario",
            "D. It provides an operating model for service providers"
        ],
        "correctAnswer": "C. It integrates practices for a specific scenario"
    },
    {
        "question": "What term is used to describe whether a service will meet availability, capacity and security requirements?",
        "options": [
            "A. Outcomes",
            "B. Value",
            "C. Utility",
            "D. Warranty"
        ],
        "correctAnswer": "D. Warranty"
    },
    {
        "question": "Which is a low risk change that has been pre-approved so that no additional authorization is needed?",
        "options": [
            "A. A standard change",
            "B. A change model",
            "C. An emergency change",
            "D. A normal change"
        ],
        "correctAnswer": "A. A standard change"
    },
    {
        "question": "Which describes the 'plan' value chain activity?",
        "options": [
            "A. It ensures a shared understanding of the current status and vision for all products and services across the organization",
            "B. It ensures that services are delivered and supported according to agreed specifications and stakeholders' expectations",
            "C. It ensures that service components are available when and where they are needed, and meet agreed specifications",
            "D. It ensures continual improvement of products, services, and practices across all value chain activities"
        ],
        "correctAnswer": "A. It ensures a shared understanding of the current status and vision for all products and services across the organization"
    },
    {
        "question": "Which practice has the purpose of ensuring that the organization's suppliers and their performance and managed appropriately to support the provision of seamless, quality products and services?",
        "options": [
            "A. Release management",
            "B. Supplier management",
            "C. Service management",
            "D. Relationship management"
        ],
        "correctAnswer": "B. Supplier management"
    },
    {
        "question": "Which includes governance, management practices, and continual improvement?",
        "options": [
            "A. The service value system",
            "B. The 'deliver and support' value chain activity",
            "C. The 'focus on value' guiding principle",
            "D. The 'value stream and processes' dimension"
        ],
        "correctAnswer": "A. The service value system"
    },
    {
        "question": "Which phase of problem management includes analysing incidents to look for patterns and trends?",
        "options": [
            "A. Problem identification",
            "B. Problem control",
            "C. Error control",
            "D. Post-implementation review"
        ],
        "correctAnswer": "A. Problem identification"
    },
    {
        "question": "Which statement about the 'optimize and automate' guiding principle is CORRECT?",
        "options": [
            "A. Activities should be automated before they are optimized",
            "B. Automation is best applied to non-standard tasks",
            "C. Technology eliminates the need for human intervention",
            "D. Automation frees human resources for more complex activities"
        ],
        "correctAnswer": "D. Automation frees human resources for more complex activities"
    },
    {
        "question": "What is defined as any financially valuable component that can contribute to the delivery of a service?",
        "options": [
            "A. Configuration item",
            "B. Product",
            "C. IT asset",
            "D. Event"
        ],
        "correctAnswer": "C. IT asset"
    },
    {
        "question": "Which dimension focuses on relationships with other organizations that are involved in the design development, deployment and delivery of services?",
        "options": [
            "A. Organizations and people",
            "B. Information and technology",
            "C. Partners and suppliers",
            "D. Value streams and processes"
        ],
        "correctAnswer": "C. Partners and suppliers"
    },
    {
        "question": "Which statement about service requests is CORRECT?",
        "options": [
            "A. Complex service requests should be dealt with as normal changes",
            "B. Service requests that require simple workflows should be dealt with as incidents",
            "C. Service requests require workflows that should use manual procedures and avoid automation",
            "D. Service requests are usually formalized using standard procedures for initiation, approval and fulfilment"
        ],
        "correctAnswer": "D. Service requests are usually formalized using standard procedures for initiation, approval and fulfilment"
    },
    {
        "question": "Which MOST helps an organization adapt ITIL concepts so that they apply to the organization's specific circumstances?",
        "options": [
            "A. Continual improvement",
            "B. Service value chain",
            "C. Practices",
            "D. Guiding principles"
        ],
        "correctAnswer": "A. Continual improvement"
    },
    {
        "question": "What is the MAIN benefit of 'problem management'?",
        "options": [
            "A. Restoring normal service as quickly as possible",
            "B. Reducing the number and impact of incidents",
            "C. Maximizing the number of successful changes",
            "D. Managing workarounds and known errors"
        ],
        "correctAnswer": "D. Managing workarounds and known errors"
    },
    {
        "question": "Which guiding principle discourages 'silo activity'?",
        "options": [
            "A. Focus on value",
            "B. Start where you are",
            "C. Collaborate and promote visibility",
            "D. Keep it simple and practical"
        ],
        "correctAnswer": "C. Collaborate and promote visibility"
    },
    {
        "question": "Which will help solve incidents more quickly?",
        "options": [
            "A. Target resolution times",
            "B. Escalating all incidents to support teams",
            "C. Collaboration between teams",
            "D. Detailed procedural steps for incident investigation"
        ],
        "correctAnswer": "C. Collaboration between teams"
    },
    {
        "question": "What varies in size and complexity, and uses functions to achieve its objectives?",
        "options": [
            "A. A risk",
            "B. An organization",
            "C. A practice",
            "D. An outcome"
        ],
        "correctAnswer": "B. An organization"
    },
    {
        "question": "Which practice facilitates operational communication between the service provider organization and users in the service consumer organization?",
        "options": [
            "A. Service level management",
            "B. Relationship management",
            "C. Service desk",
            "D. Monitoring and event management"
        ],
        "correctAnswer": "C. Service desk"
    },
    {
        "question": "Which dimension considers the application of artificial intelligence to service management?",
        "options": [
            "A. Organizations and people",
            "B. Information and technology",
            "C. Partners and suppliers",
            "D. Value streams and processes"
        ],
        "correctAnswer": "B. Information and technology"
    },
    {
        "question": "Which type of change is MOST LIKELY to be initiated as part of the 'service request management' practice?",
        "options": [
            "A. A normal change",
            "B. An emergency change",
            "C. A standard change",
            "D. A change model"
        ],
        "correctAnswer": "C. A standard change"
    }
];

if (hmq > questions.length) {
    hmq = 280
}
if ((firstQuestion + hmq) > questions.length) {
    firstQuestion = questions.length - hmq
}

let currentQuestionIndex = firstQuestion
let lastQuestions = firstQuestion + hmq;
let correctAnswersCount = 0;

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result-container");
  const retryButton = document.getElementById("retry-button");
  const progressBar = document.getElementById("progress-bar");

  questionContainer.style.display = "block";
  optionsContainer.innerHTML = "";
  resultContainer.innerHTML = "";
  retryButton.style.display = "none";

  if (currentQuestionIndex >= lastQuestions) {
    questionContainer.style.display = "none";
    if (((correctAnswersCount / (lastQuestions - firstQuestion)) * 100) > 65) {
        resultContainer.innerHTML = `Hai superato l'esame! Risposte corrette: ${correctAnswersCount}/${(lastQuestions-firstQuestion)} (${(correctAnswersCount / (lastQuestions - firstQuestion)) * 100}%)`;
    }
    else {
        resultContainer.innerHTML = `Non hai superato l'esame! Risposte corrette: ${correctAnswersCount}/${(lastQuestions-firstQuestion)} (${(correctAnswersCount / (lastQuestions - firstQuestion)) * 100}%) per superare l'esame serve il 65% di risposte corrette`;
    }
    retryButton.style.display = "block";
    progressBar.style.width = "100%";
    return;
  }

  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;

  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement("div");
    option.className = "option";
    option.textContent = question.options[i];
    option.addEventListener("click", () => checkAnswer(option, question.correctAnswer));
    optionsContainer.appendChild(option);
  }

  console.clear()
  console.log("id domanda:", currentQuestionIndex + 1)
  console.log("domanda:", currentQuestionIndex - firstQuestion + 1, "/", lastQuestions - firstQuestion)


  progressBar.style.width = `${((currentQuestionIndex - firstQuestion + 1) / (lastQuestions - firstQuestion)) * 100}%`;
}

function checkAnswer(option, correctAnswer) {
  const resultContainer = document.getElementById("result-container");
  option.classList.add("incorrect-answer");
  const optionsContainer = document.getElementById("options-container");
  const c_option = optionsContainer.getElementsByClassName("option");
  for (let i = 0; i < c_option.length; i++) {
    if (c_option[i].textContent === correctAnswer) {
      c_option[i].classList.add("correct-answer");
    }
  }

  if (option.textContent === correctAnswer) {
    resultContainer.classList.add("correct");
    option.classList.remove("incorrect-answer");
    option.classList.add("correct-answer");
    //resultContainer.textContent = "Risposta corretta!";
    correctAnswersCount++;
  } else {
    resultContainer.classList.add("incorrect");
    //resultContainer.textContent = `Risposta errata! La risposta corretta era: ${correctAnswer}`;
    setTimeout(resetQuestion, 10000);
    currentQuestionIndex++;
    return;
  }

  currentQuestionIndex++;
  setTimeout(resetQuestion, 500);
}

function resetQuestion() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.textContent = "";
  resultContainer.classList.remove("correct", "incorrect");
  showQuestion();
}

function retryQuiz() {
  currentQuestionIndex = firstQuestion
  lastQuestions = firstQuestion + hmq;
  correctAnswersCount = 0;
  showQuestion();
}

showQuestion();
document.getElementById("retry-button").addEventListener("click", retryQuiz);
