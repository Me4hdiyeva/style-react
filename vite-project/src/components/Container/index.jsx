import styled from "styled-components"

const ContainerStyle = styled.div`
    width: 100%;
`

function Container({children}) {
  return <ContainerStyle>{children}</ContainerStyle>
   
}

export default Container