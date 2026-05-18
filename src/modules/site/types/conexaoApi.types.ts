export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  status?: number;
}

export interface ConexaoApiData {
  app_name: string;
  environment: string;
  database: string;
  timestamp: string;
}