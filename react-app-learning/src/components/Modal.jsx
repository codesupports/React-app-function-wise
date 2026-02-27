

import useFetchApi from '../customHooks/useFetchApi'

const Modal = ({ isOpen, onClose }) => {
    const [data] = useFetchApi('https://jsonplaceholder.typicode.com/posts/1');

    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Modal Title</h2>
                <p>This is a simple modal</p>
                <p><strong>Data from API:</strong> {data ? data.title : 'Loading...'}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
export default Modal