import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";


function Article({ author, title, description, url }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>

          {author && <h5 className="font-italic">{author}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
              View
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by: {author}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <p className="font-italic small">Description: {description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Article;
