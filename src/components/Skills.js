import img1 from "../assets/img/image1.svg";
import img2 from "../assets/img/react-2.svg";
import img3 from "../assets/img/nodejs-logo-svgrepo-com.svg";
import img4 from "../assets/img/express-svgrepo-com.svg";
import img5 from "../assets/img/mongo-svgrepo-com.svg";
import img6 from "../assets/img/mysql-svgrepo-com.svg";
import img7 from "../assets/img/javascript-16-svgrepo-com.svg";
import img8 from "../assets/img/html5-02-svgrepo-com.svg";
import img9 from "../assets/img/css-svgrepo-com.svg";
import img10 from "../assets/img/spring-boot-svgrepo-com.svg";
import img11 from "../assets/img/tailwindcss-icon-svgrepo-com.svg";
import img12 from "../assets/img/postman-icon-svgrepo-com.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <p>Expert in modern languages and frameworks, building powerful and seamless digital experiences</p>
                        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2500}  autoPlay={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={img1} alt="Image1" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image2" />
                                <h5>React js</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image3" />
                                <h5>Node js</h5>
                            </div>
                            <div className="item">
                                <img src={img4} alt="Image4" />
                                <h5>Express js</h5>
                            </div>
                            <div className="item">
                                <img src={img5} alt="Image5" />
                                <h5>Mongo Db</h5>
                            </div>
                            <div className="item">
                                <img src={img6} alt="Image6" />
                                <h5>My SQL</h5>
                            </div>
                            <div className="item">
                                <img src={img7} alt="Image7" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={img8} alt="Image8" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={img9} alt="Image9" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={img10} alt="Image10" />
                                <h5>Spring Boot</h5>
                            </div>
                            {/* <div className="item">
                                <img src={img11} alt="Image" />
                                <h5>Redis</h5>
                            </div> */}
                            <div className="item">
                                <img src={img12} alt="Image11" />
                                <h5>Postman</h5>
                            </div>
            
                            <div className="item">
                                <img src={img11} alt="Image12" />
                                <h5>Tailwind Css</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
