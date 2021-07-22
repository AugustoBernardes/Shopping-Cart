import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'


export default function Submit() {
    const history = useHistory()

    let [totalPrice, setPrice] = useState([])
    let [totalQty, setQty] = useState([])
    let [totalProducts, setProduct] = useState([])
    // Validating E-mail
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function homePage(){
        // Customer  Data      
        let name = document.getElementById("inputName").value
        let phone = document.getElementById("inputPhone").value
        let email = document.getElementById("inputEmail").value
        let adress = document.getElementById("inputAdress").value
         
        if(name != '' && phone != '' && email != '' && adress != ''){
            if(validateEmail(email) === false){
                return alert('Coloque um email valido como: augusto@gmail.com')
            }else{
                let client = {
                   name:name,
                   phone:phone,
                   email:email,
                   adress:adress,
                }

                localStorage.setItem('customerData', JSON.stringify(client))    

                alert('Compra confirmada!')
                history.push('/')
            }
        }else{
            return alert('Responda todos os campos !')
        }
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
        // localStorage.clear()
        }else{
            history.push('/')
        }
    }, [])

    return (
        <div className='submit-container'> 
              <div class="block submit-card">
                   <h1>Cadastro do cliente</h1>
          
                   <h3>Nome</h3>
                   <input  id="inputName" type="text" placeholder="Nome"/>
                    <h3>Telefone</h3>
                   <input  id="inputPhone" type="number" placeholder="Telefone"/>
                    <h3>E-mail</h3>
                   <input  id="inputEmail" type="email" placeholder="E-mail"/>
                    <h3>Endereço</h3>
                   <input  id="inputAdress" type="text" placeholder="Endereço"/>
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
