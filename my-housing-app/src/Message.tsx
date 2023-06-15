// Function based components is the most recent convention
// PascalCasing

function Message() {
    // JSX: JS XML
    const name = 'Mya';
    if (name) 
        return <h1>Hello {name}! </h1>;
    return <h1>Hello World!</h1>;
}

export default Message;