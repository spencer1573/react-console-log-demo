const ListItem = (props) => {
  const { title, data } = props
  // {title}
  // {data}
  return (
    <div>
      {title}
      {data.some}
    </div>
  )
}

export default ListItem
