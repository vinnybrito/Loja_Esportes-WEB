import '../index.css'
import '../Components/css/style.css'
import {useState,useEffect} from 'react'
import camisa01 from './img/camisa01.png'
import camisa02 from './img/camisa02.png'
import camisa03 from './img/camisa03.png'

import camisa04 from './img/CamisaF01.png'
import camisa05 from './img/CamisaF02.png'
import camisa06 from './img/CamisaF03.png'

export default function Camisas() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title =`Você selecionou ${count} peças`
     },[count]);

    return(
        <div id='camisas'>

            <h1 id='camisasM'>Masculino</h1>

            {/*-----------------------PRIMEIRA SEÇÃO-----------------------*/}

            <section id='sec01'>

                <article className='ctn'> {/*-------CAMISA 01-------*/}

                    <div className='imgscamisas'>
                        <img src={camisa01} alt="camisa01" />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>Camisa Qatar Airways - 2022</h2>
                        <p className='preco-riscado'><em><del>R$210,00</del></em></p>
                        <p className='price'>R$150,00</p>
                    </div>

                    <div>
                        <span className='itm'>Items</span>

                        <input type="text" placeholder={count}/>
                        
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>
                        
                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  

                </article>

                <article className='ctn'> {/*-------CAMISA 02-------*/}
                <div className='imgscamisas'>
                        <img src={camisa02} alt="camisa01" />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>Aporia - Youth Sports of America</h2>
                        <p className='preco-riscado'><em><del>R$263,00</del></em></p>
                        <p className='price'>R$150,00</p>
                    </div>

                    <div>
                        <span className='itm'>Items</span>

                        <input type="text" placeholder={count}/>
                        
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>
                        
                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  
                </article>

                <article className='ctn'> {/*-------CAMISA 03-------*/}
                    
                    <div className='imgscamisas'>
                        <img src={camisa03} alt="camisa01" />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>Camisa Qatar Airways - 2022</h2>
                        <p className='preco-riscado'><em><del>R$210,00</del></em></p>
                        <p className='price'>R$150,00</p>
                    </div>

                    <div>
                        <span className='itm'>Items</span>

                        <input type="text" placeholder={count}/>
                        
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>
                        
                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  

                </article>

            </section>

            {/*-----------------------SEGUNDA SEÇÃO-----------------------*/}

            <h1 id='camisasF'>Feminino</h1>

            <section id='sec01'>

                <article className='ctn'> {/*-------CAMISA 04-------*/}
                
                    <div className='imgscamisas'>
                        <img src={camisa04} alt="camisa01" />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>Camisa Qatar Airways - 2022</h2>
                        <p className='preco-riscado'><em><del>R$210,00</del></em></p>
                        <p className='price'>R$150,00</p>
                    </div>

                    <div>
                        <span className='itm'>Items</span>

                        <input type="text" placeholder={count}/>
                        
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>
                        
                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  

                </article>

                <article className='ctn'> {/*-------CAMISA 05-------*/}
                    
                    <div className='imgscamisas'>
                        <img src={camisa05} alt="camisa01" />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>Camisa Qatar Airways - 2022</h2>
                        <p className='preco-riscado'><em><del>R$210,00</del></em></p>
                        <p className='price'>R$150,00</p>
                    </div>

                    <div>
                        <span className='itm'>Items</span>

                        <input type="text" placeholder={count}/>
                        
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>
                        
                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  

                </article>

                <article className='ctn'> {/*-------CAMISA 06-------*/}
                    
                    <div className='imgscamisas'>
                        <img src={camisa06} alt="camisa01" />
                    </div>

                    <div className='info'>
                        <h2 className='namecamisas'>Camisa Qatar Airways - 2022</h2>
                        <p className='preco-riscado'><em><del>R$210,00</del></em></p>
                        <p className='price'>R$150,00</p>
                    </div>

                    <div>
                        <span className='itm'>Items</span>

                        <input type="text" placeholder={count}/>
                        
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>
                        
                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>

                    <div className='btn-comprar'>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  

                </article>

            </section>

            
        </div>
    )
}