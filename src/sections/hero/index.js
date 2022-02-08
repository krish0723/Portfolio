import React from 'react'
import Particles from 'react-particles-js';
import './styles.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
import Resume from './Krishna_Resume_1:7:22.pdf';
class Hero extends React.Component {

  static contextType = ThemeContext

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Portfolio</h4>
              </div>
              <Glitch text="Krish Chetan" />
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'Software Engineer',
                    'Data Engineer',
                    'Creator & Entreprenuer'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <a href={Resume} download="Krish's Resume.pdf">
                  <button className="hover-button">
                        <span >Download CV</span>
                  </button>
              </a>
            </div>
          </Col>
          <Col md={6} className="img">
            <img
              src={this.props.mainImg.childImageSharp.fluid.src}
              alt="person"
            />
          </Col>
        </Row>
      </section>
    )
  }


}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
)
