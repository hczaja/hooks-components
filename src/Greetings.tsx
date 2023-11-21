import React, { FC, useEffect, useState } from 'react';

interface GreetingsProps {
    name ?: string;
}

const Greetings: FC<GreetingsProps> = ({name}:GreetingsProps) => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (name) {
            setMessage(`Hello ${name} from Greetings!`);
        }
    }, [name])

    if (!name) {
        return <div>Nie podano imienia!</div>;
    }

    return <div>{message}</div>;
}

export default Greetings;