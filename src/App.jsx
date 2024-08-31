import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCaseId, setSelectedCaseId] = useState(null);
  const [isCasesDropdownOpen, setIsCasesDropdownOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const judgeProfile = {
    name: 'Judge Rick Doe',
    gender: 'Male',
    age:59,
    education: [
      {
        degree: 'Bachelor of Laws (LLB)',
        institution: 'Harvard Law School',
        year: '2005',
      },
      {
        degree: 'Master of Laws (LLM)',
        institution: 'Yale Law School',
        year: '2007',
      },
      {
        degree: 'Doctor of Juridical Science (SJD)',
        institution: 'Stanford Law School',
        year: '2010',
      },
    ],
    mailId:'rick@gmail.com',
    experience: '35 years',
    court: 'High Court',
    casesHandled: 50,
    achievements: [
      {
        title: 'Distinguished Service Award',
        organization: 'National Judicial Academy',
        year: '2018',
        description: 'Awarded for outstanding contributions to judicial service and legal reforms.',
      },
      {
        title: 'Best Judge Award',
        organization: 'Legal Excellence Foundation',
        year: '2020',
        description: 'Recognized for exceptional judicial decisions and case management.',
      },
      {
        title: 'Lifetime Achievement Award',
        organization: 'Judicial Council',
        year: '2023',
        description: 'Honored for a lifetime of dedicated service and significant impact on the legal system.',
      },
    ],
  };

  const caseDetails = {
    case1: {
      noOfCharges: 2,
      charges: 'Section 378 - Theft, Section 323 - Assault',
      prisonerName: 'Robert Markon',
      advocateDetails: 'Jane Smith',
      courtDetails: 'Courtroom 1A',
      bailStatus: 'Denied',
      imprisonmentDuration: '5 years',
      periodServed: '2 years',
      nextHearing: '10th October 2024',
      riskAssessment:'Can temper evidence when given bail'
    },
    case2: {
      noOfCharges: 3,
      charges: 'Section 378 - Theft, Section 323 - Assault, Section 420 - Fraud',
      prisonerName: 'Mary Den',
      advocateDetails: 'Richard Roe',
      courtDetails: 'Courtroom 2B',
      bailStatus: 'Granted',
      imprisonmentDuration: '10 years',
      periodServed: '4 years',
      nextHearing: '15th November 2024',
      riskAssessment:'Chances for leaving country are more than 60%'
    },
    case3: {
      noOfCharges: 4,
      charges: 'Section 378 - Theft, Section 323 - Assault, Section 420 - Fraud, Section 392 - Robbery',
      prisonerName: 'Don Lee',
      advocateDetails: 'Emily Davis',
      courtDetails: 'Courtroom 2C',
      bailStatus: 'Granted',
      imprisonmentDuration: '7 years',
      periodServed: '3 years',
      nextHearing: '10th November 2024',
      riskAssessment:'at low risk'
    },
  };

  const handleCaseClick = (caseId) => {
    setSelectedCaseId(caseId);
    setShowProfile(false);
  };
  const toggleCasesDropdown = () => {
    setIsCasesDropdownOpen(!isCasesDropdownOpen);
  };
  const handleProfileClick = () => {
    setSelectedCaseId(null);
    setShowProfile(true);
  };

  const toggleCases = () => {
    setShowCases(!showCases);
  };

  const selectedCase = selectedCaseId ? caseDetails[selectedCaseId] : null;

  const chargeList = selectedCase ? selectedCase.charges.split(', ').map(charge => charge.trim()) : [];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <button onClick={handleProfileClick}>Profile</button>
        </div>
        <div className="cases">
          <button onClick={toggleCasesDropdown}>
            Cases {isCasesDropdownOpen ? '▲' : '▼'} 
          </button>
          {isCasesDropdownOpen && (
            <ul>
              <li><a href="#!" onClick={() => handleCaseClick('case1')}>Case 1</a></li>
              <li><a href="#!" onClick={() => handleCaseClick('case2')}>Case 2</a></li>
              <li><a href="#!" onClick={() => handleCaseClick('case3')}>Case 3</a></li>
            </ul>
          )}
        </div>
        <div className="logout">
          <button>Logout</button>
        </div>
      </div>
      <div className="main-content">
        <div className="case-details">
          {selectedCase ? (
            <>
              <h1>{`Case ${selectedCaseId.slice(-1)} Details`}</h1>
              <div className="case-box">
                <p><strong>No of charges:</strong> {selectedCase.noOfCharges}</p>
                <p><strong>Charges:</strong></p>
                <ul>
                  {chargeList.map((charge, index) => (
                    <li key={index}>{charge}</li>
                  ))}
                </ul>
                <p><strong>Prisoner Name:</strong> {selectedCase.prisonerName}</p>
                <p><strong>Advocate details:</strong> {selectedCase.advocateDetails}</p>
                <p><strong>Court details:</strong> {selectedCase.courtDetails}</p>
                <p><strong>Bail Assessment: </strong>
                  <a href="/bail-assessment.pdf" download="Bail_Assessment.pdf">
                    Download Bail Assessment PDF
                  </a></p>
                <p><strong>Bail status:</strong> {selectedCase.bailStatus}</p>
                <p><strong>Duration of imprisonment:</strong> {selectedCase.imprisonmentDuration}</p>
                <p><strong>Period served:</strong> {selectedCase.periodServed}</p>
                <p><strong>Report Generated by Model: </strong>
                  <a href="/bail-assessment.pdf" download="Bail_Assessment.pdf">
                    Download Report PDF
                  </a></p>
                <p><strong>Next hearing:</strong> {selectedCase.nextHearing}</p>
                <p><strong>Risk Assessment:</strong> {selectedCase.riskAssessment}</p>
              </div>
            </>
          ) : showProfile ? (
            <>
                <h1>Judge Profile</h1>
                <div className="profile-box">
                  <p><strong>Name:</strong> {judgeProfile.name}</p>
                  <p><strong>Gender:</strong> {judgeProfile.gender}</p>
                  <p><strong>Age:</strong> {judgeProfile.age}</p>
                  <p><strong>Experience:</strong> {judgeProfile.experience}</p>
                  <p><strong>Court:</strong> {judgeProfile.court}</p>
                  <p><strong>Cases Handled:</strong> {judgeProfile.casesHandled}</p>
                  <p><strong>Email:</strong> {judgeProfile.mailId}</p>
                  <p><strong>Education:</strong></p>
                  <ul>
                    {judgeProfile.education.map((edu, index) => (
                      <li key={index}>
                        <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
                      </li>
                    ))}
                  </ul>
                  <p><strong>Achievements:</strong></p>
                  <ul>
                    {judgeProfile.achievements.map((achievement, index) => (
                      <li key={index}>
                        <strong>{achievement.title}</strong> - {achievement.organization} ({achievement.year}): {achievement.description}
                      </li>
                    ))}
                  </ul>
                </div>
            </>
          ) : (
            <h1>Select a case or view profile</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
