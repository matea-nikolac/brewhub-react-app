import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios';
import Error from '../common/Error';
import Spinner from '../common/Spinner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ColdBrew from '../../images/cold-brew.webp'
import IcedExpresso from '../../images/iced-espresso.webp'
import Frappucino from '../../images/frappuccino.jpeg'
import Nitro from '../../images/nitro.avif'

const IcedCoffeeSingle = () => {

  const [coffee, setCoffee] = useState([])
  const [error, setError] = useState('')

  const { coffeeId } = useParams()

  useEffect(() => {
    const getCoffee = async () => {
      try {
        const response = await axios.get(`https://api.sampleapis.com/coffee/iced/${coffeeId}`);
        setCoffee(response.data);
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
                <img className="single-coffee-img" src={coffee.id === 5? Nitro : coffee.id === 2 ? IcedExpresso : coffee.id === 3 ? ColdBrew : coffee.id === 4 ? Frappucino : coffee.image} alt={coffee.title} />
              </Col>
              <Col className="single-coffee-details">
                <h4>DESCRIPTION</h4>
                <p>{coffee.description}</p>
                <h4>INGREDIENTS</h4>
                {coffee.ingredients?.map((ingredient, index) => (
                  <p key={index}>- {ingredient}</p>
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
export default IcedCoffeeSingle