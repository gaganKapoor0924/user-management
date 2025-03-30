import React from 'react';
import './style.scss';

const Login = () =>{
    return(
        <div className="login_section">
            <div className='form_section'>
                <h2>Login</h2>
                <form>
                    <div className='field'>
                        <label>User Name:</label>
                        <input type="text" placeholder='Enter user name'/>
                    </div>
                    <div className='field'>
                        <label>Password:</label>
                        <input type="password" placeholder='Enter password'/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;