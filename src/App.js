import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Form/>}/>
        <Route path="/weather" element= {<WeatherData/>} />
      </Routes>
    </div>
  );
}

export default App;
