import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";


const WordsNums = () => {
    const {wordsNums} = useParams()
    const history = useHistory();
    const goback = () => {
        history.goBack()
    }

    if (isNaN(parseInt(wordsNums))){
        return(
            <>
                <h2>The super secret word is: {wordsNums}</h2>
                <button onClick={goback}>Go Back</button>
            </>
        )
    } else {
        return(
            <>
                <h2>The number is: {wordsNums}</h2>
                <button onClick={goback}>Go Back</button>
            </>
        )
    }
}

export default WordsNums;