import { IoTimeOutline } from 
"react-icons/io5";
import { BsFire } from "react-icons/bs";
import './Mains.css'

const Mains = ({card,recipe_name,short_description,preparing_time,calories,recipe_image,handelAdd}) => {
    return (
        <div>
            <div>
            <div className="card border p-4 bg-transparent mb-11 ">
                    <div>
                  
                    <div className="card w-96 shadow-xl">
  <figure className="rounded-2xl">
    <img
      src={card.recipe_image} />
  </figure>
  <div className="card-body items-start">
    <h2 className="card-title text-2xl font-bold">
 
    {card.recipe_name}
     
    </h2>
    <p className="opacity-75 text-sm mt-4 mb-3">{card.short_description}</p>


        <hr className="" />
 
        <h3 className="mt-4 font-bold">Ingredients : 0 {card.length}</h3>
        <ul className="justify-start opacity-70 ml-5 mt-5 space-y-4 list-disc list-inside">
            <li>500g ground beef</li>
            <li>1 onion, chopped </li>
            <li>2 cloves ,minced</li>
           
        </ul>
        <hr />
        
        <div className="flex w-[350px]">
           <div className="justify-around flex w-[350px] mb-3">
           <p className="flex justify-center items-center gap-3">  <IoTimeOutline /> {card.preparing_time} </p>
          
           
           <p className=" flex justify-center items-center gap-3"> <BsFire/> {card.calories} calories</p>
           </div>
        </div>
         <button onClick={()=>handelAdd(card)} className="ml-5 rounded-full bg-green-400 text-black border-none ">Want to Cook</button>
  </div>
</div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Mains;