function Person() {
  return React.createElement(
    'div',
    { 'class': 'Person' },
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