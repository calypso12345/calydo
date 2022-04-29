import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'

const Images  = observer(({store, images}) => {

const imgArray = JSON.parse(JSON.stringify(images));
const [imagesArray, setImagesArray] = useState({items: imgArray});

const setSelectedImage = (index) => {
    imagesArray.items.map((value)=>{
       if (index == value.id) {
            value.selected = !value.selected;
            if(value.selected){
                store.addSelected(value);
            } else {
                store.addSelected({id:0});
            }
            const newState = Object.assign({}, imagesArray);
            setImagesArray(newState);
        } else {
            value.selected = false;
        }
    }) 
}

 return (
     <div className='scroll-x'>
        {imagesArray.items.map(({src, id, price, option, name, selected}) =>    
         <div key={id} >
            <div >
                <div className='name'>{name}</div>
                <div className={selected ? 'image-selected' : 'image'} >
                <span className={ selected ? 'selected-check' : 'unselected-check' }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check font-white" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                </span>
                <img src={src} width="100%" className={ selected ? 'selected-class' : 'unselected-class'} onClick={() => setSelectedImage(id)}/>
            </div>
            </div>
        </div>
        )}
    </div>
  );
});

export default Images;