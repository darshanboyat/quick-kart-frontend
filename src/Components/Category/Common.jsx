import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import cors from 'cors'


function GroupExample() {
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
                  <Card.Text style={{justifyContent: 'space-between'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
                </Card.Body>
                 
              </Card>}
          </>
        })}
      </CardGroup>
      <CardGroup className='p-4'>
        {products.map((prod, index) => {
          return <>
            {index <= 6 & index > 3 &&
              <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title style={{ color: 'black' }}>{prod.title}</Card.Title>
                  <Card.Text style={{justifyContent: 'space-between'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
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
                  <Card.Text style={{justifyContent: 'space-between'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
                </Card.Body>
                 
              </Card>}
          </>
        })}
      </CardGroup>


      <CardGroup className='mt-3' style={{ justifyContent: 'space-between', marginLeft: '-6.05%'}}>
        {products.map((prod, index) => {
          return <>
            {index <= 12 & index > 9 &&
              <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title style={{ color: 'black' }}>{prod.title}</Card.Title>
                  <Card.Text style={{justifyContent: 'space-between'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
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
                  <Card.Text style={{justifyContent: 'space-between'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
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
                  <Card.Text style={{justifyContent: 'space-between'}}>
                    Price - {prod.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Size - {prod.size}
                  </Card.Text>
                </Card.Body>

              </Card>}
          </>
        })}
      </CardGroup>
    </>
  );
}

export default GroupExample;