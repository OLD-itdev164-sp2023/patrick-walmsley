import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const StyledButton = styled(BaseButton)`
    ${ ( {theme, variant}) => theme.variant.iconButton[variant || 'primary']}
`

export const IconButton = styled(({icon, ...rest}) =>{
    let clone = React.cloneElement(icon, rest)
    return <StyledButton as={clone.type} {...rest} className={rest.className} />
})`
    //We could add styles here, but it is not necessary
    //The main reason for this is a styled component is to wrap the styled icon passed in as a prop
`

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    variant: PropTypes.string
}