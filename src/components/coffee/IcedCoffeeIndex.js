import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Spinner from '../common/Spinner';
import Error from '../common/Error';

import ColdBrew from '../../images/cold-brew.webp'
import IcedExpresso from '../../images/iced-espresso.webp'
import Frappucino from '../../images/frappuccino.jpeg'
import Nitro from '../../images/nitro.avif'

const IcedCoffeeSingle = () => {
  const [coffee, setCoffee] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [filteredCoffee, setFilteredCoffee] = useState([]);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    const getCoffee = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://api.sampleapis.com/coffee/iced');
        const sortedData = response.data.sort((a, b) => (a.title > b.title ? 1 : -1));
        setCoffee(sortedData);
        setFilteredCoffee(sortedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getCoffee();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const searchQuery = () => {
      const newArray = [...coffee];
      const filteredArray = newArray.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredCoffee(filteredArray);
    };
    searchQuery();
  }, [query, coffee]);

  return (
    <main>
      <Container>
        <Row>
          <Col className="h1-coffee-column" xs="12">
            <h1 className="h1-coffee display-4 mb-8 text-center">ICED COFFEE</h1>
          </Col>
          <Col xs="12" className="intro-text">
            <p className="text-center">Explore our selection of iced coffees and find your perfect brew. Each cup is crafted with care to bring you a delightful coffee experience.</p>
          </Col>
          <Col xs="12" className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                className="search-element"
                placeholder="Search coffee..."
                onChange={handleChange}
              />
            </div>
          </Col>
          {loading ? (
            <Spinner />
          ) : filteredCoffee.length > 0 ? (
            filteredCoffee
              .filter(
                (coffee) =>
                  coffee.title &&
                  coffee.description &&
                  coffee.image &&
                  coffee.title !== 'a'
              )
              .map((coffee) => {
                const { id, image, title } = coffee;
                if (id !== 20) {
                  return (
                    <Col key={id} lg="4" md="6" sm="12" className="coffee-column">
                      <Link to={`/iced-coffee/${id}`}>
                        <Card>
                          <div
                            className="card-image"
                            style={{ backgroundImage: `url('${id === 5 ? Nitro : id === 2 ? IcedExpresso : id === 3 ? ColdBrew : id === 4 ? Frappucino : image}')` }}
                          ></div>
                          <Card.Body>
                            <Card.Text>{title.toUpperCase()}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  );
                } else {
                  return null
                }
              })
          ) : (
            <>
              {error ? (
                <Error error={error} />
              ) : (
                <Col xs="12" className="text-center mt-5">
                  <p>We apologize, but we couldn't find any matching coffees for your search.</p>
                </Col>
              )}
            </>
          )}
        </Row>
      </Container>
    </main>
  );
};

export default IcedCoffeeSingle;
