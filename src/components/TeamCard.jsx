
const TeamCard = (props) => {
  return (
    <>
      <div className="teamCard-ctr">
        <img src={props.img} alt={props.name} className="teamCard-img" />
        <p className="teamCard-name">{props.name}</p>
        <p className="teamCard-title">{props.title}</p>
      </div>
    </>
  )
}

export default TeamCard;