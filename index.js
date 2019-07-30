const driver = 'bob';

function calledWithExactly (a, b) {
  if (b) {
    console.log(a);
  } else {
    console.log(a, b);
  }
}

calledWithExactly('this code was called');
calledWithExactly(driver);
calledWithExactly(driver, something);
