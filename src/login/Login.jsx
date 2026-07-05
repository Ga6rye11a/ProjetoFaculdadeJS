import { useState } from 'react'
import './Login.css'

function PetsIllustration() {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ══ CACHORRO (esquerda) ══ */}
      <g transform="translate(10,10)">
        <path d="M158 240 Q185 210 178 178 Q174 162 162 168" stroke="#F5C842" strokeWidth="16" strokeLinecap="round"/>
        <path d="M158 240 Q185 210 178 178 Q174 162 162 168" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="50" y="168" width="118" height="100" rx="36" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="152" cy="275" rx="18" ry="12" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="144" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="155" cy="287" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="166" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="66" cy="275" rx="18" ry="12" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="58" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="69" cy="287" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="80" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="120" y="240" width="28" height="44" rx="14" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="112" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="123" cy="287" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="134" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="70" y="240" width="28" height="44" rx="14" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="62" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="73" cy="287" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="84" cy="284" rx="7" ry="5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="100" cy="128" rx="62" ry="58" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <path d="M48 100 Q20 90 22 134 Q24 162 52 160 Q68 158 68 138" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M50 108 Q30 102 32 136 Q34 154 54 152" fill="#F06292" opacity=".5"/>
        <path d="M152 100 Q180 90 178 134 Q176 162 148 160 Q132 158 132 138" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M150 108 Q170 102 168 136 Q166 154 146 152" fill="#F06292" opacity=".5"/>
        <ellipse cx="78" cy="118" rx="13" ry="14" fill="#1A1A2E"/>
        <ellipse cx="83" cy="113" rx="4" ry="5" fill="white"/>
        <ellipse cx="122" cy="118" rx="13" ry="14" fill="#1A1A2E"/>
        <ellipse cx="127" cy="113" rx="4" ry="5" fill="white"/>
        <ellipse cx="100" cy="140" rx="14" ry="11" fill="#1A1A2E"/>
        <ellipse cx="95" cy="136" rx="4" ry="3" fill="white" opacity=".6"/>
        <path d="M88 150 Q100 162 112 150" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <ellipse cx="100" cy="162" rx="10" ry="8" fill="#F06292" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="62" cy="140" rx="14" ry="8" fill="#F06292" opacity=".3"/>
        <ellipse cx="138" cy="140" rx="14" ry="8" fill="#F06292" opacity=".3"/>
        <rect x="72" y="174" width="56" height="14" rx="7" fill="#7C4DFF" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="100" cy="191" rx="8" ry="8" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
      </g>

      {/* ══ GATO (direita) ══ */}
      <g transform="translate(210,20)">
        <path d="M140 270 Q175 240 170 195 Q168 168 148 178" stroke="#F5C842" strokeWidth="16" strokeLinecap="round"/>
        <path d="M140 270 Q175 240 170 195 Q168 168 148 178" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="90" cy="232" rx="80" ry="72" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <path d="M48 200 Q56 210 50 222" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
        <path d="M36 218 Q46 226 40 240" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
        <path d="M130 200 Q122 210 128 222" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
        <path d="M142 218 Q132 226 138 240" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
        <ellipse cx="60" cy="298" rx="26" ry="16" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="120" cy="298" rx="26" ry="16" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <ellipse cx="48" cy="304" rx="6" ry="4.5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="60" cy="307" rx="6" ry="4.5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="72" cy="304" rx="6" ry="4.5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="108" cy="304" rx="6" ry="4.5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="120" cy="307" rx="6" ry="4.5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="132" cy="304" rx="6" ry="4.5" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="90" cy="118" rx="70" ry="64" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5"/>
        <path d="M28 118 Q16 128 20 144 Q24 158 40 156 Q52 154 52 140" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M152 118 Q164 128 160 144 Q156 158 140 156 Q128 154 128 140" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M30 124 Q24 132 26 140" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" opacity=".6"/>
        <path d="M150 124 Q156 132 154 140" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" opacity=".6"/>
        <polygon points="44,76 30,28 72,66" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5" strokeLinejoin="round"/>
        <polygon points="48,72 38,38 66,64" fill="#F06292" opacity=".55"/>
        <polygon points="136,76 150,28 108,66" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2.5" strokeLinejoin="round"/>
        <polygon points="132,72 142,38 114,64" fill="#F06292" opacity=".55"/>
        <path d="M68 58 Q76 46 90 52 Q104 46 112 58" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <ellipse cx="68" cy="108" rx="15" ry="16" fill="#1A1A2E"/>
        <ellipse cx="73" cy="103" rx="5" ry="6" fill="white"/>
        <ellipse cx="66" cy="115" rx="3" ry="2" fill="white" opacity=".4"/>
        <ellipse cx="112" cy="108" rx="15" ry="16" fill="#1A1A2E"/>
        <ellipse cx="117" cy="103" rx="5" ry="6" fill="white"/>
        <ellipse cx="110" cy="115" rx="3" ry="2" fill="white" opacity=".4"/>
        <path d="M84 130 Q90 126 96 130 L90 138 Z" fill="#F06292" stroke="#1A1A2E" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M90 138 Q82 146 78 142" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M90 138 Q98 146 102 142" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <ellipse cx="54" cy="126" rx="14" ry="8" fill="#F06292" opacity=".28"/>
        <ellipse cx="126" cy="126" rx="14" ry="8" fill="#F06292" opacity=".28"/>
        <line x1="10" y1="122" x2="72" y2="128" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="8" y1="131" x2="72" y2="133" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="12" y1="140" x2="72" y2="138" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="170" y1="122" x2="108" y2="128" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="172" y1="131" x2="108" y2="133" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="168" y1="140" x2="108" y2="138" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="62" y="170" width="56" height="12" rx="6" fill="#7C4DFF" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="90" cy="185" rx="7" ry="7" fill="#F5C842" stroke="#1A1A2E" strokeWidth="2"/>
        <ellipse cx="90" cy="188" rx="3" ry="2.5" fill="#1A1A2E"/>
      </g>

      <text x="198" y="60" fill="#1A1A2E" fontSize="18" fontFamily="sans-serif" fontWeight="900" opacity=".6">+</text>
      <text x="4" y="290" fill="#1A1A2E" fontSize="18" fontFamily="sans-serif" fontWeight="900" opacity=".6">+</text>
      <text x="390" y="290" fill="#1A1A2E" fontSize="18" fontFamily="sans-serif" fontWeight="900" opacity=".6">+</text>
    </svg>
  )
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ email, password, remember })
  }

  return (
    <>
      <div className="checker-wrap" />

      <div className="spark s1"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l1.5 6.5L20 12l-6.5 1.5L12 22l-1.5-6.5L4 12l6.5-1.5Z" fill="#7C4DFF"/></svg></div>
      <div className="spark s2"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l1.5 6.5L20 12l-6.5 1.5L12 22l-1.5-6.5L4 12l6.5-1.5Z" fill="#F5C842"/></svg></div>
      <div className="spark s3"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2l1.5 6.5L20 12l-6.5 1.5L12 22l-1.5-6.5L4 12l6.5-1.5Z" fill="#F06292"/></svg></div>
      <div className="spark s4"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2l1.5 6.5L20 12l-6.5 1.5L12 22l-1.5-6.5L4 12l6.5-1.5Z" fill="#7C4DFF"/></svg></div>

      <div className="lp-card">

        {/* PAINEL ESQUERDO */}
        <div className="panel-left">
          <svg className="doodle-lines" viewBox="0 0 200 300" fill="none">
            <path d="M10 40 Q60 10 110 40 Q160 70 200 40" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M0 90 Q50 60 100 90 Q150 120 200 90" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M10 140 Q60 110 120 140 Q170 170 200 140" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round"/>
          </svg>

          <div className="blob" />

          <div className="heart-deco">
            <svg width="52" height="48" viewBox="0 0 52 48" fill="none">
              <path d="M26 44C26 44 4 30 4 16C4 9 9.5 4 16 4C20 4 24 6 26 9C28 6 32 4 36 4C42.5 4 48 9 48 16C48 30 26 44 26 44Z" fill="#7C4DFF" stroke="#1A1A2E" strokeWidth="3"/>
            </svg>
          </div>

          <div className="pets-wrap">
            <PetsIllustration />
          </div>

          <div className="tagline-pill">🐾 Adote um Pet</div>

          <div className="stamp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5">
              <path d="M9 3a3 3 0 0 0-3 3c0 .55.15 1.07.41 1.52A3 3 0 0 0 3 10.5c0 1.38.93 2.54 2.2 2.88C5.08 13.58 5 13.79 5 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3c0-.21-.08-.42-.2-.62A3 3 0 0 0 21 10.5a3 3 0 0 0-3.41-2.98A3 3 0 0 0 15 3a3 3 0 0 0-2.63 1.56A3 3 0 0 0 9 3z"/>
            </svg>
            ADOTE<br/>UM PET
          </div>
        </div>

        {/* PAINEL DIREITO */}
        <div className="panel-right">
          <p className="brand-label">✦ Adote um Pet</p>
          <h1>Entre na<br/>sua <em>conta!</em></h1>
          <p className="subtitle">Acesse e acompanhe suas adoções com amor. 🐾</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="field-label" htmlFor="lp-email">E-mail</label>
              <input
                type="email" id="lp-email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="field-label" htmlFor="lp-password">Senha</label>
              <input
                type="password" id="lp-password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="row-flex">
              <label className="remember">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
                Lembrar de mim
              </label>
              <a href="#" className="forgot">Esqueci minha senha</a>
            </div>

            <button type="submit" className="btn-login">Entrar agora!</button>
          </form>

          <div className="divider">ou continue com</div>

          <button className="btn-google" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Entrar com Google
          </button>

          <p className="signup-link">
            Não tem uma conta? <a href="#">Cadastre-se aqui!</a>
          </p>
        </div>

      </div>
    </>
  )
}
async function handleSubmit(e) {
    e.preventDefault()
    try {
      // Faz o pedido para o nosso back-end Node.js
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login efetuado com sucesso!");
        console.log("Resposta da API:", data);
      } else {
        alert("Erro ao fazer login: " + data.erro);
      }

    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  }