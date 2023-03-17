import React from 'react';
import {Helmet} from 'react-helmet';
import Config from '../Config.json';

import pizzaGreenLeaf from "./../assets/images/pizza-generisk.jpg";
import slicedPizzaWithSlicer from "./../assets/images/uppdelad-pizza-med-pizza-slicer.jpg";

const TITLE = Config.SITE_TITLE + " | Öppettider";
const CHARSET = "utf-8";
const DESC = "Hemsida skapad för ett webbprojekt vid studier på Umeå Universitet. Site ej officiell webbplats för Tegs Pizzeria.";
const KEYWORDS = "Pizza, Teg, Tegs Pizzeria";
const AUTHOR = "Oskar Wahlberg";
const VIEWPORT = "width=device-width, initial-scale=1.0";

class Oppettider extends React.Component {
    render() {
        return(
            <main className="page-main oppettider-main">
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href="{CANONICAL}"/>
                    <meta charset={CHARSET}/>
                    <meta name="description" content={DESC}/>
                    <meta name="keywords" content={KEYWORDS}/>
                    <meta name="author" content={AUTHOR}/>
                    <meta name="viewport" content={VIEWPORT}/>
                </Helmet>
                <div className="main-header">
                    <h2>Öppettider</h2>
                </div>

                <div className="main-sub-header">
                    <div className="msh-text">
                        <h4>Mån - Fre</h4>
                        <h4>11 - 20</h4>
                    </div>

                    <div className="msh-text">
                        <h4>Lör - Sön</h4>
                        <h4>12 - 20</h4>
                    </div>
                </div>

                <div className="banner-container">
                    <h3>Välkomna in!</h3>
                </div>

                <div className="main-division-container">
                    <div className="main-division-left">
                        <div className="image-container">
                            <img src={pizzaGreenLeaf} alt="Generisk Pizza med Grönt Löv"/>
                        </div>

                        <div className="mdc-text-container">
                            <div className="mdctc-top">
                                <h4>Lunch</h4>
                                <h4>90 kr</h4>
                            </div>

                            <div className="mdctc-sub">
                                <p>Mån - Fre</p>
                                <p>kl. 11.00 - 14.00</p>
                            </div>

                            <div className="mdctc-text">
                                <p>Välj valfri rätt från hela menyn.</p>
                                <p>Ingår: Dricka, Kaffe, Bröd & Smör</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-division-right">
                        <div className="image-container">
                            <img src={slicedPizzaWithSlicer} alt="Uppdelad Pizza med Pizza Slicer"/>
                        </div>

                        <div className="mdc-text-container">
                            <div className="mdctc-top">
                                <h4>Special Vardags Erbjudande</h4>
                                <h4>140 kr</h4>
                            </div>

                            <div className="mdctc-sub">
                                <p>Mån - Fre</p>
                                <p>kl. 14.00 - 20.00</p>
                            </div>

                            <div className="mdctc-text">
                                <p>Välj valfritt 2 pizzor bland nummer (1 - 8)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-bottom-text-container">
                    <div className="mbtc-top">
                        <p>Extra stor pizza kostar</p>
                        <p>40 kr extra</p>
                    </div>

                    <div className="mbtc-mid">
                        <p>Glutenfri pizzabotten kostar</p>
                        <p>25 kr extra</p>
                    </div>

                    <div className="mbtc-bottom">
                        <p>Barnpizzor</p>
                        <p>10 kr billigare än originalpris</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Oppettider;