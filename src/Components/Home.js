import React from "react"
import '../index.css'
import '../Components/css/style.css'
import {Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import img1 from './img/slideshow01.png'
import img2 from './img/slideshow02.png'
import img3 from './img/slideshow03.png'



export default function Home() {
    return(
        <div id="home">

            <Carousel interval={2500}>

                <Carousel.Item>
                    <img src={img1} alt="camisas"/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={img2} alt="calças"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} alt="calças"/>
                </Carousel.Item>


            </Carousel>

            <section id="container">

                <article className="box" id="cstyle">
                    <p className="link-pages">
                        Camisas
                    </p>
                </article>

                <article className="box" id="cstylec">
                    <p className="link-pages">Calças</p>
                </article>

                <article className="box" id="astyle">
                    <p className="link-pages">Acessórios</p>
                </article>

            </section>
        </div>
    )
}