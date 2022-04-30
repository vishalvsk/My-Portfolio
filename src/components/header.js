import '../App.css';

function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi fadeLeft">Hi I am </p>
        <h1 className="header--name fadeRight">Aditya Choubey</h1>
        <h3 className="header--work fadeLeft">FULL STACK WEB DEVELOPER </h3>
        <p className="fadeRight">
          I’m a MERN stack web developer with the
          <br />
          development skills based in Sagar.
        </p>
        <button className="btn fadeLeft">
          <a href="#contact" style={{ color: "#000" }}>
            Contact me
          </a>
        </button>
        <button className="btn fadeLeft">
          <a href="https://github.com/Aadi0706" style={{ color: "#000" }}>
            Git Hub
          </a>
        </button>
      </div>
      {/* <div id="home_pic">
        <img src={require("../img/Profile pic.jpg")}></img>
      </div> */}
      <div className="avtar_img zoomIn">
      <img id="home_pic" src={require("../img/Profile pic.jpg")}></img>
        {/* <iframe
          height="300"
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/shilpashingnapure/embed/abEbROq?result"// src="https://cdpn.io/pen/debug/abEbROq?authentication_hash=yPkJjbdKGaEk"
          frameBorder="no"
          loading="lazy"
          data-default-tab="result"
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/shilpashingnapure/pen/abEbROq">
            Untitled
          </a>{" "}
          by Shilpa Shingnapure (
          <a href="https://codepen.io/shilpashingnapure">@shilpashingnapure</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe> */}
      </div>
    </div>
  );
}

export default Header;
