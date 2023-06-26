import Image from 'next/image'
import React from 'react'
import { ComponentContainer } from './styles'

import TableLinks from './components/TableLinks'
import Disclaimer from './components/Disclaimer'
export default function Footer() {
  return (
    <ComponentContainer>
      <Image
        src="https://leadster.com.br/_next/image/?url=%2Fimg%2Fleadster%2Fleadster_gif%2Fleadster_270.gif&w=384&q=75"
        alt=""
        width={270}
        height={62}
      />
      <span>Transformando visitantes em clientes.</span>

      <TableLinks />
      <Disclaimer />
    </ComponentContainer>
  )
}
