import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function Context({ children }) {
  const [searchParams, setSearchParams] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        setLoading(true);
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`);
      const data = await res.json();

      if(data?.data?.recipes){
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParams('')
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false)
      setSearchParams('')
    }
  }

  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem)
    let cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(item => item.id === getCurrentItem.id)

    if(index == -1){
      cpyFavoriteList.push(getCurrentItem)
    }else {
      cpyFavoriteList.splice(index)
    }
   setFavoriteList(cpyFavoriteList);
  }
  console.log(favoriteList, "favoriteList")

  return (
    <GlobalContext.Provider value={{ searchParams, setSearchParams, handleSubmit,recipeList, loading, recipeDetails, setRecipeDetails, handleAddToFavorite, favoriteList }}>
      {children}
    </GlobalContext.Provider>
  );
}
