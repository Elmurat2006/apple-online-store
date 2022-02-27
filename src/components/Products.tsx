import React,{FC} from 'react'
import {IProductItem} from '../types/Types'

const products: IProductItem[] = [
    {
        _id : 'oldpew123',
        name: ' iPhone 13 mini',
        imagePath: 'https://svetofor.info/images/thumbnails/500/500/detailed/249/smartfon-apple-iphone-13-mini-128-gb-ram-gb-productred-1.jpg',
        price: 1000,
        count:1
    },
    {
        _id : 'dkeo234',
        name: 'iPhone 13',
        imagePath: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
        price: 1000,
        count:1
    },
    {
        _id : 'doe441231',
        name: 'iPhone 12',
        imagePath: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000',
        price: 900,
        count:1
    }
]

const Products:FC = () => {
  return (
    <div>
        {products.map(item => (
            <div className ="flex items-center justify-center my-10 mx-10">
                <img src={item.imagePath} alt="" width = '200' />
                    <div>{item.name}</div>
                </div>
        ))}
    </div>
  )
}

export default Products