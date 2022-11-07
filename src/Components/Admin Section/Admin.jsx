import React from 'react'
import userOrder from './dummy'

function Admin() {
  return (
    <>    
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          {
            userOrder.map(data =>{
                return(
                  <>
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <button type="button" class="btn btn-warning admin-notify"> New Order <span class="badge bg-danger">{data.orderCount}</span>
                    </button>
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <h4 className="accordion-body">User Name :- {data.userName} <br/> Order Detail :- {data.OrderDetail} <br/> Price :- &#8377; {data.price} <br/> Payment Type :- {data.paymentType} <br/> Delivery Address :- {data.Address} <br /></h4>
                    </div>
                  </>
                )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Admin