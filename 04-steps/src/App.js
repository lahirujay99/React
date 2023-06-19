function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">Hello</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;