class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello World!`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, null , null));