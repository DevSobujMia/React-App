import React from 'react';
import PriceOption from '../../priceOption/PriceOption';

const PriceOptions = () => {

const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room"
      ],
      price: 30.00
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Premium workout equipment",
        "Extended gym hours",
        "Access to locker room",
        "Access to sauna"
      ],
      price: 50.00
    },
    {
      id: 3,
      name: "Executive Membership",
      features: [
        "Access to gym facilities",
        "VIP workout equipment",
        "24/7 gym access",
        "Access to locker room",
        "Access to sauna",
        "Personal trainer sessions (2 per month)",
        "Nutrition consultation"
      ],
      price: 100.00
    }
  ];
  
  
    return (
        <div className='m-12'>
            <h2 className="text-5xl m-20">Find a <span className='font-bold'>STRONGER YOU</span></h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {
                  priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;