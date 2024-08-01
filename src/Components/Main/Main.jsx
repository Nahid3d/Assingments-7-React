
import { useEffect, useState } from "react";
import Mains from "../Mains/Mains";

const Main = () => {
    const [card,setCard] =useState([]);
    const [product,setProduct] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
        .then((res) => res.json())
        .then((data) =>{
            setCard(data);
        })
        // console.log(card)
        
    },[]);

    const handelAdd = (p) =>{
         const isExists = product.find(item => item.id === p.id);
         if(!isExists){
           const newProduct = [...product,p]
           setProduct(newProduct);

        // setProduct([...product,p])


         }
         else{
            alert('already exists');
         }
    }
//  console.log(product)
    return (
        <div>
            <div className="main-container mt-28">
                <div className="title mb-28">
                    <h1 className="text-7xl">Our Recipes</h1>
                    <p className="mt-10 text-2xl px-24 opacity-75">Having trouble coming up with a name for your restaurant? Use name in a matter of seconds!</p>
                </div>
                <div className="card-info flex justify-around">

               

                <div className="cardMain-containerIn">

                {
                    card.map((card =><Mains key={card.id} handelAdd={handelAdd} card={card}></Mains>))
                }

            

                </div>


                    <div className="info">
                 <div>
                 <div>
                    <h1>Want to cook: 0</h1>
                    <hr />
                 </div>
                 <div>
                    <div className="flex
                    justify-evenly">
                        <p>Count</p>
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                 </div>
               
               <div>
               {
                    product.map((item,indx) => (
                        <div className="div justify-evenly flex" >
                            <p>{indx +1}</p>
                            <p>{item.recipe_name.substring(0,10)}</p>
                            <p>{item.preparing_time}
                                
                        </p>
                            <p>{item.calories}</p>
                        </div>
                    ))
                 }
               </div>
               
                 </div>
                 <div className="hidden">
                    <h1>Currently cooling: 0</h1> <hr />

                 </div>
                 <div>
                    <div className="hidden">
                    <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                 </div>
                 <div className="hidden">
                    <p>Total time =
                        0 minutes
                    </p>
                    <p>Total Calories = 0</p>
                 </div>
                    </div>
                </div>
            
            </div>

       


        </div>
    );
};

export default Main;