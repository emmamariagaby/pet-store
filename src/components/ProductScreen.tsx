import React from 'react';
import { Grommet, Grid, Box, Button } from 'grommet'
import PetFood from './PetFood';

/**
 * Product page with dog and cat food
 */

class ProductScreen extends React.Component {
    render() {
        return (
            <PetFood />
        )
    }
}

export default ProductScreen;