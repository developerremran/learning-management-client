import { FaUserTie } from 'react-icons/fa';

// icon import 
import icon1 from '../../Images/icon/3192682.png'
import icon2 from '../../Images/icon/icon2.png'
import icon3 from '../../Images/icon/liveClass.png'
import icon4 from '../../Images/icon/courseVideo.png'


const FourCard = () => {
    return (
        <div className='myContainer grid md:grid-cols-4 grid-cols-1 md:space-y-0  md:p-0 p-5 space-y-5 gap-5 w-full text-center '>
            <div className='p-5 shadow-2xl border space-y-3'>
               <span className='flex justify-center'> <img className='w-[100px]' src={icon1} alt="" /></span>
                <h2 className='text-4xl'>7</h2>
                <h2 className='text-3xl font-bold font-mono'>Skilful Instructor</h2>
                <p>Start Learning From Experiance Instructor</p>
            </div>
            <div className='p-5 shadow-2xl border space-y-5'>
            <span className='flex justify-center'><img className='w-[100px]' src={icon2} alt="" /></span>
                <h2 className='text-4xl'>7</h2>
                <h2 className='text-3xl font-bold font-mono'>Happy Student</h2>
                <p>Enjoy learn and get success</p>
            </div>
            <div className='p-5 shadow-2xl border space-y-5'>
            <span className='flex justify-center'><img className='w-[100px]' src={icon3} alt="" /></span>
                <h2 className='text-4xl'>7</h2>
                <h2 className='text-3xl font-bold font-mono'>Live Class</h2>
                <p>The best live class provide</p>
            </div>
            <div className='p-5 shadow-2xl border space-y-5'>
            <span className='flex justify-center'><img className='w-[100px]' src={icon4} alt="" /></span>
                <h2 className='text-4xl'>7</h2>
                <h2 className='text-3xl font-bold font-mono'>Video Course</h2>
                <p>Your course video life time enable</p>
            </div>
        </div>
    );
};

export default FourCard;