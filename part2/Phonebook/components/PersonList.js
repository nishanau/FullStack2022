
//PersonList Component to display all the details in the database. {person} props is array of object containing details
const PersonList = (props) => {
    //console.log(person)
    return (
        <li>{props.person.name}: {props.person.number} <button onClick={props.deletePerson}>Delete</button></li>
    )

}

export default PersonList
