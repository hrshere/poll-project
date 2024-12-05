// fun login - root component for login 

import { Fragment, useState } from "react";
import { userLogin } from "../../../services/loginService";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate(); // Initialize navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const  handleLogin = async () => {
let response = await userLogin({username: email,password: password});
if(response.status===200){
    response = await response.json();
    console.log(response);
    console.log(response.access);
    localStorage.setItem('token', response.access);
    navigate('/dashboard');
}
else{
    alert('Invalid creds');
}
    }

    return (
        <Fragment>
            <input placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" type="text" onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleLogin}>Submit</button>
        </Fragment>
    );
}