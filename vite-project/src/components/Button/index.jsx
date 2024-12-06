import styled from 'styled-components';

const Btn = styled.button `
    width: 100%;
    padding: 16px 5px;
    border: none;
    background-color: #fb771a;    
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
`

function Button() {
  return (
    <>
        <Btn type='submit'>Log in</Btn>
    </>
  )
}

export default Button