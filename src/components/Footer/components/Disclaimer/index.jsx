import React from 'react'
import { ComponentContainer } from './styles'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <ComponentContainer>
      <section>
        Copyright © 2015 - 2022 Todos os direitos reservados |{' '}
        <Link href={'https://leadster.com.br'}>Leadster</Link>
      </section>

      <section>
        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos
        de uso
      </section>
    </ComponentContainer>
  )
}
