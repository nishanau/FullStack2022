//Component to show the result of search input
const ShowSearchResults = ({ details }) => {
    return (
        <li>{details.name} {details.number}</li>
    )

}

export default ShowSearchResults
