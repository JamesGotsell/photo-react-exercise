import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'

import PhotoList from './PhotoList'
import { fetchPhotos } from '../../api/photos'

class PhotoListContainer extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetchPhotos()
    .then((data) => {
        this.setState({ photos: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    
    return (
     <PhotoList
        photos={this.state.photos}
        match={this.props.match}
        history={this.props.history}
         />
    )
  }
}

export default PhotoListContainer