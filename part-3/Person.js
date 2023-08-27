const maxChars = 8;
function Person({name,hobbies,age}) {
    const canVote = age >= 18 
    ? '<h3>Please go vote!</h3>'
    : '<h3>you must be 18'

    const hobbyItem = hobbies.map(hobby => {
        return <li>{hobby}</li>})

    return <div>
    <p>Learn some information about this person</p>
    <ul>
        <li>{name.slice(0,maxChars)}</li>
        <li>{age}</li>
        <ul>
            Hobbies: {hobbyItem}
        </ul>
    </ul>
    <h3>{canVote}</h3>
    </div>
}