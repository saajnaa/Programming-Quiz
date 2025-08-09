import './App.css'
import { Routes, Route } from 'react-router-dom'


import NavBar from './component/NavBar'
import Home from './component/Home'


import JsQuiz from './component/JsQuiz'
import CssQuiz from './component/CssQuiz'
import HtmlQuiz from './component/HtmlQuiz'



function App() {


  return (
    <>
      <NavBar></NavBar>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/html-test' element={<HtmlQuiz />}></Route>
        <Route path='/css-test' element={<CssQuiz />}></Route>
        <Route path='/javascript-test' element={<JsQuiz />}>  </Route>



      </Routes>

    </>
  )
}

export default App
