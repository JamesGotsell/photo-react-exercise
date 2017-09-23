
// quote item 
// quote items withing quote item i need two links included for ramdom rick and morty gif 
// ramdom ricky and morty gif and qoute 


import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'
import QouteItem from './QouteItem'
// import rickAndMorty from 'rick-and-morty';

import { fetchQoute } from '../../api/qoutes'

class QouteItemContainer extends Component {
  constructor() {
    super()
    this.state = {
      qoute: []
    }
  }
  componentDidMount() {
    this.fetchQuote(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchUser(nextProps.match.params.id)
    }
  }
  fetchQuote = (id) => {
    fetchQoute(id).then((data) => {
        this.setState({qoute : data})
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      <QouteItem/> 
   
    )
  }
}

export default QouteItemContainer