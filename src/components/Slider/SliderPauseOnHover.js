import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderPauseOnHover.css';
// import { prevArrow, nextArrow } from './config';
// import nextArrow from '../../images/nextArrow.svg';
// import prevArrow from '../../images/prevArrov.svg';
import image0 from '../../images/section-content/video_bg.png';
// import image1 from '../../images/assets/c5337f3d4eeb6683a6bfb69ad60aeffd_2880x1184x1.jpg';
import image2 from '../../images/assets/5610a8f59e0cbe5e0aaf9ddc5e583687_2880x1184x1.jpg';
import image3 from '../../images/assets/5c320c50a7105ae67cfc226442083e0b_2880x1184x1.jpg';
import image4 from '../../images/assets/1eae48520ece1588e5d0c0a575db6479_2880x1184x1.jpg';

const SliderPauseOnHover = () => {
  // function SampleNextArrow(props) {
  //   const { style, onClick } = props;
  //   return (
  //     <div
  //       className={'slick-arrow'}
  //       style={{
  //         ...style,
  //         right: '50px',
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { style, onClick } = props;
  //   return (
  //     <div
  //       className={'slick-arrow'}
  //       style={{
  //         ...style,
  //         left: '50px',
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    waitForAnimate: true,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img className="slide_img" src={image0} alt="картинка1" />
        </div>
        <div className="slide">
          <img img className="slide_img" src={image3} alt="картинка1" />
        </div>
        <div className="slide">
          <img img className="slide_img" src={image4} alt="картинка1" />
        </div>
        <div className="slide">
          <img img className="slide_img" src={image2} alt="картинка1" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderPauseOnHover;
