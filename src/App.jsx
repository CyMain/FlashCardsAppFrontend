import { useState } from 'react'
import './App.css'

// Auth Components
const Login = ( 
  {setRegistering}
  
)=>{
  console.log("logging in...")
  console.log(setRegistering)
  return(
    <>
      <form action="">
        <label htmlFor="">
          Username:
          <input type="text"/>
        </label>
        <label htmlFor="">
          Password:
          <input type="text"/>
        </label>
        <button type="submit">Login</button>
      </form>
      <button type="button" id='change-auth-btn' onClick={setRegistering}>Register Instead</button>
    </>
  )
}

const Register = (
  {setRegistering}
) => {
  console.log("registering...")
  console.log(setRegistering)
  return(
    <>
      <form action="">
        <label htmlFor="">
          Username:
          <input type="text" />
        </label>
        <label htmlFor="">
          Password:
          <input type="text" />
        </label>
        <label htmlFor="">
          Confirm Password:
          <input type="text" />
        </label>
        <button type="submit">Register</button>
      </form>
      <button type="button" id='change-auth-btn' onClick={setRegistering}>Login Instead</button>
    </>
  )
}

const AuthPage = (
  
) => {
  const [isRegistering, setIsRegistering] = useState(true)
  return(
    <>
      <div className="div screen-fill login-screen">
        <h1>FlashCards!</h1>
        <div className="container">
          {
            isRegistering ?
            <Register setRegistering={()=>{setIsRegistering(false)}}/>
            :
            <Login setRegistering={()=>{setIsRegistering(true)}}/>
          }
        </div>
      </div>
    </>
  )
}

// Main Components
function App() {
  const [signedIn, setSignedIn] = useState(true)
  const [username, setUsername] = useState("User")
  console.log(signedIn)
  return (
    <>
      <main>
        <div className="screen-fill">
            {
              signedIn===false ?
                  (<AuthPage/>)
                :
                  (
                    <MainApp username = {username}/>
                  )
            }
          </div>
      </main>
    </>
  )
}

const MainApp = (
  {username}
) =>{

  return(
    <>
      <div className="screen-fill main-screen">
        <h1 className='screen-title'>Greetings, {username}!</h1>
        <div className="container">
          <div className="buttons-group">
            <button>View Cards</button>
            <button>Quiz Me!</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
