import "./intro.css";
import Me from "../../img/me.png";
const Intro = () => {
  return (
    <div className="item">
      <div className="item-left">
        <div className="item-left__wrapper">
          <h2 className="item-head">Hello My Name Is</h2>
          <h1 className="item-head-name">Shoxjaxon</h1>
          <div className="item-title">
            <div className="item-title__wrapper">
              <div className="item-title__item">Front-End Developer</div>
              <div className="item-title__item">Web Developer</div>
              <div className="item-title__item">Software Engineer</div>
              <div className="item-title__item">Coder</div>
            </div>
          </div>
          <p className="description">
            I am a Front-End Developer who extremely motivated to constantly
            develop my skills and grow professionally. I am confident in my
            ability to come up with interesting ideas to digitalize my work
            processI
          </p>
        </div>
      </div>
      <div className="item-right">
        <div className="item-bg"></div>
        <img src={Me} className="item-img" />
      </div>
    </div>
  );
};

export default Intro;
