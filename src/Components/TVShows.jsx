import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/esm/Spinner"
import Alert from "react-bootstrap/esm/Alert"

const TVShows = () =>{

    const navigate = useNavigate()

    const [movies,setMovies] = useState([])
    const [isLoading,setIsLoading] = useState (true)
    const [isError,setIserror] = useState (false)

    const getMovies =async ()=>{
        try{
            let response = await fetch("http://www.omdbapi.com/?apikey=bda9b329&s=series")
            console.log(response)
            if (response.ok){
                let data = await response.json()
                console.log(data)
                setMovies(data.Search)
                setIsLoading(false)
            } else{
                setIsLoading(false)
                setIserror(true)
            }
        }catch(error){
        console.log(error)
        setIsLoading(false)
        setIserror(true)
    }}

    useEffect(()=>{
        getMovies()
    },[])
    
    return(
        <Container fluid>

            {isLoading && ( // isLoading is true or false
            <Spinner animation="border" variant="success" />
            )}
            {isError && (
            <Alert variant="danger">Aww snap, we got an error!😨</Alert>
            )}


            <Col sm={12} md={12} lg={12}><h5 className="text-light mt-5">TV Series</h5></Col>
            
            <Row>
                

                {movies ? movies.map((res)=>{
                    return (
                        <Col sm={5} md={3} lg={3} xl={2} key={res.imdbID} className="p-0" onClick={()=>{navigate(`/movie-details/${res.imdbID}`)}}
                        >
                            <img className="img-fluid" src={res.Poster} alt={res.Title} />
                        </Col>
                    )

                }): null }


            </Row>
        </Container>
    )

}

export default TVShows
