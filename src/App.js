import "./App.css";

const Header = () => {
  return <header>Hello world</header>;
};

const Field = () => {
  // return <input placeholder="Type here" type="text" />;
  const holder = "Enter here";
  const styledfield = {
    width: "300px",
  };
  return <input placeholder={holder} type="text" style={styledfield} />;
};

function Btn() {
  // const text = "Log in";
  const res = () => {
    return "Log in";
  };
  // return <button>{text}</button>;
  return <button>{res()}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
