


const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Modal Title</h2>
                <p>This is a simple modal</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
export default Modal