import React,{FC} from 'react'
import {Link} from 'react-router-dom'


  
import {IProductItem} from '../types/Types'
import {IMacItem} from '../types/Types'

const homeItem: IProductItem[] = [
    {
        _id : 'fkeo1e3',
        name: ' iPhones',
        imagePath: 'https://svetofor.info/images/thumbnails/500/500/detailed/249/smartfon-apple-iphone-13-mini-128-gb-ram-gb-productred-1.jpg',
        price: 1000,
        count:1
    }
]

const macItem: IMacItem[] = [
    {
        _id : 'ode321r',
        name: 'Macbooks',
        imagePath: 'https://softech.kg/image/cache/b1bbcc2686a1c6cd7ecf85faef3b9bcb.jpg',
        price: 1000,
        count:1,
        category : 'https://softech.kg/image/cache/b1bbcc2686a1c6cd7ecf85faef3b9bcb.jpg'
    }
]

const airpodsItem: IMacItem[] = [
    {
        _id : 'doefkeee3',
        name: 'AirPods',
        imagePath: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000',
        price: 900,
        count:1,
        category: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000'
    },
]


const Home:FC = () => {
  return (
    <div className="flex justify-center items-center"style = {{   display: 'flex',  flexWrap: 'wrap'}}>
        {homeItem.map(item =>(

            <div  className="rounded-xl border-none text-black text-lg my-40 mx-20 shadow-lg" key = {item.name}>
                <Link to = '/Iphones'>
                <h2 className="flex justify-center items-center m-auto " >{item.name}</h2>
                <img src = {item.imagePath} alt = {item.name} width = '200' className = "py-2 px-2"/>
                </Link>
            </div>

        ))}
                {macItem.map(item=>(
                    <div className="rounded-xl border-none text-black text-lg my-40 mx-20 shadow-lg" key = {item._id}>
                        <Link to ="/Macbooks">
                        <h2 className = "flex justify-center items-center m-auto">
                            {item.name}
                            <img src={item.imagePath} alt={item.name}  width = '200' className = "py-2 px-2" />
                        </h2>
                        </Link>
                    </div>
                ))}

        {airpodsItem.map(item=>(
                    <div className="rounded-xl border-none text-black text-lg my-40 mx-20 shadow-lg" key = {item._id}>
                        <Link to ="/Airpods">
                        <h2 className = "flex justify-center items-center m-auto">
                            {item.name}
                            <img src={item.imagePath} alt={item.name}  width = '200' className = "py-2 px-2" />
                        </h2>
                        </Link>
                    </div>
                ))}

    </div>
 )
}

export default Home