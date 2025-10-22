

const Product = ({title,price,image}) => {
    
  return (
    <div className="w-[170px] h-[220px] rounded bg-amber-300 my-1">
      <p>{title}</p>
      <p>{price}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default Product
