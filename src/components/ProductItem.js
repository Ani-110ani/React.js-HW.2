export default function ProductItem({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} width={100} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}
