import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const Users = () =>{

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        let savedUser = localStorage.getItem('loggedInUser');
        if(savedUser){
            navigate('/users');
        }else{
            navigate('/');
        }
    },[localStorage])

    const handleLogout = () =>{
        localStorage.removeItem('loggedInUser');
        navigate('/');
    }

    return(
        <div className="user_section">
            <button onClick={handleLogout}>Logout</button>
            <div className='user_details'>
            <h2>User Details</h2>
            <div className="users_list">
                <table border={1} cellSpacing={0} cellPadding={10} width={'100%'} style={{borderColor:"#eee", textAlign:"center"}}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                    {
                        user?.map((item)=>{
                            return(
                                <tr>
                                    <td>{item?.id}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.age}</td>
                                    <td>{item?.city}</td>
                                    <td>{item?.state}</td>
                                    <td>{item?.address}</td>
                                    <td>{item?.phone}</td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
            </div>
        </div>
    )
}

export default Users;
