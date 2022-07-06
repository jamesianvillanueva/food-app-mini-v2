import tw from "twin.macro";


export const Wrapper = tw.div`md:hidden block m-auto w-auto overflow-hidden relative`

export const Container = tw.div`relative`

export const Text = tw.div`text-base font-light text-yellow-600 m-auto sm:text-2xl`

export const Message = tw.h1`text-white font-bold text-xl m-auto xs:text-2xl sm:text-3xl`

export const Quote = tw.h4`text-white font-thin text-xs text-center m-auto xs:px-10`

export const Button = tw.button`m-auto mt-2 w-32 focus:outline-none text-white bg-yellow-600 hover:bg-orange-700 font-medium rounded-full text-xs px-5 py-2.5`

export const GridContainer = tw.div`flex flex-col bg-black overflow-hidden`

export const ImageContainer = tw.img`m-auto justify-center object-cover`

export const Banner = tw.div`absolute inset-y-1/4 inset-x-3 px-2 sm:inset-y-1/3`