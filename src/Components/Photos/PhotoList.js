import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { LARGE } from 'material-ui/utils/withWidth'
import View from '../layout/View'
import { Route, Switch } from 'react-router-dom'
import PhotoContainer from './PhotoContainer'

const PhotoList = ({photos =[], match , history , width }) => {
    const showPhoto = (photo) => {
        history.push(`/photos/${photo.id}`)
      }
      let listItems
      
        if (photos.length === 0) {
          listItems = <View>Loading...</View>
        } else {
          listItems = ( 
            <View>
              { photos.map(photo => (
                <ListItem
                  onClick={() => { showPhoto(photo) }} key={photo.id} style={{color: "black"}}
                  primaryText={photo.title}
                  rightAvatar={<Avatar src={photo.thumbnailUrl} />}
                />
              ))}
            </View>
          )
        }
        return (
            <View style={{ display: 'flex' }}>
              <Route
                exact={width < LARGE}
                path={`${match.url}`}
                render={() => listItems }
              />
              <Switch>
                <Route path={`${match.url}/:id`} component={PhotoContainer} />  
              </Switch>
            </View>
          )
        
 }       
export default PhotoList
        
PhotoList.propTypes = {
          photos: PropTypes.array.isRequired,
          history: PropTypes.object.isRequired,
          match: PropTypes.object.isRequired,
          width: PropTypes.number.isRequired
}
