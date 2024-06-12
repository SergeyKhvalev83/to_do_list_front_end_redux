import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
   <Router />
  </BrowserRouter>
   
)
