import React, { Component } from 'react'
// import withWidth from 'material-ui/utils/withWidth'
import PropTypes from 'prop-types'
import PhotoItem from './PhotoItem'
import { fetchPhoto } from '../../api/photos'

class PhotoContainer extends Component {
  constructor() {
    super()
    this.state = {
      photo: null
    }
  }

  componentDidMount() {
        this.fetchPhoto(this.props.match.params.id)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.fetchPhoto(nextProps.match.params.id)
    }
  }

  fetchPhoto = (id) => {
    fetchPhoto(id).then((data) => {
        this.setState({photo : data})
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
            <PhotoItem 
            photo={this.state.photo} 
            match={this.props.match}
            history={this.props.history}
            />
    )
  }
}

export default PhotoContainer

PhotoContainer.propTypes = {
  match: PropTypes.object.isRequired
}