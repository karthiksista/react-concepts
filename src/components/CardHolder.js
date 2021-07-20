import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const CardHolder = ({ children, title }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="text-center" tag="h5">
            {title}
          </CardTitle>
          <CardText className="text-center">{children}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardHolder;
