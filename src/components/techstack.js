import "../styles/tech.css";
import react_logo from "../img/tech/react-logo.svg";
function TechStack() {
  return (
    <div className="techstack">
      <div className="stack-header">
        <p className="highlight"></p>
        <h2 className="head">Tech stack I know</h2>
      </div>
      <div className="stack">
        <div className="front-back" data-aos={"fade-right"}>
          <h2>Frontend / Backend</h2>
          <div className="tech-list">
            <div>
              {/* <div className="tech">
                <img src={require("../img/tech/python.png")} alt="" />
              </div>
              <p>Python</p>
            </div>
            <div> */}
              <div className="tech">
                <img src={require("../img/tech/html_img.png")} alt="" />
              </div>
              <p>HTML</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/css.png")} alt="" />
              </div>
              <p>CSS</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/js.jpg")} alt="" />
              </div>
              <p>JavaScript</p>
            </div>
           
            <div>
              <div className="tech">
                <img src={react_logo} alt="" />
              </div>
              <p>React.js</p>
            </div>

            <div>
              <div className="tech">
                <img src={require("../img/tech/node.webp")} alt="" />
              </div>
              <p>Node.js</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/express.png")} alt="" />
              </div>
              <p>Express</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/mongo.png")} alt="" />
              </div>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        {/* <div className="lib-fram" data-aos={"fade-left"}>
          <h2>Framework / Tools</h2>
          <div className="tech-list">
            <div>
              
              <div className="tech">
                <img src={require("../img/tech/django.png")} alt="" />
              </div>
              <p>Django</p>
            </div>
            
            <div>
              <div className="tech">
                <img src={require("../img/tech/bootstrap.png")} alt="" />
              </div>
              <p>Bootstrap</p>
            </div>
            <div>
              <div className="tech">
                <img src={react_logo} alt="" />
              </div>
              <p>React.js</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/Sass.png")} alt="" />
              </div>
              <p>Sass</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/git.png")} alt="" />
              </div>
              <p>GIT</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/ps.png")} alt="" />
              </div>
              <p>Adobe Photoshop</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default TechStack;
