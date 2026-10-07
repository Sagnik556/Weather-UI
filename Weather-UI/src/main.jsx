import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchBox />
    <InfoBox />
  </StrictMode>,
)
