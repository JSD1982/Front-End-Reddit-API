import React from 'react'
import SideDrawer from "../components/SideDrawer";
import Article from "../components/Article";
import { useSelector, useDispatch } from "react-redux";
//import { bindActionCreators } from "redux";
//import { actionData } from "../state/index";
const Home = () =>
{
    const drawer = useSelector( ( state ) => state.drawer );
    //const dispatch = useDispatch();


    return (
        <div className="Home-layout">
            <SideDrawer>
                <Article />
            </SideDrawer>
            <main className={ drawer ? "active-drawer" : null }>
                <h1>Title</h1>
                <img src="https://external-preview.redd.it/EET3MPMPM0u3aQv8k_KzNjKPjgko6Vo3f4uaFGvbIpY.jpg?auto=webp&amp;s=3b6ba57babb9988419adce3c9b9d25b8ba9cf446" alt="image-lg" />
                <p>text</p>
            </main>
        </div>
    );
}

export default Home;
