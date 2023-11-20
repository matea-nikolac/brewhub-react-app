import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
import Error from '../common/Error';
import Spinner from '../common/Spinner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HotCoffeeSingle = () => {

  const [coffee, setCoffee] = useState([])
  const [error, setError] = useState('')

  const { coffeeId } = useParams()

  useEffect(() => {
    const getCoffee = async () => {
      try {
        const response = await axios.get(`https://api.sampleapis.com/coffee/hot/${coffeeId}`);
        setCoffee(response.data);
        console.log(response);
      } catch (error) {
        setError(error.message)
      }
    };
    getCoffee();
  }, [coffeeId]);

  return(
    <Container>
      <Row>
        { coffee ?
          <>
              <Col xs="12">
                <h2 className="single-coffee-title display-4 mb-4">{coffee.title?.toUpperCase()}</h2>
              </Col>
              <Col className="single-coffee-img-container" md="12">
                <img className="single-coffee-img" src={coffee.image} alt={coffee.title} />
              </Col>
              <Col className="single-coffee-details">
                <h4>DESCRIPTION</h4>
                <p>{coffee.description}</p>
                <h4>INGREDIENTS</h4>
                {coffee.ingredients?.map((ingredient) => (
                  <p>- {ingredient}</p>
                ))}
              </Col>
          </>
          :
          <>
            { error ?
            <Error error={error} />
            :
            <Spinner/>
            }
          </>
        }
      </Row>
    </Container>
  )

}
export default HotCoffeeSingle