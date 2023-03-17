import React from 'react';
import {Helmet} from 'react-helmet';
import Config from '../Config.json';

const TITLE = Config.SITE_TITLE + " | Kontakt";
const CHARSET = "utf-8";
const DESC = "Hemsida skapad för ett webbprojekt vid studier på Umeå Universitet. Site ej officiell webbplats för Tegs Pizzeria.";
const KEYWORDS = "Pizza, Teg, Tegs Pizzeria";
const AUTHOR = "Oskar Wahlberg";
const VIEWPORT = "width=device-width, initial-scale=1.0";

class Kontakt extends React.Component {
    render() {
        return(
            <main className="page-main kontakt-main">
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href="{CANONICAL}"/>
                    <meta charset={CHARSET}/>
                    <meta name="description" content={DESC}/>
                    <meta name="keywords" content={KEYWORDS}/>
                    <meta name="author" content={AUTHOR}/>
                    <meta name="viewport" content={VIEWPORT}/>
                </Helmet>
                <div className="main-left">
                    <h1>Kontakt:</h1>
                    <p>Telefon: 090 - 13 20 15</p>
                    <p>Address: Bryggaregatan 46, 904 33 Umeå</p>
                    <p>E-post: info@tegspizzeria.nu</p>
                </div>
                
                <div className="main-right">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe id="gmap_canvas" title="Google Maps Location" src="https://maps.google.com/maps?q=Tegs%20Pizzeria&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Kontakt;