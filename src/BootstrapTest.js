import {Container, Row, Col} from 'react-bootstrap';

const BootstrapTest = (props) => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col>
                    {props.right}
                </Col>
                <Col>
                    {props.left}
                </Col>
            </Row>
        </Container>
    )
}

export default BootstrapTest;