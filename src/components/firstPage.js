import React, {  useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Description } from './description';
import Images from './images';
import { observer } from "mobx-react-lite";
import { NavBar } from './navbar';
import { ActionButton } from './actionButton';
import { Header } from './header';
import { MiddleColumn } from './middleColumn';

export const FirstPage = observer(({store}) => {

 const imgArray = [{'id': 0, wood: {}, format: {}, woodThirdPage: {}, formatThirdPage:{}, 'src': require('../images/page1.jpg'), 'option':'0', 'price': '1770.00', 'name': 'SCHLIHT', 'selected': false, 'description': "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
                    {'id': 1, wood: {}, format: {}, woodThirdPage: {}, formatThirdPage:{}, 'src': require('../images/page1.jpg'), 'option':'1', 'price': '2000.00', 'name': 'NAME', 'selected': false, 'description': "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
                    {'id': 2, wood: {}, format: {}, woodThirdPage: {}, formatThirdPage:{}, 'src': require('../images/page1.jpg'), 'option':'2', 'price': '1999.00', 'name': 'NOVA', 'selected': false, 'description': "Lorem ipsum"}]

 let ref = React.createRef();

 useEffect(() => {
    let root = document.querySelector(`html`);
    root.style.setProperty('--imageUrl', store.name.src);
    root.style.setProperty('--overflow', 'hidden');
 }, [store.name]);

 return (
    <Container fluid>
        <Row className='height-100'>
            <Col sm={8} className='padding-0'>
                <div className="firstPageImage" ref={ref}>
                    <NavBar />
                    <div className='description'>
                        <Description  store={store}/>
                    </div>
                </div>
            </Col>
            <Col sm={1}>
                <MiddleColumn text='Interieur'/>
            </Col>
            <Col sm={3} className='images-column'>
                <Header store={store} />
                <div className="image-div">
                    <Images images={imgArray} store={store}/>
                </div>
                <ActionButton name="Wahl bestatigen" path='/secondPage'></ActionButton>
            </Col>
        </Row>
    </Container>
  );
})
