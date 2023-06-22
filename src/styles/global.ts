import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },

  body: {
    backgroundColor: 'blue',
    color: 'white',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  },
})
