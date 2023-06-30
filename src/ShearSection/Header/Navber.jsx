import { Button, Navbar } from 'flowbite-react';


const Navber = () => {
    return (
        <div className='myContainer  py-3'>
            <Navbar className='' fluid rounded >
                <Navbar.Brand>
                   
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
                        CampYOur
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                       Start New Class
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="/"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/class">
                        Class
                    </Navbar.Link>
                    <Navbar.Link href="/instructor">
                        Instructor
                    </Navbar.Link>
                    <Navbar.Link href="/blog">
                        Blog
                    </Navbar.Link>
                    <Navbar.Link href="/contact">
                        Contact
                    </Navbar.Link>
                    <div className='md:hidden block lg:hidden'>
                    <Navbar.Link href="/login">
                      Login
                    </Navbar.Link>
                    <Navbar.Link href="/register">
                       Register
                    </Navbar.Link>
                    <Navbar.Link href="/admin-panel">
                       Profile
                    </Navbar.Link>
                     
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navber;