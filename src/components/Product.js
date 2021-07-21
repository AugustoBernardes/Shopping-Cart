import React from 'react'

export default function Product(props) {
    const {product , onAdd} = props;
    return (
        <div >
            <div className='img-card'>
                <img className="small item-cart"  alt={product.name} src={product.image}></img>
            </div>
            <h3 className='item-cart'>{product.name}</h3>
            <div className='item-cart'>R${product.price}</div>
            <div>
                <button className='button-add' onClick={() => onAdd(product)} >Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}
