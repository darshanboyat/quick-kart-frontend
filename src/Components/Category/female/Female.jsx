import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import cors from 'cors'


function GroupExample({loginStatus}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    return () => {
      fetch('http://localhost:3300/fproducts', {
        method: 'GET'
      }).then(res => res.json()).then(async res => {
        res = JSON.stringify(res)
        await setProducts(JSON.parse(res))
        console.log(products)
      })
    }
  }, [])
  return (
    <>
      <CardGroup className='mt-3' style={{ justifyContent: 'space-between', marginLeft: '-6.05%'}}>
        {products.map((prod, index) => {
          return <>
            {index <= 12 & index > 9 &&
              <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title style={{ color: 'black' }}>{prod.title}</Card.Title>
                  <Card.Text style={{justifyContent: 'space-between', fontWeight: 'bolder'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
                  {loginStatus && <button style={{color: 'white', backgroundColor: 'green', border: 'none', outline: 'none', borderRadius: '2rem'}}>Add to Cart</button>}
                </Card.Body>

              </Card>}
          </>
        })}
      </CardGroup>
      <CardGroup className='mt-3 p-3' style={{ justifyContent: 'space-between', marginLeft: '-8.9%'}}>
        {products.map((prod, index) => {
          return <>
            {index <= 15 & index > 12 &&
              <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title style={{ color: 'black' }}>{prod.title}</Card.Title>
                  <Card.Text style={{justifyContent: 'space-between', fontWeight: 'bolder'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
                  {loginStatus && <button style={{color: 'white', backgroundColor: 'green', border: 'none', outline: 'none', borderRadius: '2rem'}}>Add to Cart</button>}
                </Card.Body>

              </Card>}
          </>
        })}
      </CardGroup>
      <CardGroup className='mt-3 p-5' style={{ justifyContent: 'space-between', marginLeft: '-11.5%'}}>
        {products.map((prod, index) => {
          return <>
            {index <= 18 & index > 15 &&
              <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title style={{ color: 'black' }}>{prod.title}</Card.Title>
                  <Card.Text style={{justifyContent: 'space-between', fontWeight: 'bolder'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
                  {loginStatus && <button style={{color: 'white', backgroundColor: 'green', border: 'none', outline: 'none', borderRadius: '2rem'}}>Add to Cart</button>}
                </Card.Body>

              </Card>}
          </>
        })}
      </CardGroup>
      
    </>
  );
}

export default GroupExample;