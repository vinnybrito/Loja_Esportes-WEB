import '../index.css'
import '../Components/css/style.css'

import {useState,useEffect} from 'react'
import acessorio01 from './img/Acessorios/Ac01.png'
import acessorio02 from './img/Acessorios/Ac02.png'
import acessorio03 from './img/Acessorios/Ac03.png'

import acessorio04 from './img/Acessorios/Ac04.png'
import acessorio05 from './img/Acessorios/Ac05.png'
import acessorio06 from './img/Acessorios/Ac06.png'

import video from './movie/VideoS.mp4'


function Acessorio({ acessorio }) {
    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(parseFloat(acessorio.preco));

    useEffect(() => {
        setPrecoTotal(parseFloat(acessorio.preco) * quantidade);
    }, [quantidade, acessorio.preco]);

    return (
          <div>

            <section className='sec01'>
                <article className='ctn' key={acessorio.id}>

                    <div className='imgscamisas'>
                        <img src={acessorio.imagem} alt={acessorio.nome} />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>{acessorio.nome}</h2>
                        
                        <p className='price'>R$: {precoTotal.toFixed(2)}</p>
                    </div>

                    <div>
                        <label htmlFor={`quantidade-${acessorio.id}`} className='itm'>Items</label>

                        <input id={`quantidade-${acessorio.id}`} type="number" value={quantidade} onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (newQuantity >= 1) {
                                setQuantidade(newQuantity);
                                }
                            }
                        }
                        />
                        
                        <button className='btn-click' id={`quantidade-${acessorio.id}`} type="text" value={quantidade} onClick={() => setQuantidade(quantidade +1)}
                        >+</button>

                        <button className='btn-click' id={`quantidade-${acessorio.id}`} type="text" value={quantidade} 
                        
                        onClick={() => {
                            setQuantidade(quantidade -1)
                        }}
                        
                       >-</button>
                        
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  

                </article>
            </section>     
            
          </div>
        
      );
}

export default function Acessorios() {

    const acessorios01 = [
        {
          id: 1,
          imagem: acessorio01,
          nome: "Boné do Palmeiras",
          preco: "75.50",
        },
        {
          id: 2,
          imagem: acessorio02,
          nome: "Garrafa D'água - NewB",
          preco: "99.99",
        },
        {
          id: 3,
          imagem: acessorio03,
          nome: "Bola de futebol - Grêmio",
          preco: "53.00",
        },
      ];

      const acessorios02 = [
        {
          id: 4,
          imagem: acessorio04,
          nome: "Almofada Corinthians",
          preco: "36.00",
        },
        {
          id: 5,
          imagem: acessorio05,
          nome: "Baralho do Flamengo",
          preco: "25.00",
        },
        {
          id: 6,
          imagem: acessorio06,
          nome: "Chaveiro do Brasil",
          preco: "15.00",
        },
      ];

    return(
        <div className='camisas'>

            <div>
                <video src={video} autoPlay muted loop></video>
                <div className='content'>
                    <h1>Acessórios</h1>
                </div>
            </div>
            
            <div className='sec01'>
                {acessorios01.map((acessorios) => (
                     <Acessorio acessorio={acessorios} key={acessorios.id} />
                ))}
            </div>
                
            
            <div className='sec01'>
                {acessorios02.map((acessorios) => (
                    <Acessorio acessorio={acessorios} key={acessorios.id} />
                ))}
            </div>

      </div>
    )
}