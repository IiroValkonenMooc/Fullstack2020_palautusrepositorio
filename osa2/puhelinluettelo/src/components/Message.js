import React from 'react';

const Message = ({textToDisplay}) => {
    if(textToDisplay===null | textToDisplay === undefined){
        return <div className = "none">asd </div>
    }

    return (
         <div className = {'errMsg'}>
             {textToDisplay}
         </div> 
         )
}

export default Message