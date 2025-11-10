import React from 'react'
import { DATA } from '../api'

const Links = () => {
  return (
    <div>
       {
        DATA.map((item)=>{
            return <div>
                <h2 className='text-white'>{item.title}</h2>
                
            </div>
        })
       }
    </div>
  )
}

export default Links