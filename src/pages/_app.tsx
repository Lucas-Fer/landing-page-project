import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, CustomH1, Header, HeaderContent } from '@/styles/pages/app'

import Image from 'next/image'
import headerAsset from '../assets/asset-header.png'
import leadsterLogo from '../assets/logo.png'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <div>
        <Image src={leadsterLogo} alt="logo-leadster" />
      </div>
      <Header>
        <HeaderContent>
          <button>WEBINARS EXCLUSIVOS</button>
          <CustomH1 variant="firstElement">Menos Conversinha, </CustomH1>
          <CustomH1 variant="secondElement">
            Mais Conversão
            <Image src={headerAsset} alt="header-asset" />
          </CustomH1>
          <hr />
          <p>
            Conheça as estratégias que <strong> mudaram o jogo</strong> e como
            aplicá-las no seu negócio
          </p>
        </HeaderContent>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
