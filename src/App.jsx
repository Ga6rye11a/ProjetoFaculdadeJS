import './index.css'

export default function App() {
	return (
		<>
			<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1A1A2E', color: '#fff', padding: 24 }}>
				<div style={{ maxWidth: 960, width: '96vw', background: '#F5F0E1', color: '#1A1A2E', borderRadius: 12, padding: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
					<h1 style={{ margin: 0 }}>App funcionando</h1>
					<p style={{ marginTop: 8 }}>A aplicação iniciou corretamente — componente App padrão criado.</p>
				</div>
			</div>
		</>
	)
}