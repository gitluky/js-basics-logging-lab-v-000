const driver = 'bob';

function calledWithExactly (a) {
  console.log(a);
}

calledWithExactly('this code was called');
calledWithExactly(driver);
calledWithExactly(driver, something);
