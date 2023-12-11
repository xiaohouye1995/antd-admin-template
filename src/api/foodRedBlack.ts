import { request } from '@umijs/max';

/** 查询红黑榜列表 POST /api/foodRedBlack/getRedBlackList */
export async function getRedBlackList(params: any) {
  return request('/api/foodRedBlack/getRedBlackList', {
    method: 'GET',
    params,
  });
}
