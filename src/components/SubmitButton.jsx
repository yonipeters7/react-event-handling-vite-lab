// SubmitButton.jsx
import { useState } from "react";

function SubmitButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Mouse Entering");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Mouse Exiting");
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%",
        backgroundColor: isHovered ? "#5568d3" : "#667eea",
        color: "white",
        padding: "12px 20px",
        fontSize: "16px",
        fontWeight: "600",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? "0 8px 20px rgba(102, 126, 234, 0.4)"
          : "0 4px 12px rgba(102, 126, 234, 0.3)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;
