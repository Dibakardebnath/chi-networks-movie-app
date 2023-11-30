import { Route, Routes } from "react-router-dom"
import { About } from "../Pages/About"
import { Favourite } from "../Pages/Favourite"
import { Home } from "../Pages/Home"
import { Register } from "../Pages/Register"
import { Details } from "../Pages/Details"








export const AllRoute=()=>{
   
     return (
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/favourite' element={<Favourite/>} />
             <Route path='/About' element={<About/>}/>
             <Route path='/register' element={<Register/>}/>
            
             <Route path='/details/:id' element={<Details/>}/>
 
         </Routes>
     )
 }