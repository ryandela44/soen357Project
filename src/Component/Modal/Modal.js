import "./Modal.css"
const Modal = ({ product, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{product.name}</h2>
                <img src={product.images[0]} alt={product.name} />
                <p>{product.description}</p>
                {product.originalPrice && (
                    <p className="price">
                        <span className="original-price">{product.originalPrice}</span>
                        {product.price}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Modal;