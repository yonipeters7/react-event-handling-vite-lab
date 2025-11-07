import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Password Form
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <PasswordInput />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;