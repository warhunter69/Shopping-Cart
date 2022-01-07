import Card from "./Card";
import cat_arr from "../files/cats/cats";
const HomePage = () =>{
    return(
        <div>
        <h1>
            hello
        </h1>
        <Card src={cat_arr[0].image} name={cat_arr[0].name}/>
        <Card src={cat_arr[1].image} name={cat_arr[1].name}/>
        </div>
    )
}
export default HomePage;