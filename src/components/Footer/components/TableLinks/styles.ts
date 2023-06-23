import { styled } from '@/styles'

export const TableContainer = styled('table', {
  marginTop: '4rem',
  width: '100%',
})

export const TableHeader = styled('thead', {
  tr: {
    th: {
      paddingBottom: '1.5rem',
      textAlign: 'start',
      color: '#2c3e50',
      fontSize: '$lg',
      fontWeight: '$semiBold',
    },
  },
})

export const TableBody = styled('tbody', {
  tr: {
    td: {
      paddingBottom: '1rem',
      textAlign: 'start',
      color: '$gray100',
      fontSize: '$sm',
      fontWeight: '$regular',

      '&:hover': {
        color: '$quartenaryBlue',
        cursor: 'pointer',
      },
    },
  },
})
