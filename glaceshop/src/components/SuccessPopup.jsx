import Button from './Button';

function SuccessPopup({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message} 🎉</p>
        <Button onClick={onClose}>OK</Button>
      </div>
    </div>
  );
}

export default SuccessPopup;