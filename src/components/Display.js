import Card from './Card.js'

export default function Display(props) {
    return(
        <div className="display">
            <Card deck={props.deck}/>
        </div>
    )
}

