import React, {useRef, useEffect} from "react";
import Logo from "../../assets/Logo-AltunIT-White.png";
import "./Header.css";

function Header({timeline, ease}) {
    let logo = useRef(null);
    let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    useEffect(() => {
        timeline.from(logo, 1, {
            opacity: 0,
            y: '100'
        });
        timeline.from([menu_item1, menu_item2, menu_item3], 2 ,{
            opacity: 0,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    })
    return (

        <div className="header">
            <div className="logo" ref={el => logo = el}>
                <img className="logo1" src={Logo} alt=" "/>
                {/*Logo*/}
            </div>
            <div className="menu">
                <div className="menu-item" ref={el => menu_item1 = el}>Home</div>
                <div className="menu-item" ref={el => menu_item2 = el}>About</div>
                <div className="menu-item" ref={el => menu_item3 = el}>Contact</div>
            </div>
        </div>

    );
}

export default Header
