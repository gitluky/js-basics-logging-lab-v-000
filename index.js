const driver = 'bob';

function calledWithExactly (something) {
  console.log(something);
}

calledWithExactly('this code was called');
calledWithExactly(driver);
calledWithExactly(driver, something);
