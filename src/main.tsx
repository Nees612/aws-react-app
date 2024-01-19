import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Theme, ThemeProvider } from '@aws-amplify/ui-react'

import { Authenticator } from '@aws-amplify/ui-react'

const theme: Theme = {
  name: 'standard-theme',
  tokens:{
    components:{
      
    }
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Authenticator.Provider>        
          <App />        
      </Authenticator.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
