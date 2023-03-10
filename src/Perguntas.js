import { useState } from "react"
import styled from "styled-components"
import seta from "./assets/seta_play.png"
import virar from "./assets/seta_virar.png"
import iconeCerto from "./assets/icone_certo.png"
import iconeErrado from "./assets/icone_erro.png"
import iconeQuase from  "./assets/icone_quase.png"

export default function Perguntas({pergunta, resposta , index, setFinalizados, finalizados}) {
    const [cardAtual, setCardAtual] = useState(1)
    const [respostas, setRespostas] = useState('')
    function proximaEtapa(){
        const proximo = cardAtual + 1 ;
        setCardAtual(proximo)
    }

    function errou(){
        setCardAtual(1);
        setRespostas('#FF3030')
        const atualizar = finalizados +1
        setFinalizados(atualizar)
    }

    function acertou(){
        setCardAtual(1);
        setRespostas('#2FBE34')
        const atualizar = finalizados +1
        setFinalizados(atualizar)
    }

    function porpouco(){
        setCardAtual(1);
        setRespostas('#FF922E')
        const atualizar = finalizados +1
        setFinalizados(atualizar)
    }
    const reavaliar2 = [respostas==="#2FBE34" ? <img data-test="zap-icon" src={iconeCerto} alt="Acertou" /> : <img data-test="partial-icon" src={iconeQuase} alt="Quase" />]


    const reavaliar = [respostas==="#FF3030" ? <img data-test="no-icon" src={iconeErrado} alt="Errou" /> : reavaliar2]
   
    const ternarioImagem = [respostas==="" ? <img data-test="play-btn" onClick={proximaEtapa} src={seta} alt="Seguir" /> : reavaliar]
   
    return (
        <Questions cardAtual={cardAtual} respostas={respostas}>
            <div data-test="flashcard" className="carta">
                <div className="face1">
                    <p data-test="flashcard-text" >Pergunta {index + 1}</p>
                    {ternarioImagem}
                </div>

                <div className="face2">
                    <p data-test="flashcard-text" >{pergunta}</p>
                    <img data-test="turn-btn" onClick={proximaEtapa} src={virar} alt="Seguir" />
                </div>

                <div className="face3">
                    <p data-test="flashcard-text" >{resposta}</p>
                    <div className="botoes">
                        <button data-test="no-btn" onClick={errou} className="falha">
                            N??o lembrei
                        </button>

                        <button data-test="partial-btn" onClick={porpouco} className="quase">
                            Quase n??o lembrei
                        </button>

                        <button data-test="zap-btn" onClick={acertou} className="acerto">
                            Zap!
                        </button>
                    </div>
                </div>

            </div>
        </Questions>
    )
}

const Questions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .carta{
        margin-bottom: ${ props => props.cardAtual===3 ? '85px' : '25px'};
        position: relative;
    }


    .face1{
        position: absolute;
        top: 0px;
        width:300px;
        height:65px ;
        border-radius:5px;
        background-color:#FFFFFF;
        box-shadow: 0px 4px 5px 0px #00000026;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        visibility: ${ props => props.cardAtual===1 ? "" : 'hidden'};

        p{
            font-family: 'Recursive', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: ${ prop => prop.respostas === '' ? '#333333' : prop.respostas};
            text-decoration: ${ prop => prop.respostas === '' ? '#333333' : "line-through"};
        };

        img{
            width: 20px ;
            height: 20px ;
        }
    }

    .face2{
        position: absolute;
        top: 0px;
        width:300px;
        min-height: ${ props => props.cardAtual===2 ? '130px' : '65px'};
        border-radius:5px;
        background-color:#FFFFD4;
        box-shadow: 0px 4px 5px 0px #00000026;
        position: relative;
        visibility: ${ props => props.cardAtual===2 ? "" : 'hidden'};
        box-sizing: border-box;
        
        
        p{
            padding-top:20px;
            padding-left: 15px;
            padding-right: 15px;
            padding-bottom: 35px;
            font-family: 'Recursive', sans-serif;
            font-weight: 400;
            font-size: ${ props => props.cardAtual===2 ? "18px" : '0px'};
            line-height: 21px;
            color:#333333;
        };

        img{
            position: absolute;
            bottom: 6px;
            right: 15px;

        }
    }

    .face3{
        position: absolute;
        top: 0px;
        width:300px;
        min-height: ${ props => props.cardAtual===3 ? '130px' : '65px'};
        border-radius:5px;
        background-color:#FFFFD4;
        box-shadow: 0px 4px 5px 0px #00000026;
        visibility: ${ props => props.cardAtual===3 ? "" : 'hidden'};

        p{
            padding-top:20px;
            padding-left: 15px;
            padding-right: 15px;
            padding-bottom: 60px;
            font-family: 'Recursive', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color:#333333;
        }

        div{
            display:flex;
            justify-content: space-evenly;
            position: absolute;
            bottom: 10px;
            width: 100%;
        }

        .falha{
            width: 85px;
            height: 37px;
            border-radius: 5px;
            background-color: #FF3030;
            border: none;
            font-family: 'Recursive', sans-serif;
            font-weight:400;
            color:#FFFFFF ;
        }

        .quase{
            width: 85px;
            height: 37px;
            border-radius: 5px;
            background-color: #FF922E;
            border: none;
            font-family: 'Recursive', sans-serif;
            font-weight:400;
            color:#FFFFFF ;
        }

        .acerto{
            width: 85px;
            height: 37px;
            border-radius: 5px;
            background-color: #2FBE34;
            border: none;
            font-family: 'Recursive', sans-serif;
            font-weight:400;
            color:#FFFFFF ;
        }
    }

`