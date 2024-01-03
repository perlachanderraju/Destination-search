// Write your code here

const DestinationItem = props => {
  const {list} = props
  const {name, imgUrl} = list
  return (
    <li>
      <img src={imgUrl} className="image" alt={name} />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
