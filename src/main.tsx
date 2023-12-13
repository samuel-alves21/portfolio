import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { Filter } from './components/Filter.tsx'
import { SettingsProvider } from './contexts/SettingsContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SettingsProvider>
    <Filter />
    <App />
  </SettingsProvider>
)
