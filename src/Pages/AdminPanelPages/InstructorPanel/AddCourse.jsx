// import { Button, Card, Label, TextInput } from 'flowbite-react';
// import { useForm } from 'react-hook-form';
// import { classItemAdd } from '../../../API/ClassItem';


// const AddCourse = () => {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();


//     const onSubmit = data => {
//         console.log(data)
//         const price = (parseInt(data.CoursePrice))
//         const rating = (parseInt(data.CourseRating))
//         // const class_Image = (data.photoUrl[0].name)
//         // console.log(class_Image);

//         // Image Upload

//         const class_Image = (data.photoUrl[0].name)
//         console.log(class_Image);
//         const formData = new FormData()
//         formData.append('image', class_Image)
//         console.log(formData);

//         const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_SECCRET}`
//         fetch(url, {
//             method: 'POST',
//             body: formData,
//         }).then(res => res.json())
//             .then(imageData => {
//                 const imageUrl = imageData;
//                 console.log(imageUrl);
//             })
//             .catch(error => console.log(error))


//         const allInfoClass = { class_Image, price, rating, class_name: data.className, Description: data.Description, date: data.date }

//  console.log(allInfoClass);

//         classItemAdd(allInfoClass)
//             .then(data => {
//                 console.log(data);
//             })


//     }




//     return (
//         <div className='w-[700px]'>
//             <Card>
//                 <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
//                     <div className=''>
//                         <div className="mb-2 block">
//                             <Label
//                                 htmlFor="text"
//                                 value="Course Name"
//                             />
//                         </div>
//                         <TextInput
//                             id="text"
//                             placeholder="Course Name"
//                             required
//                             type="text"
//                             {...register("className")}

//                         />
//                     </div>
//                     <div className=''>
//                         <div className="mb-2 block">
//                             <Label
//                                 htmlFor="text"
//                                 value="Course Image"
//                             />
//                         </div>
//                         <TextInput
//                             id="text"
//                             placeholder="Course Image"
//                             required
//                             type="file"
//                             {...register("photoUrl")}

//                         />
//                     </div>


//                     <Button type="submit">
//                         Submit
//                     </Button>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default AddCourse;


import { useState } from 'react'; // Import useState hook for handling state
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { classItemAdd } from '../../../API/ClassItem';
import toast from 'react-hot-toast'

const AddCourse = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [uploadedImageUrl, setUploadedImageUrl] = useState(''); // State to store the uploaded image URL

    const onSubmit = data => {
        const price = parseInt(data.CoursePrice);
        const rating = parseInt(data.CourseRating);

        // Image Upload
        const formData = new FormData();
        formData.append('image', data.photoUrl[0]); // Append the file object, not just the name

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_SECCRET}`; // Use import.meta.env to access the API key // Use process.env to access the API key
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const imageUrl = imageData.data.url; // Extract the image URL from the response
                console.log(imageUrl);
                setUploadedImageUrl(imageUrl); // Store the uploaded image URL in state
                const allInfoClass = {
                    class_Image: imageUrl,
                    price,
                    rating,
                    class_name: data.className,
                    Description: data.Description,
                    date: data.date
                };
                console.log(allInfoClass);
                classItemAdd(allInfoClass)
                    .then(data => {
                        console.log(data);
                        if(data.insertedId){
                            toast.success('New Item Added Success')
                            reset()
                        }
                    });
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='w-[700px]'>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
                    {/* Form fields */}
                    {/* ... */}

                    <div className=''>
                        <div className="mb-2 block">

                            <Label
                                htmlFor="text"
                                value="Course Name"
                            />
                        </div>
                        <TextInput
                            id="text"
                            placeholder="Course Name"
                            required
                            type="text"
                            {...register("className")}

                        />
                    </div>

                    <div className=''>
                        <div className="mb-2 block">
                            <Label htmlFor="text" value="Course Image" />
                        </div>
                        <TextInput
                            id="text"
                            placeholder="Course Image"
                            required
                            type="file"
                            {...register("photoUrl")}
                        />
                    </div>

                    <div className=''>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="text"
                                value="CoursePrice"
                            />
                        </div>
                        <TextInput
                            id="text"
                            placeholder="Course Price"
                            required
                            type="number"
                            {...register("CoursePrice")}

                        />
                    </div>
                    <div className=''>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="text"
                                value="Course Rating"
                            />
                        </div>
                        <TextInput
                            id="text"
                            placeholder="Course Rating"
                            required
                            type="text"
                            {...register("CourseRating")}

                        />
                    </div>
                    <div className=''>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="text"
                                value="Description"
                            />
                        </div>
                        <TextInput
                            id="text"
                            placeholder="Description"
                            required
                            type="text"
                            {...register("Description")}

                        />
                    </div>
                    <div className=''>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="text"
                                value="Date"
                            />
                        </div>
                        <TextInput
                            id="text"
                            placeholder="Date"
                            required
                            type="date"
                            {...register("date")}

                        />
                    </div>

                    {/* Uploaded Image Preview */}
                    {uploadedImageUrl && (
                        <img src={uploadedImageUrl} alt="Uploaded" style={{ width: '100px' }} />
                    )}

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddCourse;
