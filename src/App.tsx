import { Component } from 'react'
import Search from './components/search/Search'
import Results from './components/result/Results'
import * as React from 'react'
import { SEARCH } from './consts/index'
import { getPeoples } from './api/people/index'
import ResponseApi from './types/api'
import People from 'types/people'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import './App.css'

type State = {
  defaultValue: string
  isLoading: boolean
  response?: ResponseApi<People>
}

class App extends Component<object, State> {
  state: State = { defaultValue: '', isLoading: false }

  componentDidMount() {
    const defaultValue = localStorage.getItem(SEARCH) || ''
    this.setState({ defaultValue, isLoading: true })
    getPeoples(defaultValue).then((response) => this.setState({ response, isLoading: false }))
  }

  handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)
    this.setState({ isLoading: true, response: undefined })
    const response = await getPeoples(value)
    this.setState({ response, isLoading: false })
  }

  render() {
    return (
      <ErrorBoundary fallback={<div>Opsss, something went wrong</div>}>
        <div className='container'>
          <div className='home'>
            <section className='section-search'>
              <div>Type name hero from Star war</div>
              <Search
                isLoading={this.state.isLoading}
                defaultValue={this.state.defaultValue}
                onChange={this.handleChange}
              />
            </section>

            <hr />

            <Results isLoading={this.state.isLoading} data={this.state.response} />
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default App
