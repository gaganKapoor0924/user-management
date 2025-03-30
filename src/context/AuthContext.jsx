import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const [userEmail, setUserEmail] = useState('gagankapoor092485@gmail.com');
    const [userPassword, setUserPassword] = useState('gagan241985');

    return(
        <AuthContext.Provider value={{
            userEmail,
            setUserEmail,
            userPassword,
            setUserPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;