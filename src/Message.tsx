import React from "react";

interface MessageProps{
    title: string;
}

export const Message = ({title}:MessageProps): React.ReactElement => {
    return (
        <h1>
        {title}
        </h1>
    )
}