import React from 'react'
import CardItem from './components/CardItem'
import { GetStaticProps } from 'next'

export default function LeadsterGuides(props) {
  console.log('dataProps', props)

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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('api/youtube')
    const data = await response.json()

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      props: {
        data: [],
        error,
      },
    }
  }
}
