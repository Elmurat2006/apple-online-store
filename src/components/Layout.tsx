import React,{FC} from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {ILayout} from '../types/Types'

const itemLayout:ILayout[] = [
    {
        imagePath : 'https://cdn.macbro.uz/macbro/0d5374d3-2d0d-4702-9471-92ef83917abc',
        name: 'Продукция Apple',
        _id: '4k23nf'
    }
]


const Layout:FC = () => {
  return (
    <div>
        <Header/>

        <div className = "flex justify-center items-center"></div>
                <h1 className = "text-2xl m-auto inline-block ml-20">
                    Добро пожаловать в наш онлайн магазин!
                </h1>
            {itemLayout.map(item => (
            <div key = {item._id}>
                <img src={item.imagePath} alt="" />
                <h1 className = " inline-block text-xl m-auto mt-10 ml-20"> {item.name}</h1>
            </div>
            ))}
                <Home />
    </div>
  )
}

export default Layout