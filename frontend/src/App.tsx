import { useEffect, useState } from "react";

type IconName =
  | "person"
  | "math"
  | "plane"
  | "timeline"
  | "spark"
  | "quiz"
  | "arrow"
  | "close"
  | "orbit"
  | "check";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    person: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 20c.6-4.2 2.7-6.4 6.5-6.4s5.9 2.2 6.5 6.4" />
      </>
    ),
    math: (
      <>
        <path d="M4 7h7M7.5 3.5v7M14 5l6 6M20 5l-6 6M5 17h6M15 17h5" />
        <circle cx="17.5" cy="14.5" r=".7" fill="currentColor" />
        <circle cx="17.5" cy="19.5" r=".7" fill="currentColor" />
      </>
    ),
    plane: (
      <path d="m3 13 7.8 1-3.2 6 2 .5 4.8-5.8 5.3.7c1.6.2 2.8-.5 2.8-1.4s-1.2-1.6-2.8-1.4l-5.3.7-4.8-5.8-2 .5 3.2 6L3 11v2Z" />
    ),
    timeline: (
      <>
        <path d="M5 5h14M5 12h14M5 19h14" />
        <circle cx="8" cy="5" r="2" fill="currentColor" />
        <circle cx="15" cy="12" r="2" fill="currentColor" />
        <circle cx="11" cy="19" r="2" fill="currentColor" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />
        <path d="m19 17 .6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z" />
      </>
    ),
    quiz: (
      <>
        <path d="M9.2 8.3a3 3 0 1 1 4.7 2.5c-1.2.8-1.9 1.3-1.9 2.7" />
        <path d="M12 17.5v.2" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    orbit: (
      <>
        <circle cx="12" cy="12" r="2.3" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4.4" />
        <ellipse cx="12" cy="12" rx="4.4" ry="10" transform="rotate(38 12 12)" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const stationData = [
  {
    id: 1,
    icon: "person" as IconName,
    code: "BIO / 01",
    title: "Quem foi Mary Jackson?",
    blurb: "Conheça a mulher por trás dos cálculos e sua jornada até a NASA.",
    tag: "TRAJETÓRIA",
  },
  {
    id: 2,
    icon: "math" as IconName,
    code: "MAT / 02",
    title: "Matemática & Ciência",
    blurb: "Descubra como números, dados e física transformam o voo.",
    tag: "CONHECIMENTO",
  },
  {
    id: 3,
    icon: "plane" as IconName,
    code: "AERO / 03",
    title: "Engenharia Aeroespacial",
    blurb: "Entre no túnel de vento e investigue as forças que movem aeronaves.",
    tag: "EXPERIMENTO",
  },
  {
    id: 4,
    icon: "timeline" as IconName,
    code: "LEG / 04",
    title: "Conquistas & Legado",
    blurb: "Percorra os marcos de uma história que abriu portas para gerações.",
    tag: "LINHA DO TEMPO",
  },
  {
    id: 5,
    icon: "spark" as IconName,
    code: "FATOS / 05",
    title: "Curiosidades",
    blurb: "Revele fatos sobre coragem, liderança e impacto social.",
    tag: "ARQUIVO",
  },
  {
    id: 6,
    icon: "quiz" as IconName,
    code: "QUIZ / 06",
    title: "Desafio do Conhecimento",
    blurb: "Teste sua missão: cinco perguntas para concluir a visita.",
    tag: "MISSÃO FINAL",
  },
];

const questions = [
  {
    q: "Em que ano Mary Jackson ingressou na NACA?",
    a: ["1943", "1951", "1958", "1969"],
    correct: 1,
    why: "Em 1951, ela entrou para a NACA como matemática de pesquisa.",
  },
  {
    q: "Qual marco Mary alcançou em 1958?",
    a: [
      "Tornou-se astronauta",
      "Dirigiu a NASA",
      "Tornou-se a primeira engenheira negra da NASA",
      "Criou o primeiro foguete",
    ],
    correct: 2,
    why: "Após cursos avançados e muita persistência, tornou-se a primeira engenheira negra da NASA.",
  },
  {
    q: "Para que serve um túnel de vento?",
    a: [
      "Simular o fluxo de ar",
      "Treinar astronautas sem gravidade",
      "Calcular órbitas lunares",
      "Produzir combustível",
    ],
    correct: 0,
    why: "Ele permite observar e medir como o ar se comporta ao redor de modelos de aeronaves.",
  },
  {
    q: "Que força se opõe ao movimento de uma aeronave no ar?",
    a: ["Sustentação", "Empuxo", "Arrasto", "Gravidade zero"],
    correct: 2,
    why: "O arrasto é a resistência do ar que atua contra o movimento.",
  },
  {
    q: "Qual honraria Mary recebeu postumamente em 2019?",
    a: [
      "Prêmio Nobel",
      "Medalha de Ouro do Congresso",
      "Medalha Fields",
      "Ordem Nacional do Mérito",
    ],
    correct: 1,
    why: "Mary e suas colegas receberam a Medalha de Ouro do Congresso dos Estados Unidos.",
  },
];

function Biography() {
  return (
    <div className="content-grid bio-grid">
      <div>
        <p className="eyebrow">PERFIL DA PIONEIRA</p>
        <h3>Mary Winston Jackson</h3>
        <p className="lead">
          Matemática, engenheira aeroespacial e agente de transformação dentro da NASA.
        </p>
        <div className="fact-list">
          <div>
            <span>NASCIMENTO</span>
            <strong>9 de abril de 1921</strong>
            <small>Hampton, Virgínia, EUA</small>
          </div>
          <div>
            <span>FORMAÇÃO</span>
            <strong>Matemática e Ciências Físicas</strong>
            <small>Hampton Institute, 1942</small>
          </div>
          <div>
            <span>ATUAÇÃO</span>
            <strong>NACA / NASA Langley</strong>
            <small>Matemática de pesquisa e engenheira</small>
          </div>
        </div>
      </div>
      <div className="story-card">
        <span className="chapter">CAPÍTULO 01</span>
        <p>
          Após trabalhar como professora, secretária e contadora, Mary chegou em 1951 à unidade de
          Computação da Área Oeste da NACA — grupo formado por matemáticas negras que realizavam
          cálculos essenciais à pesquisa aeronáutica.
        </p>
        <p>
          Convidada pelo engenheiro Kazimierz Czarnecki, passou a atuar no Túnel de Pressão
          Supersônico. Para se qualificar como engenheira, precisou obter autorização judicial para
          frequentar cursos noturnos em uma escola segregada.
        </p>
        <blockquote>
          Em 1958, rompeu uma barreira histórica: tornou-se a primeira engenheira negra da NASA.
        </blockquote>
      </div>
    </div>
  );
}

function MathScience() {
  return (
    <div>
      <p className="eyebrow">DOS NÚMEROS AO VOO</p>
      <h3>A matemática torna o invisível mensurável.</h3>
      <div className="science-grid">
        <article>
          <span className="formula">
            L = ½ρv²SC<sub>L</sub>
          </span>
          <h4>Sustentação</h4>
          <p>
            A força que mantém uma aeronave no ar depende da densidade do ar, velocidade, área da
            asa e seu formato.
          </p>
        </article>
        <article>
          <span className="formula">
            D = ½ρv²SC<sub>D</sub>
          </span>
          <h4>Arrasto</h4>
          <p>
            A resistência cresce com o quadrado da velocidade. Reduzi-la torna o voo mais eficiente
            e seguro.
          </p>
        </article>
        <article>
          <span className="formula">Ma = v / c</span>
          <h4>Número de Mach</h4>
          <p>
            Compara a velocidade da aeronave à velocidade do som — crucial em testes supersônicos.
          </p>
        </article>
      </div>
      <div className="data-strip">
        <Icon name="orbit" size={32} />
        <div>
          <strong>O método científico em ação</strong>
          <span>MEDIR → CALCULAR → COMPARAR → AJUSTAR</span>
        </div>
        <p>
          Mary analisava dados experimentais para entender pressão e fluxo de ar, transformando
          observações em soluções de engenharia.
        </p>
      </div>
    </div>
  );
}

function Engineering() {
  return (
    <div className="engineering">
      <div>
        <p className="eyebrow">LABORATÓRIO AERODINÂMICO</p>
        <h3>O vento revela como uma aeronave voa.</h3>
        <p className="lead">
          No túnel de vento, ar em alta velocidade passa por um modelo. Sensores registram pressão,
          forças e turbulência sem colocar pilotos em risco.
        </p>
      </div>
      <div className="wind-lab" aria-label="Ilustração de um teste em túnel de vento">
        <div className="wind-lines">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <Icon name="plane" size={92} />
        <div className="sensor s1">
          PRESSÃO <b>101.3 kPa</b>
        </div>
        <div className="sensor s2">
          FLUXO <b>ESTÁVEL</b>
        </div>
      </div>
      <div className="force-grid">
        <div>
          <b>↑</b>
          <span>SUSTENTAÇÃO</span>
          <p>Empurra a aeronave para cima.</p>
        </div>
        <div>
          <b>→</b>
          <span>EMPUXO</span>
          <p>Move a aeronave para frente.</p>
        </div>
        <div>
          <b>←</b>
          <span>ARRASTO</span>
          <p>Resiste ao movimento.</p>
        </div>
        <div>
          <b>↓</b>
          <span>PESO</span>
          <p>Atrai a aeronave para o solo.</p>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const events = [
    [
      "1921",
      "Nasce em Hampton",
      "Mary Winston nasce na Virgínia, em um período de forte segregação racial.",
    ],
    ["1951", "Ingressa na NACA", "Começa como matemática de pesquisa na Computação da Área Oeste."],
    ["1958", "Torna-se engenheira", "É promovida e se torna a primeira engenheira negra da NASA."],
    [
      "1979",
      "Aposenta-se da NASA",
      "Após 34 anos, encerra uma carreira dedicada à pesquisa e à igualdade.",
    ],
    [
      "2005",
      "Seu legado permanece",
      "Mary falece aos 83 anos, deixando uma trajetória transformadora.",
    ],
    ["2019", "Honra do Congresso", "Recebe postumamente a Medalha de Ouro do Congresso dos EUA."],
  ];
  return (
    <div>
      <p className="eyebrow">COORDENADAS NO TEMPO</p>
      <h3>Uma trajetória além das fronteiras</h3>
      <div className="timeline">
        {events.map(([year, title, text], i) => (
          <article key={year}>
            <span className="year">{year}</span>
            <i />
            <div>
              <small>MARCO 0{i + 1}</small>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="legacy-note">
        <Icon name="spark" />
        <p>
          <strong>O legado continua.</strong> Em 2021, a sede da NASA em Washington foi nomeada
          Edifício Mary W. Jackson — uma homenagem permanente a quem abriu caminhos na ciência.
        </p>
      </div>
    </div>
  );
}

function Curiosities() {
  const [open, setOpen] = useState<number | null>(0);
  const facts = [
    [
      "Uma batalha pela educação",
      "Mary precisou solicitar à Justiça permissão para assistir às aulas de engenharia em uma escola exclusiva para pessoas brancas. Sua persistência mudou sua história — e a da NASA.",
    ],
    [
      "11 relatórios técnicos",
      "Ao longo de sua carreira como engenheira, Mary foi autora ou coautora de 11 relatórios de pesquisa sobre aerodinâmica e fluxo de ar.",
    ],
    [
      "Liderança que abriu portas",
      "No fim da carreira, aceitou uma posição administrativa para ajudar mulheres e minorias a avançarem profissionalmente dentro da NASA.",
    ],
    [
      "Escoteira por décadas",
      "Mary foi líder das escoteiras por mais de 30 anos e ajudava jovens a construir túneis de vento em miniatura para estudar aerodinâmica.",
    ],
    [
      "Além das telas",
      "Sua história ganhou projeção mundial com o livro e o filme “Estrelas Além do Tempo”, ao lado de Katherine Johnson e Dorothy Vaughan.",
    ],
    [
      "Um prédio com seu nome",
      "A sede da NASA em Washington, D.C., recebeu seu nome em 2021, quando Mary completaria 100 anos.",
    ],
  ];
  return (
    <div>
      <p className="eyebrow">ARQUIVO DE DESCOBERTAS</p>
      <h3>Toque para revelar</h3>
      <div className="curiosity-grid">
        {facts.map(([title, text], i) => (
          <button
            key={title}
            className={`curiosity ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>0{i + 1}</span>
            <Icon name={i % 2 ? "orbit" : "spark"} />
            <h4>{title}</h4>
            <p>{text}</p>
            <small>{open === i ? "RECOLHER −" : "DESCOBRIR +"}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function Quiz({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const finished = step === questions.length;
  function answer(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[step].correct) setScore((s) => s + 1);
  }
  function next() {
    if (step === questions.length - 1) {
      setStep(questions.length);
      onComplete();
    } else {
      setStep((s) => s + 1);
      setSelected(null);
    }
  }
  function restart() {
    setStep(0);
    setSelected(null);
    setScore(0);
  }
  if (finished)
    return (
      <div className="quiz-finish">
        <div className="mission-ring">
          <Icon name="check" size={46} />
        </div>
        <p className="eyebrow">MISSÃO CONCLUÍDA</p>
        <h3>{score}/5 respostas corretas</h3>
        <p>
          {score === 5
            ? "Excelente! Seu conhecimento alcançou novas órbitas."
            : score >= 3
              ? "Muito bem! Você está pronto para explorar novos horizontes."
              : "Toda descoberta começa com curiosidade. Reveja as estações e tente novamente!"}
        </p>
        <button className="primary-btn" onClick={restart}>
          REFAZER DESAFIO <Icon name="arrow" />
        </button>
      </div>
    );
  const q = questions[step];
  return (
    <div className="quiz-wrap">
      <div className="quiz-top">
        <span>PERGUNTA {String(step + 1).padStart(2, "0")} / 05</span>
        <div>
          {questions.map((_, i) => (
            <i key={i} className={i <= step ? "active" : ""} />
          ))}
        </div>
        <b>{score * 100} PTS</b>
      </div>
      <h3>{q.q}</h3>
      <div className="answers">
        {q.a.map((a, i) => (
          <button
            key={a}
            onClick={() => answer(i)}
            className={
              selected === null
                ? ""
                : i === q.correct
                  ? "correct"
                  : selected === i
                    ? "wrong"
                    : "dim"
            }
          >
            <span>{String.fromCharCode(65 + i)}</span>
            {a}
            {selected !== null && i === q.correct && <Icon name="check" />}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className={`feedback ${selected === q.correct ? "good" : "bad"}`}>
          <strong>
            {selected === q.correct ? "Resposta correta!" : "Quase! Continue explorando."}
          </strong>
          <p>{q.why}</p>
          <button onClick={next}>
            {step === 4 ? "VER RESULTADO" : "PRÓXIMA PERGUNTA"} <Icon name="arrow" />
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [visited, setVisited] = useState<number[]>([]);
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);
  function openStation(id: number) {
    setActive(id);
    setVisited((v) => (v.includes(id) ? v : [...v, id]));
  }
  const contents = [
    <Biography />,
    <MathScience />,
    <Engineering />,
    <Timeline />,
    <Curiosities />,
    <Quiz onComplete={() => setVisited((v) => (v.includes(6) ? v : [...v, 6]))} />,
  ];

  if (!entered)
    return (
      <main className="hero">
        <div className="stars" />
        <div className="planet planet-one" />
        <div className="planet planet-two" />
        <nav className="hero-nav">
          <div className="brand">
            <Icon name="orbit" size={28} />
            <span>
              ORBITA<small>MUSEU VIRTUAL</small>
            </span>
          </div>
          <span className="mission-code">MISSÃO MJ–01 · 2025</span>
        </nav>
        <div className="hero-content">
          <section>
            <p className="eyebrow">UMA EXPERIÊNCIA IMERSIVA</p>
            <h1>
              MARY JACKSON:
              <br />
              <em>UMA MULHER</em>
              <br />
              ALÉM DAS
              <br />
              FRONTEIRAS
            </h1>
            <p className="hero-sub">
              A matemática e engenheira que ajudou a abrir os caminhos para a exploração espacial.
            </p>
            <button className="primary-btn" onClick={() => setEntered(true)}>
              ENTRAR NA SALA VIRTUAL <Icon name="arrow" />
            </button>
          </section>
          <section className="portrait-stage">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="portrait-frame">
              <div className="portrait-art" aria-hidden="true" />
              <div className="scan-line" />
              <span className="frame-label">
                MARY W. JACKSON
                <br />
                <small>NASA LANGLEY · 1977</small>
              </span>
            </div>
            <div className="floating-card fc-one">
              <i />
              PRIMEIRA ENGENHEIRA
              <br />
              <b>NEGRA DA NASA</b>
            </div>
            <div className="floating-card fc-two">
              <span>34</span> ANOS
              <br />
              NA NASA
            </div>
          </section>
        </div>
        <footer className="hero-footer">
          <span>“Cada conquista começa com alguém que acredita ser possível ir além.”</span>
          <button onClick={() => setEntered(true)}>
            INICIAR VISITA <span>↓</span>
          </button>
        </footer>
      </main>
    );

  return (
    <main className="museum">
      <div className="stars" />
      <header className="museum-nav">
        <button
          className="brand brand-btn"
          onClick={() => setEntered(false)}
          aria-label="Voltar à entrada"
        >
          <Icon name="orbit" size={27} />
          <span>
            ORBITA<small>SALA MARY JACKSON</small>
          </span>
        </button>
        <div className="progress">
          <span>PROGRESSO DA MISSÃO</span>
          <div>
            <i style={{ width: `${(visited.length / 6) * 100}%` }} />
          </div>
          <b>{visited.length}/6</b>
        </div>
        <button className="nav-quiz" onClick={() => openStation(6)}>
          DESAFIO FINAL <Icon name="quiz" />
        </button>
      </header>
      <section className="room-head">
        <div>
          <p className="eyebrow">SALA DE EXPLORAÇÃO 01</p>
          <h2>
            Escolha uma estação.
            <br />
            <em>Expanda seu universo.</em>
          </h2>
        </div>
        <p>
          Navegue pelos módulos interativos e descubra como coragem, matemática e ciência mudaram a
          história.
        </p>
      </section>
      <section className="station-grid">
        {stationData.map((s) => (
          <button
            key={s.id}
            className={`station-card card-${s.id} ${visited.includes(s.id) ? "visited" : ""}`}
            onClick={() => openStation(s.id)}
          >
            <div className="station-top">
              <span>{s.code}</span>
              {visited.includes(s.id) && (
                <small>
                  <Icon name="check" size={14} /> VISITADA
                </small>
              )}
            </div>
            <div className="station-icon">
              <Icon name={s.icon} size={34} />
            </div>
            <small className="station-tag">{s.tag}</small>
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <span className="explore">
              EXPLORAR ESTAÇÃO <Icon name="arrow" size={18} />
            </span>
          </button>
        ))}
      </section>
      <section className="tribute">
        <div className="tribute-image">
          <div className="tribute-art" aria-hidden="true" />
          <span>1921 — 2005</span>
        </div>
        <div>
          <p className="eyebrow">HOMENAGEM</p>
          <blockquote>
            “Mary Jackson não apenas ajudou a humanidade a alcançar novos horizontes no espaço, mas
            também abriu caminhos para que outras mulheres pudessem alcançar seus próprios sonhos.”
          </blockquote>
          <div className="sources">
            <strong>FONTES E REFERÊNCIAS</strong>
            <a href="https://www.nasa.gov/people/mary-w-jackson/" target="_blank" rel="noreferrer">
              NASA · Mary W. Jackson ↗
            </a>
            <a href="https://history.nasa.gov/" target="_blank" rel="noreferrer">
              NASA History Office ↗
            </a>
            <a
              href="https://www.congress.gov/bill/116th-congress/house-bill/1396"
              target="_blank"
              rel="noreferrer"
            >
              U.S. Congress · Hidden Figures Gold Medal Act ↗
            </a>
          </div>
        </div>
      </section>
      <footer className="museum-footer">
        <div className="brand">
          <Icon name="orbit" />
          <span>
            ORBITA<small>MUSEU VIRTUAL</small>
          </span>
        </div>
        <p>Experiência educacional dedicada a Mary W. Jackson.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          VOLTAR AO TOPO ↑
        </button>
      </footer>

      {active && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.currentTarget === e.target) setActive(null);
          }}
        >
          <section
            className={`station-modal modal-${active}`}
            role="dialog"
            aria-modal="true"
            aria-label={stationData[active - 1].title}
          >
            <header>
              <div>
                <span>{stationData[active - 1].code}</span>
                <small>{stationData[active - 1].tag}</small>
              </div>
              <button onClick={() => setActive(null)} aria-label="Fechar estação">
                <Icon name="close" />
              </button>
            </header>
            <div className="modal-content">{contents[active - 1]}</div>
            <footer>
              <button disabled={active === 1} onClick={() => active > 1 && openStation(active - 1)}>
                ← ANTERIOR
              </button>
              <span>ESTAÇÃO {active} DE 6</span>
              <button disabled={active === 6} onClick={() => active < 6 && openStation(active + 1)}>
                PRÓXIMA →
              </button>
            </footer>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
