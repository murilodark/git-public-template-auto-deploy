import { api } from '../../../core/http/api';
import { apiEndpoints } from '../../../config/endpoints/apiEndpoints';
// Altere o import para incluir o 'type'
import {
  type ApiResponse,
  type ConexaoApiData,
} from '../types/conexaoApi.types';


export async function getConexaoApi(): Promise<ApiResponse<ConexaoApiData>> {
  const response = await api.get<ApiResponse<ConexaoApiData>>(
    apiEndpoints.conexaoApi
  );

  return response.data;
}