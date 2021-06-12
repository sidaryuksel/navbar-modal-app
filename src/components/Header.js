import React from 'react';
import {Navbar} from 'reactstrap';
//import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar color="info"  light expand="md">
                <h3 className="text-white">Qpien</h3    >
            </Navbar>
        </div>
    )
};

export default Header;