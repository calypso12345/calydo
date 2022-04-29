import React from 'react';
import { observer } from 'mobx-react-lite';
import Button from 'react-bootstrap/Button';

export const Description= observer(({store}) => {
    
    const ref = React.createRef();
    const scrollDown = () => {
        let position = ref.current.scrollTop;
        ref.current.scrollTop = position + 50;
    }
    return (
        <div className='description-inside'> 
            <div className='closure'>X</div>
            <div className='align-center'>
                <h6 className='name'>{store.name.name}</h6>
                <div ref={ref} className='image-description'>
                    {store.name.description}
                </div>
                <Button variant="link" onClick={scrollDown}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
});

export default Description;