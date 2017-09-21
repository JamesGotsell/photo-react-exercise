import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'
import QouteList from './QouteList'

import { fetchQoutes } from '../../api/quotes'

class QouteListContainer extends Component {
  constructor() {
    super()
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    fetchQoutes()
    .then((data) => {
        this.setState({ quotes: data })

    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    console.log(this.state.quotes)
    return (
        <QouteList
        quotes={this.state.quote}
        match={this.props.match}
        history={this.props.history}
         />
    )
  }
}

export default QouteListContainer