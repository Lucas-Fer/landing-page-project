import { ButtonsFilterSection } from '@/components/ButtonsFilterSection'
import Footer from '@/components/Footer'
import LeadsterInfo from '@/components/LeadsterInfo'
import LeadsterGuides from '@/components/LeadsterGuides'
import { HomeContainer } from '@/styles/pages/home'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeContainer>
        <ButtonsFilterSection />
        <hr />
        <LeadsterGuides />
        <hr />
      </HomeContainer>
      <LeadsterInfo />
      <Footer />
    </>
  )
}
