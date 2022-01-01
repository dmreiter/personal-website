import * as React from "react"
import EmojiScroller from "./emoji";

const Intro = () => {
    return (
        <div style={{ position: 'relative', fontSize: '5em' }}>
            
            <EmojiScroller />

            <span>
                , I'm Damian
            </span>
        </div>
    )
}

export default Intro;