import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import './single.css';
import { Card } from "flowbite-react";
import { AiTwotoneStar } from "react-icons/Ai";
import { FaCalendar } from "react-icons/fa";
// import addCartProduct from "../../API/useCartProduct";
import { toast } from "react-hot-toast";



// import imgBanner from '../../Images/singlePageDetails/banner1.png';


const DetailsSInglePage = (classs) => {

    const [classData, setClassData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/class/${id}`)
            .then(res => res.json())
            .then(data => {

                setClassData(data[0])
            })
    }, [])


    


    return (

        <div>
            <div className="bnanerSt relative -z-10">
                <div className=" backdrop-brightness-50 w-full h-[500px] absolute ">
                </div>

            </div>
            <div className="myContainer z-10">
                <div className="w-[400px] -mt-36 z-10 p-10 md:p-0 ">
                    <Card className="border-2 md:border-0"
                        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                        imgSrc={classData.class_Image}
                    >
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    {classData.class_name}
                                </p>
                            </h5>
                        </a>
                        <p>
                            {classData.description}
                        </p>
                        <div className="mb-5 mt-2.5 flex items-center   justify-between">
                            <div className='flex items-center'>
                                <AiTwotoneStar className='text-yellow-500'></AiTwotoneStar>
                                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                    <p>
                                        {classData.rating}
                                    </p>
                                </span>
                            </div>
                            <div >
                                <span className='flex items-center gap-2'>
                                    <FaCalendar></FaCalendar>{classData.date}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                ${classData.price}
                            </span>
                            <Link
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"

                                >

                                Add to cart

                            </Link>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default DetailsSInglePage;