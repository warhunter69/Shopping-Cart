import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop/>}/>
        {//<Route path="/profile" element={<Profile />} />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
