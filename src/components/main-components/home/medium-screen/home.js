import Slider from "react-slick"
import { items } from "../constant/items"
import { settings } from "../slider-settings/slider-settings"
import { Container, Wrapper, Banner, Message, Text, Quote, GridContainer, ImageContainer, Button } from "./style"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MediumScreen = () => {
    return (
        <Wrapper>
            <Container>
                <GridContainer>
                    <div className="animate-zoomin transition-all duration-75 ease-in-out">
                        <div className="animate-zoomout transition-all duration-75 ease-in-out">                    
                            
                            {
                                <Slider {...settings}>
                                    {
                                        items.map((key, i) => {
                                            return(
                                                <ImageContainer key={i} src={key.image} className='opacity-50'/>  
                                            )
                                        })
                                    }
                                </Slider>
                           }
                        </div>
                    </div>
                    <Banner>
                        <div className="flex flex-col">
                            <Text>
                                Welcome to Resto Manileños
                            </Text>
                            <Message>    
                                <strong>COME AND EAT WITH US</strong>
                            </Message>
                            <Quote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Quote>
                            <Button>
                            Order Now
                            </Button>
                        </div>
                    </Banner>
                   
                </GridContainer>
            </Container>
        </Wrapper>
    )
}

export default MediumScreen