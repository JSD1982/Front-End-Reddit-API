import React from 'react';
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionPositionData, actionData } from "../state/index";


const Article = () =>
{

    const state = useSelector( ( state ) => state );
    const dispatch = useDispatch();

    const { getData } = bindActionCreators( actionData, dispatch );
    const { handlePositionData } = bindActionCreators( actionPositionData, dispatch );

    React.useEffect( () =>
    {
        getData()
    }, [] )

    return (
        <>

            { state.data.loading === false ? (
                <>
                    {
                        state.data.length !== 0 && ( state.data.data.map( ( item, index ) =>
                        {
                            return ( <ListItem key={ index } title={ item.data.title } image={ item.data.thumbnail } author={ item.data.author } comments={ item.data.num_comments } date={ item.data.created } clicked={ item.data.clicked } onClick={ () => handlePositionData( index ) } /> )
                        } ) )
                    }
                </>
            ) : 'loading..' }

        </> )



}

export default Article;
