import { createPortal } from 'react-dom';

const ResultModal = () => {
  return createPortal(
    <dialog open>
      <h2>Result</h2>
    </dialog>
  , document.body);
};

export default ResultModal;