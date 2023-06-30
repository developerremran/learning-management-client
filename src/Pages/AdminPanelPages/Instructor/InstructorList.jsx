import { Button, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { becomeAdmin, becomeHost } from '../../../API/Auth';


const InstructorList = () => {
    const { user } = useContext(AuthContext)
    const [instructorDatas, setInstructorDatas] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_lOCAL_Server}/newUser`)
            .then(res => res.json())
            .then(data => {
                setInstructorDatas(data)
            })
    }, [])
    console.log(user);

    const makeHost = (user) => {
        becomeHost(user.email).then(data => {
            console.log(data);
        })
    }

    const makeAdmin = (user) => {
        fetch(`${import.meta.env.VITE_lOCAL_Server}/newUser/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('done')
            })
    }

    console.log(user);


    return (
        <div>
            <h2 className='text-3xl font-serif'>Here Is Al Instructor List</h2>
            <div className='mt-20 md:w-[850px] w-[300px]'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell className='hidden md:block'>
                            Instructor Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Email
                        </Table.HeadCell>

                        <Table.HeadCell  className='hidden md:block'>
                            Role
                        </Table.HeadCell>

                        <Table.HeadCell>
                            <span className='flex justify-center'> Action To First</span>
                        </Table.HeadCell>
                    </Table.Head>
                    {
                        instructorDatas.map(instructorData => <Table.Body key={instructorData._id} className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {instructorData.display_name}
                                </Table.Cell>
                                <Table.Cell>
                                    {instructorData.email}
                                </Table.Cell>

                                <Table.Cell>
                                    {instructorData.role}
                                </Table.Cell>
                                <Table.Cell className='flex justify-center'>
                                    <div className='flex gap-2'>

                                        {
                                            user.role === 'admin' ? 'admin' :

                                                <Button onClick={() => makeAdmin(user)} color="failure">
                                                    Make Admin
                                                </Button>

                                        }

                                        <>

                                            {user.role === 'host' ? ('host') : (<>
                                                <Button onClick={() => makeHost(user)} color="warning">
                                                    Make Host
                                                </Button>
                                            </>)
                                            } </>

                                    </div>
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>)
                    }

                </Table>
            </div>

        </div>
    );
};

export default InstructorList;