import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) =>{

    const [user, setUser] = useState(
        [
            {
                id:1,
                name:"Gagan Kapoor",
                age:39,
                city:"Faridabad",
                state:"Haryana",
                address: "HNO 321, Sector-48, Near Badkhal Lake, NIT Faridabad",
                phone:"9811732145"
            },
            {
                id:2,
                name:"Radha Kapoor",
                age:34,
                city:"Faridabad",
                state:"Haryana",
                address: "HNO 321, Sector-48, Near Badkhal Lake, NIT Faridabad",
                phone:"7827463866"
            },
            {
                id:3,
                name:"Garvi Kapoor",
                age:3,
                city:"Faridabad",
                state:"Haryana",
                address: "HNO 321, Sector-48, Near Badkhal Lake, NIT Faridabad",
                phone:"7827463866"
            },
            {
                id:4,
                name:"Love Anand",
                age:37,
                city:"Delhi",
                state:"Delhi",
                address:"1/9055, Gali No 2,West Rohtash nagar, Shahdara",
                phone:"8989898989"
            }
        ]
    );

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;