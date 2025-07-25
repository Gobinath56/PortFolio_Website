// src/components/icons/MatlabIcon.jsx

const MatlabIcon = ({ title = "MATLAB" }) => {
  return (
    <svg
      title={title}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="currentColor"
      className="text-cyan-400"
    >
      <path d="M6 36L18 12l6 9 9-15 9 30z" />
    </svg>
  );
};

export default MatlabIcon;
