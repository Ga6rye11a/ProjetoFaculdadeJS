import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../login/AuthContext';
import './Home.css';

export default function Home() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const [pets, setPets] = useState([]);
  const [nomePet, setNomePet] = useState('');
  const [especiePet, setEspeciePet] = useState('');

  async function fetchPets() {
    const res = await fetch('http://localhost:3000/api/pets');

    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) {
      const text = await res.text();
      throw new Error(`Resposta não-JSON do servidor: ${text.slice(0, 200)}`);
    }

    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    // Busca a lista quando o token existir (rota protegida garante, mas mantém consistência)
    if (!token) return;

    const run = async () => {
      try {
        await fetchPets();
      } catch (err) {
        console.error('Erro ao buscar pets:', err);
      }
    };

    run();
  }, [token]);


  const handleAddPet = async (e) => {
    e.preventDefault();

    if (!nomePet || !especiePet) {
      alert('Por favor, preencha o nome e a espécie do pet.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nome: nomePet, especie: especiePet }),
      });

      if (!response.ok) {
        const ct = response.headers.get('content-type') || '';
        if (!ct.includes('application/json')) {
          const text = await response.text();
          throw new Error(`Erro ao cadastrar pet (não-JSON): ${text.slice(0, 200)}`);
        }

        const errorData = await response.json();
        throw new Error(errorData.erro || 'Erro ao cadastrar pet.');
      }

      setNomePet('');
      setEspeciePet('');
      await fetchPets();
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert(error.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-header-row">
          <h1>🐾 Bem-vindo(a) ao Adote um Pet!</h1>
          <button type="button" className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="home-main">
        <section className="pet-list-section">
          <h2>Animais Disponíveis para Adoção</h2>
          <div className="pet-grid">
            {pets.length > 0 ? (
              pets.map((pet) => (
                <div key={pet.id} className="pet-card">
                  <h3>{pet.nome}</h3>
                  <p>{pet.especie}</p>
                </div>
              ))
            ) : (
              <p>Nenhum pet disponível no momento.</p>
            )}
          </div>
        </section>

        <section className="add-pet-section">
          <h2>Cadastrar Novo Pet</h2>
          <form onSubmit={handleAddPet} className="add-pet-form">
            <div className="form-group">
              <label htmlFor="nomePet">Nome do Pet</label>
              <input
                id="nomePet"
                type="text"
                value={nomePet}
                onChange={(e) => setNomePet(e.target.value)}
                placeholder="Ex: Rex"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="especiePet">Espécie</label>
              <input
                id="especiePet"
                type="text"
                value={especiePet}
                onChange={(e) => setEspeciePet(e.target.value)}
                placeholder="Ex: Cachorro"
                required
              />
            </div>

            <button type="submit" className="btn-add-pet">
              Cadastrar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

