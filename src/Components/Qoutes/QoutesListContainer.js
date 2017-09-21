import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'
import QouteList from './QouteList'

import { fetchQoutes } from '../../api/quotes'

class QoutesListContainer extends Component {
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
        console.log(this.state.quotes)
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    console.log("boom")
    return (
        <QouteList
        quotes={this.state.quote}
        match={this.props.match}
        history={this.props.history}
         />
    )
  }
}

export default QoutesListContainer