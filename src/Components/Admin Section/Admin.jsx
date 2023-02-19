import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

function ResponsiveBreakpointsExample() {

  const [order, setOrder] = useState([])
  useEffect(() => {
    const token = "Bearer " + localStorage.getItem('token')

    axios.get("http://localhost:3300/admin/order", { headers: { 'Authentication': token } }).then(async res => {
      setOrder(res.data.response)
    })
  }, [])


  return (
    <div style={{ color: "white" }}>
      <Table responsive="sm">
        <thead>
          <tr style={{ color: "white" }}>
            <th>#</th>
            <th>Customer Name</th>
            <th>Products X Quantity</th>
            <th>Price</th>
            <th>Contact</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ color: "white" }}>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ResponsiveBreakpointsExample;