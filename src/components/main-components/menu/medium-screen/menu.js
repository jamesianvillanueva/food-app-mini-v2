import { Wrapper, Container, GridContainer, Box, ImageContainer, Text, Flex, Price } from "./style"
import Image from 'next/image'


const MediumScreen = ({FilteredMenu}) => {
    return(
        <Wrapper>
            <Container>
                <GridContainer>
                {
                    FilteredMenu.map((key, i) =>{
                        return(
                           <Box key={i}>
                                <ImageContainer>
                                    <Image src={key.image} width='100' height='100' className="block rounded"/>
                                </ImageContainer>
                                <Flex>
                                    <Text>{key.title}</Text>
                                    <Price>{key.price}</Price>                                   
                                </Flex>   
                           </Box>
                        )
                    })
                }
                </GridContainer>
            </Container>
        </Wrapper>
    )
}

export default MediumScreen