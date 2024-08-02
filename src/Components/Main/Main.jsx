
import { useEffect, useState } from "react";
import Mains from "../Mains/Mains";

const Main = () => {
    const [card, setCard] = useState([]);
    const [info, setInfo] = useState([]);



    useEffect(() => {
        fetch('./fakeData.json')
            .then((res) => res.json())
            .then((data) => {
                setCard(data);
            })
        // console.log(card)

    }, []);

    const handleClick = (p) => {
        console.log(p.id)
        const isExist = info.find(item => item.id == p.id)
        if (!isExist) {

            setInfo([...info, p])

        }
        else {
            alert('already exists')
        }


    }



    const handleDelete = (id) => {
        const newInfo = info.filter(item => item.id != id);
        setInfo(newInfo);
    }



    return (
        <div>
            <div className="main-container mt-28">
                <div className="title mb-28">
                    <h1 className="text-7xl">Our Recipes</h1>
                    <p className="mt-10 text-2xl px-24 opacity-75">Having trouble coming up with a name for your restaurant? Use name in a matter of seconds!</p>
                </div>
                <div className="card-info flex justify-around ">



                    <div className="cardMain-containerIn">

                        {
                            card.map((card => <Mains handleClick={handleClick} key={card.id} card={card}></Mains>))
                        }



                    </div>


                    <div className="info  ">
                        <div className="">
                            <div>
                                <h1>Want to cook: {info.length}</h1>
                                <hr />
                            </div>
                            <div>
                                <div className="flex
                    justify-evenly ">
                                    <p>Count</p>
                                    <p>Name</p>
                                    <p>Time</p>
                                    <p>Calories</p>
                                    <p>Delete all item

                                    </p>
                                </div>
                            </div>
                            <div>
                                {
                                    info.map((item, indx) => (
                                        <div key={item} className="flex justify-evenly info-all">
                                            <p>{indx + 1}</p>
                                            <p>{item.recipe_name.slice(0, 5)}</p>
                                            <p>{item.preparing_time}</p>
                                            <p>{item.calories}</p>
                                            <button onClick={() => handleDelete(item.id)}>Order</button>

                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                        <div className="mt-28 hidden">
                            <hr />
                    <h1>Currently cooling: {handleDelete.length}</h1> <hr />
                            
                 </div>
                 <div>
                    <div className=" justify-evenly mt-8 hidden">
                        <p>count</p>
                    <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                 </div>
                 <hr />
                     
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Main;