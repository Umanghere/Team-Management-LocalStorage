import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null) 
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser', "")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)      
    }    
  }, [])
  
  const handleLogin =(email, password)=>{
    if(email == "admin@gmail.com" && password == "12"){
      setUser("admin")
      console.log("This is Admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee =userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        console.log("this is USER");
        localStorage.setItem("loggedInUser", JSON.stringify({role:'employee', data: employee}))
      }
    }
    else{
      console.log("INVALID CREDENTIALS"); 
    }    
  }  


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin"? <AdminDashboard changeUser={setUser} /> : (user == "employee"? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null ) }
    </>
  )
}

export default App
