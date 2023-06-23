import React, { useState } from 'react'
import {
  ButtonsSection,
  ComponentSection,
  CustomButton,
  CustomSelect,
  SelectSection,
} from './styles'

export default function ButtonsFilterSection() {
  const [activeButton, setActiveButton] = useState<number>(0)

  function handlerActiveButton(btnId: number): void {
    setActiveButton(btnId)
  }

  return (
    <ComponentSection>
      <ButtonsSection>
        <CustomButton
          active={activeButton === 1}
          onClick={() => handlerActiveButton(1)}
        >
          Agências
        </CustomButton>
        <CustomButton
          active={activeButton === 2}
          onClick={() => handlerActiveButton(2)}
        >
          Chatbot
        </CustomButton>
        <CustomButton
          active={activeButton === 3}
          onClick={() => handlerActiveButton(3)}
        >
          Marketing Digital
        </CustomButton>
        <CustomButton
          active={activeButton === 4}
          onClick={() => handlerActiveButton(4)}
        >
          Geração de Leads
        </CustomButton>
        <CustomButton
          active={activeButton === 5}
          onClick={() => handlerActiveButton(5)}
        >
          Mídia Paga
        </CustomButton>
      </ButtonsSection>

      <SelectSection>
        <span>Ordenar por</span>
        <CustomSelect name="" id="">
          <option value="date">Data de Publicação</option>
        </CustomSelect>
      </SelectSection>
    </ComponentSection>
  )
}
