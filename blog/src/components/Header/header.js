import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../Heading"
import { IconButton } from "../Button"
import { Section } from "../Section"

const Outer = styled.header`
  background: ${({theme}) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Section width={11/12}>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Section>
    <Section width={1/12}>
      <IconButton icon={<Search />} variant='contrast' />
    </Section>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
