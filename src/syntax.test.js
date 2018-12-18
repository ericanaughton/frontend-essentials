//difference between string and variable

//a string is a value representing text
//a variable is a name that can refer to any value

//parameter vs argument
//A parameter is a variable in a method definition. When a method is called,
//the arguments are the data you pass into the method's parameters.

const myMethod = parameter => {
  return parameter;
};
const myArgument = 'I am the argument';
myMethod(myArgument);

//difference between variable and function parameter
const name = 'Doran';

it('should display undefined for name', () => {
  const showName = name => {
    return `Name is ${name}`;
  };
  //console.log(showName());
  expect(showName()).toEqual('Name is undefined');
});

it('should display Doran for name', () => {
  //using ES6 default parameter value
  //in here name is a variable that is defined in global scope therefore I have access to it anywhere
  // but personName is a parameter i defined in my function, which has no access outside my function scope
  const showName = (personName = name) => {
    return `Name is ${personName}`;
  };

  //console.log(showName());
  expect(showName()).toEqual('Name is Doran');
});

const fixedStatus = 'Active';
let status;

const changeStatus = value => {
  if (value % 2 === 0) {
    return (status = 'Pending');
  }

  return (status = 'Complete');
};

it('should change the status to Pending', () => {
  changeStatus(2);
  //console.log(changeStatus(2));
  expect(status).toEqual('Pending');
});

it('should change the status to Complete', () => {
  changeStatus(3);
  //console.log('now the status is ', changeStatus(3));
  expect(status).toEqual('Complete');
});

//Can't run this test as fixedStatus is read only value
// it('fixedStatus value should remian the same', () => {
//   fixedStatus = 'Done';
//   expect(fixedStatus).toEqual('Active');
// });

//function scope

const foo = 'global scope';

const bar = () => {
  const baz = 'hello world';
  return `show baz:${baz}, hey I am ${foo}`;
};

// it('should throw error when asked for baz, as it is in function scope', () => {
//   expect(undefined).toEqual(baz);
// });

it('should display foo, as it is in global scope', () => {
  //console.log(foo);
  expect(foo).toEqual('global scope');
});

it('now it should know about baz', () => {
  bar();
  expect(bar()).toEqual('show baz:hello world, hey I am global scope');
});

/**
 * const foo = check whether value can be dived by 2
 *                if so then operate on it
 *                if not return the value
 *
 * const foo = value => value %2 === 0 ? value +1 : value
 *
 * operators +,-.%,/,* <=, >=
 */

const helloWorld = 'Hello World';

//const hello = greeting => gretting isHappy ? beHappy : beSad
