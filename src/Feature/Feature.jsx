import PropTypes from 'prop-types';
import { AiFillAlipayCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'> 
                <AiFillAlipayCircle className='text-green-500 mr-2'></AiFillAlipayCircle> {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;