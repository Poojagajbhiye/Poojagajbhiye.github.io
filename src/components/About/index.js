import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import Loader from 'react-loaders';
import aboutPic from '../../assets/images/about.jpg';
import { faBookOpen, faDog, faDumbbell, faGlobeAsia, faTelevision, faWeight, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <img src={aboutPic}></img>
                <div className='text-zone'>
                    <p>
                        I specialize in developing scalable <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>Android</span> and <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>web</span> applications using <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>Flutter</span>.
                    </p>
                    <p>
                        Currently, I work as a <span style={{ color: 'turquoise' }}>Software Engineer</span> at <span style={{ color: 'turquoise' }}>Neuronic</span>, a Germany-based company, where I focus on enhancing app architecture and scalability. Working full-time from home, I am also exploring <span style={{ color: 'turquoise' }}>AWS</span> for backend development.
                    </p>
                    <p>
                        Previously, I worked at <span style={{ color: 'turquoise' }}>LTIMindtree</span> as an <span style={{ color: 'turquoise' }}>Angular Developer</span> and gained valuable experience as a <span style={{ color: 'turquoise' }}>Business Analyst</span>.
                    </p>
                    <p>
                        I have <span style={{ fontFamily: 'Nunito-SemiBold', color: 'turquoise' }}>independently</span> developed one <span style={{ fontFamily: 'Nunito-SemiBold', color: 'turquoise' }}>Android</span> application and <span style={{ fontFamily: 'Nunito-SemiBold', color: 'turquoise' }}>collaborated</span> on another using <span style={{ fontFamily: 'Nunito-SemiBold', color: 'turquoise' }}>Flutter</span>. While I no longer actively use Angular or React, I leverage React to build and maintain this portfolio.
                    </p>
                    <p>
                        My goal is to build highly <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>scalable</span> applications and delve deeper into the world of <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>artificial intelligence</span>.
                    </p>
                    <p style={{ fontSize: '30px', lineHeight: '1.6' }}>
                        When I'm not working or building apps, I...<br />
                        <FontAwesomeIcon icon={faBookOpen} color="turquoise" /> Read novels and manga<br />
                        <FontAwesomeIcon icon={faDog} color="turquoise" /> Play with my dog<br />
                        <FontAwesomeIcon icon={faGlobeAsia} color="turquoise" /> Dream of traveling more<br />
                        <FontAwesomeIcon icon={faTelevision} color="turquoise" /> Watch anime<br />
                        <FontAwesomeIcon icon={faDumbbell} color="turquoise" /> Break a sweat at the gym<br />
                    </p>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About