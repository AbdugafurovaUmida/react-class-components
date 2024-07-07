import * as React from 'react'
import { Component } from 'react'
import './DescriptionField.css'

type Props = {
  label: string
  children: string
}

export default class DescriptionField extends Component<Props> {
  render() {
    return (
      <div className='container'>
        <div className='label'>{this.props.label + ':'}</div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
