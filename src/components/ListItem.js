import '../styles/components/article-items.css'
import checkImage from '../assets/image/check-mark.svg'
import checkVewImage from '../assets/image/check-mark-vew.svg'
import deleteImage from '../assets/image/trash-can.svg'
const ListItem = ( props ) =>
{
    return (
        <div className="ListItem-container">
            <div className="ListItem-container__header">
                <h2>{ props.title }</h2>
                <span>date</span>
            </div>
            <div className="ListItem-container__main">
                <img src={ props.image } alt="" />
                <p>text</p>
            </div>
            <div className="ListItem-container__footer">
                <span>comments</span>
                <div className="ListItem-container__footer-actions">
                    <img src={ deleteImage } alt="delet" />
                    <img src={ checkImage } alt="check" />
                </div>
            </div>

        </div>
    );
}

export default ListItem;
