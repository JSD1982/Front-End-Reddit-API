import React from 'react'
import SideDrawer from "../components/SideDrawer";
import Article from "../components/Article";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionSideDrawer } from "../state/index";

const Home = () =>
{
    const [ deletedAll, setDeletedAll ] = React.useState( false )
    const state = useSelector( ( state ) => state );
    const dispatch = useDispatch();
    const { handleSideDrawer } = bindActionCreators( actionSideDrawer, dispatch );
    const handleClear = () =>
    {
        setDeletedAll( true )
        handleSideDrawer( false )
    }
    return (
        <div className="Home-layout">
            <SideDrawer>
                { !deletedAll && ( <Article /> ) }


            </SideDrawer>
            <div className={ state.drawer ? "clear-all-container active" : "clear-all-container" } onClick={ handleClear }>
                Clear All
            </div>
            <main className={ state.drawer ? "active-drawer" : null }>
                { state.positionData !== "" ? ( <>
                    <h1>{ state.data.data[ state.positionData ].data.title }</h1>
                    { state.data.data[ state.positionData ].data.thumbnail !== 'self' ? (
                        <img src={ state.data.data[ state.positionData ].data.thumbnail } alt="image-lg" />
                    ) : null }
                    <p>{ state.data.data[ state.positionData ].data.author }</p>
                </> ) : ( <p>Default data...</p> ) }
            </main>
        </div>
    );
}

export default Home;
