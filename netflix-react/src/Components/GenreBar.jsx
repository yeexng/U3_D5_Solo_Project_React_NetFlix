
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';


function GenreBar(props) {
  return (
    <Container fluid>
        <Row>
        <div className='row'>
        <h2>{props.genre}</h2>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>

        <div className='ml-auto'>
        <Button variant="outline-light">Icon</Button>{' '}
        <Button variant="outline-light">Icon</Button>{' '}
        </div>

        </Row>
    </Container>
  );
}


export default GenreBar