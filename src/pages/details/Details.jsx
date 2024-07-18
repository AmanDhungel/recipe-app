import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/Context"

const Details = () => {
  const { recipeDetails, setRecipeDetails, favoriteList, handleAddToFavorite } = useContext(GlobalContext)
 const {id} =  useParams();

 useEffect(() => {
async function getRecipeDetails() {
  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
  const data = await res.json();

  console.log(data)
  if(data?.data){
    setRecipeDetails(data?.data.recipe)
  }
} 

getRecipeDetails()
 
 }, [id])
 

  return (
    <>
    <div className="flex container mx-auto py-10 grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex row-start-2 lg:row-start-auto">
      <div className="h-96 overflow-hidden rounded-xl group">
         <img src={recipeDetails?.image_url} alt="" 
         className="w-[50rem] h-full rounded-2xl object-cover block group-hover:scale-105 duration-300"/>
      </div>
      </div>
      <div className="flex flex-col gap-3">
         <span className="text-sm text-cyan-700 font-medium">@{recipeDetails?.publisher}</span>
         <span className="text-2xl text-cyan-900 font-bold">{recipeDetails?.title}</span>

         <button onClick={()=> handleAddToFavorite(recipeDetails)} className="border-cyan-100 border rounded-lg text-center p-2 bg-slate-600 text-white">
        {favoriteList.findIndex(item => item.id === recipeDetails?.id) !== -1 ? 'Remove from Favorite': 'Add to Favorite' }  
          </button>
      <div className="flex flex-col  gap-2  text-start">
       <span className="text-2xl font-bold text-black">Ingredients</span>
       <ul className="flex flex-col gap-3">
        {recipeDetails?.ingredients?.map((ingredients, i)=> (
          <li key={i} className="flex gap-2 items-start text-start">
            <span className='w-[6rem]'>{ingredients?.quantity ?  ingredients?.quantity : 'Your QTY'} </span>
            <span>{ingredients?.description}</span>
            </li>
          // console.log(ingredients)
        ))}
       </ul>
      </div>
      </div>

    </div>
    </>

  )
}

export default Details