import React, {createContext,useState} from 'react'

export  const UserStateContext = createContext()

 function UserStateProvider(props) {
    const [userState,setUserState]=useState({
        isLoggedIn:false,
        username:'',
        name:'',
    })

    return (
        <UserStateContext.Provider value={[userState,setUserState]}>
            {props.children}
        </UserStateContext.Provider>
    )
}

export default UserStateContext
export {UserStateProvider}