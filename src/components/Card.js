import styled from "styled-components";
import Buttons from "./Buttons"
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"

export default function Card(props) {
	const { isOpened, isFliped, setOpened, setFliped, deck } = props;
    const {id, question, answer} = props.card
   console.log(isOpened, isFliped)

   function open(id) {
    debugger;
    if(!isOpened.includes(id)){
        isOpened.pop()
        isOpened.push(id)
        console.log(isOpened)
        console.log(isFliped)
    }
   }
	
	return(
        <>
        {
           (isOpened === [1] && isFliped === []) ? <StyledOpenedCard><h1 data-test="flashcard-test">{question}</h1><img data-test="turn-btn" src={turn} alt="turn"/></StyledOpenedCard> :
           isOpened === [id] && isFliped === [id] ? <StyledOpenedCard><h1 data-test="flashcard-test">{answer}</h1><Buttons /></StyledOpenedCard> : 
           <StyledClosedCard><StyledClosedCardP data-test="flashcard-test">Pergunta {id}</StyledClosedCardP> <img data-test="play-btn" onClick={() => open(id)} src={play} alt="Play"/></StyledClosedCard> 

        //    isOpened === []? <StyledClosedCard><StyledClosedCardP>Pergunta {id}</StyledClosedCardP> <img onClick={() => open(id)} src={play} alt="Play"/></StyledClosedCard> :
        //    isOpened === [id] && isFliped === [] ? <StyledOpenedCard><h1>{question}</h1></StyledOpenedCard> :
        //    isOpened === [id] && isFliped === [id] ? <StyledOpenedCard><h1>{answer}</h1><Buttons /></StyledOpenedCard> : 'unknown' 
        }  
        </>
    ); 
}

const StyledClosedCard = styled.div`
	width: 300px;
	height: 35px;
	background-color: #ffffff;
	margin: 12px;
	padding: 15px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const StyledClosedCardP = styled.p`
	font-family: "Recursive";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	// color: ${(props) => props.color};
	// text-decoration: ${(props) =>
		props.status === "no status" ? "none" : "line-through"};
`;

const StyledOpenedCard = styled.div`
	width: 300px;
	margin: 12px;
	padding: 15px;
	min-height: 100px;
	background: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	font-family: "Recursive";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #333333;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	img {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
	div {
		position: absolute;
		bottom: 10px;
	}
`;

// (
//     {isOpened? isFliped? <StyledOpenedCard>
//         <h1>Azul, otário!</h1>
//         <Buttons />
//     </StyledOpenedCard> : <StyledOpenedCard>
//         <h1>O céu é de que cor?</h1>
// </StyledOpenedCard> : <StyledClosedCard><StyledClosedCardP>Pergunta 1</StyledClosedCardP> <img src={play} alt="Play"/></StyledClosedCard>}
// )
