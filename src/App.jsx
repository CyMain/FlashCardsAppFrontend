import React, { useState, useEffect, useRef } from 'react'; // [1] Added useEffect import
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
const Login = ({setRegistering, make_signed_in})=>{
  console.log("logging in...")
  console.log(setRegistering)
  const usernameInp = useRef()
  const passwordInp = useRef()
  function handleInputs(){
    //Validate Inputs
    if (usernameInp.current.value.length < 4){
      alert("Username must be at least 4 characters long.")
      return {
        data: {username: usernameInp.current.value, password: passwordInp.current.value},
        valid: false
      }
    }
    if(passwordInp.current.value.length < 6){
      alert("Password must be at least 6 characters long.")
      return {
        data: {username: usernameInp.current.value, password: passwordInp.current.value},
        valid: false
      }
    }
    return {
      data: {username: usernameInp.current.value, password: passwordInp.current.value},
      valid: true
    }
  }
  function handleSubmit(e){
    e.preventDefault()
    const inpStatus = handleInputs()
    console.log(inpStatus)
    if(inpStatus.valid){
      console.log("Checking Login Data:")
      alert("Login Successful!")
      console.log({inpdata: inpStatus.data})
      make_signed_in()
      //Check Login Data with Backend
    }else{
      console.log("Invalid Inputs. Not Submitting.")
    }
  }
  return(
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Username:
          <input type="text" ref={usernameInp}/>
        </label>
        <label htmlFor="">
          Password:
          <input type="password" ref={passwordInp}/>
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
  const usernameInp = useRef()
  const passwordInp = useRef()
  const confirmPasswordInp = useRef()
  function handleInputs(){
    //Validate Inputs
    if (usernameInp.current.value.length < 4){
      alert("Username must be at least 4 characters long.")
      return
    }
    if(passwordInp.current.value.length < 6){
      alert("Password must be at least 6 characters long.")
      return
    }
    if(passwordInp.current.value !== confirmPasswordInp.current.value){
      alert("Passwords do not match.")
      return
    }
    return {
      data: {username: usernameInp.current.value, password: passwordInp.current.value},
      valid: true
    }
  }
  function handleSubmit(e){
    e.preventDefault()
    const inpStatus = handleInputs()
    console.log(inpStatus)
    if(inpStatus.valid){
      console.log("Submitting Registration Data:")
      alert("Registration Successful!")
      console.log({inpdata: inpStatus.data})
      setRegistering()
      //Submit Registration Data to Backend
     }else{
      console.log("Invalid Inputs. Not Submitting.")
    }
    
  }
  return(
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Username:
          <input type="text" ref={usernameInp}/>
        </label>
        <label htmlFor="">
          Password:
          <input type="password" ref={passwordInp}/>
        </label>
        <label htmlFor="">
          Confirm Password:
          <input type="password" ref={confirmPasswordInp}/>
        </label>
        <button type="submit">Register</button>
      </form>
      <button type="button" id='change-auth-btn'>Login Instead</button>
    </>
  )
}

const AuthPage = ({make_signed_in}) => {
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
            <Login setRegistering={()=>{setIsRegistering(true)}} make_signed_in = {make_signed_in}/>
          }
        </div>
      </div>
    </>
  )
}

// Main Components
function App() {
  const [signedIn, _setSignedIn] = useState(false); // [2] Changed to _setSignedIn (underscore prefix to suppress unused warning)
  const [username, _setUsername] = useState("User"); // [3] Changed to _setUsername (underscore prefix to suppress unused warning)
  const userTemp = {
    username: "Guest",
    authToken: "blehblehbleh"
  }
  function make_signed_in(){
    _setSignedIn(true)
  }
  return (
    <>
      <main>
        <div className="screen-fill main-screen">
            {
              signedIn===false ?
                  (<AuthPage make_signed_in = {make_signed_in}/>)
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
  const [view, setView] = useState("menu"); // [4] Changed default view from "quiz" to "folder" / Placeholder for current view
  const switchView = (newView) => { // [5] Added switchView function
    setView(newView);
  };


useEffect(() => { // [6] Added useEffect hook for view switching
    switchView(view);
  }, [view]);
  const _cardPopUp = false; // [7] Placeholder for card pop-up state
  const _currFolder = {}; // [8] Changed to _currFolder (underscore prefix) / Placeholder for current folder data

  const _currDeck = {}; // [9] Changed to _currDeck (underscore prefix) / Placeholder for current deck data
// Add logic to handle current deck data


// Add logic to handle current card data
  // Logic to handle current card data

// Add logic to handle current card data


  const _currCard = {}; // [10] Changed to _currCard (underscore prefix) / Placeholder for current card data

  return( // [11] Return statement for MainApp component
    <>
      {
        view === "menu" &&(
          <>
            <h1 className='screen-title'>Greetings, {username}!</h1>
            <div className="container">
              <div className="buttons-group">
                <button>View Cards</button>
                <button>Quiz Me!</button>
              </div>
            </div>
          </>
        )
      }
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
// Add logic to handle quiz rounds
// Add logic to handle quiz rounds

  // Logic to handle quiz rounds



const QuizView = () => {
  let _num_rounds = 0; // Placeholder for number of quiz rounds
  const quizState = "wrong-animation" //setup, question, right-animation, wrong-animation, results
  //const question = {"definition"": "", "Term": ""}
  return(
    <>
      <SubScreen message={"Quiz Time!"}>
        <div className="quiz-container">
          {
            quizState === "setup" && (
              <>
                <label htmlFor="">How many questions would you like to be asked? <input type="number" placeholder='pick a number' className='num-rounds-input' min={1}/></label>
                <button type="button" className='start-quiz-btn'>Start Quiz!</button>
              </>
            )
          }
          {quizState === "right-animation" && (
              <>
                <figure>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXllink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="96px" height="96px" viewBox="0 0 96 96" enableBackground="new 0 0 96 96" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" fill="#6BBE66" d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"/></g></svg>
                </figure>
                <h2>Correct!</h2>
              </>
            )
          }
          {quizState === "wrong-animation" && (
              <>
                <figure>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="122.879px" viewBox="0 0 122.879 122.879" enableBackground="new 0 0 122.879 122.879" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" fill="#FF4141" d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"/></g></svg>
                </figure>
                <h2>Wrong!</h2>
                <button type="button">continue</button>
              </>
            )
          }
          {quizState === "question" && (
              <>
                <label htmlFor="">Sample Question here. It just has the term's definition.</label>
                <input type="text" placeholder='Your Answer' className='answer-input'/>
                <button type="button" className='answer-btn'>Answer</button>
              </>
            )
          }
        </div>
      </SubScreen>
    </>
  )
}

export default App;