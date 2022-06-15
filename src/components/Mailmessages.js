function Mailmessage(props) {
    const { messages } = props
    return (
        <>
            {
                messages.length > 0 &&
                <h1>You have {messages.length} unread messages.</h1>
            }
        </>
    );
}

export default Mailmessage;