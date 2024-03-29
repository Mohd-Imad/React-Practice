import React, { useState } from 'react'
import { productDropdown} from './NavItems'
import { Link } from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {

  const [dropdown, setDropdown] = useState(false)

  return (
    <>
      <ul className={dropdown ? 'product-submenu clicked' : 'product-submenu' } onClick={() => { setDropdown(!dropdown) }}>
        {
          productDropdown.map((item) => {
            return <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName} onClick={()=>{
                  setDropdown(false)
                }}>
                {item.title}
              </Link>
            </li>
          })
        }
      </ul>
    </>
  )
}

export default Dropdown
