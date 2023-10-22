import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Sign from "./Pages/Sign"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign" element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
