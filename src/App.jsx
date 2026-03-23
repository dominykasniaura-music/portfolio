import { useEffect, useMemo, useState } from 'react'
import heroImage from './assets/dominykas-performing.jpg'
import palaimaCover from './assets/palaima-2019.jpg'
import bevietysteCover from './assets/bevietyste-2024.jpg'
import civilizationCover from './assets/civilization-shmivilization-2025.jpg'
import sokisCover from './assets/sokis-isuka-sviesa.png'

const projects = [
  {
    slug: 'dominykas-niaura',
    title: 'dominykas niaura',
    years: '2018–present',
    tags: ['ambient', 'field recordings', 'trip-hop', 'dub', 'experimental'],
    summary:
      'Electronic music artist drifting between field recordings, ambient, trip-hop, dub, and experimental music to create soundscapes that feel like entries from a personal journal.',
    hero: heroImage,
    intro: [
      'dominykas niaura is an electronic music artist whose work drifts between field recordings, ambient, trip-hop, dub, and experimental music to create soundscapes that feel like entries from a personal journal.',
      'The works include Palaima (2019), a compilation of early songs that laid the foundation for blending field recordings with ambient textures; Šokis įsuka šviesą (2021), a soundtrack for Ramūnas Liutkevičius’ debut poetry book; Bevietystė (2024), a concept album exploring memory, loneliness, meaning, and loss; and Civilization Shmivilization (2025), a half-hour guitar-and-effects improvisation.',
    ],
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/dom.neura/' },
      { label: 'Bandcamp', href: 'https://dominykasniaura.bandcamp.com/' },
      { label: 'SoundCloud', href: 'https://soundcloud.com/niaura' },
      { label: 'Spotify', href: 'https://open.spotify.com/artist/61lGgboLfFJYSivn7p41zB?si=VMUU_TFsTFmcHOjg131i4Q' },
      { label: 'Electron Emitter', href: 'https://www.electronemitter.net/artists/dominykas-niaura/' },
    ],
    works: [
      {
        title: 'Civilization Shmivilization',
        year: '2025',
        type: 'single',
        image: civilizationCover,
        text:
          'A half-hour improvisation that mutates, unravels, and rebuilds. A soundscape of collapse and renewal, where each new wave buries the last.',
        links: [
          { label: 'Bandcamp', href: 'https://dominykasniaura.bandcamp.com/album/civilization-shmivilization' },
          { label: 'SoundCloud', href: 'https://soundcloud.com/niaura/civilization-shmivilization' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=9Am6dHZRHUk' },
          { label: 'Spotify', href: 'https://open.spotify.com/album/4qvZ5cWZubPFLGwQWXenmg?si=8at_Ru_LR0e7CvlIexXE_g' },
        ],
      },
      {
        title: 'Bevietystė',
        year: '2024',
        type: 'album',
        image: bevietysteCover,
        text:
          'A bittersweet docu-fictional story through field recordings, ambient, dub, electronic, and other musical experiments. Conceived in 2019, each track is dedicated to a different person, exploring mortality, loneliness, loss, and the search for meaning.',
        links: [
          { label: 'Bandcamp', href: 'https://dominykasniaura.bandcamp.com/album/bevietyst' },
          { label: 'SoundCloud', href: 'https://soundcloud.com/niaura/sets/bevietyste' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=hRzDgdEHSkI' },
          { label: 'Spotify', href: 'https://open.spotify.com/album/3YqrFi8XHFCECg9TrwXRHF?si=Tz2g6WiJSOe4wJKoXEcb0Q' },
        ],
      },
      {
        title: 'Šokis įsuka šviesą',
        year: '2021',
        type: 'poetry soundtrack',
        image: sokisCover,
        text:
          'Poet Ramūnas Liutkevičius performs selected poems from his debut book with a soundtrack by dominykas niaura.',
        links: [
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=mnunMsMraj8' },
          { label: 'Interview', href: 'https://literaturairmenas.lt/muzika/dominykas-niaura-muzika-suteikia-horizontalia-panorama-o-tekstas-vertikale' },
        ],
      },
      {
        title: 'Palaima',
        year: '2019',
        type: 'album',
        image: palaimaCover,
        text:
          'A compilation of early definite tracks written, produced, and released chronologically between 2017 and 2019. Influenced by Vilnius, Kaunas, Tilburg, Amsterdam, Birštonas, Utrecht, and Paris.',
        links: [
          { label: 'Bandcamp', href: 'https://dominykasniaura.bandcamp.com/album/palaima' },
          { label: 'SoundCloud', href: 'https://soundcloud.com/niaura/sets/palaima' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=ZjO3YpAETAg' },
        ],
      },
    ],
  },
  {
    slug: 'suicideoscope',
    title: 'Suicideoscope',
    years: '2012–present',
    tags: ['experimental electronic', 'cloud rap'],
    summary: 'Placeholder page for future content.',
    intro: ['Content coming soon.'],
    links: [],
    works: [],
  },
  {
    slug: 'nneura',
    title: 'Nneura',
    years: '2016–present',
    tags: ['house', 'dub techno', 'UKG', 'dubstep', 'jungle'],
    summary: 'Placeholder page for future content.',
    intro: ['Content coming soon.'],
    links: [],
    works: [],
  },
  {
    slug: 'transactions',
    title: 'Transactions',
    years: '2014, 2019–2024',
    tags: ['post-punk', 'indie rock'],
    summary: 'Placeholder page for future content.',
    intro: ['Content coming soon.'],
    links: [],
    works: [],
  },
  {
    slug: 'estakada99',
    title: 'estakada99',
    years: '2025–present',
    tags: ['independent online radio station'],
    summary: 'Placeholder page for future content.',
    intro: ['Content coming soon.'],
    links: [],
    works: [],
  },
]

const seo = {
  title: 'Dominykas Niaura — artist, composer, producer, sound artist from Vilnius',
  description:
    'Portfolio website for Dominykas Niaura, an artist from Vilnius working across ambient, field recordings, experimental electronics, poetry soundtracks, and radio.',
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}

function LinkPill({ label, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-pill">
      {label}
    </a>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <button onClick={() => onOpen(project.slug)} className="project-card">
      <div className="project-card-top">
        <div>
          <h3>{project.title}</h3>
          <p>{project.years}</p>
        </div>
        <span>Open</span>
      </div>
      <div className="project-card-body">
        <p>{project.summary}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

function WorkCard({ work }) {
  return (
    <article className="work-card">
      <img src={work.image} alt={work.title} className="work-image" />
      <div>
        <div className="work-header">
          <h4>{work.title}</h4>
          <span className="work-meta">
            {work.year} · {work.type}
          </span>
        </div>
        <p className="work-text">{work.text}</p>
        <div className="pill-row">
          {work.links.map((link) => (
            <LinkPill key={link.href} {...link} />
          ))}
        </div>
      </div>
    </article>
  )
}

function HomePage({ onOpenProject }) {
  return (
    <>
      <section className="hero-grid">
        <div>
          <div className="hero-eyebrow">Portfolio · Vilnius, Lithuania</div>
          <h1>Dominykas Niaura</h1>
          <p className="hero-text">
            Composer, producer, sound artist, performer, and radio show maker from Vilnius. This website gathers projects, releases, links, and context in one place.
          </p>
          <div className="pill-row">
            <LinkPill label="Email" href="mailto:dominykas.niaura@gmail.com" />
            <LinkPill label="Instagram" href="https://www.instagram.com/dom.neura/" />
            <LinkPill label="Bandcamp" href="https://dominykasniaura.bandcamp.com/" />
            <LinkPill label="SoundCloud" href="https://soundcloud.com/niaura" />
          </div>
        </div>
        <div className="hero-image-shell">
          <img src={heroImage} alt="Dominykas Niaura performing" className="hero-image" />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Projects"
          title="A one-stop place for distinct bodies of work"
          subtitle="The structure is intentionally simple: choose a project, then move through releases, links, and context without friction."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </section>

      <section className="content-section bordered-section">
        <SectionTitle
          eyebrow="Focus"
          title="Current page in development"
          subtitle="Version one centers on the dominykas niaura page first. The other project pages are already wired in and can be filled next."
        />
        <div className="art-grid">
          {[palaimaCover, bevietysteCover, civilizationCover, sokisCover].map((src) => (
            <img key={src} src={src} alt="Project artwork" className="art-grid-image" />
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectPage({ project, onBack, onOpenProject }) {
  return (
    <div className="project-layout">
      <aside className="sidebar-shell">
        <div className="sidebar-card">
          <button onClick={onBack} className="back-button">
            ← Back to main page
          </button>
          <div className="section-eyebrow">Projects</div>
          <div className="sidebar-nav">
            {projects.map((entry) => (
              <button
                key={entry.slug}
                onClick={() => onOpenProject(entry.slug)}
                className={entry.slug === project.slug ? 'sidebar-link active' : 'sidebar-link'}
              >
                {entry.title}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <section className="project-hero">
          <div className="section-eyebrow accent">{project.years}</div>
          <h1 className="project-title">{project.title}</h1>
          <div className="tag-list project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-intro-grid">
            {project.hero ? (
              <img src={project.hero} alt={project.title} className="project-main-image" />
            ) : (
              <div className="project-main-image placeholder" />
            )}
            <div className="project-copy">
              {project.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {project.links.length ? (
                <div className="pill-row top-gap">
                  {project.links.map((link) => (
                    <LinkPill key={link.href} {...link} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="content-section">
          <SectionTitle
            eyebrow="Selected works"
            title={project.works.length ? 'Releases and related work' : 'More coming soon'}
            subtitle={
              project.works.length
                ? 'A first set of releases and related links. Later we can expand each work into its own dedicated view or embed media directly.'
                : 'This page is already part of the structure and can be filled in next.'
            }
          />
          <div className="works-list">
            {project.works.length ? (
              project.works.map((work) => <WorkCard key={work.title} work={work} />)
            ) : (
              <div className="coming-soon">Content coming soon.</div>
            )}
          </div>
        </section>

        <section className="contact-banner">
          <div>
            <div className="section-eyebrow accent">Contact</div>
            <p>For collaborations, bookings, or questions, write to dominykas.niaura@gmail.com</p>
          </div>
          <a href="mailto:dominykas.niaura@gmail.com" className="link-pill strong-pill">
            Write an email
          </a>
        </section>
      </div>
    </div>
  )
}

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const currentProject = useMemo(
    () => projects.find((project) => project.slug === activePage) ?? projects[0],
    [activePage],
  )

  useEffect(() => {
    document.title = seo.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', seo.description)
  }, [])

  return (
    <div className="site-shell">
      <div className="site-inner">
        <header className="site-header">
          <button onClick={() => setActivePage('home')} className="brand-button">
            <div className="brand-name">Dominykas Niaura</div>
            <div className="brand-subtitle">Artist portfolio</div>
          </button>
          <nav className="top-nav">
            <button onClick={() => setActivePage('home')}>Home</button>
            <button onClick={() => setActivePage('dominykas-niaura')}>dominykas niaura</button>
            <a href="mailto:dominykas.niaura@gmail.com">Contact</a>
          </nav>
        </header>

        <main>
          {activePage === 'home' ? (
            <HomePage onOpenProject={setActivePage} />
          ) : (
            <ProjectPage
              project={currentProject}
              onBack={() => setActivePage('home')}
              onOpenProject={setActivePage}
            />
          )}
        </main>

        <footer className="site-footer">
          <p>Dominykas Niaura · Vilnius, Lithuania</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/dom.neura/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://dominykasniaura.bandcamp.com/" target="_blank" rel="noreferrer">
              Bandcamp
            </a>
            <a href="https://soundcloud.com/niaura" target="_blank" rel="noreferrer">
              SoundCloud
            </a>
            <a href="mailto:dominykas.niaura@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
