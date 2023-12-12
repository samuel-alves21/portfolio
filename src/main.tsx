import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { GlobalStyles } from './Styles.tsx'
import { Filter } from './components/Filter.tsx'
import { SettingsProvider } from './contexts/SettingsContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SettingsProvider>
    <GlobalStyles />
    <Filter />
    <App />
  </SettingsProvider>
)
