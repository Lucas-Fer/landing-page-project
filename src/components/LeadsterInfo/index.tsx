import Image from 'next/image'
import React from 'react'

import comparativoImage from '../../assets/comparativo_img_CTA.png'
import { ComponentContent } from './styles'

export default function LeadsterInfo() {
  return (
    <ComponentContent>
      <section>
        <Image src={comparativoImage} alt="" />
        Imagem
      </section>

      <section>
        <h1>Pronto para triplicar sua Geração de Leads?</h1>
        <p>
          Criação de ativação em <strong>4 minutos</strong>
        </p>
        <hr />

        <section>
          <button>Ver demonstração</button>
          <span>Imagem</span>
        </section>

        <div>Não é necessário Cartão de Crédito | Satisfação</div>
      </section>
    </ComponentContent>
  )
}
