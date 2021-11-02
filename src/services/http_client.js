import {
  HTTP_LOGIN
} from '../utils/endpoints';

import {request} from '../utils/http';

export async function login(body) {
  return await request.post(HTTP_LOGIN, body);
}