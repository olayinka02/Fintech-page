import React, { Component } from 'react';
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap';
import undrawone from './image/undrawone.svg';
import undrawtwo from './image/undrawtwo.svg';
import undrawthree from './image/undrawthree.svg';


class Displaypage extends Component {

  
  render() {
      return(
        <div className="carouselbody">
            <Container fluid>
            <Carousel className="carouselbg">
            <Carousel.Item interval={12000}>
               <div className="carouselinfo">
               <Row>
                   <Col sm={6} md={6} xs={12}>
                       <div>
                       <img alt="digitalimage" src={undrawone} style={{width:270,height:170}}/>
                       </div>
                   </Col>
                   <Col sm={6} md={6} xs={12}>
                       <div>
                       <h5 style={{color:'whitesmoke'}}>Stay ahead of the <span style={{color:'#1C8A7C',fontStyle:'bold',fontSize:30}}>Digital Game</span></h5>
                       <h4 style={{color:'whitesmoke'}}>We Are <span style={{color:'#1C8A7C',fontStyle:'bold',fontSize:35,}}>fintech.</span></h4>
                       <p  style={{color:'whitesmoke'}}>Delivering digital transformation that will enable you to power efficiency, drive growth and buid credibility for businesses</p><br/>
                       <Button variant="outline-light">Contact-US</Button><br/>
                       </div>
                   </Col>
               </Row>
               </div>
            </Carousel.Item>

            <Carousel.Item interval={12000} >
               <div className="carouselinfo">
               <Row>
                   <Col sm={6} md={6} xs={12}>
                       <div>
                       <img alt="digitalimage" src={undrawtwo} style={{width:270,height:170}}/>
                       </div>
                   </Col>
                   <Col sm={6} md={6} xs={12}>
                       <div>
                       <h5 style={{color:'whitesmoke'}}>We Offer <span style={{color:'#1C8A7C',fontStyle:'bold',fontSize:30}}>Flexible and Scaleable</span></h5>
                       <h4 style={{color:'whitesmoke'}}><span style={{color:'#1C8A7C',fontStyle:'bold',fontSize:35,}}>Web Solution.</span></h4>
                       <p  style={{color:'whitesmoke'}}>We are expert in art of web design and development,we handle hundred of web and other ICT projects</p>
                       <Button variant="outline-light">Read more</Button><br/>
                       </div>
                   </Col>
               </Row>
               </div>
            </Carousel.Item>

            <Carousel.Item interval={12000} >
               <div className="carouselinfo">
               <Row>
                   <Col sm={6} md={6} xs={12}>
                       <div><center>
                       <img alt="digitalimage" src={undrawthree} style={{width:270,height:170}}/>
                       </center>
                       </div>
                   </Col>
                   <Col sm={6} md={6} xs={12}>
                       <div>
                       <h5 style={{color:'whitesmoke'}}>We provide <span style={{color:'whitesmoke',fontStyle:'bold',fontSize:30}}>Complete and Custom</span></h5>
                       <h4 style={{color:'whitesmoke',fontSize:35,}}>Software <span style={{color:'#1C8A7C',fontStyle:'bold',fontSize:35,}}>Solution.</span></h4>
                       <p  style={{color:'whitesmoke'}}>Today,more than ever a technology body that you can trust is a pivotal part of your digital transformation strategy</p>
                       <Button variant="outline-light">Read more</Button><br/>
                       </div>
                   </Col>
               </Row>
               </div>
            </Carousel.Item>
            
           
            </Carousel>
            </Container>

        </div>
          
      );
  }
}




export default Displaypage;

