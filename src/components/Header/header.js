import {  Wrapper, Container, Div1, Div2, Div4, ImageContainer } from './headerStyle'
import 'twin.macro'


import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules';

import { ScrollLinks } from './Links/links';

const Header = () => {
    let [open, setOpen] = useState(false);
    return(
        <Wrapper>
            <Container>
                <Div1>
                    <ion-icon color='dark' name="fast-food-outline"></ion-icon>
                    <span tw='font-semibold text-black text-lg cursor-pointer'>Resto Manileños</span>
                </Div1>

                <Div2>
                <ul className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-10 pt-10 bg-white':'top-[-490px]'}`}>
                    <div className={`md:hidden ${open ? 'block':'hidden'}`}>
                        <ImageContainer>
                            <Image src='/assets/nav-logo.png' width='400' height='200' layout='fixed' className='block'/>    
                        </ImageContainer>
                    </div>
                    {   
                        ScrollLinks.map((link, i) => (                            
                            <Link key={i}
                                className='md:ml-8 md:my-0 my-7'
                                smooth={true}
                                to={link.link}
                                >
                                <h1 className='pl-9 min-w-max text-xs my-5 text-black font-roboto hover:text-yellow-600 duration-500'>{link.name}</h1>
                            </Link>
                        ))
                    }
                </ul>
                </Div2>

                <Div4 onClick={()=>setOpen(!open)}>
                    <ion-icon color='dark' name={open ? 'close-outline':'menu-outline'}></ion-icon>
                </Div4>

            </Container>
        </Wrapper>
    )
}


export default Header