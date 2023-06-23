import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },

  body: {
    backgroundColor: '$white',
    color: '&gray900',
    '-webkit-font-smoothing': 'antialiased',
  },
})
