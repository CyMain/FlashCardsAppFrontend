import { useState } from 'react'
import './App.css'


// PopUp Components
const CardPopUp = () =>{
  return(
    <>
      <div className="card-pop-up">
        <div className="container" id='card-pop-up-container'>
          <div className="card-term-and-definition">
            <div className="card-term">Term</div>
            <div className="card-definition">
              Nothing to see here guys. I have no idea what "term" means.
            </div>
          </div>
          <div className="card-btn-group">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
            <button type="button">Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

// Screen Components
const SubScreen = ({message, children}) => {
  return (
    <>
      <div className="screen-fill sub-screen">
        <h1 className='sub-screen-title'>{message}</h1>
        <div className="sub-screen-container">
          {children}
        </div>
      </div>
    </>
  )
}

// Auth Components
const Login = ({setRegistering})=>{
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

const Register = ({setRegistering}) => {
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

const AuthPage = () => {
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

const FolderList = ({username}) => {
  return(
    <>
      <SubScreen message={`Greetings, ${username}!`}>
        <div className="nav-group">
          <div className="dir-tracking">
            Folder &gt; Deck &gt; Card
          </div>
          <div className="action-btns">
            <button type="button">Quiz Me!</button>
            <button type="button">Rename</button>
            <button type="button">+</button>
          </div>
        </div>
        <ul className="folders-list">
          <li className="folder">
            <div className="folder-name">Folder1</div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Rename</button>
            </div>
          </li>
          <li className="folder">
            <div className="folder-name">Folder1</div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Rename</button>
            </div>
          </li>
        </ul>
      </SubScreen>
    </>
  )
}

const DeckList = ({username})=>{
  return(
    <>
      <SubScreen message={`Greetings, ${username}`}>
        <div className="nav-group">
          <div className="dir-tracking">
            Folder &gt; Deck &gt; Card
          </div>
          <div className="action-btns">
            <button type="button">Quiz Me!</button>
            <button type="button">Rename</button>
            <button type="button">+</button>
          </div>
        </div>
        <ul className="folders-list">
          <li className="folder">
            <div className="folder-name">Tech</div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Rename</button>
            </div>
          </li>
          <li className="folder">
            <div className="folder-name">Cooking</div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Rename</button>
            </div>
          </li>
        </ul>
      </SubScreen>
    </>
  )
}

const CardsList = ({username})=>{
  return(
    <>
      <SubScreen message={`Greetings, ${username}`}>
        <div className="nav-group">
          <div className="dir-tracking">
            Folder &gt; Deck &gt; Card
          </div>
          <div className="action-btns">
            <button type="button">Quiz Me!</button>
            <button type="button">Rename</button>
            <button type="button">+</button>
          </div>
        </div>
        <ul className="folders-list">
          <li className="folder">
            <div className="folder-name">
              <div className="item-term">Term</div>
              <p className="item-definition">This refers to an item with meaning in a vocabulary.</p>
            </div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Edit</button>
            </div>
          </li>
          <li className="folder">
            <div className="folder-name">
              <div className="item-term">Term2</div>
              <p className="item-definition">This refers to the second item with meaning in a vocabulary.</p>
            </div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Edit</button>
            </div>
          </li>
          <li className="folder">
            <div className="folder-name">
              <div className="item-term">Term3</div>
              <p className="item-definition">This refers to the third item with meaning in a vocabulary.</p>
            </div>
            <div className="folder-actions">
              <button type="button">Quiz Me!</button>
              <button type="button">Delete</button>
              <button type="button">Edit</button>
            </div>
          </li>
        </ul>
      </SubScreen>
    </>
  )
}

const MainApp = (
  {username}
) =>{
  const [view, setView] = useState("quiz");
  const cardPopUp = false
  const currFolder = {};
  const currDeck = {};
  const currCard = {};

  return(
    <>
      {cardPopUp && <CardPopUp/>}
      {view === "main" &&
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
        )}

      {view === "folder"&&(
            <FolderList username={username}/>
          )}
      {
        view === "deck" && (
          <DeckList username={username}/>
        )}
      {
        view === "cards" && (
          <CardsList username={username}/>
        )}
      {
        view === "quiz" && (
          <QuizView/>
        )
      }
    </>
  )
}

const QuizView = () => {
  let num_rounds = 0
  return(
    <>
      <SubScreen message={`Quiz Time!`}>
        <div className="quiz-container">
          <label htmlFor="">How many questions would you like to be asked? <input type="number" placeholder='pick a number' className='num-rounds-input' min={1}/></label>
          <button type="button">Start Quiz!</button>
        </div>
        
      </SubScreen>
    </>
  )
}

export default App
