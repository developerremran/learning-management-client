
import TItleSection from '../../../Components/TitleSection/TItleSection';
import ClassCard from '../../../Components/ClassCard/ClassCard';
import useCart from '../../../API/useCart';

const NewClass = () => {
    const [carts, refetch] = useCart()
    return (
        <div>
            <TItleSection title={'New Class'} subtitle={'Best Learner enrolled Class'}></TItleSection>
            <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10 w-full p-5'>
                {
                    carts.slice(0,4).map(classs => <ClassCard key={classs.class_name} classs={classs}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default NewClass;