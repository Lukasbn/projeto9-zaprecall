import styled from "styled-components"
import seta from "./assets/seta_play.png"
import virar from "./assets/seta_virar.png"

export default function Perguntas({pergunta, resposta , index}) {
    return (
        <Questions>
            <div className="carta">
                <div className="face1">
                    <p>Pergunta {index + 1}</p>
                    <img src={seta} alt="Seguir" />
                </div>

                <div className="face2">
                    <p>{pergunta}</p>
                    <img src={virar} alt="Seguir" />
                </div>

                <div className="face3">
                    <p>{resposta}</p>
                    <div className="botoes">
                        <button className="falha">
                            Não lembrei
                        </button>

                        <button className="quase">
                            Quase não lembrei
                        </button>

                        <button className="acerto">
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
        margin-bottom: 25px;
        position: relative;
    }


    .face1{
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

        p{
            font-family: 'Recursive', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color:#333333;
        };

        img{
            width: 20px ;
            height: 23px ;
        }
    }

    .face2{
        width:300px;
        min-height: 130px;
        border-radius:5px;
        background-color:#FFFFD4;
        box-shadow: 0px 4px 5px 0px #00000026;
        position: relative;
        
        p{
            padding-top:20px;
            padding-left: 15px;
            padding-bottom: 35px;
        };

        img{
            position: absolute;
            bottom: 6px;
            right: 15px;
            width: 30px;
            height: 20px;
        }
    }

    .face3{
        width:300px;
        min-height: 130px;
        border-radius:5px;
        background-color:#FFFFD4;
        box-shadow: 0px 4px 5px 0px #00000026;
        position: relative;

        p{
            padding-top:20px;
            padding-left: 15px;
            padding-bottom: 35px;
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