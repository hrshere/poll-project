import React, { Fragment } from 'react'
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const QuestionDetail = () => {
const navigate = useNavigate();
const options = ['C++','Dart','Javascript','Python']
  return (
    <Fragment>
      <h3>Q.1 which programming language do you use mostly?</h3>
      <div>
        <ol style={{listStyleType: 'upper-alpha'}}>
          {options.map(option =>(<li>{option}</li>))}
        </ol>
      </div>
<button onClick={()=> navigate('/results')}>See results</button>
<QRCode value="https://www.example.com" />  

    </Fragment>)
};

export default QuestionDetail

