import React from 'react';
import {Helmet} from 'react-helmet';
import Config from '../Config.json';

const TITLE = Config.SITE_TITLE + " | Meny";
const CHARSET = "utf-8";
const DESC = "Hemsida skapad för ett webbprojekt vid studier på Umeå Universitet. Site ej officiell webbplats för Tegs Pizzeria.";
const KEYWORDS = "Pizza, Teg, Tegs Pizzeria";
const AUTHOR = "Oskar Wahlberg";
const VIEWPORT = "width=device-width, initial-scale=1.0";

class Meny extends React.Component {
    render() {
        return(
            <main className="page-main meny-main">
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href="{CANONICAL}"/>
                    <meta charset={CHARSET}/>
                    <meta name="description" content={DESC}/>
                    <meta name="keywords" content={KEYWORDS}/>
                    <meta name="author" content={AUTHOR}/>
                    <meta name="viewport" content={VIEWPORT}/>
                </Helmet>
                <div className="category-container top-container">
                    <h1>Pizza</h1>
                    <div className="items-container">
                        <ul className="item-list">
                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Margarita</h2>
                                    <p className="item-description">Tomatsås, ost</p>
                                </div>

                                <div className="item-price">
                                    <p>80 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Vesuvio</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Caprissioca</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Färska Champinjoner</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Hawaii</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Ananas</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Milano</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Pepperoni Korv, Lök</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Bussola</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Räkor</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Opera</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Tonfisk</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Isabella</h2>
                                    <p className="item-description">Tomatsås, Ost, Räkor, Tonfisk</p>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Quattro Stagioni</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Champinjoner, Räkor, Oliver, Kronärtskocka</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Hawaii Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Ananas, Curry, Banan</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Mamma Mia</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Champinjoner, Räkor, Paprika, Lök</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Maxim</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Räkor, Champinjoner</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Azteka</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Jalapeno, Tacosås, Lök, Vitlök</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Amanda</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Köttfärs, Lök, Pepperoni, Tomat</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Vegetarisk</h2>
                                    <p className="item-description">Tomatsås, Ost, Champinjoner, Ananas, Oliver, Färska Tomater, Paprika</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Salvadore</h2>
                                    <p className="item-description">Tomatsås, Ost, Salami, Köttfärs, Lök, Pepperoni</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Cacciatore</h2>
                                    <p className="item-description">Tomatsås, Ost, Salami, Oliver, Färska Tomater</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Fyra ost</h2>
                                    <p className="item-description">Tomatsås, Ost, Mozzarella, Fetaost, Gorgonzola och Chevre</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Mexicana</h2>
                                    <p className="item-description">Tomatsås, Ost, Köttfärs, Lök, Jalapeno, Vitlök, Hotsås</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Maffia</h2>
                                    <p className="item-description">Tomatsås, Ost, Köttfärs, Lök, Paprika, Ägg</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Gyrospizza</h2>
                                    <p className="item-description">Tomatsås, Ost, Gyros, Tomater, Lök, Pepperoni, Vitlöksdressing</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Kycklingpizza</h2>
                                    <p className="item-description">Tomatsås, Ost, Kyckling, Lök, Tomater, Pepperoni, Vitlöksdressing</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Indiana</h2>
                                    <p className="item-description">Tomatsås, Ost, Kyckling, Ananas, Banan, Curry</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Kebabpizza</h2>
                                    <p className="item-description">Tomatsås, Ost, Kebak, Lök, Tomater, Pepperoni, Kebabsås</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Hot Pepper</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Salami, Lök, Pepperoni, Starksås</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Björklöven Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Champinjoner, Räkor, Färsk Vitlök, Bearnaisesås</p>
                                </div>

                                <div className="item-price">
                                    <p>100 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Kyckling Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Kyckling, Pommes, Lök, Tomater, Pepperoni, Isbergssallad, Vitlökssås</p>
                                </div>

                                <div className="item-price">
                                    <p>110 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Havets Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Musslor, Crabfish, Räkor, Tonfisk</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Tegs Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Oxfile, Lök, Färska Tomater, Champinjoner, Bearnaisesås</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Acapulco Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Oxfile, Champinjoner, Lök, Jalapeno, Tacosås</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Gorgonzola Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Oxfile, Gorgonzolaost, Tomater, Bearnaisesås</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Kebab Special</h2>
                                    <p className="item-description">Tomatsås, Ost, Kebab, Pommes, Lök, Tomat, Pepperoni, Isbergssallad, Sås</p>
                                </div>

                                <div className="item-price">
                                    <p>110 kr</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="category-container top-container">
                    <h1>Ostkant Pizzor</h1>
                    <div className="items-container">
                        <ul className="item-list">
                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Ostkant NR 1</h2>
                                    <p className="item-description">Tomatsås, Ost, Skinka, Salami, Kebabsås</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Ostkant NR 2</h2>
                                    <p className="item-description">Tomatsås, Ost, Bacon, Lök, Ägg, Salami</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Ostkant NR 3</h2>
                                    <p className="item-description">Tomatsås, Ost, Oxfile, Champinjoner, Lök, Färska Tomater, Bearnaisesås</p>
                                </div>

                                <div className="item-price">
                                    <p>115 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Ostkant NR 4</h2>
                                    <p className="item-description">Kyckling, Färska Champinjoner, Vitlöksdressing</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text">
                                    <h2 className="item-title">Ostkant NR 5</h2>
                                    <p className="item-description">Kebab, Lök, Färska Tomater, Pepperoni, Kebabsås</p>
                                </div>

                                <div className="item-price">
                                    <p>105 kr</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="category-container top-container">
                    <h1>Sallader</h1>
                    <div className="items-container">
                        <ul className="item-list">
                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Kycklingsallad</h2>
                                    <p className="item-description">Kyckling, Isbergssallad, Tomat, Lök, Paprika, Vitlöksdressing, Färskt Bröd</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Kebabsallad</h2>
                                    <p className="item-description">Kebab, Isbergssallad, Tomat, Gurka, Lök, Pepperoni, Kebabsås, Färskt Bröd</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text">
                                    <h2 className="item-title">Skinksallad</h2>
                                    <p className="item-description">Skinka, Ost, Isbergssallad, Tomat, Gurka, Lök, Ananas, Kebabsås, Färskt Bröd</p>
                                </div>

                                <div className="item-price">
                                    <p>95 kr</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="category-container top-container">
                    <h1>Hamburgare Meny</h1>
                    <div className="items-container">
                        <ul className="item-list">
                            <li className="item">
                                <div className="item-text item-text-ham">
                                    <h2 className="item-title">Skrovmål 90 G</h2>
                                </div>

                                <div className="item-price">
                                    <p>80 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text item-text-ham">
                                    <h2 className="item-title">Superskrovmål 90 G *2</h2>
                                </div>

                                <div className="item-price">
                                    <p>90 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text item-text-ham">
                                    <h2 className="item-title">Miniskrovmål 45 G</h2>
                                </div>

                                <div className="item-price">
                                    <p>65 kr</p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="item-text item-text-ham">
                                    <h2 className="item-title">Megaskrovmål 150 G *2</h2>
                                </div>

                                <div className="item-price">
                                    <p>104 kr</p>
                                </div>
                            </li>

                            <li className="item last-item">
                                <div className="item-text item-text-ham">
                                    <h2 className="item-title">Stripstallrik med dressing</h2>
                                </div>

                                <div className="item-price">
                                    <p>55 kr</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default Meny;