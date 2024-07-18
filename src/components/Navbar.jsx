import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../context/Context"

const Navbar = () => {
    const {searchParams, setSearchParams, handleSubmit} = useContext(GlobalContext);

    console.log(searchParams);
  return (
    <div>
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
    <h2 className="text-2xl font-semibold"><NavLink to={'/'} className='text-black hover:text-gray-500 duration-300'>Food Recipe</NavLink></h2>
    <form onSubmit={handleSubmit}>
        <input className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-slate-400 focus:shadow-slate-800"
        value={searchParams}
        onChange={(e)=> {setSearchParams(e.target.value)}}
        name="search" placeholder="Enter Items Name..." type="text"/>
    </form>
    <ul className="flex py-5">
<li className="flex gap-5">
    <NavLink to={'/'} className='text-black hover:text-gray-500 duration-300'>Home</NavLink>
    <NavLink to={'/favorites'} className='text-black hover:text-gray-500 duration-300'>Favorites</NavLink>
</li>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar