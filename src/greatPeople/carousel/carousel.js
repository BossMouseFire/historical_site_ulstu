import React from "react";
import FlipCard from "../flipCard/flipCard";
import { Spring } from "react-spring/renderprops";
class Carousel extends React.Component {
  render() {
    return (
      <div>
        {this.props.slide === undefined ? (
          <div>
            <FlipCard
              style={{
                marginTop: "10vh",
                marginLeft: "13vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              p_style={{ fontSize: "0.9vw" }}
              text={this.props.name3}
              img={this.props.path3}
            />
            <FlipCard
              style={{
                marginTop: "3vh",
                marginLeft: "37vw",
                width: "24vw",
                height: "29.5vw",
                pointerEvents: "auto",
                zIndex: 1,
              }}
              text={this.props.name2}
              img={this.props.path2}
              biography={this.props.biography2}
              url={this.props.url2}
              p_style={{ fontSize: "1.3vw" }}
            />
            <FlipCard
              style={{
                marginTop: "10vh",
                marginLeft: "67vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              text={this.props.name1}
              img={this.props.path1}
              p_style={{ fontSize: "0.9vw" }}
            />
          </div>
        ) : this.props.slide === "next" ? (
          <div>
            <Spring
              from={{
                marginTop: "10vh",
                marginLeft: "13vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              to={{
                marginTop: "3vh",
                marginLeft: "37vw",
                width: "24vw",
                height: "29.5vw",
                pointerEvents: "auto",
                zIndex: 2,
                opacity: 1,
              }}
              reset={this.props.stateAnimate ? true : false}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  style={props}
                  p_style={{ fontSize: "1.3vw" }}
                  text={this.props.name2}
                  img={this.props.path2}
                  biography={this.props.biography2}
                  url={this.props.url2}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "3vh",
                marginLeft: "37vw",
                width: "24vw",
                height: "29.5vw",
                pointerEvents: "auto",
                zIndex: 1,
                opacity: 0.8,
              }}
              to={{
                marginTop: "10vh",
                marginLeft: "67vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                opacity: 0.8,
              }}
              reset={this.props.stateAnimate ? true : false}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  style={props}
                  p_style={{ fontSize: "0.9vw" }}
                  text={this.props.name1}
                  img={this.props.path1}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "10vh",
                marginLeft: "67vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: -4,
                opacity: 0,
              }}
              to={{
                marginTop: "10vh",
                marginLeft: "13vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                opacity: 0.8,
                zIndex: 2,
              }}
              reset={this.props.stateAnimate ? true : false}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  style={props}
                  p_style={{ fontSize: "0.9vw" }}
                  text={this.props.name3}
                  img={this.props.path3}
                />
              )}
            </Spring>
          </div>
        ) : (
          <div>
            <Spring
              from={{
                marginTop: "10vh",
                marginLeft: "13vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0,
              }}
              to={{
                marginTop: "10vh",
                marginLeft: "67vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: 1,
                opacity: 0.8,
              }}
              reset={this.props.stateAnimate ? true : false}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  style={props}
                  p_style={{
                    fontSize: "0.9vw",
                  }}
                  text={this.props.name1}
                  img={this.props.path1}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "3vh",
                marginLeft: "37vw",
                width: "24vw",
                height: "29.5vw",
                pointerEvents: "auto",
                zIndex: 1,
                opacity: 0.8,
              }}
              to={{
                marginTop: "10vh",
                marginLeft: "13vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                opacity: 0.8,
              }}
              reset={this.props.stateAnimate ? true : false}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  style={props}
                  p_style={{
                    fontSize: "0.9vw",
                  }}
                  text={this.props.name3}
                  img={this.props.path3}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "10vh",
                marginLeft: "67vw",
                width: "18vw",
                height: "22.5vw",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              to={{
                marginTop: "3vh",
                marginLeft: "37vw",
                width: "24vw",
                height: "29.5vw",
                pointerEvents: "auto",
                zIndex: 2,
                opacity: 1,
              }}
              reset={this.props.stateAnimate ? true : false}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  style={props}
                  p_style={{
                    fontSize: "1.3vw",
                  }}
                  text={this.props.name2}
                  img={this.props.path2}
                  biography={this.props.biography2}
                  url={this.props.url2}
                />
              )}
            </Spring>
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
