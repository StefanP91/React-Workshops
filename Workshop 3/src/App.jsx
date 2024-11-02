import { Users } from "./assets/Users"
import { useState } from "react"

function App() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [validFirstName, setValidFirstName] = useState(null)
const [validLastName, setValidLastName] = useState(null)
const [validEmail, setValidEmail] = useState(null)
const [validPassword, setValidPassword] = useState(null)
const [validInput, setValidInput] = useState(null)


  function handleSubmit(e) {
    e.preventDefault()
    
    const userFirstName = Users.some(user => user.firstName === firstName)
    const userLastName = Users.some(user => user.lastName === lastName)
    const userEmail = Users.some(user => user.email === email)
    const userPassword = Users.some(user => user.password === password)
    


    setValidFirstName(userFirstName)
    setValidLastName(userLastName)
    setValidEmail(userEmail)
    setValidPassword(userPassword)
    setValidInput(userFirstName && userLastName && userEmail && userPassword)

  }

  return (
    <>
      <div className="flex justify-center items-center h-full w-full bg-green-400">
        
        <form className="bg-white p-5 flex flex-col gap-y-1 rounded-md shadow-2xl">
        {validInput===null || validInput && <p className="text-green-500 font-bold text-center">Successfull Login</p>}
          <input 
            className={`bg-stone-200 p-1 rounded-md focus:outline-cyan-500 ${validFirstName===null ? 'border-2 border-none' : validFirstName ? 'border-2 border-green-500' : 'border-2 border-red-500'}`} 
            type="text" id="first-name" 
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            />
            {validFirstName===null || !validFirstName && <p className="text-red-500">User with this name is not found</p>}
          
          <input 
            className={`bg-stone-200 p-1 rounded-md focus:outline-cyan-500 ${validLastName===null ? 'border-2 border-none' : validLastName ? 'border-2 border-green-500' : 'border-2 border-red-500'}`} 
            type="text" 
            id="last-name" 
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            />
            {validLastName===null || !validLastName && <p className="text-red-500">User with this last name is not found</p>}

          <input 
            className={`bg-stone-200 p-1 rounded-md focus:outline-cyan-500 ${validEmail===null ? 'border-2 border-none' : validEmail ? 'border-2 border-green-500' : 'border-2 border-red-500'}`} 
            type="email" 
            id="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            {validEmail===null || !validEmail && <p className="text-red-500">User with this email is not found</p>}
            
          <input 
            className={`bg-stone-200 p-1 rounded-md focus:outline-cyan-500 ${validPassword===null ? 'border-2 border-none' : validPassword ? 'border-2 border-green-500' : 'border-2 border-red-500'}`} 
            type="password" 
            id="password" 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            {validPassword===null || !validPassword && <p className="text-red-500">Incorrect password</p>}


          <button 
            className="bg-lime-500 text-white p-2 rounded-md hover:bg-lime-600" 
            type="submit"
            onClick={handleSubmit}
            >
              Login
            </button>
        </form>
      </div>
    </>
  )
}

export default App
