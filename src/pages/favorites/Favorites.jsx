import { useContext } from "react"
import { GlobalContext } from "../../context/Context"
import RecipeItem from "../../components/RecipeItem"

const Favorites = () => {
  const {favoriteList} = useContext(GlobalContext)



  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? favoriteList.map( (item, i) => <RecipeItem key={i} item={item}/>) : <div>
        <p className="lg:text-4xl tex-xl text-center text-black font-extrabold">Nothing is added in favorite list.</p>
        </div>}
    </div>
  )
}

export default Favorites