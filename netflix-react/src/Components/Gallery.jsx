import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/esm/Spinner"
import Alert from "react-bootstrap/esm/Alert"

class Gallery extends Component{

    state = {
        movie:[],
        isLoading: true,
        isError: false,
    }

    fetchMovies = async () => {
        try{
            let response = await fetch("http://www.omdbapi.com/?apikey=bda9b329&s=" + this.props.query)
            console.log(response)
            if (response.ok){
                let data = await response.json()
                console.log(data)

                this.setState({
                    movie: data.Search,
                    // is an object with the "Search" property to get to the array
                    isLoading: false,
                })
            } else{
                this.setState({
                    isLoading: false,
                    isError: true,
                  })
            }
        }catch(error){
        console.log(error)
        this.setState({
            isLoading: false,
            isError: true,
          })
    }}

    componentDidMount(){
        this.fetchMovies()
    }


    render(){
        return(
            <Container fluid>

        {this.state.isLoading && ( // isLoading is true or false
                <Spinner animation="border" variant="success" />
                )}
                {this.state.isError && (
                <Alert variant="danger">Aww snap, we got an error!😨</Alert>
                )}


                <Col sm={12} md={12} lg={12}><h5 className="text-light mt-5">{this.props.genre}</h5></Col>
                
                <Row>
                    

                    {this.state.movie.slice(0,6).map((res)=>{
                        return (
                            <Col sm={5} md={3} lg={3} xl={2} key={res.imdbID} className="p-0">
                                <img className="img-fluid" src={res.Poster} alt={res.Title} />
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        )
    }
}

export default Gallery