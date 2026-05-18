import axios from 'axios';
import { env } from '../../config/env/env';

export const api = axios.create({
  baseURL: `${env.apiUrl}`,
  timeout: env.requestTimeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});