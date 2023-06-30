import { Button, Navbar } from 'flowbite-react';
import { FaMailchimp, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineForwardToInbox } from 'react-icons/Md';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TopBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    console.log(user);
    const userLogOut = () => {
        logOutUser()
    }

    return (
        <div className='myContainer hidden md:block lg:block'>
            <Navbar className='' fluid rounded >

                <div className="flex md:order-2 gap-5">
                    {/* authontication  */}

                    {
                        user ?
                            <>
                                <Link onClick={userLogOut}><Button
                                    gradientDuoTone="cyanToBlue"
                                    outline
                                >

                                    Logout

                                </Button></Link>
                                <Link to='admin-panel'><Button
                                    gradientDuoTone="cyanToBlue"
                                    outline
                                >

                                    Profile

                                </Button></Link>
                            </>
                            :
                            <>
                                <Link to='/login'><Button
                                    gradientDuoTone="cyanToBlue"
                                    outline
                                >

                                    Login

                                </Button></Link>
                                <Link to='/register'><Button
                                    gradientDuoTone="cyanToBlue"
                                    outline
                                >

                                    Register

                                </Button></Link>
                            </>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        
                        className='flex gap-10 items-center'>
                        <p className='flex gap-1 items-center'><FaPhoneAlt className='text-2xl'></FaPhoneAlt> +8801300000000</p>
                        <p className='flex gap-1 items-center'><MdOutlineForwardToInbox className='text-2xl'> </MdOutlineForwardToInbox> check@gmail.com</p>
                        <Search></Search>
                    </Navbar.Link>




                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TopBar;