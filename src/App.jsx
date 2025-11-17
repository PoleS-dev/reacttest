import { useState } from 'react'

import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Header from './components/common/header/Header'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Film from './pages/film'
import Documentaire from './pages/documentaire'
import Chuassure from './pages/chuassure'
function App() {
 

  return (

  <>



  
<BrowserRouter>
<Header/>

  <main className="App" >

<Routes>
<Route path="/" element={<Accueil/>} />
<Route path="/apropos" element={<Apropos/>} />
<Route path="/categorie/film" element={<Film/>} />
<Route path="/categorie/documentaire" element={<Documentaire/>} />
<Route path="/chaussures" element={<Chuassure/>} />
</Routes>
</main>

<footer>
  <p>Footer</p>
</footer>







</BrowserRouter>


  
  </>
 


 
   
  )
}

export default App
