
class UsersApi {
  static getAllUsers() {

    let loadUsersPromise = new Promise((resolve, reject) => {
      setTimeout(function(){
        /* of course - this would be pulling from an API in real life */
        resolve( userData.data );
      }, 250);
    });

    return loadUsersPromise
  }
}

export default UsersApi;

const userData = {
  "data": [
    {
      "name": "Joe",
      "age": 24,
      "priority": 1,
      "category": "cat2"
    }, {
      "name": "Jane",
      "age": 76,
      "priority": 4,
      "category": "cat1"
    }, {
      "name": "Kevin",
      "age": 32,
      "priority": 2,
      "category": "cat2"
    }, {
      "name": "Lucy",
      "age": 54,
      "priority": 1,
      "category": "cat3"
    }, {
      "name": "Colin",
      "age": 34,
      "priority": 3,
      "category": "cat1"
    }, {
    "name": "Franny",
      "age": 36,
      "priority": 2,
      "category": "cat3"
    }, {
      "name": "Neil",
      "age": 74,
      "priority": 4,
      "category": "cat2"
    }, {
      "name": "Katy",
      "age": 55,
      "priority": 3,
      "category": "cat2"
    }
  ]
}
