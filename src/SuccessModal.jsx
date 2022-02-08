const SuccessModal = () => {
  return (
    <div className="modalOverlay">
      <div className="modalOverlay__modal">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>user-check</title>
          <path d="M30 19l-9 9-3-3-2 2 5 5 11-11z"></path>
          <path d="M14 24h10v-3.598c-2.101-1.225-4.885-2.066-8-2.321v-1.649c2.203-1.242 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h14v-2z"></path>
        </svg>
        <p>Registration Complete</p>
      </div>
    </div>
  );
};

export default SuccessModal;