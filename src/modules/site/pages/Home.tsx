import { useCallback, useEffect, useState } from 'react';
import { ApiConnectionCard } from '../components/ApiConnectionCard';
import { getConexaoApi } from '../services/conexaoApiService';
import { type ConexaoApiData } from '../types/conexaoApi.types';
import { env } from '../../../config/env/env';
import './Home.css';

export function Home() {
  const [data, setData] = useState<ConexaoApiData | null>(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const carregarConexao = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess(false);

      const response = await getConexaoApi();

      setData(response.data);
      setMessage(response.message);
      setSuccess(response.success);
    } catch {
      setData(null);
      setMessage('');
      setSuccess(false);
      setError('Não foi possível estabelecer conexão com a API.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    carregarConexao();
  }, [carregarConexao]);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-kicker">{env.appEnv}</span>

          <h1>{env.appName}</h1>

          <p>
            Frontend React desacoplado consumindo uma API Laravel através de uma
            camada HTTP centralizada e reaproveitável.
          </p>
        </div>

        <ApiConnectionCard
          loading={loading}
          success={success}
          message={message}
          error={error}
          data={data}
          onRetry={carregarConexao}
        />
      </section>
    </main>
  );
}