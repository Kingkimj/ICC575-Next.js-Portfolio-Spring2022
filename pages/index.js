import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

// custom compoonents 
import Button from '../components/Button'
import Col from '../components/Col'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import ProjectsByGenre from '../components/ProjectsByGenre'
import Row from '../components/Row'


export default function Home() {
  return (

    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Container>
          <Heading level="2">Hard coded projects</Heading>
          <Row>
            <Col xs="12" sm="6" md="4">
            <Image 
            src="/images/08.png"
            alt="Woman resting just underneath the waters"
            width="1500"
            height="1000"
            layout="responsive"
            />

              <Heading level="3">Breach the Surface</Heading>
              <Paragraph>
                <Link href="/projects/graphic-design">
                <a>
                  View Project 
                </a>
                </Link>
              </Paragraph>
            </Col>

            <Col xs="12" sm="6" md="4">
            <Image 
            src="/images/09.jpg"
            alt="quittr"
            width="1500"
            height="1000"
            layout="responsive"
            />


              <Heading level="3">Launch of quittr</Heading>
              <Paragraph>
                <Link href="/projects/project-2-title">
                <a>
                  View Project 
                </a>
                </Link>
              </Paragraph>
            </Col>

            <Col xs="12" sm="6" md="4">
            <Image 
            src="/images/10.jpg"
            alt="Mag cover of quittr"
            width="1500"
            height="1000"
            layout="responsive"
            />

            
              <Heading level="3">Fight for Your Life</Heading>
              <Paragraph>
                <Link href="/projects/project-3">
                <a>
                  View Project 
                </a>
                </Link>
              </Paragraph>
            </Col>
            <Col xs="12" sm="6" md="4">
            <Image 
            src="/images/10.jpg"
            alt="Mag cover of quittr"
            width="1500"
            height="1000"
            layout="responsive"
            />
            </Col>
          </Row>
        </Container>
     
    </Layout>
  )
}
