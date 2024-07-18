import { useContext } from "react"
import { GlobalContext } from "../../context/Context"
import RecipeItem from "../../components/RecipeItem"

const Home = () => {
  const {recipeList, loading} = useContext(GlobalContext)

  if(loading) return <div>Loading ... Please Wait!!!</div>

  console.log(recipeList)

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? recipeList.map( (item, i) => <RecipeItem key={i} item={item}/>) : <div>
        <p className="lg:text-4xl tex-xl text-center text-black font-extrabold">Nothing to Show Please search something To Display items.</p>
        </div>}
    </div>
  )
}

export default Home