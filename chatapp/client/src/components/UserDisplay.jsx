import React from "react";

const UserDisplay = (props) => {

    return(
        <ul className="userDisplay">
            {
                props.users.map((user, i) => {
                    return <li key={i}>{user.user}, {user.id}</li>
                })
            }
        </ul>
    )
}

export default UserDisplay;
