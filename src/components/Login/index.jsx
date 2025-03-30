import React, { useContext, useState } from 'react';
import './style.scss';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const {userEmail, userPassword} = useContext(AuthContext);
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit =(e) =>{
        e?.preventDefault();
        if(userEmail === userName && userPassword === password){
            localStorage.setItem('loggedInUser', userEmail);
            setMessage('User Successfully logged in');
            setTimeout(()=>{
                navigate('/users');
            },2000);
            
        }else{
            setMessage('Invalid Credentials');
            navigate('/');
        }
        setUserName("");
        setPassword("");
    }

    return(
        <div className="login_section">
            <div className='form_section'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label>User Name:</label>
                        <input type="text" placeholder='Enter user name' value={userName} onChange={(e)=> setUserName(e?.target?.value)}/>
                    </div>
                    <div className='field'>
                        <label>Password:</label>
                        <input type="password" placeholder='Enter password' value={password} onChange={(e)=> setPassword(e?.target?.value)}/>
                    </div>
                    <button>Submit</button>
                    {message && <div className='message'>{message}</div>}
                </form>
            </div>
        </div>
    )
}

export default Login;