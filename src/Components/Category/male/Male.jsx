import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect} from 'react';
import axios from 'axios'
import cors from 'cors'




function GroupExample() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    return () => {
      fetch('http://localhost:3300/products', {
        method: 'GET'
      }).then(res => res.json()).then(res => console.log(res))
    }
  }, [])
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;