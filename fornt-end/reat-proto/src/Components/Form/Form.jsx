import React from 'react'
import { useState } from 'react';
import "./Form.css"
import axios from 'axios';
  const Form = () => {
    // Define state variables for dropdown values
    const [gender, setGender] = useState('male');
    const [ever_married, setEverMarried] = useState('yes');
    const [work_type, setWorkType] = useState('private');
    const [smokingStatus, setSmokingStatus] = useState('formerly_smoked');
    const [residence_type, setResidenceType] = useState('urban');
    const [hypertension, setHypertension] = useState(false); 
    const [heart_disease, setheart_disease] = useState(false); 
    const [age, setAge] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [avg_gluc_lvl, setAvgGlucLvl] = useState(null);

    const [dtPrediction, setDtPrediction] = useState(500);
    const [nbPrediction, setNbPrediction] = useState(null);
    const [rfPrediction, setRfPrediction] = useState(null);
    const [svcPrediction, setSvcPrediction] = useState(null);
    const [knnPrediction, setKnnPrediction] = useState(null);
    const [logisticPrediction, setLogisticPrediction] = useState(null);
    const v1 = 0
    const v2 = 0
    const v3 = 0
    const v4 = 0
    const v5 = 0
    const v = 0
    // };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        //--
        const genderValue = gender === 'male' ? 0 : 1;
        console.log(gender)
    const everMarriedValue = ever_married === 'yes' ? 0 : 1;
    const workTypeValue =
      work_type === 'private'
        ? 0
        : work_type === 'self-employed'
        ? 1
        : work_type === 'govt_job'
        ? 2
        : work_type === 'children'
        ? 3
        : 4; // Assuming 'Never_worked' corresponds to the '4' value
    const smokingStatusValue =
      smokingStatus === 'formerly_smoked'
        ? 0
        : smokingStatus === 'never_smoked'
        ? 1
        : smokingStatus === 'smokes'
        ? 2
        : 3; // Assuming 'Unknown' corresponds to the '3' value
    const residenceTypeValue = residence_type === 'urban' ? 0 : 1;
    const hypertensionValue = hypertension ? 1 : 0;
    const heart_diseaseValue = heart_disease ? 1 : 0;
        //--
        const data = {
          gender: genderValue,
          hypertension:hypertensionValue,
          heart_disease:heart_diseaseValue,
          age:parseInt(age),
          ever_married: everMarriedValue,
          work_type: workTypeValue,
          residence_type: residenceTypeValue,
          avg_gluc_lvl: parseInt(avg_gluc_lvl),
          bmi:parseInt(bmi),
          smoking: smokingStatusValue,
          
        };
        console.log(data)
        

        // gender: genderValue,
        // hypertension: hypertensionValue,
        // heart_disease:0,
        // age:age,
        // ever_married: everMarriedValue,
        // work_type: workTypeValue,
        // residence_type: residenceTypeValue,
        // avg_gluc_lvl: avg_gluc_lvl,
        // bmi:bmi,
        // smoking: smokingStatusValue,
        //--
        // gender: 1,
        // hypertension: 1,
        // heart_disease:0,
        // age:80,
        // ever_married: 0,
        // work_type: 0,
        // residence_type: 0,
        // avg_gluc_lvl: 83.75,
        // bmi:27.220833,
        // smoking: 1,
        
  
        // Send POST requests to each view separately
        const dtResponse = await axios.post('http://127.0.0.1:8000/prediction/dt_prediction/', data);
        const nbResponse = await axios.post('http://127.0.0.1:8000/prediction/nb_prediction/', data);
        const rfResponse = await axios.post('http://127.0.0.1:8000/prediction/rf_prediction/', data);
        const svcResponse = await axios.post('http://127.0.0.1:8000/prediction/svc_prediction/', data);
        const knnResponse = await axios.post('http://127.0.0.1:8000/prediction/knn_prediction/', data);
        const logisticResponse = await axios.post('http://127.0.0.1:8000/prediction/logistic_prediction/', data);
  
        // Set prediction outputs received from each view
        setDtPrediction(dtResponse.data.prediction);
        setNbPrediction(nbResponse.data.prediction);
        setRfPrediction(rfResponse.data.prediction);
        setSvcPrediction(svcResponse.data.prediction);
        setKnnPrediction(knnResponse.data.prediction);
        setLogisticPrediction(logisticResponse.data.prediction);
      } catch (error) {
        console.error('Error:', error);
      }
    };






  return (
    <div id="form" className='form'>
      <h1>The Prediction Form</h1>
      <div className="left-section">
        <form onSubmit={handleSubmit}>
          <div className="dropdown">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="ever_married">Ever Married:</label>
            <select id="ever_married" value={ever_married} onChange={(e) => setEverMarried(e.target.value)}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="work_type">Work Type:</label>
            <select id="work_type" value={work_type} onChange={(e) => setWorkType(e.target.value)}>
              <option value="private">Private</option>
              <option value="self-employed">Self-Employed</option>
              <option value="govt_job">Government Job</option>
              <option value="children">Children</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="smoking_status">Smoking Status:</label>
            <select id="smoking_status" value={smokingStatus} onChange={(e) => setSmokingStatus(e.target.value)}>
              <option value="formerly_smoked">Formerly Smoked</option>
              <option value="never_smoked">Never Smoked</option>
              <option value="smokes">Smokes</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="hypertension">Hypertension:</label>
            <select id="hypertension" value={hypertension} onChange={(e) => setHypertension(e.target.value === 'true')}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="residence_type">Residence Type:</label>
            <select id="residence_type" value={residence_type} onChange={(e) => setResidenceType(e.target.value)}>
              <option value="urban">Urban</option>
              <option value="rural">Rural</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="heart_disease">heart_disease:</label>
            <select id="heart_disease" value={heart_disease} onChange={(e) => setheart_disease(e.target.value)}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <input className="input-field" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            <input className="input-field" type="number" value={bmi} onChange={(e) => setBmi(e.target.value)} placeholder="BMI" />
            <input className="input-field" type="number" value={avg_gluc_lvl} onChange={(e) => setAvgGlucLvl(e.target.value)} placeholder="Average Glucose Level" />
          <button type="submit">Predict</button>
        </form>
        <div className="right-section">
        <h2>Prediction Outputs </h2>
        <div>
          {/* Prediction output labels for each algorithm */}
          <p>DT Prediction: {dtPrediction}</p>
          <p>NB Prediction: {nbPrediction}</p>
          <p>RF Prediction: {rfPrediction}</p>
          <p>SVC Prediction: {svcPrediction}</p>
          <p>KNN Prediction: {knnPrediction}</p>
          <p>Logistic Regression Prediction: {logisticPrediction}</p>
       
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form


//   {
      //     "gender": "0",
      //     "hypertension": "0",
      //     "age": "10",
      //     "ever_married": "0",
      //     "work_type": "0",
      //     "residence_type": "0",
      //     "avg_gluc_lvl": "10",
      //     "bmi": "10",
      //     "smoking": "0",
      // "heart_disease":"0"
      // }




















// const data = {
  //   gender,
  //   hypertension,
  //   age,
  //   everMarried,
  //   workType,
  //   residenceType,
  //   avg_gluc_lvl: avgGlucLvl ,
  //   bmi,         
  //   smokingStatus 
  //   // Adjust the key to match the API's expected format
  // }
  // const data = {
  //   gender: genderValue,
  //   hypertension: hypertensionValue,
  //   age:age,
  //   everMarried: everMarriedValue,
  //   workType: workTypeValue,
  //   residenceType: residenceTypeValue,
  //   avg_gluc_lvl: avgGlucLvl,
  //   bmi:bmi,
  //   smokingStatus: smokingStatusValue,
  // };

  // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement your logic for handling form submission (e.g., sending data to backend)
  //   console.log('Form submitted!');
  //   setDtPrediction(null);
  //   setNbPrediction(null);
  //   setRfPrediction(null);
  //   setSvcPrediction(null);
  //   setKnnPrediction(null);
  //   setLogisticPrediction(null);


    
  //     // Construct data object with user inpu