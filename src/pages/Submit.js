import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'


export default function Submit() {
    const history = useHistory()

    let [totalPrice, setPrice] = useState([])
    let [totalQty, setQty] = useState([])
    let [totalProducts, setProduct] = useState([])

    function homePage(){
        let name = document.getElementById("inputName").value
        console.log(name)
        alert('Compra confirmada!')
        history.push('/')
    }
    
    useEffect(() => {
        let totalProducts = localStorage.getItem('totalProducts')
        let totalPrice = localStorage.getItem('totalPrice')
        let totalQty = localStorage.getItem('totalQty')
        if(totalPrice !== null && totalProducts !== null){

            totalPrice = JSON.parse(totalPrice)
            totalProducts = JSON.parse(totalProducts)
            totalQty = JSON.parse(totalQty)

            setPrice(totalPrice)
            setProduct(totalProducts)
            setQty(totalQty)
            localStorage.clear()
        }else{
            history.push('/')
        }
    }, [])

    return (
        <div className='submit-container'> 
              <div class="block submit-card">
                   <h1>Cadastro do cliente</h1>
                   <input  id="inputName" type="text" placeholder="name"/>
              </div>
            <table className='block submit-card'>
                <tr>
                    <th>Produtos</th>
                   
                </tr>
                <tbody >
                    <tr>
                        <td>
                            {  totalProducts.map(productName => {
                                return (  
                                    <h4>{productName}</h4>
                                )
                            })}
                        </td>

                        <td>
                            {  totalQty.map(quantity => {
                                return (  
                                    <h4>X {quantity}</h4>
                                )
                            })}
                        </td>
                     
                    </tr>
                </tbody>
                <h4>
                    Total: R${totalPrice}
                </h4>
                <button onClick={homePage}>Confirmar</button>
            </table>
            
        </div>
    )
}
