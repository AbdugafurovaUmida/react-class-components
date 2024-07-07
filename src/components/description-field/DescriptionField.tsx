import * as React from 'react'
import { Component } from 'react'

type Props = {
  label: string
  children: string
}

export default class DescriptionField extends Component<Props> {
  render() {
    return (
      <div className=''>
        <div className=''>{this.props.label + ':'}</div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
