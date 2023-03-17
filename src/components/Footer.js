import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer">
                <div className="footer-section footer-section-left">
                    <p>WS &#169; 2023</p>
                </div>

                <div className="footer-section footer-section-mid">
                    <p className="fsm-p">Öppettider</p>
                    <p className="fsm-p">Mån - Fre   11.00 - 20.00</p>
                    <p className="fsm-p">Lör - Sön   12.00 - 20.00</p>
                    <p className="fsm-s-p">Dagens Lunch</p>
                    <p className="fsm-p">Mån - Fre   11.00 - 14.00</p>
                </div>

                <div className="footer-section footer-section-right">
                    <p className="fsr-p">Tegs Pizzeria & Grill Kontakt:</p>
                    <p className="fsr-p">Tel: 090 - 13 20 15</p>
                    <p className="fsr-p">Address: Bryggargatan 46, Umeå</p>
                </div>
            </footer>
        );
    }
}

export default Footer;