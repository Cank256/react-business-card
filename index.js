import React from 'react'
import ReactDOM from 'react-dom'
import Top from './components/Top'
import Main from './components/Main'
import Footer from './components/Footer'

function App(){
    return (
        <div>
          <Top />
          <Main />
          <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))