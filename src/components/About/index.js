import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import Loader from 'react-loaders';
import aboutPic from '../../assets/images/about.jpg';
import { faBookOpen, faDog, faGlobeAsia, faTelevision } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <img src={aboutPic}></img>
                <div className='text-zone'>
                    <p>
                        I develop <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>android</span> and <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>web</span> applications with <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>Flutter</span> and <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>Angular</span>.
                    </p>
                    <p>
                        Currently, I work at <span style={{ color: 'turquoise' }}>LTIMindtree</span> as an <span style={{ color: 'turquoise' }}>Angular Developer</span>. I also had the opportunity to work as a business analyst.
                    </p>
                    <p>
                        In addition, I have <span style={{ fontFamily: 'Nunito-SemiBold', color: 'turquoise' }}>single-handedly</span> developed one android application and <span style={{ fontFamily: 'Nunito-SemiBold', color: 'turquoise' }}>collaborated</span> for another with <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>Flutter</span>. I'm learning <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>React</span> as well.
                    </p>
                    <p>
                        My goal is to become an expert at <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>Android</span>, <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>iOS</span> and <span style={{ fontFamily: 'Nunito-Bold', color: 'turquoise' }}>Web development</span>.
                    </p>
                    {/* <br/> */}
                    <p style={{ fontSize: '30px' }}>
                        When I'm not working or building apps I...<br/>
                        Read novels and manga <FontAwesomeIcon icon={faBookOpen} color='turquoise'/><br/>
                        Play with my dog <FontAwesomeIcon icon={faDog} color='turquoise'/><br/>
                        Don't travel much (but would love to!) <FontAwesomeIcon icon={faGlobeAsia} color='turquoise'/><br/>
                        Watch anime <FontAwesomeIcon icon={faTelevision} color='turquoise'/><br/>
                    </p>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About