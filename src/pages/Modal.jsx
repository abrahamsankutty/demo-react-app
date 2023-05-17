import React, { useState } from 'react';

const ModalComponent =  () => {
    const [openModal, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    console.log(openModal);
    return(
        <>
        <button onClick={onOpenModal}>Open modal</button>
        <div className='modal-wrapper' style={{display : openModal ? 'block' : 'none' }}>
            <h2 className='head'>Modal title</h2>
            <div className='body'>
                Modal body
            </div>
            <div className='footer'>
                <button onClick={onCloseModal}>Close</button>
            </div>
        </div>
        <div className='overlay' style={{display : openModal ? 'block' : 'none' }}></div>
        </>
    )
}
export default ModalComponent;