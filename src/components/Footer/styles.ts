import { styled } from '@/styles'

export const ComponentContainer = styled('footer', {
  margin: '1rem auto',
  width: '80%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
  span: {
    textAlign: 'center',
    fontWeight: '$regular',
    color: '$gray100',
  },
})
