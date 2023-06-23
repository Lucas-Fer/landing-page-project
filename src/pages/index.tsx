import { ButtonsFilterSection } from '@/components/ButtonsFilterSection'
import LeadsterInfo from '@/components/LeadsterInfo'
import { HomeContainer } from '@/styles/pages/home'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeContainer>
        <ButtonsFilterSection />
        <hr />
        <h1>Main Content</h1>
        <hr />
      </HomeContainer>
      <LeadsterInfo />
    </>
  )
}
