import PokemonPage from "../Pages/PokemonPage"

const { createBrowserRouter } = require("react-router-dom")
const  HomePage  = require("../Pages/HomePage")


const router = createBrowserRouter([
    {
        path: `/`,
        element: <HomePage />
    },
    {
        path: `pokemon/:name`,
        element: <PokemonPage />
    },
])

export default router