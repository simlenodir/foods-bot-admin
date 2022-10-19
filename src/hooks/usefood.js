import { useContext } from "react";
import { Context } from "../context/foodsProvider.jsx";

export const useFood = (params) => {

    let { counter, setCounter} = useContext(Context)

    return params ? [setCounter]: [counter, setCounter]
}