import './App.css'
import Text from './components/Text/index'
import Form from './components/Form'
import Container from './components/Container'
import Row from './components/Row'
import Col from './components/Col'


function App() {
  return (
    <>
      <Container>
        <Row>
          <Col size={50}>
            <div className='box'>
              <Text/>
              <Form/>
            </div>
          </Col>

          <Col size={50}>
            <img src="https://m.media-amazon.com/images/I/71bPbZUnmXL.AC_UF1000,1000_QL80.jpg" alt="photo" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App