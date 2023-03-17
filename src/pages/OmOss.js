import React from 'react';
import {Helmet} from 'react-helmet';
import Config from '../Config.json';

import pizzaGreenLeaf from "./../assets/images/pizza-generisk.jpg";

const TITLE = Config.SITE_TITLE + " | Om Oss";
const CHARSET = "utf-8";
const DESC = "Hemsida skapad för ett webbprojekt vid studier på Umeå Universitet. Site ej officiell webbplats för Tegs Pizzeria.";
const KEYWORDS = "Pizza, Teg, Tegs Pizzeria";
const AUTHOR = "Oskar Wahlberg";
const VIEWPORT = "width=device-width, initial-scale=1.0";

class OmOss extends React.Component {
    render() {
        return(
            <main className="page-main om-oss-main">
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href="{CANONICAL}"/>
                    <meta charset={CHARSET}/>
                    <meta name="description" content={DESC}/>
                    <meta name="keywords" content={KEYWORDS}/>
                    <meta name="author" content={AUTHOR}/>
                    <meta name="viewport" content={VIEWPORT}/>
                </Helmet>
                <div className="image-container">
                    <img src={pizzaGreenLeaf} alt="Generisk Pizza med Grönt Löv"/>
                </div>

                <div className="om-oss-text-container">
                    <h1>Om Tegs Pizzeria och Grill</h1>
                    <p>Vi är en pizzeria baserad i Umeå sedan länge. Vi har en varierad mey för alla som kommer till oss. Skapa dina traditioner med vår pizzeria.</p>
                    <p>Med vänlig hälsning, Tegs Pizzeria och Grill</p>
                </div>
            </main>
        );
    }
}

export default OmOss;