// import { setLocalStorage } from '@/src/utils/localStorage'
import React, { useState } from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState("")

  // if(!data){
  //   setUsername("Admin Ji")
  // }else{
  //   setUsername(data.firstName)
  // }  

  const logOut =()=> {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload()
    props.changeUser("")
  }

  return (
    <div className='flex items-end justify-between text-white gap-4'>
        <h1 className='text-2xl font-medium' >Hello 
          <br /> 
        <span className='text-4xl font-semibold'>Admin 👋🏼</span></h1>
        
        <button onClick={logOut} className='bg-red-600 font-medium text-lg text-white px-5 py-2 rounded-md' >Log Out</button>
    </div>
  )
}

export default Header