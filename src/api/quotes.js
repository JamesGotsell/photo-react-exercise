export const fetchQoutes = () => (
    fetch('../../data/rickNMorty', {
        method: 'get'
    }).then((response) => response.json())
  )
  
  export const fetchQoute = (quote) => (
    fetch(`../../data/rickNMorty/${quote}.json`, {
        method: 'get'
    }).then((response) => response.json())
  )