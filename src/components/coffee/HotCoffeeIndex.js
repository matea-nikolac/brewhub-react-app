import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Spinner from '../common/Spinner';
import Error from '../common/Error';

const HotCoffeeSingle = () => {
  const [coffee, setCoffee] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    const getCoffee = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/coffee/hot');
        setCoffee(response.data);
        console.log(response);
      } catch (error) {
        setError(error.message)
      }
    };
    getCoffee();
  }, []);

  return (
    <main>
      <Container>
        <Row>
          <Col className="h1-coffee-column" xs="12">
            <h1 className="h1-coffee display-4 mb-8 text-center">HOT COFFEE</h1>
          </Col>
          <Col xs="12" className="intro-text">
            <p className="text-center">Explore our selection of hot coffees and find your perfect brew. Each cup is crafted with care to bring you a delightful coffee experience.</p>
          </Col>
          {coffee.length > 0 ?
            coffee.filter(coffee => coffee.title && coffee.description && coffee.image && coffee.title !== 'a').map((coffee) => {
              const { id, image, title } = coffee;
              if (id !== 20) {
              return (
                <Col key={id} lg="4" md="6" sm="12" className='hot-coffee-column'>
                  <Link to={`/hot-coffee/${id}`}>
                    <Card>
                      <div className="card-image" style={{ backgroundImage: `url('${image}')` }}></div>
                      <Card.Body>
                        <Card.Text>{title.toUpperCase()}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
              }
            })
          :
          <>
          {error?
            <Error error={error} /> 
            :
            <Spinner />
          }
          </>
          }
          
        </Row>
      </Container>
    </main>
  );
};

export default HotCoffeeSingle;
