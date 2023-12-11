import { request } from '@umijs/max';

/** 登录接口 POST /api/login/account */
export async function login(username: string, password: string) {
  return request('/api/user/login', {
    method: 'POST',
    data: {
      username,
      password,
    },
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function getUserInfo() {
  return request<API.CurrentUser>('/api/user/getUserInfo', {
    method: 'GET',
  });
}
