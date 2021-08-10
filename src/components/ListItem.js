import React from 'react';
import '../styles/components/article-items.css'
import checkImage from '../assets/image/check-mark.svg'
import checkVewImage from '../assets/image/check-mark-vew.svg'
import deleteImage from '../assets/image/trash-can.svg'
import { calculateHouer } from '../utils/hourRange'
const ListItem = ( props ) =>
{
    const [ check, setCheck ] = React.useState( props.checked )
    const [ deleted, setDeleted ] = React.useState()
    const handleClick = () =>
    {
        props.onClick()
        setCheck( true )
    }
    const handleDeleted = () =>
    {
        setDeleted( true )
    }
    return (
        <div className="ListItem">
            <div className={ deleted ? "ListItem-container-removed" : null }  >
                <div onClick={ handleClick } className={ check ? "ListItem-container checked" : "ListItem-container" }>
                    <div>
                        <div className="ListItem-container__header">
                <h2>{ props.title }</h2>
                            <span>{ calculateHouer( props.date ) } hours ago</span>
            </div>
            <div className="ListItem-container__main">
                <img src={ props.image } alt="" />
                            <p>{ props.author }</p>
                        </div>
                    </div>
                    <div>
            <div className="ListItem-container__footer">
                            <span>comments: { props.comments }</span>
                <div className="ListItem-container__footer-actions">
                                <img src={ deleteImage } alt="delet" onClick={ handleDeleted } />
                                <img src={ check ? checkVewImage : checkImage } alt="check" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
