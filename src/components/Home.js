import hotCoffeeImage from '../images/hot-coffee.jpeg'
import icedCoffeeImage from '../images/iced-coffee.jpeg'
import personOne from '../images/person-1.jpeg'
import personTwo from '../images/person-2.jpeg'
import personThree from '../images/person-3.jpeg'

const Home = () => {

  return(
    <main className="home">
      <div className="container-1">
        <h1>WELCOME TO BREWHUB</h1>
        <p>Discover the world of coffee with our delightful selection of brews.</p>
      </div>
      <section className="container-hot-cold-coffee">
        <div className="coffee-container">
          <h2 className='coffee-title'>HOT COFFEE</h2>
          <img className="coffee-img" src={hotCoffeeImage} alt="Hot Coffee"/>
          <div className="button-container">
            <button>Discover</button>
          </div>
        </div>
        <div className="coffee-container">
          <h2 className='coffee-title'>ICED COFFEE</h2>
          <img className="coffee-img" src={icedCoffeeImage} alt="Iced Coffee"/>
          <div className="button-container">
            <button>Discover</button>
          </div>
        </div>
      </section>
      <section className="customer-reviews">
        <h2>CUSTOMER REVIEWS</h2>
        <div className='reviews'>
          <div className="review">
            <img src = {personOne} alt='Customer Review'></img>
            <p>"The hot coffee was absolutely fantastic! The aroma and the deep, rich taste were a delight."</p>
            <p>- Tristan Barthlow</p>
          </div>
          <div className="review">
          <img src = {personTwo} alt='Customer Review'></img>
            <p>"I'm a fan of iced coffee, and BrewHub's iced coffee exceeded my expectations. So refreshing and flavorful!"</p>
            <p>- Joslyn Walder</p>
          </div>
          <div className="review">
            <img src = {personThree} alt='Customer Review'></img>
            <p>"The cozy ambiance and friendly staff made my coffee experience at BrewHub truly enjoyable. I'll be back for more!"</p>
            <p>- Janett Cranford</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 BrewHub. All rights reserved.</p>
      </footer>
    </main>
  )

}
export default Home