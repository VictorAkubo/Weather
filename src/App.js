import { useContext } from 'react';
/* import { Context } from './context/useContext'; */
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Weather from './Component/Weather/Weather';
/* import Tiktak from "./Pages/Tiktak/Tiktak" */
{/*  <Route path="/tiktak" element={<Tiktak />} /> */ }

function App() {
  return (
    <div className="App">
<Weather />
    </div>
  );
}
export default App;
