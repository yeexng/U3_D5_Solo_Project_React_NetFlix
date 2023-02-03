import { Component } from "react";
import React from 'react';
import { MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';
import Container from "react-bootstrap/esm/Container";


class Carousel extends Component {
    render(){
        return (
            <Container fluid>

                <h5>Genre</h5>
                <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-50 d-block'
                    itemId={1}
                    src='https://images.unsplash.com/photo-1674634098997-c7376a5cb79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='...'
                    />
                <MDBCarouselItem
                    className='w-50 d-block'
                    itemId={2}
                    src='https://images.unsplash.com/photo-1674573787029-068983312113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80'
                    alt='...'
                    />
                <MDBCarouselItem
                    className='w-50 d-block'
                    itemId={3}
                    src='https://images.unsplash.com/photo-1674583113400-3367d48b6b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='...'
                    />
                </MDBCarousel>
            
            </Container>
          );}
}

export default Carousel