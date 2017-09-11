class SessionApi {  
  static login(credentials, callback) {

  /*
    in real life this would call an API, but for now, we'll just check against
    the only valid user that exists.

    using a timeout to simulater realy API call, and to show the nice pending thing
  */
  setTimeout(() => {
    if (credentials.email === 'admin@example.com' && credentials.password === 'admin') {
      /* set the jwt to a random string since i'm lazy */
      return callback({jwt: 'esdiva23euihrusdfcasdfasfdnkjz2snciusdhuihr7480y2qikjh8'});
    } else {
      /* check for actual errors here */
      return callback({
        error: {
          loginErrorMessage: 'Please try again!',
          loginEmailError: 'this is an email error',
          loginPasswordError: 'this is a password error'
        }
      });
    }
  }, 1000);
  } 
}

export default SessionApi;
