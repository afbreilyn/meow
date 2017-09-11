class SessionApi {

  static login(credentials, callback) {
    const checkEmail = (email) => {
      let errors = []

      // check valid email address
      let rx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      if (!rx.test(email)) {
        errors.push('Please enter a valid email address')
      }

      return errors;
    }

    const checkPassword = (pw) => {
      let errors = []

      // check length
      if (pw.length < 10) {
        errors.push('Needs to be at least 10 characters')
      }

      // check non­alphanumeric
      let rx = new RegExp(/(?=.*[!?@#$&*+()^%0-9])/);

      if (!pw.match(rx)) {
        errors.push('Need at least 1 non­alphanumeric character')
      }

      return errors
    }

    /*
      in real life this would call an API, but for now, we'll just check against
      the only valid user that exists.

      using a timeout to simulater realy API call, and to show the nice pending thing
    */
    setTimeout(() => {

      const emailErrors = checkEmail(credentials.email);
      const loginPasswordError = checkPassword(credentials.email);

      if (credentials.email === 'meow@meow.com' && credentials.password === 'meowmeow') {
        /* set the jwt to a random string since i'm lazy */
        return callback({jwt: 'esdiva23euihrusdfcasdfasfdnkjz2snciusdhuihr7480y2qikjh8'});
      } else {
        return callback({
          error: {
            loginErrorMessage: 'Denied',
            loginEmailError: emailErrors,
            loginPasswordError: loginPasswordError
          }
        });
      }
    }, 1000);
  } 
}

export default SessionApi;
