

const Product = ({title,price,image}) => {
    
  return (
    <div className="w-[170px]  border-slate-300 rounded bg-amber-300 mb-4 drop-shadow-xl border-1">
      <img src={image} alt="" />
      <p className="text-[14px] px-1">{title} </p>
      <p className="px-1 font-bold">${price}</p>
    </div>
  )
}

export default Product
