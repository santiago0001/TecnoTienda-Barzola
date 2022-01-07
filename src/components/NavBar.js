import React from 'react'

export const NavBar = () => {

    const styleMarca={
        color:'white'
    }
    const styleBarra={
        backgroundColor:'#0D0092',
        display: 'inline-block',
        width:'100%',
        
        
    }

    const StyleLinks ={
        color:'white',
    }

    const styleSections = {
        display: 'inline-block',
        paddingLeft:'10%',
        fontSize:'25px',
        fontWeight: '800'
    }
    return (
        <div style={styleBarra} >
            <div style={styleSections} >
            <h1 style={styleMarca}>Tecno tienda</h1>
            </div>
            <div style={styleSections} >
            <a  style={StyleLinks}  href="#HOME">
            HOME
            </a>
            </div>
            <div style={styleSections} >
            <a  style={StyleLinks} href="#CATALOGO">
            Catalogo
            </a>
            </div>
            <div style={styleSections} >
            <a  style={StyleLinks} href="#OFERTA">
            Ofertas
            </a>
            </div>
        </div>
    )
}
