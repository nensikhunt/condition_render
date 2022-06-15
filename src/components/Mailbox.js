import Mailmessage from "./Mailmessages";
function Mailbox() {
    let mailarray = ["react", "node", "php", "javascript", "angular"];
    return (
        <>
            <h1>Mail Box</h1>
            <Mailmessage messages={mailarray} />
        </>
    );
}

export default Mailbox;