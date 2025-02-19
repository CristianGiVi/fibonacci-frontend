import { Modal } from "react-bootstrap";

export const FibonacciListModal = ({ isVisible, onClose, fibonacciList, hourSelected }) => {

    return (

        <Modal show={isVisible} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Lista Fibonacci</Modal.Title>
                <button type="button" className="btn-close" onClick={onClose}></button>
            </Modal.Header>
            <Modal.Body>
                <h5>Secuencia generada apartir de la hora {hourSelected}</h5>
                <ul>
                    {fibonacciList && fibonacciList.length > 0 ? (
                        fibonacciList.map((num, index) => <li key={index}>{num}</li>)
                    ) : (
                        <p>No hay datos</p>
                    )}
                </ul>
            </Modal.Body>

        </Modal>

    );
};
