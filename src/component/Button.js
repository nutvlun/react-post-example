import React from 'react';
import PropTypes from 'prop-types';

function Button({name}){
    return <Button>{name}</Button>;
}
Button.propTypes    =   {
    name: PropTypes.string.isRequired
};
export default Button;