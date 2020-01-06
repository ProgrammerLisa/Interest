import fetch from '../request/index'

export function loginUser(param: any) {
  return fetch({
    url: '/api/login',
    method: 'post',
    data: param
  })
}

export function test() {
  return fetch({
    url: '/home',
    method: 'get'
  })
}
