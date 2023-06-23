import React from 'react'
import { TableBody, TableContainer, TableHeader } from './styles'

export default function TableLinks() {
  return (
    <TableContainer>
      <TableHeader>
        <tr>
          <th>Links Principais</th>
          <th>Cases</th>
          <th>Materiais</th>
          <th>Siga a Leadster</th>
        </tr>
      </TableHeader>
      <TableBody>
        <tr>
          <td>Home</td>
          <td>Geração de Leads B2B</td>
          <td>Blog</td>
          <td>REDES SOCIAIS AQUI</td>
        </tr>
        <tr>
          <td>Ferramenta</td>
          <td>Geração de Leads em Software</td>
          <td>Parceria com Agências</td>
          <td>EMAIL AQUI</td>
        </tr>
        <tr>
          <td>Preços</td>
          <td>Geração de Leads em Imobiliária</td>

          <td>Guia Definitivo do Marketing</td>
          <td>TELEFONE AQUI</td>
        </tr>
        <tr>
          <td>Contato</td>
          <td>Cases de Sucesso</td>
          <td>Materiais Gratuitos</td>
        </tr>
      </TableBody>
    </TableContainer>
  )
}
