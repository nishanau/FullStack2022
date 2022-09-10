const AddPerson = (props) => {

    const addNumber = (e) => props.numberHandler(e)

    const addPerson = (e) => props.personHandler(e)

    return (

        <form onSubmit={addPerson}>
            <div>
                Name: <input onChange={(e) => props.nameHandler(e)} value={props.newName} />
            </div>

            <div>
                Number: <input type="number" onChange={addNumber} value={props.newNumber} />
            </div>

            <div>
                <button type="submit"> Add Details</button>
            </div>

        </form>   
    )
}

export default AddPerson
