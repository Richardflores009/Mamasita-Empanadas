import react from 'react';

function MenuCard(props) {
    return (
        <div className="menu-card-wrapper">
            <div className="menu-card">
                <div className="menu-item-img">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="menu-item-body">
                    <div className="menu-item-title">
                        <p>{props.name}</p>
                    </div>
                    <div className="menu-item-price">
                        <p>{props.price}</p>
                    </div>
                    <div className="menu-item-link">
                        <a href="#" target="_blank" >Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;