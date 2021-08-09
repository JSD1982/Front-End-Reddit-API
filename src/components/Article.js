import React from 'react';
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionSideDrawer, actionData } from "../state/index";


const Article = () =>
{
    const state = useSelector( ( state ) => state );
    const dispatch = useDispatch();

    const { handleSideDrawer } = bindActionCreators( actionSideDrawer, dispatch );
    const { getData } = bindActionCreators( actionData, dispatch );
    React.useEffect( () =>
    {
        getData()
    }, [] )
    console.log( "data:", state.data, "data:", state.drawer );

    return (
        <>
            { state.data.loading === false && (
                <>
                    {
                        state.data.length !== 0 && ( state.data.data.map( ( item, index ) =>
                        {
                            return ( <ListItem key={ index } title={ item.data.title } /> )
                        } ) )
                    }
                </>
            ) }
        </>
    );
}

export default Article;
