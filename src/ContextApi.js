import { useContext } from "react"
import { themeContext } from "./App";

const ContextApi=()=>{
 const themeValue=useContext(themeContext);

    return (<>
    {themeValue}
    </>)
}

export default ContextApi