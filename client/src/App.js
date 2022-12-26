
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";


import LandingPage from "./landingpage";
import PostView from "./post-view";
import FormPage from "./form";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    
    
      
      <Route exact path="/" element={<LandingPage/>}></Route>
      <Route exact path="/postview" element={<PostView/>}></Route>
      <Route exact path="/form" element={<FormPage/>}></Route>
    
    </Routes>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;