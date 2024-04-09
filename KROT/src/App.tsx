import './App.css'
import Router from "./routes.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
  )

}

export default App
