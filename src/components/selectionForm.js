import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Nav, Row, Col } from 'react-bootstrap';

export const SelectionForm  = observer(({store}) => {

const imgArray = [{id: 0, src:require('../images/wood.jpg'), selected: false, type: 'Eiche', color: 'weiss geolt'}, {id: 1, src:require('../images/wood.jpg'), selected: false, type: 'Eiche', color: 'natur'}, {id: 2, src:require('../images/wood.jpg'), selected: false, type: 'Eiche', color: 'gerachert'}] ;
const [imagesArray, setImagesArray] = useState({items: imgArray});
const formatArray = [{id:0, size: '47 x 7cm',  description: '', price: 'includiert', selected: true},
{id:1, size: '125 x 10cm', description: 'geburstet', price: '+ CHF 3\'500', selected: true},
{id:2, size: '210 x 14cm', description: 'description',  price: '+ CHF 4\'500', selected: true},
]
const [forArray, setFormatArray] = useState({items: formatArray});
const setSelectedImage = (index) => {
    let storeObject = store.name;
    imagesArray.items.map((value)=>{
       if (index == value.id) {
            value.selected = !value.selected;
            storeObject.wood = value;
        } else {
            value.selected = false;
        }
    }) 
    store.addSelected(storeObject);
    const newState = Object.assign({}, imagesArray);
    setImagesArray(newState);
};
const setSelectedFormat = (index) => {
    let storeObject = store.name;
    forArray.items.map((value)=>{
    if (index == value.id) {
            value.selected = !value.selected;
            storeObject.format = value;
        } else {
            value.selected = false;
        }
    }) 
    store.addSelected(storeObject);
    const newState = Object.assign({}, forArray);
    setFormatArray(newState);
}

 return (
     <div className='scroll-x'>
         <h5>BODEN</h5>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item >
                <Nav.Link href="/home" className='tab-item'>Parkett</Nav.Link>
                <div className='line-tab'>
                {imagesArray.items.map(({src, id, selected, type, color}) =>    
                <div key={id} >
                    <div>
                        <div className={selected ? 'wood-selected' : 'wood'} >
                            <span className={ selected ? 'wood-selected-check-form' : 'wood-unselected-check-form' }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check font-grey" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            </span>
                            <Row>
                                <Col sm={6}>
                                <img src={src} width="90%" className={ selected ? 'wood-selected-class' : 'wood-unselected-class'} onClick={() => setSelectedImage(id)}/>
                                <div className={ selected ? 'label-selected-form' : 'label-unselected-form'}>Empfehlung</div>
                                </Col>
                                <Col sm={6} >
                                <div className={ selected ? 'type-selected-class' : 'type-unselected-class'}> {type}</div>
                                <div className={ selected ? 'color-selected-class' : 'color-unselected-class'}> {color}</div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                )}
                </div>
            </Nav.Item>
        </Nav>
        <h5 className='margin-top-8'>FORMAT</h5>
        <div className='form-item'>
        {forArray.items.map(({size, id, price, description}) =>
            <Row className='margin-top-8' key={id}>
                <Col sm={8}>
                <div className='radio-format'>
                <label>
                    <input type="radio" name="choice" value="HTML" onChange={()=>{setSelectedFormat(id)}}/> <span className='font-bold'>{size}</span><div className='form-description'>{description}</div>
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
    
  );
})