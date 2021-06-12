import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPage = (props) => {
    const {
        className,
        modal,
        toggle
    } = props;
    const [content1, setContent1] = useState('content1');
    const [content2, setContent2] = useState('content2');


    const inputValue1 = (e) => {setContent1(e.target.value); console.log(e.target);};
    const inputValue2 = (e) => {setContent2(e.target.value); console.log(e.target);};


    return (
        <div>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    <i className="fad fa-chevron-circle-left"></i>
                    Modal title</ModalHeader>
                <ModalBody>
                    <label>Content1</label>
                    <input type="text" value={content1} onChange={inputValue1}/>
                    <label>Content2</label>
                    <input type="text" value={content2} onChange={inputValue2}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="info text-light" onClick={toggle}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalPage;