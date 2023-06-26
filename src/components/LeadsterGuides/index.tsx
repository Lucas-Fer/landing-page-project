import React from 'react'
import CardItem from './components/CardItem'

export default function LeadsterGuides() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      {cardArray.map((card) => {
        return <CardItem key={card} />
      })}
      )
    </div>
  )
}
