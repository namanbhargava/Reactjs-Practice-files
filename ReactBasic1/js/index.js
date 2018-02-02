function Person() {
  return React.createElement(
    'div',
    { className: 'person' },
    React.createElement(
      'h1',
      null,
      'Max'
    ),
    React.createElement(
      'p',
      null,
      'Your Age:28'
    )
  );
}

ReactDOM.render(React.createElement(Person, null), document.querySelector('#p1'));
ReactDOM.render(React.createElement(Person, null), document.querySelector('#p2'));