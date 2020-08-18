import React, { useState } from 'react'

const App = () => {
    const [text, setText] = useState<string>()

    const onClick = () => {
        setText('!')
    }

    return (<>
        <>Hello World{{ text }}{text}</>
        <button id="btn1" onClick={onClick}>Click</button>
    </>)
}

export default App