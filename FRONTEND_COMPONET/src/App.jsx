import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import MoviesHomePage from "./Pages/MoviesHomePage"
import DetailsPage from "./Pages/DetailsPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MoviesHomePage />} />
            <Route path="/details/:movieId" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
