import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Favorites from "./pages/favorites/Favorites"
import Details from "./pages/details/Details"

function App() {

  return (
    <>
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
