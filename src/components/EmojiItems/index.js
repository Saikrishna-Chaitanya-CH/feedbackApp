import './index.css'

const EmojiItems = props => {
  const {emojiDetails, changeDesign} = props
  const {id, name, imageUrl} = emojiDetails

  return (
    <li className="emojis-alignment">
      <img
        src={imageUrl}
        className="emoji-size"
        alt={name}
        onClick={changeDesign}
      />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default EmojiItems
