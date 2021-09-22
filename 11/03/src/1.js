function App() {
  return <>
    <div>{"<p>转义</p>"}</div>
    <div dangerouslySetInnerHTML={{__html: "<p>不转义</p>"}}></div>
  </>;
}
export default App;