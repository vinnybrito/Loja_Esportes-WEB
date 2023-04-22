import '../index.css'
import '../Components/css/style.css'
import {useState,useEffect} from 'react'
import camisa01 from './img/camisa01.png'
import camisa02 from './img/camisa02.png'
import camisa03 from './img/camisa03.png'

export default function Camisas() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        fetch()
    },[])

    return(
        <div id='camisas'>

            <h1 id='camisasM'>Masculino</h1>

            {/*-----------------------PRIMEIRA SEÇÃO-----------------------*/}

            <section id='sec01'>

                <article className='ctn'>

                    <div>
                        <img src={camisa01} alt="camisa01" />
                    </div>

                    <div className='info'>

                    </div>

                    <div>
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>

                        <input type="text" placeholder={count}/>

                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>   
                    <div>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  
                </article>

                <article className='ctn'>
                    <div>
                        <img src={camisa02} alt="camisa01" />
                    </div>

                    <div className='info'>

                    </div>

                    <div>
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>

                        <input type="text" placeholder={count}/>

                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>   
                    <div>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>
                </article>

                <article className='ctn'>
                    <div>
                        <img src={camisa03} alt="camisa01" />
                    </div>

                    <div className='info'>

                    </div>

                    <div>
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>

                        <input type="text" placeholder={count}/>

                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>   
                    <div>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>
                </article>

            </section>

            {/*-----------------------SEGUNDA SEÇÃO-----------------------*/}

            <section id='sec01'>

                <article className='ctn'>

                    <div>
                        <img src={camisa01} alt="camisa01" />
                    </div>

                    <div className='info'>

                    </div>

                    <div>
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>

                        <input type="text" placeholder={count}/>

                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>   
                    <div>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>  
                </article>

                <article className='ctn'>
                    <div>
                        <img src={camisa02} alt="camisa01" />
                    </div>

                    <div className='info'>

                    </div>

                    <div>
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>

                        <input type="text" placeholder={count}/>

                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>   
                    <div>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>
                </article>

                <article className='ctn'>
                    <div>
                        <img src={camisa03} alt="camisa01" />
                    </div>

                    <div className='info'>

                    </div>

                    <div>
                        <button className='btn-click' onClick={() => setCount(count +1)}>+</button>

                        <input type="text" placeholder={count}/>

                        <button className='btn-click' onClick={() => setCount(count -1)}>-</button>
                    </div>   
                    <div>
                        <input type="submit" value="Comprar" className="classComprar"></input>
                    </div>
                </article>

            </section>

            <h1 id='camisasF'>Feminino</h1>
        </div>
    )
}