import React,{FC} from 'react'

const Macbooks:FC = () => {
  return (
    <div className='flex justify-around items-center ml-40 mr-40 mb-20 '>
        <img className='ml-4 mr-8 mb-20 mt-10' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000" alt="" width="300" />
        <img className='ml-4 mr-8 mb-20 mt-10'  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000" alt="" width="300" />
        <img  className='ml-4 mr-8 mb-20 mt-10'  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788574000" alt="" width="300" />
    </div>
  )
}

export default Macbooks