import Image from 'next/image'
import React from 'react'

import comparativoImage from '../../assets/comparativo_img_CTA.png'
import {
  ComponentContent,
  CustomH1,
  DebitCardAndRatingSection,
  DemoSection,
  SectionImage,
  SectionLeadsterInfo,
} from './styles'

import noCardIcon from '../../assets/no-card-dark.webp'
import ratingIcon from '../../assets/rating.webp'
import stampRD from '../../assets/selo_RD.png'

export default function LeadsterInfo() {
  return (
    <ComponentContent>
      <SectionImage>
        <Image src={comparativoImage} height={500} alt="" />
      </SectionImage>

      <SectionLeadsterInfo>
        <CustomH1 variant="firstElement">Pronto para triplicar sua</CustomH1>
        <CustomH1 variant="secondElement">Geração de Leads?</CustomH1>
        <p>
          Criação de ativação em <strong>4 minutos</strong>
        </p>
        <hr />

        <DemoSection>
          <button>VER DEMONSTRAÇÃO</button>
          <Image src={stampRD} alt="" height={60} />
        </DemoSection>

        <DebitCardAndRatingSection style={{ gap: '0.5rem ' }}>
          <div>
            <Image src={noCardIcon} alt="" />
            <span> Não é necessário Cartão de Crédito </span>
          </div>
          |
          <div>
            <Image src={ratingIcon} alt="" />
            <span>4/9 média de satisfação</span>
          </div>
        </DebitCardAndRatingSection>
      </SectionLeadsterInfo>
    </ComponentContent>
  )
}
