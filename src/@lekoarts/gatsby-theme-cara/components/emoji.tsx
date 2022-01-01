import * as React from "react"

const emojis = [
    { emoji: '👋', weight: 80 },
    { emoji: '🌊', weight: 10 },
    { emoji: '🤙', weight: 5 },
    { emoji: '🖖', weight: 5 },
    { emoji: '🤝', weight: 10 },
    { emoji: '🙋‍♂️', weight: 50 },
].map(e => ({ e, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({e}) => e);

const randomEmoji = () => {
    const emojiList = emojis.map((e, i) => ({ emoji: e.emoji, weight: e.weight += i > 0 ? emojis[i-1].weight : 0}))
    const target = Math.floor(Math.random() * emojiList[emojiList.length-1].weight) + 1;

    let idx = 0;
    while (emojis[idx].weight < target) ++idx;

    return emojiList[idx].emoji;
}

const Emoji = ({ emoji }: { emoji: string }) => {
    return (
        <span role='img' style={{ position: 'absolute' }}>{emoji}</span>
    )
}

const EmojiScroller = () => {
    return (
        <span style={{ width: '117.3px', height: '120px', backgroundColor: 'red', display: 'inline-block' }}>
            {emojis.map((e, i) => <Emoji key={i} emoji={e.emoji} />)}
            <Emoji emoji={randomEmoji()} />
        </span>
    )
}

export default EmojiScroller;