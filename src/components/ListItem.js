import '../styles/components/article-items.css'
import checkImage from '../assets/image/check-mark.svg'
import checkVewImage from '../assets/image/check-mark-vew.svg'
import deleteImage from '../assets/image/trash-can.svg'
const ListItem = () =>
{
    return (
        <div className="ListItem-container">
            <div className="ListItem-container__header">
                <h2>Monthly Getting Started / Web Dev Career Thread</h2>
                <span>date</span>
            </div>
            <div className="ListItem-container__main">
                <img src="https://external-preview.redd.it/EET3MPMPM0u3aQv8k_KzNjKPjgko6Vo3f4uaFGvbIpY.jpg?width=216&crop=smart&auto=webp&s=82f12dfc10e3a594c90a6e6db57a672addda88e9" alt="" />
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
