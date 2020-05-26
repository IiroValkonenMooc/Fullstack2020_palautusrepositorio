import React from 'react';

const Message = ({textToDisplay, redText }) => {
    if(textToDisplay===null | textToDisplay === undefined){
        return <div className = "none"> </div>
    }
    
    if(redText === true){
        return(
            <div className = {'errMsgTrue'}>
             {textToDisplay}
            </div> 
        )
    } else {
        return (
            <div className = {'errMsg'}>
                {textToDisplay}
            </div> 
            )
    }
}

export default Message