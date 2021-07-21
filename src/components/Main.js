import React from 'react'
import Product from './Product'

export default function Main(props){
    const {products, onAdd} = props
    return(
        <main className="block col-2">
            <h2>Produtos</h2>
            <div className="row-flex">
                {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                )
                )}
            </div>
        </main>
    )
}