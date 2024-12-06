import React, { Fragment } from 'react'
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const QuestionDetail = () => {
const navigate = useNavigate();
  return (
    <Fragment>
<button onClick={()=> navigate('/results')}>See results</button>
<QRCode value="https://www.example.com" />  

    </Fragment>)
};

export default QuestionDetail

