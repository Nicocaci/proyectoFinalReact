import ItemDetailContainer from "./ItemDetailContainer"

const ItemList = ({productos}) => {
  return (
    <>
    {productos.map((producto) => (
            <ItemDetailContainer
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            description={producto.description}
            />
      ))}
    </>
  )
}

export default ItemList