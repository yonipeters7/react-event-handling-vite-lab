import { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  // Event handler function
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log("Entering password…");

    // Provide feedback based on password length
    if (value.length === 0) {
      setFeedback("");
    } else if (value.length < 6) {
      setFeedback("Password is too short (minimum 6 characters)");
    } else if (value.length < 8) {
      setFeedback("Password strength: Weak");
    } else if (value.length < 12) {
      setFeedback("Password strength: Good");
    } else {
      setFeedback("Password strength: Strong");
    }
  };

  const getFeedbackColor = () => {
    if (feedback.includes("too short")) return "#f44336";
    if (feedback.includes("Weak")) return "#ff9800";
    if (feedback.includes("Good")) return "#2196f3";
    if (feedback.includes("Strong")) return "#4caf50";
    return "#666";
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px 16px",
          fontSize: "16px",
          border: "2px solid #e0e0e0",
          borderRadius: "8px",
          outline: "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#667eea";
          e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#e0e0e0";
          e.target.style.boxShadow = "none";
        }}
      />
      {feedback && (
        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            color: getFeedbackColor(),
            fontWeight: "500",
            textAlign: "left",
            transition: "color 0.3s ease",
          }}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;