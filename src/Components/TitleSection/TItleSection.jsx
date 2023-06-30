/* eslint-disable react/prop-types */


const TItleSection = ({title, subtitle}) => {
    return (
        
             <div className='w-1/4 text-center mx-auto py-5'>
           <p className='italic text-yellow-500'> {title}</p>
            <hr className='h-[4px] bg-[#E8E8E8] mt-3' />
            
            <p className='mt-5 text-3xl font-semibold font-serif'>  {subtitle}</p>
            <hr className='h-[4px] bg-[#E8E8E8] mt-3' />
        </div>
      
    );
};

export default TItleSection;