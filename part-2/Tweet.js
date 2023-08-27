function Tweet ({username,name,date,message}) {
    return <div className="tweet">
        <span className="name">{name}</span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <span className="message">{message}</span>
    </div>
}