import { useForm } from "react-hook-form";


const ChatView = ({messages, name, room}) => {
    const {register, handleSubmit, reset} = useForm()

    const sendMessage = ({message}) => {
        message && socket.emit("send-message", message)
        reset()
    }
    
    return (
        <section className="chat-view">
        <ScrollToBottom className="messages">
            {messages.map((message) => (
                <li>
                    <span>{message.user}</span>
                    <p>{message.text}</p>
                </li>
            ))}
        </ScrollToBottom>
        <form onSubmit={handleSubmit(sendMessage)}>
            <input type="text" {...register("message", {required:true})} />
            <button type="submit">Send</button>
        </form>
    </section>
)
}
export default ChatView;