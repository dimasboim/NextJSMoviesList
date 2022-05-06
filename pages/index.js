import Head from 'next/head' 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navigationbar';
import { Container, Row,Col } from 'react-bootstrap';
 
 
export default function Home() {
  return (
    <div className='htmlAll'>
      <Head>
        <title>Movie List</title>
        <meta name="description" content="Movie List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='myBG border'>
        <NavigationBar></NavigationBar> 
        <div className='border intro'>
          <Container className='text-dark d-flex justify-content-center align-items-center border'>
            <Row>
              <Col>
                  <h1>Review Film Kesukaanmu</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      
       
    </div>
  )
}
