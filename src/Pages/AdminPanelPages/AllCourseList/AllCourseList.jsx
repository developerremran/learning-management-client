import React, { useState } from 'react';
import { allCourse, } from '../../../API/courseall';
import { Button, Table } from 'flowbite-react';
import { deleteCourseItem } from '../../../API/ClassItem';

const AllCourseList = () => {
    const [courseData, setCOurseData] = useState([])
    allCourse().then(data => {
        setCOurseData(data);
    })




    const deleteC = (id) => {
        deleteCourseItem(id).then(data => console.log(data))
    }
    return (
        <div>
            <h2 className='text-3xl font-serif'>Here Is All Course List</h2>
            <div className='mt-20 w-[850px]'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            Course Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Instructor_name
                        </Table.HeadCell>

                        <Table.HeadCell>
                            Email
                        </Table.HeadCell>

                        <Table.HeadCell>
                            <span className='flex justify-center'> Action To First</span>
                        </Table.HeadCell>
                    </Table.Head>
                    {
                        courseData.map(course => <Table.Body key={course._id} className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {course.class_name}
                                </Table.Cell>
                                <Table.Cell>
                                    {course.instructor_name}

                                </Table.Cell>

                                <Table.Cell>
                                    {course.email}
                                </Table.Cell>
                                <Table.Cell className='flex justify-center'>
                                    <div className='flex gap-2'>
                                        <>

                                            {
                                                <Button onClick={() => deleteC(course._id)} color="warning">
                                                    Delete Course
                                                </Button>

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

export default AllCourseList;