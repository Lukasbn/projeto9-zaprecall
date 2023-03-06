import styled from "styled-components"
import logo from "./assets/logo.png"
import Perguntas from "./Perguntas"
import cards from "./cards"
import { useState } from "react"

export default function Pagina() {
    const [finalizados, setFinalizados] = useState(0)
    
    return (
        <Corpo>
            <Cabeçalho>
                <div>
                    <img src={logo} alt="Logo" />
                    <p>ZapRecall</p>
                </div>
            </Cabeçalho>
            {cards.map((card, index) =>
                <Perguntas
                    resposta={card.answer}
                    pergunta={card.question}
                    index={index}
                    setFinalizados={setFinalizados}
                    finalizados={finalizados}
                    key={card.question}
                />
            )}
            <Rodapé>
                <p data-test="footer" >{finalizados}/{cards.length} CONCLUÍDOS</p>
            </Rodapé>
        </Corpo>
    )
}

const Corpo = styled.div`
    border: 1px solid #DBDBDB;
    background-color: #FB6B6B;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom:80px;
`

const Cabeçalho = styled.header`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 60px;

    div{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 60px
    }

    img{
        width:52px;
        height:60px;
    }

    p{
        font-family: 'Righteous', cursive;
        font-weight:400;
        font-size: 36px;
        line-height: 45px;
        width: 205px;
        height: 45px;
        text-align: Center;
        color: #FFFFFF;
    }
`

const Rodapé = styled.footer`
    box-shadow: 0px -4px 6px 0px #0000000D;
    background-color: #FFFFFF;
    height: 70px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
    }
`