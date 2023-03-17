import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';
import {useState} from 'react';
import HamMenu from './HamMenu';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu 
                            onClick={() => setOpen(!open)}
                        />;
    
    const closeIcon = <GrClose 
                            onClick={() => setOpen(!open)}
                        />;

    return (
        <div class="ham-menu-holder">
            {open ? closeIcon : hamburgerIcon}
            {open && <HamMenu />}
        </div>
    );
}

export default MobileNavigation;