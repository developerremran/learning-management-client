
import useCart from '../../API/useCart';
import ClassCard from '../../Components/ClassCard/ClassCard';
import TItleSection from '../../Components/TitleSection/TItleSection';

const Class = () => {

    const [carts, refetch] = useCart()
    console.log(carts);
    return (
        <div>
        <TItleSection title={'ALl Class'} subtitle={'Best Learner enrolled Class'}></TItleSection>
        <div className='grid grid-cols-4 gap-10 w-full'>
            {
                carts?.map(classs => <ClassCard key={classs.class_name} classs={classs}></ClassCard>)
            }
        </div>
    </div>
    );
};

export default Class;