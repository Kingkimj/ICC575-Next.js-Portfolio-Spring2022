import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'

const ProjectThreePage = () => {
    return <Layout>
        <Container>
            <Image 
            src="/images/10.jpg"
            alt="Fight for your life"
            width="1500"
            height="1000"
            layout="responsive"
            />
        <Heading level="1">Fight For Your Life</Heading>
        <Paragraph>Workers around the world say no more to exploitation.</Paragraph>
        </Container>
    </Layout>
}

export default ProjectThreePage;