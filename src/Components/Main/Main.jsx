
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
        // console.log(p)
        // const isExist = info.find(item => item.id == p.id)
        // if (!isExist) {

        //     setInfo([...info, p])

        // }
        // else {
        //     alert('ady exists')
        // }
        // setInfo([p])

        // setInfo([...info,p])
        const newInfo = [...info,p]
        setInfo(newInfo)

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


                    <div className="info border ">
                        <div className="border">
                            <div>
                                <h1>Want to cook: {card.length}</h1>
                                <hr />
                            </div>
                            <div>
                                <div className="flex
                    justify-evenly ">
                                    <p>Count</p>
                                    <p>Name</p>
                                    <p>Time</p>
                                    <p>Calories</p>
                                    <p>Delete all

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
                                            <button onClick={() => handleDelete(item.id)}>Delete</button>

                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                        {/* <div className="hidden">
                    <h1>Currently cooling: 0</h1> <hr />

                 </div>
                 <div>
                    <div className="hidden">
                    <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                 </div> */}
                        {/* <div className="hidden">
                    <p>Total time =
                        0 minutes
                    </p>
                    <p>Total Calories = 0</p>
                 </div> */}
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Main;