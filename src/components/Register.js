import { Button, Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import ModalPage from './ModalPage';

const Register = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="ui container">
            <Container>
                <Row>
                    <Col>
                        <Button color="secondary" style={{marginTop: '20px'}}>Content1</Button><br/>
                        <Button color="secondary" style={{marginTop: '20px'}}>Content2</Button><br/>    
                        <Button color="info text-light"  onClick={toggle} style={{marginTop: '20px'}}>Kayit ol</Button>

                    </Col>
                    <Col>
                        <ModalPage
                            title="Qpien"
                            toggle={toggle}
                            modal={modal}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );

};

export default Register;