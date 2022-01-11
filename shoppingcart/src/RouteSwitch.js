import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import cat_arr from "./files/cats/cats";

const RouteSwitch = () => {
  const [items,setItems] = useState([]);
  const [obj,setObj] = useState({});

  const clickCard = (e) =>{
    //const img_element = e.currentTarget.children[0];
    //const name = img_element.alt;
    //const img = img_element.src;
    //console.log('hi')
    //console.log(e.currentTarget.children[0]);
    //setObj(obj => ({name:name,img:img}))
    //setItems(items => [...items, obj]);
    
  }
  const addtoCart = (a,e) =>{
    //console.log('hello')
    //console.log(a)
    //console.log(e)
    /*const img_element = e.currentTarget//.children[0];
    console.log(img_element);
    const name = img_element.alt;
    const img = img_element.src;
    setObj(obj => ({name:name,img:img}))

    setItems(items => [...items, obj]);*/
    setObj(a);
    setItems(items => [...items, obj]);
  }
  useEffect(()=>{
    console.log(items);
    //console.log(obj)
  },[items])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/cats" element={<Shop name={"cats"} cards={cat_arr} clickCard={clickCard} addtoCart={addtoCart}/>}/>
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
