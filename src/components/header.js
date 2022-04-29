import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { observer } from "mobx-react-lite";

export const Header = observer(({store}) => {
    
 return (
    <Row >
        <Col sm={6}>
            <div className='title'><h4>Still</h4></div>
        </Col>
        <Col sm={6}>
        <div className='info'>
            Optionen 
            <span className='font-20'>  {store.name.option}</span>
            <div>
                <span className='font-10'>CHF  </span>
                <span className='font-20'>{store.name.price}</span>
            </div>
        </div>
        </Col>
    </Row>
  );
});