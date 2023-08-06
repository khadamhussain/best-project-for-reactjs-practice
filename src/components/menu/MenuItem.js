import React from 'react'

const MenuItem = ({menu}) => {
   
  return (
    <div>
        {menu.map((item,index)=>{
             const {
                id,
              title,
              category,
              price,
              img,
              desc,
            }  = item;
            return (
             <>
             <img src={img} alt={title}></img>
             <h1>{title}</h1>
             
             </>
            )
        })}
    </div>
  )
}

export default MenuItem