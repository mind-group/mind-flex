import React                from 'react'

import Flex                 from 'components/Flex'
import Snippet              from 'components/Snippet'

import s                    from './App.css'

class App extends React.Component {
  render() {
    return (
      <Flex center>

        <Snippet
          name='row'
          description='Displays items horizontally'
          path='row.js'
          theme={ s }
        />

        <Snippet
          name='row reverse'
          description='Displays items horizontally reversed'
          path='row-reverse.js'
          theme={ s }
        />

        <Snippet
          name='column'
          description='Displays items vertical'
          path='column.js'
          theme={ s }
        />


        <Snippet
          name='column reverse'
          description='Displays items vertical reverse'
          path='column-reverse.js'
          theme={ s }
        />

        <Snippet
          name='nowrap'
          description='Displays items nowrap'
          path='nowrap.js'
          theme={ s }
        />

        <Snippet
          name='wrap'
          description='Displays items wrap'
          path='wrap.js'
          theme={ s }
        />

      </Flex>
    )
  }
}

export default App
