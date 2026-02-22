return (
  <div style={{
    marginTop: "30px",
    maxWidth: "500px",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  }}>
    <input
      type="text"
      placeholder="Ask about my skills, projects, education..."
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    />
    <br /><br />
    <button
      onClick={askAI}
      style={{
        width: "100%",
        padding: "12px",
        background: "#4f46e5",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold"
      }}
    >
      Ask AI
    </button>

    <div style={{ marginTop: "20px" }}>
      {loading ? (
        <p>Thinking...</p>
      ) : (
        answer && (
          <div style={{
            background: "white",
            padding: "12px",
            borderRadius: "6px"
          }}>
            <b>Answer:</b> {answer}
          </div>
        )
      )}
    </div>
  </div>
);