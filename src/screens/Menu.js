import React, { useState } from 'react'
import {menu} from '../data/Menu'
import MenuItem from '../components/menu/MenuItem'
import Categorey from '../components/menu/Categorey'

const Menu = () => {
const [menus,setMenus] = useState(menu);
const [category,setcategory] = useState([]);
const allCategory = menu.filter((item)=>item.category === category);
console.log(allCategory)
  return (
    <div className='App'>
        <Categorey/>
        <MenuItem menu={menus}/>
    </div>
  )
}

export default Menu