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
  const [view, setView] = useState("folder");
  const currFolder = {};
  const currDeck = {};
  const currCard = {};

  return(
    <>
      {
        view === "main" ?
        (
          <div className="screen-fill main-screen">
            <h1 className='screen-title'>Greetings, {username}!</h1>
            <div className="container">
              <div className="buttons-group">
                <button>View Cards</button>
                <button>Quiz Me!</button>
              </div>
            </div>
          </div>
        ) : (
          view === "folder" ?
          (
            <div className="screen-fill sub-screen">
              <h1 className='sub-screen-title'>Greetings, {username}!</h1>
              <div className="sub-screen-container">
                <div className="nav-group">
                  <div className="dir-tracking">
                    Folder &gt; Deck &gt; Card &gt;
                  </div>
                  <div className="action-btns">
                    <button type="button">Quiz Me!</button>
                    <button type="button">Rename</button>
                    <button type="button">+</button>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          (
            ""
          )
        )
      }
    </>
  )
}

export default App
