import React from 'react';
import { Button } from 'flowbite-react';


import topImg from '../../Images/1.png'
import centerImg from '../../Images/center.jpg'


const InfoMore = () => {
    return (
        <div>
            
            <div className='p-5 md:p-0 '>
            <div>
                <h2 className='text-5xl text-center  font-serif '>Success Step</h2>
                <div className='flex justify-center mb-16 mt-10'>
                <hr className='md:w-[400px] w-full  h-[4px] bg-gray-400' />

                </div>
            </div>
            <div className='grid grid-cols-2 gap-8 items-center'>
                <div className='border-r-4 relative '>
                    <h2 className='text-2xl uppercase z-10'>EXPERT GUIDANCE</h2>
                    <h2 className='text-4xl  uppercase mt-2 z-10 font-thin'>
                        Learn from THE MAESTRO in quantum physics 500 awards.
                    </h2>
                    <span><img className='md:w-[100px] w-full  absolute top-0 left-0 -mt-10 -ml-16  -z-10' src={topImg} alt="" /></span>
                </div>
                <div >
                    <p className='pr-28 uppercase text-gray-400 '> The ‘paradox’ is only a conflict between reality and your feeling of what reality ‘ought to be’.</p>
                </div>
            </div>
            </div>


            <div className='mt-32 grid md:grid-cols-3  grid-cols-1 px-10 md:px-0 gap-5 justify-center'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'>EXPERT GUIDANCE</h2>
                    <p>Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                    <Button color="warning">
                       Learn More
                    </Button>

                </div>
                <div className='relative hidden md:block'>
                    <div className='w-[200px] bg-white h-[100px] rounded-l-[30px] -mt-16 rounded-r-[30px]  absolute'></div>
                    <img className='roundedMy rounded-r-[300px] rounded-l-[300px] w-[400px]' src={centerImg} alt="" />
                    <div className='w-[200px] bg-white h-[100px] rounded-l-[30px] -mt-10  mr-10 right-0 rounded-r-[30px]  absolute'></div>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'>Learning Video</h2>
                    <p>
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                    <Button color="warning">
                       Learn More
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default InfoMore;