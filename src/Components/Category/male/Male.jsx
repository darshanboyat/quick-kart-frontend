import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import cors from 'cors'


function GroupExample({loginStatus}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    return () => {
      fetch('http://localhost:3300/products', {
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
      <CardGroup className='p-4'>
        {products.map((prod, index) => {
          return <>
            {index < 3 &&
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
      <CardGroup className='mb-4' style={{marginLeft: '2%'}}>
        {products.map((prod, index) => {
          return <>
            {index <= 6 & index > 3 &&
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
      <CardGroup style={{justifyContent: 'space-between'}}>
        {products.map((prod, index) => {
          return <>
            {index <= 9 & index > 6 &&
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