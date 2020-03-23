import react from 'react'
import { Box, Grommet } from 'grommet'
import React from 'react'

export default class PetFood extends React.Component {
    render() {
        return (
            <Grommet>
                <Box justify="center" align="center">
                    <Box width="small"
                        height="small" justify="center" direction="row"
                        border={{ color: 'brand', size: 'small' }}
                        pad="small" margin="small"><h1>Food</h1></Box>
                    <Box width="small" justify="center"
                        height="small" direction="row"
                        border={{ color: 'brand', size: 'small' }}
                        pad="small" margin="small"><h1>Food</h1></Box>
                    <Box justify="center" width="small"
                        height="small" direction="row"
                        border={{ color: 'brand', size: 'small' }}
                        pad="small" margin="small"><h1>Food</h1></Box>
                    <Box justify="center" width="small"
                        height="small" direction="row"
                        border={{ color: 'brand', size: 'small' }}
                        pad="small" margin="small"><h1>Food</h1></Box>
                </Box>
            </Grommet>
        )
    }
}