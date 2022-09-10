
import { useState, useEffect } from "react";
import phoneService from './services/phonebookServices'
import PersonList from "./components/Phonebook/PersonList";
import ShowSearchResults from "./components/Phonebook/ShowSearchResult";
import AddPerson from "./components/Phonebook/AddPerson";
import ErrorMessage from "./components/Phonebook/ErrorMessage";
//import axios from 'axios'

const App = () => {
    //state of details of person
    const [persons, setPersons] = useState([]);

    //state of new name and numbers added
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    //state of the search results
    const [searchResults, setSearchResults] = useState([]);

    const [errorMessage, setErrorMessage] = useState(null);

  

    useEffect(() => {

        phoneService
            .getPhonebook()
            .then(initialPersons => setPersons(initialPersons))


    }, [])


    //eventhandler called when person adds new name by clicking "Add Name" button
    const personHandler = (event) => {
        event.preventDefault();

        //initializing an object that contains details provided by user to add new name
        const newObject = {

            name: newName,
            number: newNumber,

        };
        console.log(`input name`, newObject.name)
        console.log(persons.name)

        const allNames = persons.map(person => person.name);
        
        //Check if the user typed name is already in the list
        if (allNames.includes(newObject.name)) {

            const confirmMessage = `${newObject.name} is already in the database. Do you want to edit the number?`
            const confirm = window.confirm(confirmMessage)
            if (confirm) {

                editDetails(newObject)
            
            }
        }

        else {
            phoneService
                .saveNumber(newObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setErrorMessage(`${returnedPerson.name} is successfully added.`)
            setTimeout(()=> {

                setErrorMessage(null)

            },3000)

                    setNewName('');
                    setNewNumber('');
                })
            }

    };

    const editDetails = (newObject) => {
        const personToUpdate = persons.find(p => p.name === newObject.name)
        const id = personToUpdate.id
        
        phoneService
        .editNumber(newObject, id)
        .then(editedPerson => {
            setPersons(persons.map(person => person.id !== id ? person: editedPerson))
            window.confirm(`${editedPerson.name} successfullly updated`)
        })
        .catch(error => {
            setErrorMessage(`${personToUpdate.name} is alreday deleted `)
            setTimeout(()=> {

                setErrorMessage(null)

            },3000)
            setPersons(persons.filter(p => p.id !== id))

        })
        setNewName('');
        setNewNumber('');
    }


    const nameHandler = (event) => setNewName(event.target.value);

    const numberHandler = (event) => setNewNumber(event.target.value);



    //event handler called when user types in search field
    const matchedResults = (event) => {

        //setSearch(event.target.value)
        // console.log(`user input: ${event.target.value}`);
        // console.log(`names ${persons[2].name}`);
        var final = [];
        if (event.target.value.length > 0) {

            for (let i = 0; i < persons.length; i++) {
                const userInput = event.target.value.toLowerCase();
                const nameInDatabase = persons[i].name.toLocaleLowerCase();

                if (nameInDatabase.includes(userInput)) {
                    var finalResultsObject = {

                        name: persons[i].name,
                        number: persons[i].number,
                        id: persons[i].id
                    }
                    //console.log(`matched details: ${finalResultsObject.name}`);
                    final = final.concat(finalResultsObject);
                    //console.log(`object to show: ${final[0].id}`);
                }

            }
        }
        setSearchResults(final);

        console.log(`search result:`, searchResults)
    }

    const deleteHandler = (id) => {

        console.log(id)

        phoneService
          .deletePerson(id)

       
            
    }

    //const filteredList = () => showSearchMatched;


    return (
        <div>

            <h2>Phone Book</h2>

            <ErrorMessage message = {errorMessage}/>

            <div>
                Search a Name: <input onChange={matchedResults} />
            </div>
            <div>
                {searchResults.map(result => <ShowSearchResults key={result.id} details={result} />)}
            </div>


            <h3>Add a new Name and Number</h3>
            <AddPerson nameHandler={nameHandler} numberHandler={numberHandler} personHandler={personHandler} newName={newName} newNumber={newNumber} />

            <h2>Numbers</h2>
            <div>
                {persons.map(person => <PersonList key={person.id} person={person} deletePerson = {() => deleteHandler(person.id)} />)}
            </div>
        </div>


    )

}

export default App
