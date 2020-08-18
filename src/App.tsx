import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

const App = () => {
    const [text, setText] = useState<string>()

    const onClick = () => {
        setText('!!')
    }

    return (<>
        <>Hello World{text}</>
        <Button color="primary" variant="contained" onClick={onClick}>Click</Button>
    </>)
}

export default App