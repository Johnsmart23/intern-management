import React from 'react';

import './App.css';

const internsData = [
  {
    id: 1,
    name: 'VICTOR IDAM',
    picture: 'https://via.placeholder.com/150',
    info: 'Frontend Development',
    grading: 84,
  },
  {
    id: 1,
    name: 'VICTOR ANYAMA',
    picture: 'https://via.placeholder.com/150',
    info: 'Frontend Development',
    grading: 80,
  },
  {
    id: 1,
    name: 'SOMTOCHUKWU OZONNADI',
    picture: 'https://via.placeholder.com/150',
    info: 'Frontend Development',
    grading: 79,
  },
  {
    id: 1,
    name: 'NZEH FAVOUR',
    picture: 'https://via.placeholder.com/150',
    info: 'Frontend Development',
    grading: 79,
  },
  {
    id: 1,
    name: 'BOMA-GIFT OBOMANU',
    picture: 'https://via.placeholder.com/150',
    info: 'Frontend Development',
    grading: 79,
  },
  {
    id: 2,
    name: 'CALLISTUS OBIORAH',
    picture: 'https://via.placeholder.com/150',
    info: 'Backend Development',
    grading: 85,
  },
  {
    id: 2,
    name: 'OZIOMA EGOLE',
    picture: 'https://via.placeholder.com/150',
    info: 'Backend Development',
    grading: 50,
  },
  {
    id: 2,
    name: 'DAVID NWATU',
    picture: 'https://via.placeholder.com/150',
    info: 'Backend Development',
    grading: 70,
  },
  {
    id: 2,
    name: 'EXCEL NGWUTA',
    picture: 'https://via.placeholder.com/150',
    info: 'Backend Development',
    grading: 67,
  },
  {
    id: 2,
    name: 'JOHNSON ILOABUCHI',
    picture: 'https://via.placeholder.com/150',
    info: 'Backend Development',
    grading: 85,
  },
  {
    id: 3,
    name: 'VICTORY ERIKUME',
    picture: 'https://via.placeholder.com/150',
    info: 'Product Design',
    grading: 79,
  },
  {
    id:3,
    name: 'KINGSLEY IKE',
    picture: 'https://via.placeholder.com/150',
    info: 'Product Design',
    grading: 80,
  },
  {
    id:3,
    name: 'VICTOR EBENEZER',
    picture: 'https://via.placeholder.com/150',
    info: 'Product Design',
    grading: 69,
  },
  {
    id:3,
    name: 'PURITY UDEH',
    picture: 'https://via.placeholder.com/150',
    info: 'Product Design',
    grading: 66,
  },
  {
    id:3,
    name: 'JOSEPH UDEH',
    picture: 'https://via.placeholder.com/150',
    info: 'Product Design',
    grading: 65,
  },
  {
    id:3,
    name: 'TOCHUKWU ONYIA',
    picture: 'https://via.placeholder.com/150',
    info: 'Web3 Development',
    grading: 85,
  },
  {
    id:3,
    name: 'DANIEL OCHI',
    picture: 'https://via.placeholder.com/150',
    info: 'Web3 Development',
    grading: 78,
  },
  {
    id:3,
    name: 'KINGSLEY OKON',
    picture: 'https://via.placeholder.com/150',
    info: 'Web3 Development',
    grading: 59,
  },
  {
    id:3,
    name: 'PROGRESS NWANNA',
    picture: 'https://via.placeholder.com/150',
    info: 'Web3 Development',
    grading: 62,
  },
  {
    id:3,
    name: 'GEORGE PASCAL',
    picture: 'https://via.placeholder.com/150',
    info: 'Web3 Development',
    grading: 40,
  },

];

function App() {
  // Grouping interns by their info
  const groupedInterns = internsData.reduce((acc, intern) => {
    const key = intern.info;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(intern);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1 style={{ color: 'orange' }}>Learnable Intern Management System</h1>
      {Object.entries(groupedInterns).map(([info, interns]) => (
        <div key={info} className="interns-section">
          <h2 style={{ color: 'white' }}>{info}</h2>
          <div className="interns-container">
            {interns.map(intern => (
              <div className="intern-card" key={intern.id}>
                <img src={ require('./images/boma.jpeg')} alt=""/>
                <div>
                  <h3>{intern.name}</h3>
                  <p>{intern.info}</p>
                  <p>Grading: {intern.grading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
