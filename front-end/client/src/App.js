import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import stránek
import AuthPage from "./pages/AuthPage";
import UserInterface from "./pages/UserInterface";

// import Layoutů
import LoginLayout from "./layouts/AuthLayout";



const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={<UserInterface />}/>
        <Route path="/auth" element={<LoginLayout />} >
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;