import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Button, Card } from 'flowbite-react';


import totalPrice from '../../../Images/AdminDashBoard/DashBoardAdmin/price.png';
import totalItemSell from '../../../Images/AdminDashBoard/DashBoardAdmin/totalSale.png';
import ChartSt from '../../../Components/ChartJS/ChartSt';

const AdminDashBoard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='w-full h-[100px] p-[20px] rounded-lg shadow-2xl bg-white flex gap-10 items-center'>
                <h2 className='text-2xl  '>Hello I am <span className='text-3xl uppercase font-serif '>{user?.displayName} </span> </h2>
                <img src={user?.photoURL} alt="" className="mb-3 rounded-full w-[80px] shadow-lg" />
            </div>

            <div className='mt-36 md:grid md:grid-cols-2 sm:flex   w-full gap-5'>
                <div>
                    <Card className=" w-full shadow-lg">
                        <img className='w-[50px]' src={totalPrice} alt="" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Total Sale Price
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                $454
                            </p>
                        </p>

                    </Card>
                </div>
                <div>
                    <Card className=" shadow-lg">
                        <img className='w-[50px]' src={totalItemSell} alt="" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Total Item Sale
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                23
                            </p>
                        </p>

                    </Card>
                </div>
                <div></div>
            </div>

            <div className='mt-20'>
                <h2 className='text-3xl font-serif'>Monthly Sale Report</h2>
            </div>
            <div className='md:p-0 p-10 max-w-[400px]'>
                <ChartSt></ChartSt>
            </div>
        </div>
    );
};

export default AdminDashBoard;