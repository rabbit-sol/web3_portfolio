import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
 
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
   
      <Col xs={4} md={2} className="tech-icons">
              <SiVisualstudiocode className="img-responsive center-block d-block mx-auto"/>
      </Col>


          <Col xs={4} md={2} className="tech-icons">
              <FaHardHat className="img-responsive center-block d-block mx-auto" />
          </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiVercel className="img-responsive center-block d-block mx-auto" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiHeroku className="img-responsive center-block d-block mx-auto"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
