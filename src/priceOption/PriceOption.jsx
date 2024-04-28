import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-700 flex flex-col rounded-md p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-6'>{name}</h4>
            <div className='pl-6 flex-grow mb-3'>
              {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
              }
            </div>
            <button className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Get Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object
}

export default PriceOption;