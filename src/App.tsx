import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { DeliveryProvider } from './context/DeliveryContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <DeliveryProvider>
          <Router />
        </DeliveryProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
