// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar1 = () => {
  const [navurl,setNavurl]=useState("")
  useEffect(() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=19c0fdba0c4d4e2ca9f41bc374e437f1`;
    let url= `https://newsapi.org/v2/top-headlines/sources?apiKey=19c0fdba0c4d4e2ca9f41bc374e437f1`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setNavurl(data.navurl);
        })
        .catch(error => console.error('Error fetching the news:', error));
        
},[])
  return (
   <>
   <Navbar expand="lg" className="bg-body-tertiary ">
      <Container >
        <Navbar.Brand href="#home"><span className="badge bg-light text-danger fs-4">NewsAPI</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Business">Business</Nav.Link>
            <Nav.Link href="#link">Entertainment</Nav.Link>
            <Nav.Link href="#Entertainment">General</Nav.Link>
            <Nav.Link href="#Health">Health</Nav.Link>
            <Nav.Link href="#Science">Science</Nav.Link>
            <Nav.Link href="#Sport">Sport</Nav.Link>
            <Nav.Link href="#Technology">Technology</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}


export default Navbar1
