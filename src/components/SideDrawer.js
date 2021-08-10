import React from 'react';
import '../styles/components/side-drawer.css';
import menuIcon from '../assets/image/menu.svg';
import closeIcon from '../assets/image/x-mark-thin.svg';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionSideDrawer, actionData } from "../state/index";
const SideDrawer = ( props ) =>
{

    const drawer = useSelector( ( state ) => state.drawer );
    const dispatch = useDispatch();

    const { handleSideDrawer } = bindActionCreators( actionSideDrawer, dispatch );




    return (
        <>
            <img src={ menuIcon } alt="menu-icon" className="menu-icon" onClick={ () => handleSideDrawer( !drawer ) } />
            <div className={ drawer ? "overlay-sidedrawer active" : "overlay-sidedrawer" } />
            <div className={ drawer ? "SideDrawer-container active" : "SideDrawer-container" }>
                <img src={ closeIcon } alt="close-icon" className="close-icon" onClick={ () => handleSideDrawer( !drawer ) } />
                <div className="SideDrawer-header">
                    <h1>REDDIT POSTS</h1>

                </div>
                { props.children }

            </div>




        </>
    );
}

export default SideDrawer;
