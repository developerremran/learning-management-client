import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { exitingUser } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        exitingUser(data.email, data.password)
            .then(result => {
                const user = result.user
                if (user) {
                    toast.success('login Success')
                    navigate(from, { replace: true })
                }
                console.log(user);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className='myContainer'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[300px] mx-auto py-[200px] ">

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="type your email"
                        required
                        type="email"
                        {...register("email")}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        required
                        type="password"
                        {...register("password")}
                    />
                </div>

                <Button type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;