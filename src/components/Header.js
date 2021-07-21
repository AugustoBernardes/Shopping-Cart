import React from 'react'

export default function Header(props){
    const {countCartItems} = props
    return(
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Loja do Gordão</h1>
                </a>
            </div>
            <div>
                <a href="#/">Carrinho{' '}
                {countCartItems ? (
                    <button  className='badge'>{countCartItems}</button>
                ): (
                    ''
                )}
                </a>
            </div>
        </header>
    )
}