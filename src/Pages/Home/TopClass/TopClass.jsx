// import React, { useEffect, useState } from 'react';
import TItleSection from '../../../Components/TitleSection/TItleSection';
import ClassCard from '../../../Components/ClassCard/ClassCard';
import useCart from '../../../API/useCart';


const TopClass = () => {

  const [carts, refetch] = useCart()
//   console.log(carts);

    return (
        <div className='mt-36 mb-36'>
            <TItleSection title={'Top Class'} subtitle={'Best Learner enrolled Class'}></TItleSection>
            <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10 w-full p-5'>
                {
                    carts.slice(0,4).map(classs => <ClassCard key={classs._id} classs={classs}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default TopClass;