import React from 'react'
import products from './CartDummyData'
import HelpIcon from '@mui/icons-material/Help';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmptyCart from '../../Assets/EmptyCart.jfif'

function Cart() {
    const [onHover, setOnHover] = React.useState(false)
    const [empty, setEmpty] = React.useState(true)
    const placeOrder = () => {
        products.forEach(prod => {
            products.pop()
        })
        setEmpty(false)
    }

    return (
        <>
            {empty ?
                <div className="">

                    <div className="container px-1 text-center cart-container">
                        <div className="row gx-1">
                            <div className="col">
                                {
                                    products.map((prod, index) => (
                                        <div className="p-3 d-flex border mb-3 bg-light">
                                            <img src={prod.image} width="15%" alt="" />
                                            <h2 className='prod'>{prod.Product}</h2>
                                            <h2 className='prod'>{prod.Quantity}</h2>
                                            <h2 className='prod'>&#8377; {prod.price * prod.Quantity}</h2>
                                        </div>
                                    )
                                    )
                                }
                                < div className="card md-3" style={{ width: '109%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="customization d-flext ml-4" style={{ flexDirection: 'column', width: 350, marginLeft: 90, marginTop: 100 }}>
                        <div className="d-flex">
                            <label htmlFor="customize" style={{ paddingLeft: 50 }}>Customization Suggestions</label>
                            <h6 style={{ color: 'gray', fontSize: 10 }}>Optional</h6>
                            {onHover && <div className="d-flex popover-container" style={{ padding: 0, position: 'absolute', top: '-6%', left: '21.8%', fontSize: 15, fontWeight: 'bold', color: 'white', flexDirection: 'column', height: 5, textAlign: 'center' }}>
                                <div className="popover-top p-2" style={{ backgroundColor: 'gray', borderRadius: 5 }}>Write some customizations in clothes</div>
                                <i className="bi bi-caret-down-fill" style={{ position: 'absolute', color: 'gray', top: 30, left: 80 }} />
                            </div>}
                            <i className="bi bi-question-circle for-premium-user" style={{ fontSize: 15, width: 25, height: 25, backgroundColor: '#EBEBFC', color: 'black', borderRadius: '2rem' }} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} />

                            {/* <HelpIcon className='custom-help' sx={{color: 'white'}} onMouseEnter={()=> setOnHover(true)} onMouseLeave={()=> setOnHover(false)}/> */}
                        </div>
                        <div className="d-flex">
                            <input type="text" name="customize" id="customize" placeholder='Enter something to customize outfit of your choice' style={{ width: 400, borderRadius: '.5rem 0rem 0rem .5rem', backgroundColor: '#EBEBFC' }} />
                            <button style={{ borderRadius: '0rem .5rem .5rem 0rem', backgroundColor: 'green', color: 'white', paddingTop: 2, paddingBottom: 4 }}><ArrowForwardIcon /></button>
                        </div>
                    </div>
                    <figure className="figure" style={{ marginTop: '-5%' }}>
                        <h1 className="d-flex total-box">Total :-  &#8377; {products[3].total}</h1>
                        <button type="button" className="total-box btn btn-success" onClick={placeOrder}>Place Order</button>
                    </figure>
                </div> :
                <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ color: 'white' }}>Cart is Empty</h2>
                    <h6 style={{ color: 'white' }}>Please order more.....</h6>
                    <img src={EmptyCart} style={{ width: 500, borderRadius: '1rem'}} />
                </div>
            }
        </>
    )
}

export default Cart