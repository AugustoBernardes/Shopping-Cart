import React from 'react'
import {useHistory} from 'react-router-dom'

 
export default function Basket(props){
    const history = useHistory()
    const {cartItems , onAdd, onRemove} = props
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice


    function submitPage(){
        let totalProducts = []
        let qtyTotal = []
        const {cartItems } = props
        cartItems.map((item) => (
            totalProducts.push(item.name),
            qtyTotal.push(item.qty)
        ))
        localStorage.setItem('totalQuantity', JSON.stringify(qtyTotal))
        localStorage.setItem('totalProducts', JSON.stringify(totalProducts))
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
        history.push('/submit')
    }
    return(
     
        <aside className="block col-1">
            <h2>Carrinho</h2>
            <div>
                {cartItems.length === 0 && <div>Carrinho está vazio</div>}    
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-1'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="badge">-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} X R${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Preço do item</div>
                        <div className='col-1 text-right'>R${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Preço da entrega</div>
                        <div className='col-1 text-right'>R${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'><strong>Total</strong></div>
                        <div className='col-1 text-right'>R${totalPrice.toFixed(2)}</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <button onClick={submitPage}> 
                            Finalizando compra
                         </button>
                    </div>
                </>
            )}
        </aside>
    )
}
