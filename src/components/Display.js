import Card from "./Card"
import styled from "styled-components";

export default function Display(props) {
    const {deck} = props
    const {isOpened, isFliped, setOpened, setFliped} = props
    console.log(props)
    return(
        <>

            {deck.map((card) => <Card key={card.id} card={card} open={()=> setOpened(card.id)}/>)}
            
        </>
    )
}