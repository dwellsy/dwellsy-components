import App from "./App";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ButtonPage from "./pages/ButtonPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="buttons" element={<ButtonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;