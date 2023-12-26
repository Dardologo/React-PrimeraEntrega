import CartWidget from "../Components/CartWidget/CartWidget";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "categoriaId",
        path: "/categoria/:id",
        Element: ItemListContainer
    },
    {
        id: "itemId",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartWidget
    },
    {
        id: "error",
        path: "*",
        Element: Error
    }


]