export default {  
  logged_in: !!sessionStorage.jwt,
  isLoginPending: false,
  users: [],
  filterString: ''
}