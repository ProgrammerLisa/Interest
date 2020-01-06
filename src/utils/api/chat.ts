import fetch from '../request/index'

export function intoRoom(data: any) {
  return fetch({
    url: '/api/chat/into_room',
    method: 'post',
    data: data
  })
}

export function addRoom(data: any) {
  return fetch({
    url: '/api/chat/add_room',
    method: 'post',
    data: data
  })
}
