import styled from "styled-components"

const RowStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function Row({children}) {
  return <RowStyle>{children}</RowStyle>;
}

export default Row