import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Sign from "./Pages/Sign"
import Fallback from "./Pages/Fallback"
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="*" element={<Fallback/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
