import React from 'react'
import {
    Card, CardActions, CardMedia, CardTitle
  } from 'material-ui/Card'
import View from '../layout/View'

const PhotoItem = ({ photo  }) => {
  
    let id = ''
    let title = ''
    let url = ''
  
    if (photo){
      // i need to destructure the array that gets passed into this
      // this  
    // const {albumId, id , thumbnailUrl , title , url   } = photo[0]
      id = photo[0].id
      title = photo[0].title
      url = photo[0].url
    }
    return (
        <View>
          <Card>
            <CardMedia
              overlay={<CardTitle title={title} />}
            >
              <img alt={id} src={url} />
            </CardMedia>
            <CardActions />
          </Card>
        </View>
      )
}

export default PhotoItem