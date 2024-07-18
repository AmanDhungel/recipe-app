import { Link } from "react-router-dom"

const RecipeItem = ({item}) => {
  return (
    <div className="flex flex-col w-80 p-5 overflow-hidden bg-white/75 shadow-xl gap-5 border-2 roundex-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
       <img src={item?.image_url} alt={item?.title} className="h-full w-full object-cover" />
      </div>
        <div className="flex flex-col">
          <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
          <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
          <Link to={`/details/${item?.id}`}
          className="text-sm p-3 px-8 rounded-lg uppercase font-medium
          tracking-wider inline-block shadow-md bg-black text-white pt-3 mt-3">
          Recipe Details
          </Link>
        </div>
    </div>
  )
}

export default RecipeItem