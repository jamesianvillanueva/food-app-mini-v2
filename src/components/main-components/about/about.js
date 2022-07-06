import { Wrapper, Container, ImageContainer, Title, Message } from "./style"
import Image from "next/image"


const About = () => {

    return(
        <Wrapper>
            <Container>
                <ImageContainer>
                    <Image src="/assets/background/story.jpg" width='400' height='400' className="block rounded-full"/>
                </ImageContainer>
                <Title>
                    Our Story
                </Title>
                <Message>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud ullamco nisi laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </Message>
            </Container>
        </Wrapper>
    )
}

export default About