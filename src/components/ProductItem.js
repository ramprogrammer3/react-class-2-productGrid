
import React from 'react'
import style from './ProductGrid.module.css'


function ProductItem(props) {
    let datas = props.itemData;
    console.log(datas)
  return (
    <>
       {datas.map((item, i)=>{
        return <div className= {style.productItem} key = {i} >
                    <img className= {style.image} src = {item.thumbnail} alt="" />
                    <div>
                        <h2> {item.title} </h2>
                        <h2 className= {style.brand}> {item.brand} </h2>
                        <p> Price : <b> {item.price}$ </b> </p>
                        <p> Rating : <b> {item.rating} / 5 </b> </p>
                    </div>
                </div>
       })}
       
    </>
  )
}

export default ProductItem