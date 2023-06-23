import { styled } from '@/styles'

export const ComponentSection = styled('section', {
  display: 'flex',
})

export const ButtonsSection = styled('div', {
  display: 'flex',
  gap: '5px',
})

export const CustomButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '1rem',
  border: '1px solid',

  fontWeight: 'bold',
  height: '30px',
  padding: '1px 1rem',
  background: '$white',

  '&:hover': {
    borderColor: '$primaryBlue',
    color: '$primaryBlue',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$secondaryBlue',
        color: '$white',

        '&:hover': {
          borderColor: '$white',
          color: '$white',
        },
      },
    },
  },
})

export const SelectSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '1rem',
  span: {
    fontWeight: 'bold',
    fontSize: '$sm',
    textAlign: 'center',
    width: 'max-content',
  },
})

export const CustomSelect = styled('select', {
  padding: '0.2rem',

  border: '1px solid',
  borderRadius: '8px',

  marginRight: '1rem',
})
