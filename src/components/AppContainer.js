import {
  Container,
  Logo,
  Content,
  TopData,
  NextDays,
  PlaceToVisit,
  OtherLocations,
} from "./styles";
import { ReactComponent as LocationIcon } from "./location.svg";

const AppContainer = ({ bogota, lyon, paris }) => (
  <Container>
    <Logo>
      <img
        src="https://www.gradiweb.com/wp-content/themes/gradiwebtemplate/img/logo-small.png"
        alt="Logo"
      />
    </Logo>
    <Content>
      <TopData>
        <div className="right-data">
          <div className="icon">
            <figure>
              <img src={bogota.current.icon} alt="Icono de clima" />
            </figure>
            <p>{bogota.current.weather}</p>
          </div>
          <div className="temp">
            <span>{bogota.current.temp}</span>
          </div>
        </div>
        <h3>
          <LocationIcon />
          <span>Bogotá</span>
        </h3>
      </TopData>
      <div className="bottom-data">
        <NextDays>
          <h3>
            3 Days <span>Forecast</span>
          </h3>
          <div className="weather-card">
            <figure>
              <img src={bogota.day1.icon} alt="Icono de clima" />
            </figure>
            <div className="text">
              <h4>{bogota.day1.day}</h4>
              <p>{bogota.day1.weather}</p>
            </div>
            <div className="temp">
              <p>{bogota.day1.tempMax}</p>
              <p>/ {bogota.day1.tempMin}</p>
            </div>
          </div>
          <div className="weather-card">
            <figure>
              <img src={bogota.day2.icon} alt="Icono de clima" />
            </figure>
            <div className="text">
              <h4>{bogota.day2.day}</h4>
              <p>{bogota.day2.weather}</p>
            </div>
            <div className="temp">
              <p>{bogota.day2.tempMax}</p>
              <p>/ {bogota.day2.tempMin}</p>
            </div>
          </div>
          <div className="weather-card">
            <figure>
              <img src={bogota.day3.icon} alt="Icono de clima" />
            </figure>
            <div className="text">
              <h4>{bogota.day3.day}</h4>
              <p>{bogota.day3.weather}</p>
            </div>
            <div className="temp">
              <p>{bogota.day3.tempMax}</p>
              <p>/ {bogota.day3.tempMin}</p>
            </div>
          </div>
        </NextDays>
        <PlaceToVisit>
          <div className="title">
            <h3>
              Place to <span>Visit</span>
            </h3>
            <div className="reviewers">
              <p>+ Top Reviews</p>
              <figure>
                <img
                  src="https://cdn.faceshapeapp.com/q/Jrb2KdW_24wjN5Ym__256x256.jpg?webp=1&w=640"
                  alt=""
                />
              </figure>
              <figure>
                <img
                  src="https://cdn.faceshapeapp.com/q/Jrb2KdW_24wjN5Ym__256x256.jpg?webp=1&w=640"
                  alt=""
                />
              </figure>
              <figure>
                <img
                  src="https://cdn.faceshapeapp.com/q/Jrb2KdW_24wjN5Ym__256x256.jpg?webp=1&w=640"
                  alt=""
                />
              </figure>
              <div className="number">
                <span>6+</span>
              </div>
            </div>
          </div>
          <div className="places">
            <div className="left">
              <LocationIcon />
              <p>
                Arab Street
                <br />
                Singapore
              </p>
            </div>
            <div className="right">
              <div className="top">
                <LocationIcon />
                <p>
                  Arab Street
                  <br />
                  Singapore
                </p>
              </div>
              <div className="bottom">
                <LocationIcon />
                <p>
                  Arab Street
                  <br />
                  Singapore
                </p>
                <button>+</button>
              </div>
            </div>
          </div>
        </PlaceToVisit>
        <OtherLocations>
          <div className="weather-card top">
            <div className="principal">
              <figure>
                <img src={lyon.icon} alt="Icono de clima" />
              </figure>
              <p className="temp">{lyon.temp}</p>
              <hr />
              <p className="location">
                Lyon
                <br />
                <span>Francia</span>
              </p>
            </div>
            <div className="secondary">
              <p className="humidity">{lyon.humidity}</p>
              <p className="direction">{lyon.direction}</p>
              <p className="speed">{lyon.speed}</p>
            </div>
          </div>
          <div className="weather-card bottom">
            <div className="principal">
              <figure>
                <img src={paris.icon} alt="Icono de clima" />
              </figure>
              <p className="temp">{paris.temp}</p>
              <hr />
              <p className="location">
                Paris
                <br />
                <span>Francia</span>
              </p>
            </div>
            <div className="secondary">
              <p className="humidity">{paris.humidity}</p>
              <p className="direction">{paris.direction}</p>
              <p className="speed">{paris.speed}</p>
            </div>
          </div>
          <div className="add">
            <button>Add Locations</button>
            <figure>
              <img
                src="https://i.pinimg.com/originals/ac/1c/f3/ac1cf38f08a0c99bb9454a0ffc9d60be.jpg"
                alt=""
              />
            </figure>
          </div>
        </OtherLocations>
      </div>
    </Content>
  </Container>
);

export default AppContainer;
