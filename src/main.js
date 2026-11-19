import './style.css'

const icon = `<svg viewBox="0 0 48 48" aria-hidden="true" fill="none"><path d="M9 36V12h8l7 9 7-9h8v24" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m17 36 7-9 7 9" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="24" cy="7" r="3" fill="currentColor"/></svg>`

const app = document.querySelector('#app')
app.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#inicio" aria-label="Recomeço Profissional, início">
        <span class="brand-symbol">${icon}</span>
        <span class="brand-copy"><strong>recomeço<span>.</span></strong><small>PROFISSIONAL · INCLUSÃO E OPORTUNIDADE</small></span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="#sobre">Nossa missão</a><a href="#acoes">O que fazemos</a><a href="#sistema" class="nav-highlight">Estado do sistema <span class="nav-dot"></span></a>
      </nav>
    </div>
  </header>
  <main id="inicio">
    <section class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <span class="eyebrow"><span class="eyebrow-dot"></span> EDUCAÇÃO · AUTONOMIA · OPORTUNIDADE</span>
        <h1 id="hero-title">Toda trajetória merece um <em>novo começo.</em></h1>
        <p>Qualificação gratuita, orientação de carreira e apoio a quem busca uma nova oportunidade no mercado de trabalho.</p>
        <div class="hero-actions"><a class="button button-primary" href="#acoes">Conheça nossas ações <span aria-hidden="true">↗</span></a><a class="text-link" href="#sobre">Sobre o projeto <span aria-hidden="true">→</span></a></div>
        <p class="hero-footnote">Recomeço Profissional · Projeto acadêmico de impacto social</p>
      </div>
      <div class="hero-art" role="img" aria-label="Ilustração de pessoas em uma trajetória de desenvolvimento profissional">
        <div class="hero-circle"></div>
        <svg class="hero-illustration" viewBox="0 0 560 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="60" y="55" width="445" height="385" rx="38" fill="#DDEAF8" />
          <circle cx="410" cy="145" r="95" fill="#BFD6F0"/>
          <path d="M108 397C180 317 283 301 424 335L465 440H88Z" fill="#8AACD3"/>
          <rect x="122" y="199" width="311" height="169" rx="19" fill="#fff" stroke="#96B6D8" stroke-width="4"/>
          <rect x="147" y="222" width="260" height="15" rx="7" fill="#DFEAF7"/>
          <rect x="147" y="252" width="175" height="12" rx="6" fill="#DFEAF7"/>
          <rect x="147" y="281" width="110" height="38" rx="10" fill="#245990"/>
          <path d="M258 336h94" stroke="#ADC5DE" stroke-width="9" stroke-linecap="round"/>
          <circle cx="355" cy="159" r="41" fill="#F0C2A0"/>
          <path d="M312 152q6-66 55-52 28 9 31 43-31-17-52-10-13 12-34 19Z" fill="#233C5B"/>
          <path d="M288 280q-2-69 68-74 80 0 84 74v78H288Z" fill="#2E6DA8"/>
          <path d="m340 217 16 39 18-39" fill="#fff"/><path d="m354 254-15 104h38l-15-104" fill="#183F72"/>
          <circle cx="188" cy="145" r="39" fill="#DFAE8F"/>
          <path d="M150 138q-7-48 30-55 38-5 48 40-34-9-59 21Z" fill="#54433D"/>
          <path d="M122 282q3-86 66-91 71 0 74 91v77H122Z" fill="#F1AE64"/>
          <path d="M168 202h40l-20 35Z" fill="#fff"/>
          <path d="M174 363h115" stroke="#1B4B7F" stroke-width="13" stroke-linecap="round"/>
          <rect x="372" y="66" width="122" height="49" rx="15" fill="#fff"/><circle cx="395" cy="90" r="9" fill="#65A890"/><path d="m390 90 4 4 8-10" stroke="#fff" stroke-width="3" fill="none"/><path d="M414 84h58m-58 12h43" stroke="#BDD3E5" stroke-width="5" stroke-linecap="round"/>
          <circle cx="90" cy="105" r="11" fill="#EAA765"/><circle cx="479" cy="319" r="12" fill="#EAA765"/>
        </svg>
        <div class="floating-stamp"><span class="stamp-mark">↗</span><strong>Oportunidades<br/>que transformam</strong></div>
      </div>
    </section>

    <section class="mission-section" id="sobre"><div class="container">
      <div class="section-heading"><span class="eyebrow">QUEM SOMOS</span><h2>Oportunidade muda histórias.</h2><p>A Recomeço Profissional é uma ONG fictícia sediada em São Paulo, criada em 2021, com a missão de apoiar a reinserção de pessoas desempregadas no mercado de trabalho.</p></div>
      <div class="feature-grid" id="acoes">
        <article class="feature"><span class="feature-icon">▤</span><h3>Capacitação gratuita</h3><p>Cursos e oficinas voltados ao desenvolvimento de habilidades e à preparação profissional.</p></article>
        <article class="feature"><span class="feature-icon">◎</span><h3>Orientação de carreira</h3><p>Apoio na elaboração de currículos, preparação para entrevistas e planejamento de carreira.</p></article>
        <article class="feature"><span class="feature-icon">↗</span><h3>Encaminhamentos</h3><p>Acompanhamento dos participantes e registro de oportunidades de inserção no mercado.</p></article>
      </div>
    </div></section>

    <section class="care-section container"><div class="care-panel"><span class="eyebrow">TECNOLOGIA PARA IMPACTO SOCIAL</span><h2>Mais organização para gerar mais oportunidades.</h2><p>O sistema de gestão foi planejado para centralizar participantes, cursos, presenças e encaminhamentos, reduzindo controles manuais e facilitando o acompanhamento das atividades.</p><a href="#sistema" class="button button-light">Verificar o sistema <span aria-hidden="true">↓</span></a><div class="care-art" aria-hidden="true">↗</div></div></section>

    <section class="status-section container" id="sistema" aria-labelledby="status-title">
      <div class="status-copy"><span class="eyebrow">INTEGRAÇÃO WEB + API</span><h2 id="status-title">Nossa conexão está funcionando?</h2><p>Esta página consulta uma API Express local e exibe seu estado em tempo real. Esta é a estrutura inicial do sistema Recomeço Profissional.</p></div>
      <div class="status-card"><div class="status-card-header"><span class="status-label"><span id="status-dot" class="status-dot loading"></span> MONITORAMENTO DA API</span><span class="live-pill">AO VIVO</span></div><div id="api-status" class="status-big" role="status" aria-live="polite">Verificando conexão...</div><div class="status-divider"></div><div class="status-meta"><span>Rota consultada</span><code>GET /api/health</code></div><div class="status-meta"><span>Data e hora</span><strong id="api-date">Aguardando resposta</strong></div><button class="retry-button" type="button" id="retry-button">↻ Verificar novamente</button></div>
    </section>
  </main>
  <footer><div class="container footer-inner"><div class="footer-brand">${icon}<span>recomeço<span class="brand-dot">.</span> profissional</span></div><p>Projeto acadêmico fictício · Sistema de Gestão de Participantes e Cursos</p></div></footer>
`

async function checkApi() {
  const status = document.querySelector('#api-status')
  const dot = document.querySelector('#status-dot')
  const date = document.querySelector('#api-date')
  const button = document.querySelector('#retry-button')
  status.textContent = 'Verificando conexão...'
  status.className = 'status-big'
  dot.className = 'status-dot loading'
  date.textContent = 'Aguardando resposta'
  button.disabled = true
  try {
    const response = await fetch('/api/health', { cache: 'no-store', signal: AbortSignal.timeout(5000) })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    if (data.status !== 'ok' || !data.timestamp || Number.isNaN(Date.parse(data.timestamp))) {
      throw new Error('Resposta inesperada da API')
    }
    status.textContent = `Status da API: ${data.status}`
    status.classList.add('success')
    dot.className = 'status-dot online'
    date.textContent = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium', timeZone: 'America/Sao_Paulo' }).format(new Date(data.timestamp)) + ' (Brasília)'
  } catch (error) {
    status.textContent = 'Status da API: indisponível'
    status.classList.add('error')
    dot.className = 'status-dot offline'
    date.textContent = 'Não foi possível obter a data da API'
    console.error('Falha ao consultar a API:', error)
  } finally {
    button.disabled = false
  }
}

document.querySelector('#retry-button').addEventListener('click', checkApi)
checkApi()
