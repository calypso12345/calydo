import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { NavBar } from './navbar';
import { Header } from './header';
import { ActionButton } from './actionButton';
import { SelectionForm } from './selectionForm';
import { MiddleColumn } from './middleColumn';

export const SecondPage = observer(({store}) => {

 const [image, setImage] = useState();

 let ref = React.createRef();

 useEffect(() => {
    setImage(store.name);
    let root = document.querySelector(`html`);
    root.style.setProperty('--overflow', 'hidden');
 }, [store.name]);

 return (
    <Container fluid>
        <Row className='height-100'>
            <Col sm={8} className='padding-0'>
                <div className="firstPageImage" ref={ref}>
                   <NavBar/>
                </div>
            </Col>
            <Col sm={1}>
                <MiddleColumn text='Ausstattung' />
            </Col>
            <Col sm={3} className='images-column'>
                <Header store={store} />
                <div className="image-div">
                    <SelectionForm store={store} />
                </div>
               <ActionButton name="Summary" path="/thirdPage"/>
            </Col>
        </Row>
    </Container>
  );
})
