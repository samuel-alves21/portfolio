import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './Styles.tsx'
import { NavProvider } from './context/index.tsx'
import { Filter } from './components/Filter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NavProvider>
    <GlobalStyles />
    <Filter />
    <App />
  </NavProvider>
)
