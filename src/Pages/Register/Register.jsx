// import { Button, Checkbox, Label, TextInput, } from 'flowbite-react';
// import { useContext } from 'react';
// import toast from 'react-hot-toast'
// import { useForm } from 'react-hook-form';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { useNavigate } from 'react-router-dom';



// const Register = () => {
//     const { newUser, updateProfileName } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const { register, handleSubmit, watch, formState: { errors },
//     } = useForm()


//     const onSubmit = (data) => {
//         console.log(data);

//     }

//     return (
//         <div className='myContainer'>
//             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[300px] mx-auto py-[200px] ">
//                 <div>
//                     <div className="mb-2 block">
//                         <Label
//                             htmlFor="name"
//                             value="Your Name"
//                         />
//                     </div>
//                     <TextInput
//                         id="text"
//                         placeholder="type your Name"
//                         required
//                         type="name"
//                         {...register("name")}
//                     />
//                 </div>

//                 <div>
//                     <div className="mb-2 block">
//                         <Label
//                             htmlFor="photoUrl"
//                             value="photoUrl"
//                         />
//                     </div>
//                     <TextInput className='border-2 border-red-400 rounded-md '
//                         id="photoUrl"
//                         required
//                         type="file"
//                         {...register("photoUrl")}
//                     />
//                 </div>
//                 <div>
//                     <div className="mb-2 block">
//                         <Label
//                             htmlFor="email1"
//                             value="Your email"
//                         />
//                     </div>
//                     <TextInput
//                         id="email1"
//                         placeholder="type your email"
//                         required
//                         type="email"
//                         {...register("email")}
//                     />
//                 </div>
//                 <div>
//                     <div className="mb-2 block">
//                         <Label
//                             htmlFor="email1"
//                             value="Your email"
//                         />
//                     </div>
//                     <select className='w-full rounded-md' {...register("role")}>
//                         <option>Chose your Identify</option>
//                         <option>Instructor</option>
//                         <option>Student</option>
//                     </select>

//                 </div>

//                 <div>
//                     <div className="mb-2 block">
//                         <Label
//                             htmlFor="password1"
//                             value="Your password"
//                         />
//                     </div>
//                     <TextInput
//                         id="password1"
//                         required
//                         type="password"
//                         {...register("password")}
//                     />
//                 </div>

//                 <Button type="submit">
//                     Register
//                 </Button>
//             </form>
//         </div>
//     );
// };

// export default Register;






import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'

import { TbFidgetSpinner } from 'react-icons/tb'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { saveUser } from '../../API/Auth'

const Register = () => {
    const {
        loading,
        setLoading,
        signInWithGoogle,
        newUser, updateProfileName
    } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // Handle user registration
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        // Image Upload
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)


        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_SECCRET}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const imageUrl = imageData.data.display_url

                newUser(email, password)
                    .then(result => {
                        console.log(result);
                        updateProfileName(name, imageUrl)
                            .then(() => {
                                toast.success('Signup successful')
                                saveUser(result.user)
                                navigate(from, { replace: true })
                            })
                            .catch(err => {
                                setLoading(false)
                                console.log(err.message)
                                toast.error(err.message)
                            })
                    })
                    .catch(err => {
                        setLoading(false)
                        console.log(err.message)
                        toast.error(err.message)
                    })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })

        return
    }

    // Handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            {loading ? (
                                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default Register 