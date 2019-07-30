const driver = 'bob';

function calledWithExactly (a, b) {
  console.log(a, b);
}

calledWithExactly('this code was called');
calledWithExactly(driver);
calledWithExactly(driver, something);
