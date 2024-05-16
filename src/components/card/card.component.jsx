import './card.styles.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img className='rounded'
        alt={`monster ${name}`}
         src={`https://www.robohash.org/${id}?set=set2&size=180x180`}
        //src={`https://i.pravatar.cc/120?img=${id}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
