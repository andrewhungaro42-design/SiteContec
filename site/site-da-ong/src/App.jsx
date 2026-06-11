import React, { useState } from 'react';

export default function App() {
  // O mural começa 100% vazio, como você pediu!
  const [propostas, setPropostas] = useState([]);

  // Estados para capturar os dados do formulário
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('Geral');
  const [status, setStatus] = useState('');

  // Função para adicionar uma nova proposta no mural
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação para não enviar campos em branco
    if (!titulo || !descricao) {
      setStatus('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const novaProposta = {
      id: Date.now(), // Gera um ID único para controle
      titulo,
      descricao,
      categoria,
      concluida: false, // Toda proposta nova começa ativa
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
    };

    // Adiciona a nova proposta sempre no topo da lista
    setPropostas([novaProposta, ...propostas]);

    // Limpa os campos do formulário
    setTitulo('');
    setDescricao('');
    setCategoria('Geral');
    setStatus('Proposta publicada com sucesso!');

    // Apaga a mensagem de sucesso após 3 segundos
    setTimeout(() => setStatus(''), 3000);
  };

  // Função para excluir uma proposta definitiva do mural
  const handleExcluir = (id) => {
    setPropostas(propostas.filter((p) => p.id !== id));
  };

  // Função para alternar o status entre Concluído e Ativo
  const handleAlternarConcluido = (id) => {
    setPropostas(
      propostas.map((p) =>
        p.id === id ? { ...p, concluida: !p.concluida } : p
      )
    );
  };

  return (
    <div style={styles.pageBackground}>
      
      {/* CARD CENTRALIZADO DO PAINEL ADMINISTRATIVO */}
      <div style={styles.adminCard}>
        <header style={styles.header}>
          <h2 style={styles.mainTitle}>🎛️ PAINEL ADMINISTRATIVO (ONG)</h2>
          <p style={styles.subtitle}>Área exclusiva para a Tiane e equipe publicarem novidades.</p>
        </header>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Título da Proposta *</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Reforma da biblioteca comunitária"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Categoria</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={styles.select}
            >
              <option value="Geral">Geral</option>
              <option value="Educação">Educação</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Descrição da Proposta *</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Explique detalhadamente a proposta para os leitores..."
              rows="4"
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.button}>
            🚀 Publicar Proposta para os Usuários
          </button>
        </form>

        {status && (
          <div style={{
            ...styles.statusMessage,
            backgroundColor: status.includes('sucesso') ? '#e6f4ea' : '#feeede',
            color: status.includes('sucesso') ? '#137333' : '#b06000'
          }}>
            {status}
          </div>
        )}
      </div>

      {/* DIVISOR DE SEÇÃO */}
      <div style={styles.divider}>
        <span style={styles.dividerText}>🍃 TRANSPARÊNCIA E AÇÃO 🍃</span>
      </div>

      {/* MURAL DE PROPOSTAS INFERIOR */}
      <div style={styles.muralContainer}>
        <h2 style={styles.muralTitle}>📌 Mural de Propostas da ONG</h2>
        
        {propostas.length === 0 ? (
          <div style={styles.muralVazio}>
            <p>O mural está limpo no momento. Insira uma nova proposta acima para começar!</p>
          </div>
        ) : (
          <div style={styles.gridPropostas}>
            {propostas.map((item) => (
              <div
                key={item.id}
                style={{
                  ...styles.cardProposta,
                  borderLeft: item.concluida ? '6px solid #10b981' : '6px solid #0B3D59',
                  backgroundColor: item.concluida ? '#f0fdf4' : '#ffffff',
                  opacity: item.concluida ? 0.8 : 1
                }}
              >
                <div style={styles.cardHeader}>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: item.concluida ? '#d1fae5' : '#e2f0fd',
                    color: item.concluida ? '#10b981' : '#0B3D59'
                  }}>
                    {item.categoria}
                  </span>
                  <small style={{ color: '#888', fontWeight: '500' }}>{item.dataCriacao}</small>
                </div>

                <h3 style={{
                  ...styles.cardTitulo,
                  textDecoration: item.concluida ? 'line-through' : 'none',
                  color: item.concluida ? '#71717a' : '#0f172a'
                }}>
                  {item.titulo}
                </h3>
                
                <p style={{
                  ...styles.cardDescricao,
                  color: item.concluida ? '#a1a1aa' : '#3f3f46'
                }}>
                  {item.descricao}
                </p>

                {/* BOTÕES DE AÇÃO ADMINISTRATIVA */}
                <div style={styles.rowBotoes}>
                  <button
                    onClick={() => handleAlternarConcluido(item.id)}
                    style={{
                      ...styles.btnAcao,
                      backgroundColor: item.concluida ? '#64748b' : '#10b981'
                    }}
                  >
                    {item.concluida ? '🔄 Reabrir' : '✅ Concluir'}
                  </button>
                  <button
                    onClick={() => handleExcluir(item.id)}
                    style={{ ...styles.btnAcao, backgroundColor: '#ef4444' }}
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Estilização completa baseada na identidade refinada
const styles = {
  pageBackground: {
    backgroundColor: '#111622',
    minHeight: '100vh',
    padding: '3rem 1rem',
    fontFamily: "'Inter', system-ui, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  adminCard: {
    backgroundColor: '#FAF6EE', // Tom creme refinado da foto
    maxWidth: '750px',
    width: '100%',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  mainTitle: {
    color: '#0B3D59', // Azul Horizonte / Petróleo
    fontSize: '1.6rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    margin: '0 0 0.5rem 0',
  },
  subtitle: {
    color: '#57534e',
    fontSize: '0.95rem',
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#0B3D59',
  },
  input: {
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid #d6d3d1',
    backgroundColor: '#ffffff',
    fontSize: '1rem',
    color: '#1c1917',
    outline: 'none',
  },
  select: {
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid #d6d3d1',
    backgroundColor: '#ffffff',
    fontSize: '1rem',
    color: '#1c1917',
    outline: 'none',
    cursor: 'pointer',
  },
  textarea: {
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid #d6d3d1',
    backgroundColor: '#ffffff',
    fontSize: '1rem',
    color: '#1c1917',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#0B3D59',
    color: '#ffffff',
    padding: '0.9rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.05rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '0.5rem',
  },
  statusMessage: {
    marginTop: '1.5rem',
    padding: '0.8rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  divider: {
    width: '100%',
    maxWidth: '850px',
    margin: '3.5rem 0 2.5rem 0',
    textAlign: 'center',
    borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
    lineHeight: '0.1em',
  },
  dividerText: {
    backgroundColor: '#111622',
    padding: '0 15px',
    color: '#64748b',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '2px',
  },
  muralContainer: {
    maxWidth: '850px',
    width: '100%',
    padding: '0 1rem 4rem 1rem',
  },
  muralTitle: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
  },
  muralVazio: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '2px dashed rgba(255, 255, 255, 0.1)',
    padding: '3rem',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#94a3b8',
  },
  gridPropostas: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  cardProposta: {
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    transition: 'all 0.2s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  badge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '30px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardTitulo: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  cardDescricao: {
    margin: '0 0 1.25rem 0',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  rowBotoes: {
    display: 'flex',
    gap: '0.75rem',
  },
  btnAcao: {
    color: '#ffffff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
};