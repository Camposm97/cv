import { Container, Row, Col, Image } from "react-bootstrap";
import SocialBar from "./SocialBar";
import { forwardRef } from "react";
import TypeWriter from "./TypeWriter";
import { ABOUT_HEAD, ABOUT_DESC } from "../util/Constants";
import Me from "../assets/me.png"
import { Fade as FadeIn, Slide } from "react-awesome-reveal";

const AboutContainer = (props, ref) => {
  return (
    <Container ref={ref} fluid className='d-flex justify-content-center mb-4'>
      <Row>
        <Col className='text-center'>
          <Slide delay={750} direction="down" triggerOnce>
          <Image 
            src={Me} 
            thumbnail 
            roundedCircle
            style={{ maxWidth: '30%'}}
          />
          </Slide>
          <FadeIn triggerOnce>
            <h4 className="m-2">
              <TypeWriter text={ABOUT_HEAD}/>
            </h4>
          </FadeIn>
          {/* Contacts */}
          <SocialBar />
          <FadeIn triggerOnce>
            <h5>{ABOUT_DESC}</h5>
          </FadeIn>
        </Col>
      </Row>
    </Container>
  );
}

export default forwardRef(AboutContainer);