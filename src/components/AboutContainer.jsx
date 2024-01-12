import { Container, Row, Col, Image } from "react-bootstrap";
import SocialBar from "./SocialBar";
import { forwardRef } from "react";
import TypeWriter from "./TypeWriter";

const AboutContainer = (props, ref) => {
  const heading = 'Hello World! Welcome to my Website! 🤓'
  const desc = "Computer Science graduate with 5 years of programming experience. Currently, I'm currently seeking full-time/internship opportunities to apply my skills and contribute to innovative projects. If you think I'd be a good fit, please feel free to contact me."
  return (
    <Container ref={ref} fluid className='d-flex justify-content-center mt-2 mb-2'>
      <Row>
        <Col sx={12} className='text-center'>
          <Image src='favicon.png' fluid thumbnail roundedCircle
            style={{ maxWidth: '35%' }}></Image>
          <h4><TypeWriter text={heading} speed={50}></TypeWriter></h4>
          {/* Contacts */}
          <SocialBar />
          <h5>{desc}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default forwardRef(AboutContainer);