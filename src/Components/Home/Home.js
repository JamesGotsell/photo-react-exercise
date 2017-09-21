import React from 'react'
import rickAndMorty from 'rick-and-morty';
const Home = () => (
  <div>
    <h1>App for photos and rick and morty quotes</h1>
    <img alt="ricky and morty gif or image " src={rickAndMorty.random()} />
  </div>
)

export default Home