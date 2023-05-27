import { Link } from "react-router-dom";


export default function Card({id, name, status, species, gender, image, origin, onClose}) {
   return (
      <div>
         <button onClick={()=> onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
         <button>Detail</button>
         </Link>
              <h3 className="card-name">{name}</h3>
         <h2>Id: {id}</h2>
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}