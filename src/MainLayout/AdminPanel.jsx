import { Card, Sidebar } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { HiChartPie } from 'react-icons/Hi';

// icon img import 
import nav1 from '../Images/AdminDashBoard/navIcon1.png'
import nav2 from '../Images/AdminDashBoard/nav2.png'
import nav3 from '../Images/AdminDashBoard/allCOurse.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
    const { user } = useContext(AuthContext)

    const [isAdmin, setIsAdmin] = useState(true);


    return (
        <div className='max-w-full h-full my-auto'>
            <div className='md:flex  gap-5 sm:grid grid-cols-2'>

                <div className='py-[100px] md:w-[20%] w-full'>
                    <Sidebar className='min-h-full flex items-center justify-center' aria-label="Sidebar with content separator example">
                        {/* _______________________ */}
                        <Card>
                            <div className="flex justify-end px-4 pt-4">

                            </div>
                            <div className="flex flex-col items-center pb-10">

                                <img src={user?.photoURL} alt="" className="mb-3 rounded-full w-[80px] shadow-lg" />

                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {user?.displayName}
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Owner
                                </span>
                                <div className="mt-4 flex space-x-3 lg:mt-6">

                                    <p className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                        Contact
                                    </p>


                                    <p className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                        Course
                                    </p>

                                </div>
                            </div>
                        </Card>
                        {/* profile */}
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                {
                                    isAdmin ?

                                        <>
                                            <>
                                                <Sidebar.Item>
                                                    <Link to='admin-dashboard' className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            Dashboard
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                                <Sidebar.Item>
                                                    <Link to='instructor-list' className='flex gap-2 items-center'>
                                                        <span>
                                                            <img className='w-[30px]' src={nav1} alt="" />
                                                        </span>
                                                        <p className='font-serif text-xl'>
                                                            Instructor
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                                <Sidebar.Item>
                                                    <Link to='add-course' className='flex gap-2 items-center'>
                                                        <span>
                                                            <img className='w-[30px]' src={nav2} alt="" />
                                                        </span>
                                                        <p className='font-serif text-xl'>
                                                           Add Course
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                               
                                                <Sidebar.Item>
                                                    <Link to='course-list' className='flex gap-2 items-center'>
                                                        <span>
                                                            <img className='w-[30px]' src={nav3} alt="" />
                                                        </span>
                                                        <p className='font-serif text-xl'>
                                                            All Course
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                               
                                            </>
                                        </>
                                        :

                                        <>
                                            <>
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <Link to='instructor-dashboard' className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            DashBoard
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <Link to='mange-course' className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            Manage Course
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                                
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <div className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            All Course
                                                        </p>
                                                    </div>
                                                </Sidebar.Item>
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <Link to='Course-update' className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            Course Update
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>

                                            </>




                                            {/* user  */}

                                            {/* here is user option  */}
                                            <>
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <div className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            DashBoard
                                                        </p>
                                                    </div>
                                                </Sidebar.Item>
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <Link to='paymentAll' className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            Payment
                                                        </p>
                                                    </Link>
                                                </Sidebar.Item>
                                                <Sidebar.Item

                                                // icon={HiShoppingBag}
                                                >
                                                    <div className='flex gap-2 items-center'>
                                                        <span className='text-2xl'><HiChartPie></HiChartPie></span>
                                                        <p className='font-serif text-xl'>
                                                            Payment History
                                                        </p>
                                                    </div>
                                                </Sidebar.Item>
                                            </>

                                        </>
                                }



                                {/* admin end  */}

                                {/* here is host option  */}




                                {/* user start  */}


                                {/* end  */}
                                <div className="mt-12 flex space-x-3 lg:mt-16">
                                    <p
                                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"

                                    >

                                        Sign In

                                    </p>
                                    <p
                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"

                                    >

                                        Sign Up

                                    </p>
                                </div>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item>
                                    <Link to='/'>
                                        GO to Home
                                    </Link>
                                </Sidebar.Item>
                                <Sidebar.Item

                                // icon={HiViewBoards}
                                >
                                    <p>
                                        Documentation
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item

                                // icon={BiBuoy}
                                >
                                    <p>
                                        Help
                                    </p>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>

                <div className='md:py-[100px] py-[0px] px-[50px] md:w-[80%] w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;





