import { styled } from '@stitches/react'

export const ComponentContent = styled('main', {
  backgroundColor: '$terciaryBlue',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  gap: '5rem',
})

export const SectionImage = styled('section', {
  minHeight: '50vh',
  img: {
    padding: '2rem',
    objectFit: 'cover',
    width: 'max-content',
  },
})

export const SectionLeadsterInfo = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  fontWeight: '$medium',
  minWidth: '35%',

  p: {
    marginBottom: '0.5rem',
  },
})

export const CustomH1 = styled('h1', {
  textAlign: 'start',

  variants: {
    variant: {
      firstElement: {
        fontWeight: '$medium',
      },

      secondElement: {
        fontWeight: '$bold',
        color: '#202024',
        marginBottom: '0.5rem',
      },
    },
  },
})

export const DemoSection = styled('section', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '1rem',
  minHeight: '5rem',

  gap: '1.5rem',

  button: {
    alignSelf: 'center',

    border: `1px solid`,
    borderRadius: '40px',
    borderColor: '$secondaryBlue',

    padding: '2px 1 rem',
    backgroundColor: '$secondaryBlue',
    color: '$white',

    width: '40%',
    height: '60px',
  },

  img: {
    objectFit: 'cover',
  },
})

export const DebitCardAndRatingSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'start',

  div: {
    gap: '0.50rem',
  },
})
