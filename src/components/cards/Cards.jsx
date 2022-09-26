import React from 'react'
import { CardsData } from '../../data/Data'
import './CardsStyle.css'
import Card from '../card/Card'

const Cards = () => {
    return (
        <div className="Cards">
            {CardsData.map((card, id)=>{
            return (
                <div className="parentContainer">
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    
                    
                    
                    />
                </div>
            )
        })}
        </div>
    )
}

export default Cards