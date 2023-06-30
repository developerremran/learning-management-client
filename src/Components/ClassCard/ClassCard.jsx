/* eslint-disable react/prop-types */
import { Card } from 'flowbite-react';
import { AiTwotoneStar } from 'react-icons/Ai';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ClassCard = ({ classs }) => {
    const { class_name, class_length, rating, price, description, date, instructor_name, class_Image, _id } = classs;
    
    return (
        <div>
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black "
                imgSrc={class_Image}
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {class_name}
                        </p>
                    </h5>
                </a>
                <p>{description}</p>
                <div className="mb-5 mt-2.5 flex items-center   justify-between">
                    <div className='flex items-center'>
                        <AiTwotoneStar className='text-yellow-500'></AiTwotoneStar>
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                            <p>
                                {rating}
                            </p>
                        </span>
                    </div>
                    <div >
                        <span className='flex items-center gap-2'>
                            <FaCalendar></FaCalendar>{date}
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>

                    <Link className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" to={`/details/${_id}`}>
                        <p >
                            Details 
                        </p>
                    </Link>

                </div>
            </Card>
        </div>
    );
};

export default ClassCard;