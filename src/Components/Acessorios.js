import '../index.css'
import '../Components/css/style.css'

import {useState,useEffect} from 'react'
import camisa01 from './img/Calças/calcaM01.png'
import camisa02 from './img/Calças/calcaM02.png'
import camisa03 from './img/Calças/calcaM03.png'

import camisa04 from './img/Calças/calcaF01.png'
import camisa05 from './img/Calças/calcaF02.png'
import camisa06 from './img/Calças/calcaF03.png'

function Calca({ calca }) {
    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(parseFloat(calca.preco));

    useEffect(() => {
        setPrecoTotal(parseFloat(calca.preco) * quantidade);
    }, [quantidade, calca.preco]);

    return (
          <div className='camisas'>

            <section className='sec01'>
                <article className='ctn' key={calca.id}>

                    <div className='imgscamisas'>
                        <img src={calca.imagem} alt={calca.nome} />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>{calca.nome}</h2>
                        
                        <p className='price'>R$: {precoTotal.toFixed(2)}</p>
                    </div>

                    <div>
                        <label htmlFor={`quantidade-${calca.id}`} className='itm'>Items</label>

                        <input id={`quantidade-${calca.id}`} type="number" value={quantidade} onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (newQuantity >= 1) {
                                setQuantidade(newQuantity);
                                }
                            }
                        }
                        />
                        
                        <button className='btn-click' id={`quantidade-${calca.id}`} type="text" value={quantidade} onClick={() => setQuantidade(quantidade +1)}
                        >+</button>

                        <button className='btn-click' id={`quantidade-${calca.id}`} type="text" value={quantidade} 
                        
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

export default function Calcas() {

    const calcas01 = [
        {
          id: 1,
          imagem: camisa01,
          nome: "Calça esportiva - Adidas",
          preco: "210.50",
        },
        {
          id: 2,
          imagem: camisa02,
          nome: "Calça esportiva - Nike",
          preco: "235.99",
        },
        {
          id: 3,
          imagem: camisa03,
          nome: "Calça esportiva - Puma",
          preco: "228.00",
        },
      ];

      const calcas02 = [
        {
          id: 4,
          imagem: camisa04,
          nome: "Calça esportiva - Adidas",
          preco: "399.99",
        },
        {
          id: 5,
          imagem: camisa05,
          nome: "Calça esportiva - Legging",
          preco: "361.00",
        },
        {
          id: 6,
          imagem: camisa06,
          nome: "Calça esportiva - Nike",
          preco: "385.00",
        },
      ];

    return(
        <div className='camisas'>
            <h1 className='camisasM'>Masculino</h1>
            <div className='sec01'>
                {calcas01.map((calcas) => (
                     <Calca calca={calcas} key={calcas.id} />
                ))}
            </div>
                
            <h1 className='camisasF'>Feminino</h1>
            <div className='sec01'>
                {calcas02.map((calcas) => (
                    <Calca calca={calcas} key={calcas.id} />
                ))}
            </div>

      </div>
    )
}