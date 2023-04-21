import React from "react"
import '../index.css'
import '../Components/css/style.css'
import {Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './img/imgHome-Camisas.jpg'
import img2 from './img/imgHome-Calças.jpg'
import img3 from './img/imgHome-tenis.jpg'
import img4 from './img/imgHome-Acessorios.jpg'


export default function Home() {
    return(
        <div id="home">
            <h1>Compre nossos produtos</h1>

            <Carousel interval={500}>

                <Carousel.Item>
                    <img src={img1} alt="camisas" height="500px" width=""/>
                    <img src={img2} alt="calças" height="500px" width=""/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={img3} alt="tenis" height="500px" width=""/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} alt="acessorios" height="500px" width=""/>
                </Carousel.Item>

            </Carousel>

            
        </div>
    )
}