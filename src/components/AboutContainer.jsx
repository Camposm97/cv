import { Container, Row, Col, Image } from "react-bootstrap";
import SocialBar from "./SocialBar";
import { forwardRef } from "react";
import TypeWriter from "./TypeWriter";
import { ABOUT_HEAD, ABOUT_DESC } from "../util/Constants";

const AboutContainer = (props, ref) => {
  
  return (
    <Container ref={ref} fluid className='d-flex justify-content-center mt-2'>
      <Row>
        <Col className='text-center'>
          <Image src='favicon.png' thumbnail roundedCircle
            style={{ maxWidth: '30%'}}></Image>
          <h4><TypeWriter text={ABOUT_HEAD} speed={50}></TypeWriter></h4>
          {/* Contacts */}
          <SocialBar />
          <h5>{ABOUT_DESC}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default forwardRef(AboutContainer);