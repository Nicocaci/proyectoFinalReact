import { Link } from "react-router-dom";

const ButtonComponent = ({category,estiloBoton}) => {
  return (
    <button className={estiloBoton}>
      <Link to={`/itemListContainer/${category}`}>{category}</Link>
    </button>
  )
}
export default ButtonComponent;
