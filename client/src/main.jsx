import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="996066059994-4b38nfmvrlsh34s2sgkqhkcbot330c4v.apps.googleusercontent.com">
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)
