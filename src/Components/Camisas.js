import '../index.css'
import '../Components/css/style.css'
import { useState, useEffect } from 'react'

import camisa01 from './img/Camisas/camisa01.png'
import camisa02 from './img/Camisas/camisa02.png'
import camisa03 from './img/Camisas/camisa03.png'
import camisa04 from './img/Camisas/CamisaF01.png'
import camisa05 from './img/Camisas/CamisaF02.png'
import camisa06 from './img/Camisas/CamisaF03.png'

function Camisa({ camisa }) {
    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(parseFloat(camisa.preco));

    useEffect(() => {
        setPrecoTotal(parseFloat(camisa.preco) * quantidade);
    }, [quantidade, camisa.preco]);

    return (
          <div className='camisas'>

            <section className='sec01'>

                <article className='ctn' key={camisa.id}>

                    <div className='imgscamisas'>
                        <img src={camisa.imagem} alt={camisa.nome} />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>{camisa.nome}</h2>
                        
                        <p className='price'>R$: {precoTotal.toFixed(2)}</p>
                    </div>

                    <div>
                        <label htmlFor={`quantidade-${camisa.id}`} className='itm'>Items</label>

                        <input id={`quantidade-${camisa.id}`} type="number" value={quantidade} onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (newQuantity >= 1) {
                                setQuantidade(newQuantity);
                                }
                            }
                        }
                        />
                        
                        <button className='btn-click' id={`quantidade-${camisa.id}`} type="text" value={quantidade} onClick={() => setQuantidade(quantidade +1)}
                        >+</button>

                        <button className='btn-click' id={`quantidade-${camisa.id}`} type="text" value={quantidade} 
                        
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

export default function Camisas() {

    const camisas01 = [
        {
          id: 1,
          imagem: camisa01,
          nome: "Camisa Qatar Airways - 2022",
          preco: "150.00",
        },
        {
          id: 2,
          imagem: camisa02,
          nome: "Aporia - Youth Sports of America",
          preco: "250.00",
        },
        {
          id: 3,
          imagem: camisa03,
          nome: "Aporia - Unitus Sports of America",
          preco: "175.50",
        },
      ];

      const camisas02 = [
        {
          id: 4,
          imagem: camisa04,
          nome: "Camisa Feminina Da Nike- PSG",
          preco: "348.00",
        },
        {
          id: 5,
          imagem: camisa05,
          nome: "Camisa do clube Feminio São Paulino",
          preco: "260.00",
        },
        {
          id: 6,
          imagem: camisa06,
          nome: "Camisa da seleção Brasileira",
          preco: "189.00",
        },
      ];

    return(
        <div className='camisas'>
            <h1 className='camisasM'>Masculino</h1>
            <div className='sec01'>
                {camisas01.map((camisas) => (
                     <Camisa camisa={camisas} key={camisas.id} />
                ))}
            </div>
                
            <h1 className='camisasF'>Feminino</h1>
            <div className='sec01'>
                {camisas02.map((camisas) => (
                    <Camisa camisa={camisas} key={camisas.id} />
                ))}
            </div>

      </div>
    )
}