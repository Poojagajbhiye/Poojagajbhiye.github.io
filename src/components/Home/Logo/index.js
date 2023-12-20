import './index.scss';
import decor from '../../../assets/images/4.png';

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='decor' src={decor}/>
        </div>
    )
}

export default Logo