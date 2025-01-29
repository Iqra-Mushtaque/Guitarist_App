import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Guitar from "../../assets/main/next1.jpg"
import { Link } from 'react-router-dom';

function Sect1() {
  return (
  <section className="main_section">
    <Container>
    <Row>
        <Col lg={7} className="mb-5 mb-lg-0">
        <div className="postion-relative">
            <img src={Guitar} className="img-fluid" alt="Main"/>
            <div className="badge_price">
                <div className="badge_text">
                    <h4 className="h4_xs">Only</h4>
                    <h4 className="h3_ll">$5.99</h4>
                </div>
            </div>
        </div>
        </Col>
        <Col lg={5}>
        <div className="main_text text_center">
            <h1 className="text-white">New Guitars</h1>
            <h2 className="text-white">Acoustic</h2>
            <p className="text-white pt-2 pb-4">
            Hic vel voluptas eligendi, sint ipsam officiis voluptatibus est reprehenderit aliquam eveniet tempore accusantium doloribus.
            </p>
            <Link to="/" className="order_now ">
             Order Now
            </Link>
        </div>
        </Col>
    </Row>
    </Container>
  </section>
  )
}

export default Sect1;