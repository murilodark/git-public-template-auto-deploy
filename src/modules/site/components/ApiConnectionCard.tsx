import { type ConexaoApiData } from '../types/conexaoApi.types';

import './ApiConnectionCard.css';

interface ApiConnectionCardProps {
  loading: boolean;
  success: boolean;
  message: string;
  error: string;
  data: ConexaoApiData | null;
  onRetry: () => void;
}

export function ApiConnectionCard({
  loading,
  success,
  message,
  error,
  data,
  onRetry,
}: ApiConnectionCardProps) {
  return (
    <div className="api-card">
      <div className="api-card-header">
        <div>
          <span className="api-card-label">Status da API</span>
          <h2>Conexão com Backend Laravel</h2>
        </div>

        <div
          className={[
            'api-status',
            loading ? 'api-status-loading' : '',
            success ? 'api-status-success' : '',
            error ? 'api-status-error' : '',
          ].join(' ')}
        >
          <span className="api-status-dot" />
          {loading && 'Conectando...'}
          {!loading && success && 'Conectado'}
          {!loading && error && 'Falhou'}
        </div>
      </div>

      {loading && (
        <div className="api-loading-box">
          <div className="api-loader" />
          <div>
            <strong>Conectando à API...</strong>
            <p>Consultando a rota /conexao-api no backend.</p>
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="api-error-box">
          <strong>Erro de conexão</strong>
          <p>{error}</p>
        </div>
      )}

      {!loading && success && data && (
        <div className="api-result-box">
          <p className="api-message">{message}</p>

          <div className="api-grid">
            <div>
              <span>Aplicação</span>
              <strong>{data.app_name}</strong>
            </div>

            <div>
              <span>Ambiente</span>
              <strong>{data.environment}</strong>
            </div>

            <div>
              <span>Database</span>
              <strong>{data.database}</strong>
            </div>

            <div>
              <span>Timestamp</span>
              <strong>{data.timestamp}</strong>
            </div>
          </div>
        </div>
      )}

      <button type="button" className="api-retry-button" onClick={onRetry}>
        Testar conexão novamente
      </button>
    </div>
  );
}