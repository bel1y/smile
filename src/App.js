import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#"><div className="lo"></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
       
           <NavDropdown className='gg' title="BARCHA KURSLAR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
                 <NavDropdown className='sd' 
             title="UZBEK" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
     <Nav.Link href="#link" ><button className='sdr'>KIRISH</button></Nav.Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div className="tr">
      <div className="ye"></div>
      <div className="kitt">
        <h1 className='hh'>Biz sizga <span>Dasturla</span> <br />
va boshqa kurslarni taklif <br /> 
qilamiz.</h1>
<p className='pp'>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz <br /> 
mumkin. Buning uchun qidiruv tizimidan foydalaning</p>
<input className='input' type="text" placeholder='Qanday kurs o’rganmoqchisiz ?' />
      </div>
      <div className="ddd">
<div className="dd">
<div className="bir">
 <div className="b"> 
 <button className='bu'>Marketing</button> 
 <h4 className='d'>250.000 <span>UZS</span></h4>
 </div>
  <h1 className='rr'>Raqamli marketing bo'yicha <br /> 
to'liq kurs <span>| 48 soat</span></h1>
<div className="i"></div>
</div>
<div className="ikki">
<div className="ik"> 
 <button className='bi'>Dasturlash</button> 
 <h4 className='ko'>250.000 <span>UZS</span></h4>
 </div>
  <h1 className='rp'>Java Spring bo’yicha <br /> to’liq
kurs(amaliy)</h1>
<div className="i"></div>

</div>
</div>
<div className="d">
<div className="uch">
<div className="uc"> 
                  <button className='ci'>Dizayn</button> 
 <h4 className='kf'>400.000 <span>UZS</span></h4>
 </div>
                <h1 className='rd'>Illustrator 0 dan professionalgacha <br />
                  to’liq  kurs</h1>
<div className="i"></div>
</div>
<div className="tor">
                <div className="uc">
                  <button className='oi'>Biznes</button>
                  <h4 className='kf'>400.000 <span>UZS</span></h4>
                </div>
                <h1 className='rd'>Shaxsiy biznersni rivojlantirishda <br />
                  e’tibor berish kerak bo’lgan</h1>
                <div className="i"></div>
</div>




</div>
</div>






      </div>
      <div className="dva">
          <div className="lk">Bizning eng top kurslarimizni ko'rib chiqing</div>
          <div className="kotttta">
<div className="ikktakichkina">
<div className="dasturlash">
  <div className="s"></div>
                <h1 className='dfgs'>Java, Spring bo’yicha to’liq <br />
                  kurs. (amaliy)</h1>
                  <div className="bid"></div>
  <div className="binima">
    <div className="bini">
                    <h4 className='tyui'>Kurs hajmi</h4>
      <h1 className='css'>38 soat</h1>
    </div>
<div className="ima">
                    <h4 className='sddd'>Kurs narxi</h4>
                    <h1 className='cvbnm'>250.000 UZS</h1>
</div>
  </div>
</div>
<div className="dizayn"></div>
</div>
<div className="ikkinchi">
<div className="dizayn2"></div>
<div className="biznes"></div>
</div>


          </div>
      </div>
    </div>
 
    )
  }
}


