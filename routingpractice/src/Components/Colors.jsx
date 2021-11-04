import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";


const Colors = () => {
    const {colorOne} = useParams()
    const {colorTwo} = useParams()
    const {wordsNums} = useParams()
    const history = useHistory();
    const goback = () => {
        history.goBack()
    }


const divStyle = {
    backgroundColor : `${colorOne}`
};
const headStyle = {
    color : `${colorTwo}`
}

return (
    <>
        <div style={divStyle}>
            <h1 style={headStyle}>Hello, the word now is {wordsNums}</h1>
        </div>
        <button onClick={goback}>Go Back</button>
    </>
    )
}

export default Colors;