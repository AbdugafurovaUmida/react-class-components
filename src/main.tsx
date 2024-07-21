import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
