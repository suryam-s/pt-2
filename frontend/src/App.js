function App() {
  const get=async() =>
  {
    const res =fetch("http://localhost:8000");
    console.log(res);
}
  return <div>welcome to frontend</div>;
}

export default App;
