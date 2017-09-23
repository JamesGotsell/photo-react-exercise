import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'
import QouteList from './QouteList'
import QouteListTitle from './QouteListTitle'
import data from "../../data/data"
import { fetchQoutes } from '../../api/qoutes'

class QoutesListContainer extends Component {
  constructor() {
    super()
    this.state = {
      qoutes: []
    }
  }

  componentDidMount() {
    // console.log('hello')
    // fetchQoutes()
    // .then((data) => {
   
    //     this.setState({ qoutes: data })
    //     console.log(this.state.qoutes)
    // }).catch((err)=> {
    //     console.log(err)
    // })
    this.setState({ qoutes: data})
  }

  render() {
    return (
        <div>
          <QouteListTitle />
          <QouteList
        qoutes={this.state.qoutes}
        match={this.props.match}
        history={this.props.history}
         />
        </div>
      
    )
  }
}

export default QoutesListContainer
