import React from 'react';
import {Helmet} from 'react-helmet';
import Config from '../Config.json';

import ImageSlider from "./../components/ImageSlider";

const slides = [
    { url: "http://localhost:3000/pizza_generisk.jpg", title: "Pizza Generisk" },
    { url: "http://localhost:3000/uppdelad_pizza_med_pizza_slicer.jpg", title: "Uppdelad Pizza Slicer" },
    { url: "http://localhost:3000/pizza_over_the_top.jpg", title: "Pizza Over The Top" },
    { url: "http://localhost:3000/fyrkantig_pizza.jpg", title: "Fyrkantig Pizza" },
];

const TITLE = Config.SITE_TITLE + " | Hem";
const CHARSET = "utf-8";
const DESC = "Hemsida skapad för ett webbprojekt vid studier på Umeå Universitet. Site ej officiell webbplats för Tegs Pizzeria.";
const KEYWORDS = "Pizza, Teg, Tegs Pizzeria";
const AUTHOR = "Oskar Wahlberg";
const VIEWPORT = "width=device-width, initial-scale=1.0";

class Index extends React.Component {
    render() {
        return(
            <main class="page-main index-main">
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href="{CANONICAL}"/>
                    <meta charset={CHARSET}/>
                    <meta name="description" content={DESC}/>
                    <meta name="keywords" content={KEYWORDS}/>
                    <meta name="author" content={AUTHOR}/>
                    <meta name="viewport" content={VIEWPORT}/>
                </Helmet>
                <ImageSlider slides={slides}/>

                <div className="dagens-lunch">
                    <h1>Dagens Lunch - 90 kr</h1>
                    <h2>Mån - Fre: kl. 11.00 - 14.00</h2>
                    <p>Välj valfri rätt från hela menyn</p>
                </div>
            </main>
        );
    }
}

export default Index;