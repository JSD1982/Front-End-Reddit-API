import React from 'react'
import '../styles/components/side-drawer.css'
import menuIcon from '../assets/image/menu.svg'
import closeIcon from '../assets/image/x-mark-thin.svg'
const SideDrawer = ( props ) =>
{
    const [ actionDrawer, setActionDrawer ] = React.useState( false );
    const handleDrawer = () =>
    {
        setActionDrawer( true )
    }
    const handleClose = () =>
    {
        setActionDrawer( false )
    }
    return (
        <>
            <img src={ menuIcon } alt="menu-icon" className="menu-icon" onClick={ handleDrawer } />
            <div className={ actionDrawer ? "overlay-sidedrawer active" : "overlay-sidedrawer" } />
            <div className={ actionDrawer ? "SideDrawer-container active" : "SideDrawer-container" }>
                <img src={ closeIcon } alt="close-icon" className="close-icon" onClick={ handleClose } />
                <div className="SideDrawer-header">
                    <h1>REDDIT POSTS</h1>

                </div>
                { props.children }
            </div>
        </>
    );
}

export default SideDrawer;
