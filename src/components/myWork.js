import React from 'react'

import SearchPage from "../../static/assets/works/searchpage.jpg";
import EcommercePage from "../../static/assets/works/ecomerceweb.jpg";
import Funnybooks from "../../static/assets/works/funnybooksweb.jpg";
import PortfolioWeb from "../../static/assets/works/portfolioproject.jpg";

const MyWork = () => {

    return (
        <div className='mywork-wrapper'>
            <h1>My Work</h1>
            <div className="works-wrapper">
                <div className="work">
                    <a href=""><img src={SearchPage}/></a>
                    <p>Web de búsqueda, React, Redux...</p>
                </div>
                <div className="work">
                    <a href=""><img src={EcommercePage}/></a>
                    <p>Proyecto de Ecommerce, React, Redux...</p>
                </div>
                <div className="work">
                    <a href=""><img src={Funnybooks}/></a>
                    <p>Proyecto en proceso de web de libros interactivos,<br/>React, Mobx, para el Back, Python, Django...</p>
                </div>
                <div className="work">
                    <a href=""><img src={PortfolioWeb}/></a>
                    <p>Proyecto de portafolio, React...</p>
                </div>
            </div>
        </div>
    )
}


export default MyWork;
