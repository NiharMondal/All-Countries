import React from 'react';
import  './Country.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const Country = (props) => {
    const history = useHistory()
    const handleClick = (name) => {
        history.push(`/country-detail/${name}`)
    }
    // console.log(props.country)
    const { name,  flag } = props.country;
    return (
        // <div>
            <Container>
                <Row className='detail'>
                    <Col className='flag' sm={4}>
                        <img src={flag} alt=""/>
                    </Col>
                    <Col className='information' sm={8}>
                    <div className='info'>
                        <h3> {name}</h3><br/>
                      
                        {/* <h4> Capital: {capital}</h4>
                        <h5>Population: {population} </h5>
                        <p>Callingcode: {callingCodes}</p> */}
                        <h5> <Link to={`/country-detail/${name}`}> Click Me</Link> </h5>
                        <Button onClick={()=>handleClick(name)}> Click Me</Button>
                    </div>
                      
                    </Col>
                </Row>
            </Container>
         
        // </div>
    );
};

export default Country;