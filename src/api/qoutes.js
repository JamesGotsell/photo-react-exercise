

export const fetchQoutes = () => (
    fetch('../../public/data/rickNMorty', {
        method: 'get'
    }).then(response => response.json())
)

export const fetchQoute = (qoute) => (
    fetch(`../../public/data/rickNMorty/${qoute}.json`, {
        method: 'get'
    }).then((response) => response.json())
)



