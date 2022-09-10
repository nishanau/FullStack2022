const ErrorMessage = ({ message }) => {

    const errorStyle = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: '16px',
        border: '2px solid'

    }
    if (message === null) {
      return null
    }

  
    return (
      <div style={errorStyle}>
        {message}
      </div>
    )
  }

  export default ErrorMessage
