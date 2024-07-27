import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
