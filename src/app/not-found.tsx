import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página Não Encontrada | Gabriel Santos DevSuite',
  description: 'A página que você está procurando não existe.',
};

export default function NotFound() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      paddingTop: '60px'
    }}>
      <h1 style={{
        fontSize: 'clamp(5rem, 15vw, 10rem)',
        color: 'var(--sand)',
        fontFamily: 'var(--font-heading)',
        lineHeight: 1,
        marginBottom: '1rem',
        textShadow: '0 10px 40px rgba(196, 168, 130, 0.15)'
      }}>
        404
      </h1>
      
      <h2 style={{
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-heading)',
        marginBottom: '1.5rem'
      }}>
        Rota não encontrada
      </h2>
      
      <p style={{
        color: 'var(--text-secondary)',
        marginBottom: '2.5rem',
        maxWidth: '450px',
        lineHeight: 1.7,
        fontSize: '1.05rem'
      }}>
        Parece que você acessou um link quebrado ou se perdeu no espaço digital. A página que você está procurando não existe mais ou foi movida.
      </p>
      
      <Link href="/" className="btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
        Voltar para o Início
      </Link>
    </main>
  );
}
