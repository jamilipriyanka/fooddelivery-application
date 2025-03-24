import React from 'react';
import PropTypes from 'prop-types';
export default function Price({ price, locale = 'en-IN', currency = 'INR' }) {
  const formatPrice = () => {
    try {
      // Ensure both locale and currency are valid
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
      }).format(price);
    } catch (error) {
      console.error('Error formatting price:', error);
      return price; // Fallback to plain number if formatting fails
    }
  };

  return <span>{formatPrice()}</span>;
}

// Default Props
Price.defaultProps = {
  price: 0,
  locale: 'en-IN',
  currency: 'INR',
};

// PropTypes Validation
Price.propTypes = {
  price: PropTypes.number.isRequired,
  locale: PropTypes.string,
  currency: PropTypes.string,
};
