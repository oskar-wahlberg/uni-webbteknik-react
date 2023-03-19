import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

class Header extends React.Component {
    render() {
        return(
            <header className="page-header">
                <div className="page-title-container">
                    <a href="/">Tegs Pizzeria & Grill</a>
                </div>

                <div className="page-nav-container">
                    <nav className="top-nav" id="nav-holder">
                        <DesktopNavigation />
                        <MobileNavigation />
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;