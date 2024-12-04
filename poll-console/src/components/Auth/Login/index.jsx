// fun login - root component for login 

import { Fragment, useState } from "react";
import { userLogin } from "../../../services/loginService";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const  handleLogin = async () => {
await userLogin({username: email,password: password});
    }

    return (
        <Fragment>
            <input placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" type="text" onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleLogin}>Submit</button>
        </Fragment>
    );
}