import React, { Component, ErrorInfo } from 'react'

interface IProps {
  children: React.ReactNode
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
    this.handleClick = this.handleClick.bind(this)
  }

  static getDerivedStateFromError(): IState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo)
  }

  handleClick = (): void => {
    this.setState({ hasError: false })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <div className=''>
          <p>
            Something went wrong. If you want to go to the previews page, click the button &quot;Go
            back&quot;
          </p>
          <button onClick={this.handleClick}>Go back</button>
        </div>
      )
    }
    return children
  }
}

export default ErrorBoundary
