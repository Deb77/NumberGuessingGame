import React from 'react'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { css } from 'emotion'

const ProgressBar = (props) => {
    let url ;
    if(props.percentage === 0){
        url = "data:image/png;base64,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";
    }
    else if(props.percentage === 25){
        url ="data:image/png;base64,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"
    }
    else if(props.percentage === 50){
        url = "data:image/png;base64,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"
    }
    else if(props.percentage === 75){
        url = "data:image/png;base64,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"
    }
    else{
        url = "data:image/png;base64,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"
    }
    return (
        <div className={css`
        display:flex;
        justify-content: center;
        background-image: url(${url});
        background-repeat: no-repeat;
        background-position: bottom;
        `}>
            <SemiCircleProgressBar percentage={props.percentage} stroke={props.color} background={"#fff"} strokeWidth={20} diameter={350}/>
        </div>
    )
}

export default ProgressBar;