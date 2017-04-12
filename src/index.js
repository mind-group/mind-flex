import React                from 'react'
import { render }           from 'react-dom'


import App                  from 'components/App'
import Example              from './Example'

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss())
    return () => { removeCss.forEach(f => f()) }
  },
}

render(
  <App context={ context }><Example /></App>,
  document.getElementById('root')
)
