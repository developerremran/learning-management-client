
import { Helmet } from 'react-helmet-async';
import Navber from './Navber';
import TopBar from './TopBar';

const Header = () => {
    return (
        <div className='shadow-md'>
            <Helmet>
                <title>Learning Management || Home </title>
            </Helmet>
            <div>
                <TopBar></TopBar>
                <hr />
                <Navber></Navber>
                <hr />
            </div>
        </div>
    );
};

export default Header;