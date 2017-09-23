import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { LARGE } from 'material-ui/utils/withWidth'
import View from '../layout/View'
import { Route, Switch } from 'react-router-dom'
import QouteItemContainer from './QouteItemContainer'
import rickAndMorty from 'rick-and-morty';

const QuoteList = ({qoutes =[], match , history , width }) => {
    const showQuote = (qoute) => {
        history.push(`/qoutes/${qoute.id}`)
      }
      let listItems
      let rickNMorty = rickAndMorty.random();
        if (qoutes.length === 0) {
          listItems = <View>Loading...</View>
        } else {
          listItems = ( 
            <View>
              { qoutes.map(qoute => (
                <ListItem
                  onClick={() => { showQuote(qoute) }} key={qoute.id} style={{color: "black"}}
                  primaryText={qoute.what}
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
                <Route path={`${match.url}/:id`} component={QouteItemContainer} />  
              </Switch>
            </View>
          )
        
 }       
export default QuoteList
        
QuoteList.propTypes = {
          qoutes: PropTypes.array.isRequired,
          history: PropTypes.object.isRequired,
          match: PropTypes.object.isRequired,
          width: PropTypes.number.isRequired
}