import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'
import QouteList from './QouteList'

import { fetchQoutes } from '../../api/qoutes'

class QoutesListContainer extends Component {
  constructor() {
    super()
    this.state = {
      qoutes: []
    }
  }

  componentDidMount() {
    console.log('hello')
    fetchQoutes()
    .then((data) => {
      
        this.setState({ qoutes: data })
        console.log(this.state.qoutes)
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    console.log(this.state.qoutes)
    return (
        <QouteList
        qoutes={this.state.qoutes}
        match={this.props.match}
        history={this.props.history}
         />
    )
  }
}

export default QoutesListContainer
