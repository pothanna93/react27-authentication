import Header from '../Header'
import './index.css'

const Home = () => (
  <fragment>
    <Header />

    <div className="home-container">
      <div className="icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav-products"
          className="nav-home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-home"
        />
      </div>
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />

        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </fragment>
)

export default Home