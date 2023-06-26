import axiosRequest from '../../../lib/axiosConfig'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const leadsterChannelID = 'UCrydTYsZKHPE_pe9NNLMeDA'

  try {
    const response = await axiosRequest.get('/search', {
      params: {
        part: 'snippet',
        channelId: leadsterChannelID,
        maxResults: 10, // Número máximo de resultados desejados
      },
    })

    console.log('response 1', response.data.items)

    const videos = response.data.items
    res.status(200).json({ videos })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Erro ao obter vídeos do YouTube.', err })
  }
}