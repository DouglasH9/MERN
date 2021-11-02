import React from "react";

const MessageDisplay = (props) => {
    return (
        <>
            <div className="messageContainer">
                {props.message}
            </div>
        </>
    )
}

export default MessageDisplay;