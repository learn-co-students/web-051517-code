import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default function (GooblyGoopComponent, iheritedProps) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentDidMount () {
      if(!localStorage.getItem('token')){
        this.context.router.history.push('/')
      }
    }
    componentWillUpdate () {
      if(!localStorage.getItem('token')){
        this.context.router.history.push('/')
      }
    }
    render(){
      return <GooblyGoopComponent  {...this.props} />
    }
  }

  return Authentication
}
