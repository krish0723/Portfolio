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
                            <p>Hi there, my name is Krishna Chetan, a senior at Stony Brook University pursuing a B.S. in Computer Science with over four years of experience in data engineering, web development, project managment, and software architecture. I am fluent with a variety of languages including JavaScript, Python, Java, OCAML, HTML/CSS, Bash, and have implemented frameworks such as React, Svelte, Django, and more. I am currently seeking a software development position. Leaving an impact and revolutionizing the foundational thinking of an industry is something I strive towards. My aim is to work with a fast-paced team to maintain a revenue-generating project that has groundbreaking potential.</p>
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
                                <Progress name="Swift" value={70} delay={1100} />
                                <Progress name="Svelte" value={70} delay={1100} />
                                <Progress name="MongoDB" value={90} delay={1100} />
                                <Progress name="Firebase" value={60} delay={1100} />
                                <Progress name="Python" value={90} delay={1100} />
                                <Progress name="Java" value={90} delay={1100} />
                                <Progress name="Microsoft SSMS" value={80} delay={1100} />
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
