// Set some mock date variables to  use for the tasks based on today's date.
let mock_date = new Date();
mock_date.setDate(mock_date.getDate() + 7);
const mock_in_30_date = mock_date.toISOString().split('T')[0];
mock_date.setDate(mock_date.getDate() + 30);
const mock_after_30_date = mock_date.toISOString().split('T')[0];
mock_date.setDate(mock_date.getDate() + 30);
const mock_after_60_date = mock_date.toISOString().split('T')[0];
mock_date.setDate(mock_date.getDate() + 30);
const mock_after_90_date = mock_date.toISOString().split('T')[0];

export default [
  {
    "category": "Health",
    "description": "Health - Funtioning Well Physically, Mentally, Socially and Spiritually",
    "tasks": [
      {
        "name": "Sign the necessary consents with your release",
        "description": "Sign the necessary consents with your release description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Find Civilian Health Professionals",
        "description": "Find Civilian Health Professionals description.",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Confirm VAC coverage",
        "description": "Prepare a list of medication/ health treatment services and communicate with Medavie Blue Cross to confirm VAC coverage.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Complete medical examination",
        "description": "Complete medical examination description.",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Obtain a copy of your medical examination",
        "description": "Obtain a copy of your medical examination description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Request a copy of your medical file and a doctor’s package",
        "description": "Request a copy of your medical file and a doctor’s package description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Request a copy of your dental file",
        "description": "Request a copy of your dental file description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Apply for a provincial health care card",
        "description": "Apply for a provincial health care card description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Ensure to obtain health and dental benefit plans for yourself and family",
        "description": "Ensure to obtain health and dental benefit plans for yourself and family description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Acquire Gym membership and continue DFit program",
        "description": "Acquire Gym membership and continue DFit program description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      }
    ]
  },
  {
    "category": "Finances",
    "description": "Finances - Financially Secure",  
    "tasks": [
      {
        "name": "Check your pension forecast and release benefits",
        "description": "Check your pension forecast and release benefits description",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Develop a financial plan for after release",
        "description": "Develop a financial plan for after release description",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Fill out personal and banking profile in My VAC Account",
        "description": "Fill out personal and banking profile in My VAC Account description",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Plan your pension road map",
        "description": "Plan your pension road map description",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Identify any outstanding CAF debts",
        "description": "Identify any outstanding CAF debts (CANEX, mess, etc.) and plan payment schedule description",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Confirm your life insurance requirements after release",
        "description": "Confirm your life insurance requirements after release description",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Apply for the Veterans discount CF One card",
        "description": "Apply for the Veterans discount CF One card description",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Complete the CPP and / or QPP form",
        "description": "Complete the CPP and / or QPP form description",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      }
    ]
  },
  {
    "category": "Employment or Other Meaningful Activity",
    "description": "Employment or Other Meaningful Activity - Engaged in Activities They Find Beneficial and Meaningful", 
    "tasks": [
      {
        "name": "Identify meaningful activities / hobbies",
        "description": "Identify meaningful activities / hobbies description",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      }
    ]
  },
  {
    "category": "Social Integration",
    "description": "Social Integration - In Mutualy Supportive Relationships and Engaged in Community", 
    "tasks": [
      {
        "name": "Exchange personal contact info with military peers",
        "description": "Consider exchanging personal contact info for military peers / connections you would like to stay in touch with.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Build your social contact network external to your military circles",
        "description": "Build your social contact network external to your military circles description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Join groups with similar beliefs, language, culture, etc.",
        "description": "Consider joining groups with similar beliefs, language, culture, etc. description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Build your online social media contact list",
        "description": "Build your online social media contact list (e.g., Facebook, Instagram, etc.) description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      }
    ]
  },
  {
    "category": "Housing and Physical Environment",
    "description": "Housing and Physical Environment - Living in Safe, Adequate, Affordable Housing", 
    "tasks": [
      {
        "name": "Ensure your contact information is current",
        "description": "Ensure your contact information is current (CAF, VAC, bank etc).",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      }
    ]
  },
  {
    "category": "Life Skills and Preparedness",
    "description": "Life Skills and Preparedness - Able to Adapt, Manage and Cope Within Civilian Life", 
    "tasks": [
      {
        "name": "Plan your release",
        "description": "Plan your release description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Create a My VAC account",
        "description": "Create a My VAC account description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Submit a request for release",
        "description": "Submit a request for release description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Attend a Long Term Planning Seminar",
        "description": "Attend a Long Term Planning Seminar description.",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Calculate leave to determine how to use your remaining leave",
        "description": "Calculate leave to determine how to use your remaining leave description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Plan your remaining leave days",
        "description": "Plan your remaining leave days description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Participate in your first CAF transition interview",
        "description": "Participate in your first CAF transition interview description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Maintain a file of all important documents and certificates for ready reference",
        "description": "Maintain a file of all important documents and certificates for ready reference description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "View online SCAN videos and/or attend local SCAN seminars",
        "description": "View online SCAN videos and/or attend local SCAN seminars description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Make an appointment with your orderly room of your unit to complete Out-Clearance",
        "description": "Make an appointment with your orderly room of your unit to complete Out-Clearance description.",
        "dueDate": mock_after_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Complete the Enhanced Transition Training through the DLN",
        "description": "Complete the Enhanced Transition Training through the DLN description.",
        "dueDate": mock_in_30_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Request your pension package thirty days prior to release",
        "description": "Request your pension package thirty days prior to release. Complete and send your pension package as soon as possible afterwards",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Participate in a VAC Transition Interview",
        "description": "Participate in a VAC Transition Interview description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Ask for a copy of your Personnel file",
        "description": "Ask for a copy of your Personnel file description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Complete an exit survey",
        "description": "Complete an exit survey description.",
        "dueDate": mock_after_60_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Confirm Receipt of your pension forms",
        "description": "Confirm Receipt of your pension forms description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Participate in your Final Release Interview",
        "description": "Participate in your Final Release Interview description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Plan and participate in your Depart with Dignity ceremony",
        "description": "Plan and participate in your Depart with Dignity ceremony description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Establish civilian wardrobe for work",
        "description": "Establish civilian wardrobe for work description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Meet with a notary or lawyer to draft a power of attorney",
        "description": "Meet with a notary or lawyer to draft a power of attorney description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Meet with a notary or lawyer to write a will",
        "description": "Meet with a notary or lawyer to write a will description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Maintain a healthy lifestyle plan",
        "description": "Maintain a healthy lifestyle plan (Personal Support Program) description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      },
      {
        "name": "Identify extenuating family circumstances",
        "description": "Identify extenuating family circumstances description.",
        "dueDate": mock_after_90_date,
        "taskStatus": "",
        "priority": "",
        "memberNotes": "",
        "advisorNotes": "",
        "attachedFiles": ""
      }
    ]
  }
]