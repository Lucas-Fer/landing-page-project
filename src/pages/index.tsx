import { ButtonsFilterSection } from '@/components/ButtonsFilterSection'
import Footer from '@/components/Footer'
import LeadsterInfo from '@/components/LeadsterInfo'
import LeadsterGuides from '@/components/LeadsterGuides'
import { HomeContainer } from '@/styles/pages/home'
import React from 'react'
import { GetStaticProps } from 'next'
import { LeadsterVideo } from '@/interfaces/LeadsterVideo'

export default function Home({ leadsterVideo }: LeadsterVideo) {
  return (
    <>
      <HomeContainer>
        <ButtonsFilterSection />
        <hr />
        <LeadsterGuides leadsterVideo={leadsterVideo} />
        <hr />
      </HomeContainer>
      <LeadsterInfo />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/youtube')

    const data = await response.json()

    const leadsterVideo = await data.videos.map((videoData: any) => {
      return {
        videoid: videoData.id.videoId ? videoData.id.videoId : 'none',
        videoDescription: videoData.snippet.description
          ? videoData.snippet.description
          : 'none',
        videoTitle: videoData.snippet.title,
        videoThumb: videoData.snippet.thumbnails.default,
      }
    })

    return {
      props: {
        leadsterVideo,
      },
    }
  } catch (error) {
    return {
      props: {
        data: [],
      },
    }
  }
}
