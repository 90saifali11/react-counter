import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './component/project'
import Info from './component/info'
import Input from './component/input'
import Footer from './component/footer'
import Nav from './component/nav'

function App() {
 
  return (
    <>

<Nav/>
  <Info/>
<Project />
  <Input/>
 <Footer/>


    </>
  )
}

export default App
