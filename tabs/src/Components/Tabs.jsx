import React, {useState} from "react";

const TabRow = (props) => {

    const[messages, setMessages] = useState([{key:1, note:"hi"},{key:2, note:"hello"},{key:3,note:"what's up?"}]);

    const onClickHandler = (e) => {
        console.log(e)
        props.onNewMessage(e);
    };

    
    return (
        <>
        <div className="tabHolder">
            
            {
                
                messages.map((message) => {
                    return (<div onClick={()=>onClickHandler(message.note)} className="tabDiv" value={message.note} key={message.key}>Tab {message.key}</div>)
                })
            }
        </div>
        </>
    )
}

export default TabRow;