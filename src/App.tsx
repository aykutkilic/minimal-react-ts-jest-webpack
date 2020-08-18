import React, { useState } from 'react'

declare namespace JSX {
    interface IntrinsicElements {
        button: any;
    }
}

const App = () => {
    const [text, setText] = useState<string>()

    const onClick = () => {
        setText('!')
    }

    return (<>
        <>Hello World{text}</>
        <button id="btn1" onClick={onClick}>Click</button>
    </>)
}

export default App