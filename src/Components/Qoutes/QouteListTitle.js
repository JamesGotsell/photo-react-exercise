import React from 'react'
import rickAndMorty from 'rick-and-morty';
const QouteListTitle = () => (
  <div>
    <h1>rickAndMorty qoute </h1>
    <p>issue with the fetch call i had to import the data into the qoute list</p>
    <p> i think it would be best to have the routing for the two random pages at the bottom of the QouteListCOntainer</p>
    <img alt="ricky and morty gif or image " src={rickAndMorty.random()} />
  </div>
)

export default QouteListTitle