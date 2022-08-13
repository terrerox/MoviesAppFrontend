export function authHeader () {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      return { Authorization: 'Bearer ' + user.user.jwToken}
    } else {
      return {}
    }
}