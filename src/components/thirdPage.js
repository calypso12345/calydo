import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import img1 from '../images/pho1.png';
import logo from '../images/logo.png';
import img3 from './../images/photo3.jpg';

export const ThirdPage = observer(({store}) => {
    
 const imgArray = [{id: 0, src:require('../images/wood.jpg'), selected: false, type: 'Eiche', color: 'weiss geolt', price: '+ CHF 4\'500'}] ;
 const [imagesArray, setImagesArray] = useState({items: imgArray});
 const formatArray = [{id:0, size: '94', price: 'includiert', selected: false}
]
 const [forArray, setFormatArray] = useState({items: formatArray});

 useEffect(() => {
    let root = document.querySelector(`html`);
    root.style.setProperty('--overflow', 'scroll');
 }, [store.selected]);

 const setSelectedImage = (index) => {
    let storeObject = store.selected;
    imagesArray.items.map((value)=>{
       if (index == value.id) {
            value.selected = !value.selected;
            storeObject.woodThirdPage = value;
        } else {
            value.selected = false;
        }
    }) 
    store.addSelected(storeObject);
    const newState = Object.assign({}, imagesArray);
    setImagesArray(newState);
};

const setSelectedFormat = (index) => {
    let storeObject = store.selected;
    forArray.items.map((value)=>{
    if (index == value.id) {
            value.selected = !value.selected;
            storeObject.formatThirdPage = value;
        } else {
            value.selected = false;
        }
    }) 
    store.addSelected(storeObject);
    const newState = Object.assign({}, forArray);
    setFormatArray(newState);
}

 return (
     <div className='margin-bottom'>
        <Navbar expand="lg" fixed="top" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">CALYDO</Navbar.Brand>
                <Nav className='side-bar'>
                    <i className="bi bi-justify"></i>&nbsp;&nbsp;
                    <i className="bi bi-printer"></i>
                </Nav>
            </Container>
        </Navbar>
        <Container fluid>
        <Row>
            <Col sm={12}>
                <img src={img1} width="100%" className='margin-top'/>
            </Col>
        </Row>
        <Row>
            <Col sm={7}>
                <img src={img3} width="80%" className='margin'/>
            </Col>
            <Col sm={5}>
                <div className='form'>
                    <h5>Wohnraume</h5>
                    <h6>BODEN</h6>
                    {imagesArray.items.map(({src, id, selected, type, color, price}) =>    
                        <div key={id} className='width-70'>
                            <div>
                                <div className={selected ? 'wood-selected-third-page' : 'wood-third-page'} >
                                    <span className={ selected ? 'wood-selected-check' : 'wood-unselected-check' }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill font-black" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                    </span>
                                    <Row>
                                        <Col sm={6}>
                                        <img src={src} className={ selected ? 'third-page-wood-selected-class' : 'third-page-wood-unselected-class'} onClick={() => setSelectedImage(id)}/>
                                        <div className={ selected ? 'label-selected' : 'label-unselected-form'}>Empfehlung</div>
                                        </Col>
                                        <Col sm={6} >
                                        <div className={ selected ? 'type-selected-class-third-page' : 'type-unselected-class-third-page'}> {type}</div>
                                        <div className={ selected ? 'color-selected-class-third-page' : 'color-unselected-class-third-page'}> {color}</div>
                                        <div className={ selected ? 'price-selected-class' : 'price-unselected-class'}> {price}</div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    )}
                    <h6 className='margin-top-8'>FORMAT</h6>
                        <div className='format'>
                        {forArray.items.map(({size, id, price}) =>
                            <Row className='margin-top-8' key={id}>
                                <Col sm={8}>
                                <div className='radio-format'>
                                <label>
                                    <input type="radio" name="choice" value="HTML" onChange={()=>{setSelectedFormat(id)}}/> <span className='font-bold'>{size}</span>
                                </label>
                                </div>
                                </Col>
                                <Col sm={4}>
                                <div className='price' >{price}</div>
                                </Col>
                            </Row>   
                        )}                                                   
                        </div>
                    </div>
            </Col>
        </Row>
        </Container>
        <footer className="footer">
            <Container>
            <Row>
                <Col sm={4} className='margin-left-20'>
                    <div className='footer-left'>
                    <div>Calydo AG</div>
                    <div className="font-white">Sendweinstrasse 33</div>
                    <div className="font-white">6312 Steinhausen</div>
                    <div className="font-white">Switzerland</div>
                    <br/>
                    <div className="font-white">+41 41 748 44 11</div>
                    <br />
                    <div className="font-blue">info@calydo.com</div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='logo'><img src={logo} /></div>
                </Col>
                <Col sm={4} >
                    <div className='footer-right'>
                    <div  className='social-media'>
                    <span className='margin-right-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook font-white" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    </span>
                    <span className='margin-right-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter font-white" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    </span>
                    <span className='margin-right-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube font-white" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                    </span>
                    <span >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin font-white" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    </span>
                    </div>
                    <br />
                    <div className="font-white align-right font-10">Member of the</div>
                    <div className="font-blue align-right">Brand Leadership Circle</div>
                    <br />
                    <div className="font-blue align-right font-10">Datenschutzerklarung</div>
                    </div>
                </Col>
            </Row>
            </Container>
        </footer>
    </div>
  );
})
