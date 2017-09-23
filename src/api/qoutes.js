export const fetchQoutes = () => (
    fetch('../../data/rickNMorty', {
        method: 'get'
    }).then((response) => response.json())
  )

  export const fetchQoute = (qoute) => (
    fetch(`../../data/rickNMorty/${qoute}.json`, {
        method: 'get'
    }).then((response) => response.json())
  )
