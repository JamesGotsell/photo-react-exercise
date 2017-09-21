import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { LARGE } from 'material-ui/utils/withWidth'
import View from '../layout/View'
import { Route, Switch } from 'react-router-dom'
import QouteContainer from './QouteContainer'
import rickAndMorty from 'rick-and-morty';

const PhotoList = ({quotes =[], match , history , width }) => {
    const showQuote = (quote) => {
        history.push(`/qoutes/${quote.id}`)
      }
      let listItems
      let rickNMorty = rickAndMorty.random();
        if (quotes.length === 0) {
          listItems = <View>Loading...</View>
        } else {
          listItems = ( 
            <View>
              { quotes.map(quote => (
                <ListItem
                  onClick={() => { showQuote(quote) }} key={quote.id} style={{color: "black"}}
                  primaryText={quote.what}
                  rightAvatar={<Avatar src={rickNMorty} />}
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
                <Route path={`${match.url}/:id`} component={QouteContainer} />  
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