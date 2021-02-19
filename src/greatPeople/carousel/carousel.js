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
              test={{
                marginTop: "5%",
                marginLeft: "13%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              text={this.props.name3}
              img={this.props.path3}
            />
            <FlipCard
              test={{
                marginTop: "1.5%",
                marginLeft: "37%",
                width: "24%",
                height: "59%",
                pointerEvents: "auto",
                zIndex: 1,
              }}
              text={this.props.name2}
              img={this.props.path2}
              biography={this.props.biography2}
              url={this.props.url2}
            />
            <FlipCard
              test={{
                marginTop: "5%",
                marginLeft: "67%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              text={this.props.name1}
              img={this.props.path1}
            />
          </div>
        ) : this.props.slide === "next" ? (
          <div>
            <Spring
              from={{
                marginTop: "5%",
                marginLeft: "13%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              to={{
                marginTop: "1.5%",
                marginLeft: "37%",
                width: "24%",
                height: "59%",
                pointerEvents: "auto",
                zIndex: 2,
                opacity: 1,
              }}
              reset={true}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  test={props}
                  text={this.props.name2}
                  img={this.props.path2}
                  biography={this.props.biography2}
                  url={this.props.url2}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "1.5%",
                marginLeft: "37%",
                width: "24%",
                height: "59%",
                pointerEvents: "auto",
                zIndex: 1,
                opacity: 0.8,
              }}
              to={{
                marginTop: "5%",
                marginLeft: "67%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                opacity: 0.8,
              }}
              reset={true}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  test={props}
                  text={this.props.name1}
                  img={this.props.path1}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "5%",
                marginLeft: "67%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: -4,
                opacity: 0,
              }}
              to={{
                marginTop: "5%",
                marginLeft: "13%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                opacity: 0.8,
                zIndex: 2,
              }}
              reset={true}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  test={props}
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
                marginTop: "5%",
                marginLeft: "13%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0,
              }}
              to={{
                marginTop: "5%",
                marginLeft: "67%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: 1,
                opacity: 0.8,
              }}
              reset={true}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  test={props}
                  text={this.props.name1}
                  img={this.props.path1}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "1.5%",
                marginLeft: "37%",
                width: "24%",
                height: "59%",
                pointerEvents: "auto",
                zIndex: 1,
                opacity: 0.8,
              }}
              to={{
                marginTop: "5%",
                marginLeft: "13%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                opacity: 0.8,
              }}
              reset={true}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  test={props}
                  text={this.props.name3}
                  img={this.props.path3}
                />
              )}
            </Spring>

            <Spring
              from={{
                marginTop: "5%",
                marginLeft: "67%",
                width: "18%",
                height: "45%",
                pointerEvents: "none",
                zIndex: -2,
                opacity: 0.8,
              }}
              to={{
                marginTop: "1.5%",
                marginLeft: "37%",
                width: "24%",
                height: "59%",
                pointerEvents: "auto",
                zIndex: 2,
                opacity: 1,
              }}
              reset={true}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <FlipCard
                  test={props}
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
