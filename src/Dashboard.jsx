import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, select, Pagination, Row, Table } from 'react-bootstrap'
import axiosInstance from './apiUtil'
import ProductRow from './ProductRow'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [products,setProducts]=useState([])
    const [month,setMonth]=useState(0)
    const payload={"month":month}
    
    // useEffect(()=>{
    //     (async()=>{

    //         const data = await axiosInstance.post("/product/all",payload);
    //   console.log({ data });
    //   setProducts(data.data.data);
    //   console.log("i am data", data.data.data);
    //     })()
    // },[])
//     let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }
// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     <br />

//     {/* <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination> */}
//   </div>
// );
  
  useEffect(()=>{
    ( async(month)=>{
      const data = await axiosInstance.post("/product/bymonth",payload);
      console.log({ data });
      setProducts(data.data.data);
      
      console.log("month=",month)
    })()
      
  },[month])
  return (
    <Container>
    <Col>
    <Row>
    <select id="dropdown-basic-button" title="Select Month" value={month} defaultValue={3} onChange={e=>setMonth(e.target.value)}>
      <option value={1} > Jan</option>
      <option value={2}>Feb</option>
      <option value={3}>Mar</option>
      <option value={4}>Apr</option>
      <option value={5}>May</option>
      <option value={6}>Jun</option>
      <option value={7}>Jul</option>
      <option value={8}>Aug</option>
      <option value={9}>Sep</option>
      <option value={10}>Oct</option>
      <option value={11}>Nov</option>
      <option value={12}>Dec</option>
    </select>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
          <th>Image</th>  
        </tr>
      </thead>
      <tbody>
        {products.map(product=><ProductRow key={product.id} id={product.id} title={product.title} 
        desc={product.description} price={product.price} 
        category={product.category} sold={product.sold} img={product.image} />)}
      </tbody>
    </Table>
    {/* <div>{paginationBasic}    </div> */}
    </Row>
    </Col></Container>
  )
}

export default Dashboard