import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import cat_arr from "./files/cats/cats";

const RouteSwitch = () => {
  const [items,setItems] = useState([]);
  const clickCard = (e) =>{
    const name = e.target.alt;
    setItems(items => [...items, name]);
  }
  useEffect(()=>{
    console.log(items);
  },[items])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/cats" element={<Shop name={"cats"} cards={cat_arr} clickCard={clickCard} />}/>
        <Route path="/shop/dogs" element={<Shop name={"dogs"}/>} />
        <Route path="/shop/fish" element={<Shop name={"fish"}/>} />
        <Route path="/shop/birds" element={<Shop name={"birds"}/>} />
        <Route path="/shop/reptiles" element={<Shop name={"reptiles"}/>} />
        {//<Route path="/profile" element={<Profile />} />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
