import Banner from "./banner/banner"
import SmallScreen from "./small-screen/menu"
import { useState } from "react"
import { items } from "./constant/item"
import { NavBarContainer, Button } from "./style"
import { Links } from "./constant/link"
import MediumScreen from "./medium-screen/menu"

const Menu = () => {
    const [FilteredMenu, setFilteredMenu] = useState(items)

    const GetValue = value => {      
        if(value == 'all'){
            setFilteredMenu(items)
        }
        else{
            setFilteredMenu(items.filter(item => item.foodtype == value))  
        }      
    }
    return(
        <>
            <Banner />
            <NavBarContainer>
            {
                Links.map((link, i) => {
                    return(
                        <Button key={i} onClick={(e) => GetValue(link.id)}>
                            {link.name}
                        </Button>
                    )
                })
            }     
            </NavBarContainer>
            <SmallScreen FilteredMenu={FilteredMenu}/>
            <MediumScreen FilteredMenu={FilteredMenu}/>
        </>
    )
}   


export default Menu