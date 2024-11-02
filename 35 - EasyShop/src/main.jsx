import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/index.css';
import ShopContextProvider from './context/Shop_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ShopContextProvider>
   <App />
   </ShopContextProvider>
  </React.StrictMode>,
)
