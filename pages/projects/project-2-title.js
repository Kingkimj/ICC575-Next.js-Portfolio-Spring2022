import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'

const ProjectTwoPage = () => {
    return <Layout>
        <Container>
            <Image 
            src="/images/09.jpg"
            alt="Cover for quittr magazine"
            width="1500"
            height="1000"
            layout="responsive"
            />
        <Heading level="1">quittr: Let Go and Take Back Control</Heading>
        <Paragraph>In this issue, we explore the Great Resignation and see what it will take to keep the fight for workers' rights alive</Paragraph>
        </Container>
    </Layout>
}

export default ProjectTwoPage;