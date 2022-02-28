import React,{FC} from 'react'
import {ICartItem} from '../types/Types'
import {Link} from 'react-router-dom'


import cn from 'classnames'
import logoImage from '../images/logoImage.jpeg'
import cartSvg from '../images/bx-basket.svg'

const itemsCart:ICartItem[] = [
    {
        _id : 'oldpew123',
        name: 'MSI LapTop Pro',
        imagePath: 'https://www.notik.ru/content/img/1610680165_01-msi-ge76-raider.jpg',
        price: 4500,
        count:1
    }
]

const Header:FC = () => {
    const [cartVisible,setCartVisible] = React.useState(false)


    const total = itemsCart.reduce((acc,item) =>
    acc + item.price
    ,0)

    const removeHandler = (id:string) => {
        console.log(id);
    }


  return (
    <div className="flex items-center justify-between relative py-2 px-4 bg-gray-100">
        <Link to = "/">
        <img src={logoImage} alt="" width="40" height="40"/>
        </Link>
        <ul className="flex justify-between items-center text-center font-medium text-lg uppercase">
            <li className = "mr-6">
                <Link to = '/Layout'>
                    home
                </Link>
            </li>

            <li className = "ml-6">
                <Link to = "/Products">
                    Products
                </Link>

            </li>

            <li className = "ml-6">
                <a href="">
                    contacts
                </a>
            </li>
        </ul>
        <button onClick={()=> setCartVisible(!cartVisible)}>
        <img src={cartSvg} alt="" width = "40" height = "40" className="cursor-pointer" onClick = {()=> setCartVisible(!cartVisible)} />
        </button>
        
        <div className={cn('absolute top-3 right-0 shadow-md rounded-lg ',{
            hidden:!cartVisible
        })}
        style = {{
            top: 'calc(61px + 1rem)'
        }}
        >

        {itemsCart.map(item=>(
        <div className="flex items-center justify-center mr-40" key = {item.name}>
            <img  src={item.imagePath} alt={item.name} className="mr-3" width = "55" height = "55" />
            <h3>{item.name}</h3>
            <div>{`${item.count} x $${item.price}`}</div>

        <button className="bg-orange-600 rounded-xl border-4" onClick = {()=> setCartVisible(!cartVisible)}>
            Купить
        </button>

        <button className = "text-red-800 bg-none border-red-600"
         onClick = {()=>removeHandler(item._id)}
        >Удалить</button>
        </div>
        ))}

        <div className = "text-lg">
            <b>Total:{total}$</b>
        </div>
       
        </div>
    </div>
  )
}

export default Header

