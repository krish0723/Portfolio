import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>Software Developer</h3>
                            <div className="separator" />
                            <p>
                                Full-stack software developer with experience in mobile dev, data science, and machine learning.
                                Armed with knowledge of a variety of different programming languages, data management systems,
                                and a deep understanding of which tool to use for any given task.
                                Especially interested in applying machine learning technology to high priority tasks.
                                Looking for Software Development roles in a fast growing, and focused organization.
                                In the words of Edward V Berard, "walking on water and developing software from a specification
                                are easy if both are frozen".
                            </p>
                            <div className="separator" />
                            <p>
                                Currently a Full-Stack Developer at Domagne building high-efficiency,
                                scalable, back-end infrastructures to support peer-to-peer marketplace
                                functionality. Also in charge of application development for
                                admin moderation & analysis. Armed with skills in UI & Front-End Development,
                                Data Systems Architecture & Deployment, Test-Driven API Development,
                                and Image & Prediction ML Modeling.
                                Driven to build software that inventively solves complex problems.
                            </p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/krish0723')}/>
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/krishnachetan0723/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="React" value={90} delay={1100} />
                                <Progress name="Next" value={80} delay={1100} />
                                <Progress name="Axios" value={90} delay={1100} />
                                <Progress name="MongoDB" value={90} delay={1100} />
                                <Progress name="Python" value={80} delay={1100} />
                                <Progress name="TensorFlow" value={80} delay={1100} />
                                <Progress name="Pytorch" value={80} delay={1100} />
                                <Progress name="Swift" value={70} delay={1100} />
                                <Progress name="Microsoft SSMS" value={70} delay={1100} />
                                <Progress name="MySQL" value={70} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero
