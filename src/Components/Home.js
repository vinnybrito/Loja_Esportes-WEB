import React from "react"
import '../index.css'
import '../Components/css/style.css'
import {Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './img/slideshow01.jpg'
import img2 from './img/slideshow02.jpg'
import img3 from './img/slideshow03.jpg'
import img4 from './img/slideshow04.jpg'


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
                    <img src={img3} alt="tenis"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} alt="acessorios" />
                </Carousel.Item>

            </Carousel>

            <section>

                <article>
                    <img src="" alt="" />
                </article>
                <article>
                    <img src="" alt="" />
                </article>
                <article>
                    <img src="" alt="" />
                </article>

            </section>
        </div>
    )
}