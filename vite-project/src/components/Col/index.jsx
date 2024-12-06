import styled from "styled-components"

const ColStyle = styled.div`
  width: ${props => props.size}%;
`

function Col({children, size}) {
  return <ColStyle size={size}>{children}</ColStyle>
}

export default Col