import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./fnavbar.css"
import profileImg from "../StoryPhotos/prazual.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faStore,faUsersRectangle,faTv, faPlus, faBell, faMessage, faChessBoard } from '@fortawesome/free-solid-svg-icons';

import fblogo from '../photos/fblogo.png'

export default function Fnavbar() {
  return (
    <div>
      
      <Navbar bg="white" expand="lg" style={{boxShadow: "0 0px 4px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",height:"58px"}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={fblogo} alt="facebookLogo" height="40" width="40"/><span id='facebook'>facebook</span></Navbar.Brand>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Form className="d-flex" >
            <Form.Control 
            
              type="search"
              placeholder="&#xf002;  Search Facebook"
              className="searchBar"
              aria-label="Search"
              style={{fontFamily:"fontawesome",height:"40px",width:"235px",
                borderRadius:"20px",backgroundColor:"#f3f6f4",borderWidth:"0px",margin:"auto"}}
            />
          </Form>
            <Nav.Link href="#action1" style={{marginLeft:"2%"}}>
            <FontAwesomeIcon className='centerIcon' icon={faHouse} />
            </Nav.Link>
            <Nav.Link href="#action2">
            <FontAwesomeIcon className='centerIcon' icon={faTv} />
            </Nav.Link>
            <Nav.Link href="#action2">
                <FontAwesomeIcon className='centerIcon' icon={faStore} />
            </Nav.Link>
            <Nav.Link href="#action2">
                <FontAwesomeIcon className='centerIcon' icon={faUsersRectangle} />
            </Nav.Link>
            <Nav.Link href="#action2" style={{marginRight:"9%"}}>
                <FontAwesomeIcon className='centerIcon' icon={faChessBoard} />
            </Nav.Link>
          
            <Nav.Link href="#">
                <FontAwesomeIcon className='rightSideIcon' icon={faPlus} />
            </Nav.Link>
            <Nav.Link href="#">
                <FontAwesomeIcon className='rightSideIcon' icon={faMessage} />
            </Nav.Link>
            <Nav.Link href="#">
                <FontAwesomeIcon className='rightSideIcon' icon={faBell} />
            </Nav.Link>
            <Nav.Link href="#">
                <img src={profileImg} alt="profileImg" height="38" width="38" style={{marginTop:"15%",borderRadius:"60px"}}/>
            </Nav.Link>
    
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
