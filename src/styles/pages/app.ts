import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',

  div: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
  },
})

export const Header = styled('header', {
  backgroundColor: '$terciaryBlue',
  width: '100%',
})

export const HeaderContent = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  margin: '0 auto',
  width: '60%',
  padding: '1.5rem',
  minHeight: 350,

  button: {
    width: 'fit-content',
    alignSelf: 'center',

    border: `2px solid`,
    borderColor: '$primaryBlue',
    borderRadius: '40px 40px 40px 10px',

    padding: '5px 10px',
    color: '$secondaryBlue',

    fontSize: '$sm',
    fontWeight: '$bold',

    marginTop: '-2rem',
  },

  img: {
    objectFit: 'cover',
    position: 'absolute',
    right: '-28px',
    transform: 'rotate(10deg)',
  },

  hr: {
    margin: '0.5rem auto',
    width: '75%',
  },

  p: {
    fontSize: '$sm',
    textAlign: 'center',
  },
})

export const CustomH1 = styled('h1', {
  textAlign: 'center',

  variants: {
    variant: {
      firstElement: {
        fontWeight: '$medium',
      },

      secondElement: {
        width: 'fit-content',
        display: 'inline-block',
        margin: '0 auto',

        color: '$secondaryBlue',
        fontSize: '$6xl',
        position: 'relative',
      },
    },
  },
})
