import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
