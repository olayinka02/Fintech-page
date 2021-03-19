import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { PersonFill ,GeoAlt, Lightbulb, Building, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

import ola1 from './image/ola1.jpg';

import mobile from './image/mobile.svg';
import web from './image/web.svg';
import desktop from './image/desktop.svg';
import social from './image/social.svg';
import cloud from './image/cloud.svg';
import it from './image/it.svg';
import Formbody from './Formbody';





  
  const Landingpage = () => {
    useEffect(() => {
       Aos.init({duration: 1200 });
    }, []);
    return (
      <div className="landingpage">
      <Container fluid>
        <br/><br/><br/>
        <div data-aos="fade-up" className="choosefintech">
          <center>
            <h2>Why Choose Fintech Technology</h2>
            <p>We are innovative in driven your business,we makes it secure ,scalable,easy to use with support provider,our goal is to develop technology that wil help the society to run more profitable businesses goal and objectives</p>
            <p>Anything we do is the end result of mind,so if you are trying to generate sales,leads or phone calls that works we have a solution that works</p>
          </center>
        </div><br/><br/><br/><br/>

        <div  data-aos="fade-up"  ><center>
        <h2>Our Experties</h2><hr/>
        </center>
          
          <Row>
            <Col xs={12} md={4}>
              <div style={{paddingTop:40,}} >
                <center>
                  <img alt="mobile" src={mobile} style={{width:'8rem'}} />
                  <h6>mobile development</h6>
                  <p style={{fontSize:14,width:250,}}>Native to cross platform technology, we help you embrace mobility with ease</p>

                </center>
              </div>
            </Col>
            <Col xs={12} md={4}>
            <div style={{paddingTop:40,}} >
                <center>
                  <img alt="mobile" src={web} style={{width:'8rem'}} />
                  <h6>web development</h6>
                  <p style={{fontSize:14,width:250,}}>Desktop application develop from businesses analysis through design and implementation</p>

                </center>
              </div>
            </Col>
            <Col xs={12} md={4}>
            <div style={{paddingTop:40,}} >
                <center>
                  <img alt="mobile" src={desktop} style={{width:'8rem'}} />
                  <h6>desktop</h6>
                  <p style={{fontSize:14,width:250,}}>we laverage the power of social media and to attract, acquire and retain customer</p>

                </center>
              </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12} md={4}>
            <div style={{paddingTop:40,}} >
                <center>
                  <img alt="mobile" src={social} style={{width:'5rem'}} />
                  <h6>social handle</h6>
                  <p style={{fontSize:14,width:250,}}>consulting base services to develop,migrate and maintain custom application for cloud</p>

                </center>
              </div>
            </Col>
            <Col xs={12} md={4}>
            <div style={{paddingTop:40,}} >
                <center>
                  <img alt="mobile" src={cloud} style={{width:'6rem'}} />
                  <h6>cloud technology</h6>
                  <p style={{fontSize:14,width:250,}}>we are always ready to help your company with her IT related problem</p>

                </center>
              </div>
            </Col>
            <Col xs={12} md={4}>
            <div style={{paddingTop:40,}}>
                <center>
                  <img alt="mobile" src={it} style={{width:'6rem'}} />
                  <h6>IT consultancy</h6>
                  <p style={{fontSize:14,width:250,}}>Delivery web convinently technology to full stack development</p>

                </center>
              </div>
            </Col>
          </Row><hr/>
        </div><br/><br/><br/>
      
   {/*projects completed*/}
     <div className="completeproj">
       <Row>
         <Col  data-aos="fade-down" xs={12} md={4}>
           <div style={{lineHeight:'0.3',color:'white',paddingTop:46,}}>
             <center>
             <h4 style={{color:'black',}}>Let Grow Your Business</h4>            
             <div className="speechlinexx" ></div><br/>
             </center>
           </div>
         </Col>
         <Col  data-aos="zoom-in" xs={12} md={2}>
           <div className="numberone"  >
           <center>
           <h4 style={{color:'black',}}>240<sup>+</sup></h4>
           <p style={{color:'black',}} >Projects</p>
           </center>

           </div>
         </Col>
         <Col data-aos="zoom-in"  xs={12} md={2}>
         <div className="numberone" >
         <center>
           <h4 style={{color:'black',}}>12<sup>+</sup></h4>
           <p style={{color:'black',}}>Trainnings</p>
           </center>
           </div>
         </Col>
         <Col data-aos="zoom-in"  xs={12} md={2}>
         <div className="numberone" >
         <center>
           <h4 style={{color:'black',}}>570<sup>+</sup></h4>
           <p style={{color:'black',}}>Brands</p>
           </center>
           </div>
         </Col>
         <Col data-aos="zoom-in"  xs={12} md={2}>
         <div className="numberone" >
           <center>
           <h4 style={{color:'black',}}>500<sup>+</sup></h4>
           <p style={{color:'black',}} >Clients</p>
           </center>
           </div>
         </Col>
       </Row>
     </div>
   </Container><br/><br/><br/>

{/*The Management*/}
  <Container >
  <h4  style={{color:'#1C8A7C',}}  ><b>The <span style={{color:'black',}} >Management</span></b></h4>
     <div className="speechlinexx" ></div>
  <Row>
     <Col xs={12} md={3}>
      <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h6 style={{color:'#95232A',marginTop:8,}}>Lead Frontend Developer</h6></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the technology challenged 
        <br/><h6 style={{float:'right',color:'#1C8A7C'}} >Tunrayo Yinka</h6></p>
       
      </div>
     </Col >
     <Col xs={12} md={3} >
     <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h6 style={{color:'#95232A',marginTop:8,}}>Lead Backend Developer</h6></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the technology challenged  
        <br/><h6 style={{float:'right',color:'#1C8A7C'}} >Omolola</h6></p>
       
      </div>
      </Col>
     <Col xs={12} md={3}>
     <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h6 style={{color:'#95232A',marginTop:8,}}>Lead Designer</h6></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the technology challenged 
        <br/><h6 style={{float:'right',color:'#1C8A7C'}} >Segun Ayo</h6> </p>
       
      </div>
      </Col>
     <Col xs={12} md={3}>
     <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h6 style={{color:'#95232A',marginTop:8,}}>Head Marketer</h6></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the technology challenged 
        <br/><h6 style={{float:'right',color:'#1C8A7C'}} >Ola Makin</h6></p>
       
      </div>
      </Col>
   </Row>
  </Container><br/><br/>


   {/* about fintech and where a video can be placed */}
   <Container fluid>
     <div  data-aos="fade-up"  className="video">
       <center>
         <div className="videotitle">
         <h5 style={{color:'#95232A',}} >Our purpose is to provide a <span style={{color:'#1C8A7C'}}>safe, and great software</span> for our client, 
           for their business growth; 
           while acquiring more skills foundation needed to achieve Excellence</h5><hr/>
           </div>
       </center>
       <Row>
         <Col  sm={5} md={5} xs={12}>
         <div>
            <h6  style={{color:'#95232A',}}  >WHAT <span style={{color:'#1C8A7C',}} >WE STAND FOR</span></h6>
            <h6 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Mission</span></b></h6>
            <div className="standquote">
            <p className="textz" >Our mission is to raise and develop sophisticated App for our client businesses and management.</p>
            </div>

            <h6 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Vission</span></b></h6>
            <div  className="standquote" >
            <p className="textz" >To be a leading centre of technology like no other in Nigeria and Africa as a whole.</p>
            </div>


            <h6 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Core Value</span></b></h6>
            <div  className="standquote">
            <ul className="textz">
              <li>Handworking</li>
              <li>Integrity</li>
              <li>Passion</li>
              <li>Intelligent</li>
            </ul>
            </div>

        {/* where a video could be placed */}            
         </div>
         </Col>
         <Col  sm={7} md={7} xs={12}>
         <div>
         <iframe className="vid" src="https://player.vimeo.com/video/11204942?title=0&byline=0&portrait=0" title="vide0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         </div>
         </Col>
       </Row>

     </div>
   </Container>
   {/* what makes us fintech */}
   <Container fluid>
     <div  data-aos="fade-up"  className="pride">
     <h4  style={{color:'#1C8A7C',}}  ><b>What <span style={{color:'black',}} >makes us the best..</span></b></h4>
     <div className="speechlinexx" ></div><br/>
       <Row>
         <Col  data-aos="zoom-in"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><PersonFill style={{color:'#95232A',width:30,height:30,}}/></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Experienced Developer</b></h5></center>
           <p style={{color:'white',fontSize:14,}}>We are blessed with Highly Qualified developer, Instructors 
             and Administrators with many years of professional 
             experience in development of software</p>
         </div><br/>
         </Col>

         <Col  data-aos="zoom-in"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><PersonFill style={{color:'#95232A',width:30,height:30,}} /></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Smart Developer</b></h5></center>
           <p style={{color:'white',fontSize:14,}}>We are blessed with Highly Qualified developer, Instructors 
             and Administrators with many years of professional 
             experience in teaching and development of software</p>
         </div><br/>
         </Col>

         <Col  data-aos="zoom-in"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><PersonFill style={{color:'#95232A',width:30,height:30,}} /></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Fast Developer</b></h5></center>
           <p style={{color:'white',fontSize:14,}}>We are blessed with Highly Qualified developer, Instructors 
             and Administrators with many years of professional 
             experience in teaching, learning and development of software</p>
         </div><br/>
         </Col>


         <Col  data-aos="zoom-in"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><Building style={{color:'#95232A',width:30,height:30,}} /></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>ICT Trainning</b></h5></center>
           <p style={{color:'white',fontSize:14,}}>Skills acquisition programme in: ICT (Website Design and Programming, Computer Analysis etc.), 
           Electrical work, Photography, Fabrics and Cloth Design, 
           Bead making, and Paper Craft</p>
         </div>
         </Col>
       </Row><br/><br/>


       <h4  style={{color:'#1C8A7C',}}  ><b>What <span style={{color:'black',}} >our clients says..</span></b></h4>
     <div className="speechlinexx" ></div><br/>
     <Row>
       <Col  data-aos="fade-up" xs={12} md={4}>
        <div className="seniorquote">
          <p style={{color:'black',}}>The advancement of technology generally evokes a range of emotions in people from all walks of life.  Some view technology as a great evil that slowly diminishes our humanity, while others view it as a way to bring the world closer together and to help solve some of our greatest challenges.  Regardless of your view, almost everyone has a favorite quote or two about the impact that technology has on our lives.  These are my 20 favorites.you cant regret working with fintech<br/>
            <h5 style={{float:'right',}} >olayinka</h5>
          </p>

        </div>
       </Col>
       <Col  data-aos="fade-up" xs={12} md={4} >
       <div className="seniorquote">
          <p  style={{color:'black',}} >The advancement of technology generally evokes a range of emotions in people from all walks of life.  Some view technology as a great evil that slowly diminishes our humanity, while others view it as a way to bring the world closer together and to help solve some of our greatest challenges, fintech is the best
            <br/>
            <h5 style={{float:'right',}} >morola olayinka</h5>
          </p>
        </div>
        </Col>
       <Col  data-aos="fade-up" xs={12} md={4}>
       <div className="seniorquote">
          <p  style={{color:'black',}}>The advancement of technology generally evokes a range of emotions in people from all walks of life.  Some view technology as a great evil that slowly, Fintech is great 
            <br/>
            <h5 style={{float:'right',}} >olayinka-segun</h5>
          </p>
        </div>
        </Col>     
      </Row>
      <br/><br/>
     </div>
   </Container><br/><br/><br/>


  {/*information about fintech */}

   <Container fluid >
     <div className="info" >
     <Row>
       <Col md={4} sm={12}>
       <div className="infox" >
         <center>
           <GeoAlt style={{color:'red',}} size={24} />
           <h5 style={{color:'white'}}>Address</h5>
           <p  style={{color:'white',fontSize:13}}><b>Head-office:</b> Base (4) Antenna, Aku Village, Mararaba.</p>
           <p  style={{color:'white',fontSize:13,lineHeight:0.01,}}><b>Branch-office:</b> Off Orange market,Mararba</p>
         </center>
       </div>
       </Col>
       <Col md={4} sm={12}>
       <div className="infox" >
       <center>
           <TelephoneFill style={{color:'red',}} size={24} />
           <h5 style={{color:'white'}}>Phone-Number</h5>
           <p  style={{color:'white',fontSize:14}}>08101831001</p>
           <p  style={{color:'white',fontSize:14,lineHeight:0.01,}}>07035764622</p>
         </center>
       </div>
       </Col>
       <Col md={4} sm={12}>
       <div className="infox" >
       <center>
           <EnvelopeFill style={{color:'red',}} size={24} />
           <h5 style={{color:'white'}}>Online-Address</h5>
           <p  style={{color:'white',fontSize:14}}><b>web:</b> fintech.com</p>
           <p  style={{color:'white',fontSize:14,lineHeight:0.01,}}><b>Email:</b> oluwasegunyinka.gmail.com</p>
         </center>
       </div>
       </Col>
     </Row>
     </div>
   </Container>

  {/*client form*/}
   <Formbody  />
   

  
  

  
 </div>
    );
  }


 



export default Landingpage;

