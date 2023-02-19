import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmptyCart from '../../Assets/EmptyCart.jfif'
import { useCart } from 'react-use-cart'
import { Typography } from '@material-ui/core'
import CartButton from './Cart Buttons/Buttons'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import axios from 'axios';

function Cart() {
    let totalPrice = 0;
    const [data, setData] = React.useState({})

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const placeOrder = async () => {
        const token = "Bearer " + localStorage.getItem('token')

        await axios.get('http://localhost:3300/getUser', { headers: { 'Authentication': token } }).then(async res => {
            console.log(res.data.data)
            await axios.post('http://localhost:3300/setOrders', {user: res.data.data, order: items}, { headers: { 'Authentication': token } }).then(()=>{
                console.log(data._id)    
                localStorage.removeItem('react-use-cart');
                window.location.reload();
            })
        })
        

    }
    items.map(item => totalPrice += item.price * item.quantity)
    console.log(items)
    return (
        <>
            <div className="">

                <div className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', color: 'gold' }}>
                    <h1 style={{ color: 'white' }}>Cart</h1>
                    <h6>({totalUniqueItems})</h6>
                </div>
                {!isEmpty ?
                    <>
                        <div className="container px-1 text-center cart-container">
                            <div className="row gx-1">
                                <div className="col">
                                    {
                                        items.map((prod, index) => (
                                            <div className="p-3 d-flex border mb-3 bg-light" key={prod.id}>
                                                <img src={prod.image} width="15%" alt="" />
                                                <h2 className='prod' style={{ marginLeft: '-10%' }}>{prod.name}</h2>
                                                <h2 className='prod' style={{ marginLeft: '-5%' }}>{prod.quantity} X {prod.price}</h2>
                                                <h2 className='prod'>&#8377; {prod.price * prod.quantity}</h2>
                                                <CartButton id={prod.id} quantity={prod.quantity} updateItemQuantity={updateItemQuantity} />
                                                <div className="d-flex" style={{ position: 'absolute', marginTop: 100, marginLeft: 450 }} >
                                                    <input type="text" name="customize" id="customize" placeholder='Enter something to customize outfit of your choice' style={{ width: 400, borderRadius: '.5rem 0rem 0rem .5rem', backgroundColor: '#EBEBFC', border: 'transparent', boxShadow: '2px 3px 5px black' }} />
                                                </div>
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="customization d-flext ml-4" style={{ flexDirection: 'column', width: 350, marginLeft: 90, marginTop: 100 }}>
                            <div className="d-flex">
                                <label htmlFor="customize" style={{ paddingLeft: 50 }}>Customization Suggestions</label>
                                <h6 style={{ color: 'gray', fontSize: 10 }}>Optional</h6>
                                {onHover && <div className="d-flex popover-container" style={{ padding: 0, position: 'absolute', top: '-6%', left: '21.8%', fontSize: 15, fontWeight: 'bold', color: 'white', flexDirection: 'column', height: 5, textAlign: 'center' }}>
                                    <div className="popover-top p-2" style={{ backgroundColor: 'gray', borderRadius: 5 }}>Write some customizations in clothes</div>
                                    <i className="bi bi-caret-down-fill" style={{ position: 'absolute', color: 'gray', top: 30, left: 80 }} />
                                </div>}
                                <i className="bi bi-question-circle for-premium-user" style={{ fontSize: 15, width: 25, height: 25, backgroundColor: '#EBEBFC', color: 'black', borderRadius: '2rem' }} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} />

                            </div>
                            
                        </div>
                        <figure className="figure" style={{ marginTop: '-5%' }}>
                            <h1 className="d-flex total-box">Total :-  &#8377; {products[3].total}</h1>
                            <button type="button" className="total-box btn btn-success" onClick={placeOrder}>Place Order</button>
                        </figure> */}
                        <div className="d-flex" style={{ justifyContent: 'right', width: '90%' }}>
                            <h1 style={{ color: 'white' }}>Sub Total : &#8377; {totalPrice}</h1>
                        </div>
                        <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'end', pr: 20 }}>
                            <Button variant="contained" sx={{ p: '.8% 7% ', backgroundColor: 'green' }} onClick={placeOrder}>Place Order</Button>
                        </Stack>
                    </> :
                    <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ color: 'white' }}>Cart is Empty</h2>
                        <h6 style={{ color: 'white' }}>Please order more.....</h6>
                        <img src={EmptyCart} style={{ width: 500, borderRadius: '1rem' }} />
                    </div>

                }
            </div>
        </>
    )
}

export default Cart