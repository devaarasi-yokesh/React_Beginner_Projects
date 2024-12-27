import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'

function Image(){
  return <img src='./src/assets/react.svg' alt='logo'></img>
}


function Heading(props){
  return <h1>{props.title}</h1>
}

function Listing(props){
  return (
    <>
    <li>{props.item}</li>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const items = ["Create a list of elements in React in the form of an array",
     "We will render this list as an unordered list element in the browser", 
     "We will then traverse the list using the JavaScript map() function and update.", 
     "Finally we will wrap this new list within <ul> </ul> elements", 
     "render it to the DOM"];
     const navItems = ["Docs", "Pricing", "About", "Contact"];
  return (
    <>
    <div className='mainDiv'  style={{backgroundImage:`url(${logo})`,backgroundRepeat:"no-repeat",backgroundSize:"400px",backgroundPosition:"605px 100px"}}>
      <section className='header'>
      <nav  className='navBar' >
          <ul>
          {navItems.map((item,index) =>
          <Listing item={item}/>
          )
          
        }
          </ul>
      </nav>
      < Image/>
      </section>
      <section className='content'>
      < Heading title="Fun facts about general conversations"/>
      <ul className='genItems' >
        {items.map((item,index) =>
         <Listing item={item}/>
        )
        
    }
      </ul>
      </section>
      <div className='space'></div>
      <footer className='foot'>
        <p>dev@2024 All rights reserved.</p>
      </footer>
      </div>
    
    </>
  )
}

export default App
