
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import { List, GridFill } from 'react-bootstrap-icons';


function GenreBar(props) {
  return (
    <Container fluid>
        <Row className='my-3'>
        <div className='d-flex ml-4'>
        <h2 className='text-light'>{props.genre}</h2>
        <Dropdown>
        <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className='ml-3'>
            Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>

        <div className='ml-auto mr-4'>
        <Button variant="outline-light"><List></List></Button>{' '}
        <Button variant="outline-light"><GridFill></GridFill></Button>{' '}
        </div>

        </Row>
    </Container>
  );
}


export default GenreBar