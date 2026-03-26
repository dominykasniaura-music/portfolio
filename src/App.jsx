import { useEffect, useMemo, useState } from 'react'

import mainPortrait from './assets/main-page-profile-photo.jpg'
import dominykasPerforming from './assets/dominykas-performing.jpg'
import palaimaCover from './assets/palaima-2019.jpg'
import bevietysteCover from './assets/bevietyste-2024.jpg'
import civilizationCover from './assets/civilization-shmivilization-2025.jpg'
import sokisCover from './assets/sokis-isuka-sviesa.png'

import suicideoscopeProfile from './assets/suicideoscope-profile-photo.jpg'
import suicideoscopeCover from './assets/suicideoscope-self-titled.jpg'
import scopeCover from './assets/scope.jpg'

import nneuraProfile from './assets/nneura-profile-photo.jpg'
import uNeverKnewCover from './assets/u-never-knew.jpg'
import mustHaveUCover from './assets/must-have-u.jpg'

import transactionsProfile from './assets/transactions-profile-photo.jpg'
import commonPitfallsCover from './assets/the-common-pitfalls-of-fraud-and-infatuation.jpg'
import vilniusFullOfSpaceCover from './assets/vilnius-full-of-space.jpg'
import labasRytasCover from './assets/labas-rytas.jpg'

import estakadaProfile from './assets/estakada99-profile-photo.png'
import neurasticCover from './assets/neurastic-soundscapes.jpg'
import misadventuresCover from './assets/misadventures.jpg'

const contactEmail = 'dominykas.niaura@gmail.com'
const instagramUrl = 'https://www.instagram.com/dom.neura/'

const projects = [
  {
    slug: 'dominykas-niaura',
    navTitle: 'dominykas niaura',
    title: 'dominykas niaura',
    years: '2018–present',
    tags: ['ambient', 'field recordings', 'trip-hop', 'dub', 'experimental'],
    summary:
      'Electronic music project drifting between ambient, field recordings, trip-hop, dub, and experimental music to create soundscapes that feel like entries from a personal journal.',
    hero: dominykasPerforming,
    intro: [
      'dominykas niaura is an electronic music artist whose work drifts between field recordings, ambient, trip-hop, dub, and experimental music to create soundscapes that feel like entries from a personal journal.',
      'The works include palaima (2019), a compilation of early songs that laid the foundation for blending field recordings with ambient textures; Šokis įsuka šviesą (2021), a soundtrack for Ramūnas Liutkevičius’ debut poetry book; bevietystė (2024), a concept album exploring memory, loneliness, meaning, and loss; and civilization shmivilization (2025), a half-hour guitar-and-effects improvisation.',
    ],
    links: [
      { label: 'Instagram', href: instagramUrl },
      { label: 'Bandcamp', href: 'https://dominykasniaura.bandcamp.com/' },
      { label: 'SoundCloud', href: 'https://soundcloud.com/niaura' },
      { label: 'Spotify', href: 'https://open.spotify.com/artist/61lGgboLfFJYSivn7p41zB?si=VMUU_TFsTFmcHOjg131i4Q' },
      { label: 'Electron Emitter', href: 'https://www.electronemitter.net/artists/dominykas-niaura/' },
    ],
    works: [
      {
        title: 'civilization shmivilization',
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
        title: 'bevietystė',
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
        ],
      },
      {
        title: 'palaima',
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
    media: [
      {
        title: 'Interview on Radio Vilnius',
        meta: '2025',
        href: 'https://radiovilnius.live/w-dominykas-niaura/',
      },
      {
        title: 'Interview on Literatūra ir menas',
        meta: '2022',
        href: 'https://literaturairmenas.lt/muzika/dominykas-niaura-muzika-suteikia-horizontalia-panorama-o-tekstas-vertikale',
      },
      {
        title: 'Vitalijus Gailius review on mic.lt',
        meta: '2025',
        href: 'https://www.mic.lt/lt/ivykiai/2025/11/03/2024-m-ii-ojo-pusmecio-lietuvisku-albumu-apzvalga-i-dalis/',
      },
      {
        title: 'Emilija Visockaitė review on her Substack',
        meta: '2024',
        href: 'https://emilijaviso.substack.com/p/emilija-6-ryskiausi-menesio-albumai',
      },
    ],
  },
  {
    slug: 'suicideoscope',
    navTitle: 'Suicideoscope',
    title: 'Suicideoscope',
    years: '2012–present',
    tags: ['experimental electronic', 'cloud rap', 'lo-fi', 'shoegaze', 'post-punk'],
    summary:
      'An experimental electronic project designed to materialize dramas and reinvent itself every step of the way.',
    hero: suicideoscopeProfile,
    intro: [
      'Suicideoscope is a Vilnius-based postmodern experimental electronics project. Over a decade of activity, this project’s music has merged various influences ranging from shoegaze and psychedelic folk to post-industrial electronics and cloud rap, while its live performances are known for their emotional intensity.',
      'Early works were often compared to Have a Nice Life, and the project later began interpreting popular genres through an alternative lens.',
      'Suicideoscope debuted in 2017 with a self-titled cassette album and a performance at the Devilstone festival. The 2022 follow-up, Scope, marked a new direction while maintaining the project’s signature melancholy, lo-fi aesthetic, and exploration of mortality.',
    ],
    links: [
      { label: 'Bandcamp', href: 'https://suicideoscope.bandcamp.com/' },
      { label: 'SoundCloud', href: 'https://soundcloud.com/suicideoscope' },
      { label: 'YouTube', href: 'https://www.youtube.com/@suicideoscope' },
      { label: 'Spotify', href: 'https://open.spotify.com/artist/0nYjLkegR4iLqWMiNHC1Xg' },
      { label: 'Instagram', href: 'https://instagram.com/suicideoscope' },
      { label: 'Facebook', href: 'https://www.facebook.com/Suicideoscope/' },
    ],
    works: [
      {
        title: 'Scope',
        year: '2022',
        type: 'album',
        image: scopeCover,
        text:
          'Modern hip-hop genre tropes and tongue-in-cheek moments mixed with confessional storytelling, exploring mental health, substance abuse, misogyny, and other themes against dark arrangements.',
        links: [
          { label: 'Bandcamp', href: 'https://suicideoscope.bandcamp.com/album/scope' },
          { label: 'SoundCloud', href: 'https://soundcloud.com/suicideoscope/sets/scope' },
          { label: 'Spotify', href: 'https://open.spotify.com/album/1CskY8GvQsTwBc2f8jpBmS?si=Hpi8Cs-oS3aTaXTn5UZo7Q' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=CRDT4tlmzmA&list=PL22lNEvglP1XRA9otCKilXxYk9r174try' },
        ],
      },
      {
        title: 'Suicideoscope',
        year: '2017',
        type: 'album',
        image: suicideoscopeCover,
        text:
          'An eclectic mix of guitar and electronic music on the debut self-titled album that interweaves psychedelics and sedatives into a long-form séance of self-analysis, moving through omnipotence, impotence, identity issues, hedonism, anxiety, and self-judgment.',
        links: [
          { label: 'Bandcamp', href: 'https://suicideoscope.bandcamp.com/album/suicideoscope' },
          { label: 'SoundCloud', href: 'https://soundcloud.com/suicideoscope/sets/suicideoscope' },
          { label: 'Spotify', href: 'https://open.spotify.com/album/0KDnLTnyaYdPGUKZN9gRWd?si=srayMNgFSk6tMZgqCDehng' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=VEAWqXu-ppQ' },
        ],
      },
    ],
    media: [
      {
        title: 'Interview on ore.lt',
        meta: '2016',
        href: 'https://www.ore.lt/2016/05/suicideoscope-kuryba-nepataikauja-klausytojui',
      },
      {
        title: 'Interview on ore.lt',
        meta: '2017',
        href: 'https://www.ore.lt/2017/12/suicideoscope-lo-fi-yra-tiesos-ieskojimas',
      },
    ],
  },
  {
    slug: 'nneura',
    navTitle: 'Nneura',
    title: 'Nneura',
    years: '2016–present',
    tags: ['deep house', 'dub techno', 'lo-fi house', 'leftfield'],
    summary: 'A dance music producer and DJ moniker for moody ',
    hero: nneuraProfile,
    intro: [
      'Nneura explores house and techno from a more intimate angle, balancing club momentum with melancholy, haze, and soft abrasion.',
      'This project moves through deep house, dub techno, lo-fi house, and leftfield textures while keeping a personal outsider sensibility.',
    ],
    links: [
      { label: 'Bandcamp', href: 'https://nneura.bandcamp.com/' },
      { label: 'SoundCloud', href: 'https://soundcloud.com/nneura' },
    ],
    works: [
      {
        title: 'U Never Knew',
        year: '2022',
        type: 'EP',
        image: uNeverKnewCover,
        text:
          'A varied release of leftfield and dubby club music, moving through outsider house, deep house, lo-fi house, and subtly blurred techno textures.',
        links: [
          { label: 'Bandcamp', href: 'https://nneura.bandcamp.com/album/u-never-knew' },
          { label: 'SoundCloud', href: 'https://soundcloud.com/nneura/sets/u-never-knew' },
        ],
      },
      {
        title: 'Must Have U',
        year: '2019',
        type: 'EP',
        image: mustHaveUCover,
        text:
          'Breakout Nneura release pairing a classic outsider house track with a mellow dub techno track.',
        links: [
          { label: 'Bandcamp', href: 'https://nneura.bandcamp.com/album/must-have-u' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=YaBsDYdoczE' },
        ],
      },
    ],
    media: [],
  },
  {
    slug: 'transactions',
    navTitle: 'Transactions',
    title: 'Transactions',
    years: '2014, 2019–2024',
    tags: ['post-punk', 'indie rock', 'post-hardcore', 'emo'],
    summary: 'A four-piece indie post-punk band.',
    hero: transactionsProfile,
    intro: [
      'Transactions is a four-piece indie post-punk band from Vilnius. In this project, Dominykas is the songwriter, vocalist, and guitarist.',
      'The music moves through post-punk, indie rock, noise rock, and emo while keeping a tense, emotionally direct, and slightly warped melodic core.',
    ],
    links: [
      { label: 'Bandcamp', href: 'https://transactions.bandcamp.com/music' },
      { label: 'Instagram', href: 'https://instagram.com/transactionsband' },
      { label: 'YouTube', href: 'https://www.youtube.com/@transactions9229' },
      { label: 'Spotify', href: 'https://open.spotify.com/artist/70qq6v3uFhmJ8Qk3T9eHj5' },
    ],
    works: [
      {
        title: 'The Common Pitfalls of Fraud and Infatuation',
        year: '2022',
        type: 'album',
        image: commonPitfallsCover,
        text:
          'The first full-length release of the band’s indie post-punk flavour – their most intricate and subtle work with a profoundly atmospheric and emotionally resonant weight.',
        links: [
          { label: 'Bandcamp', href: 'https://transactions.bandcamp.com/album/the-common-pitfalls-of-fraud-and-infatuation' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=82l4djD8Irg&list=PLz1j8FH22pWe__7BNV-RvM93n15vbPA2O' },
          { label: 'Spotify', href: 'https://open.spotify.com/album/1mroHd9z4EL3mnMWqMFy1T?si=M0-jFMnxTbSzjxt2hiEp9Q' },
        ],
      },
      {
        title: 'Vilnius Full of Space',
        year: '2020',
        type: 'EP',
        image: vilniusFullOfSpaceCover,
        text:
          'An EP born from the pandemic era, documenting the band’s sharper, formative songs through a lens of post-hardcore intensity and post-punk grit.',
        links: [
          { label: 'Bandcamp', href: 'https://transactions.bandcamp.com/album/vilnius-full-of-space' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=Q__N86JgEeI&list=OLAK5uy_mIn2-mUkz8j7dL-RnMR0-6vZFIWdYzUXo' },
          { label: 'Spotify', href: 'https://open.spotify.com/album/01f79rSWd72N3WXHMtqStx?si=5V9fzBWyQR6HIS4S9HevfA' },
        ],
      },
      {
        title: 'Labas Rytas',
        year: '2020',
        type: 'single',
        image: labasRytasCover,
        text:
          'A cover of an old Lithuanian pop song by Biplan.',
        links: [
          { label: 'Bandcamp', href: 'https://transactions.bandcamp.com/album/labas-rytas' },
          { label: 'YouTube', href: 'https://www.youtube.com/watch?v=ZttCYEjpjGA' },
        ],
      },
    ],
    media: [
      {
        title: 'Interview on Suru.lt show at Start FM',
        meta: '2022',
        href: 'https://www.suru.lt/suru-start-fm-s05e15-transactions/?fbclid=IwAR1pv_AlAAie2OBv4tRIMFVQ-91L9BqBds9ev-nN9aAgoCXc3wGiSXZA7M4',
      },
    ],
  },
  {
    slug: 'estakada99',
    navTitle: 'estakada99',
    title: 'estakada99',
    years: '2025–present',
    tags: ['community', 'independent', 'online radio station'],
    summary:
      'Independent online radio station established in Vilnius in 2025, broadcasting from studios, homes, and venues across the city and beyond.',
    hero: estakadaProfile,
    intro: [
      'estakada99 is an independent online radio station established in Vilnius in 2025, broadcasting from studios, homes, and venues across the city and beyond.',
      'Dominykas is a co-founder of the station and makes two shows there.',
    ],
    links: [
      { label: 'Website', href: 'https://www.e99.live' },
      { label: 'Email', href: 'mailto:neura@e99.live' },
      { label: 'Instagram', href: 'https://www.instagram.com/estakada99/' },
    ],
    works: [
      {
        title: 'NEURASTIC SOUNDSCAPES OR HOW TO MAKE AMBIENT',
        year: '2025–present',
        type: 'radio show',
        image: neurasticCover,
        text:
          'On Tuesday evenings, Dominykas dedicates one hour to broadcast a live hardware jam from his home and talk through the process of making music as it happens.',
        links: [
          { label: 'SoundCloud', href: 'https://soundcloud.com/estakada99/sets/neurastic-soundscapes-or-how' },
        ],
      },
      {
        title: 'MISADVENTURES',
        year: '2025–present',
        type: 'radio show',
        image: misadventuresCover,
        text:
          'An indie film of a radio show – mundane conversations about life’s big and small questions, recorded while walking outdoors, with music to make it all a bit more bearable.',
        links: [
          { label: 'SoundCloud', href: 'https://soundcloud.com/estakada99/sets/misadventures' },
        ],
      },
    ],
    media: [],
  },
]

const seo = {
  title: 'Dominykas Niaura audio work portfolio',
  description:
    'Portfolio website for Dominykas Niaura, bringing together projects, releases, radio work, and links in one place.',
}

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
    </div>
  )
}

function LinkPill({ label, href }) {
  const external = !href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="link-pill"
    >
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

function MediaCard({ item }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="media-card">
      <div className="media-meta">{item.meta}</div>
      <h4>{item.title}</h4>
    </a>
  )
}

function HomePage({ onOpenProject }) {
  return (
    <>
      <section className="hero-grid">
        <div className="hero-copy-col">
          <h1>Dominykas Niaura</h1>
          <p className="hero-text">
            Composer, producer, sound artist, performer, and radio show maker from Vilnius. This website gathers projects, releases, links, and context in one place.
          </p>
          <div className="hero-spacer" />
          <div className="pill-row">
            <LinkPill label="Email" href={`mailto:${contactEmail}`} />
          </div>
        </div>

        <div className="hero-portrait-shell">
          <img src={mainPortrait} alt="Dominykas Niaura portrait" className="hero-portrait" />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="project-title">Contact</h1>
      <p className="hero-text contact-text">
        For collaborations, bookings, commissions, or questions, get in touch here.
      </p>
      <div className="pill-row">
        <LinkPill label="Email" href={`mailto:${contactEmail}`} />
        <LinkPill label="Instagram" href={instagramUrl} />
      </div>
    </section>
  )
}

function ProjectPage({ project, onBack, onOpenProject, onOpenContact }) {
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
            <button onClick={onOpenContact} className="sidebar-link">
              Contact
            </button>
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
          <SectionTitle title="Releases" />
          <div className="works-list">
            {project.works.length ? (
              project.works.map((work) => <WorkCard key={work.title} work={work} />)
            ) : (
              <div className="coming-soon">Content coming soon.</div>
            )}
          </div>
        </section>

        {project.media?.length ? (
          <section className="content-section bordered-section media-section">
            <SectionTitle title="Media" />
            <div className="media-grid">
              {project.media.map((item) => (
                <MediaCard key={item.href} item={item} />
              ))}
            </div>
          </section>
        ) : null}
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

    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')

    if (ogTitle) ogTitle.setAttribute('content', seo.title)
    if (ogDescription) ogDescription.setAttribute('content', seo.description)
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title)
    if (twitterDescription) twitterDescription.setAttribute('content', seo.description)
  }, [])

  return (
    <div className="site-shell">
      <div className="site-inner">
        <header className="site-header">
          <button onClick={() => setActivePage('home')} className="brand-button">
            <div className="brand-name">Dominykas Niaura</div>
            <div className="brand-subtitle">Audio work portfolio</div>
          </button>

          <nav className="top-nav">
            <button onClick={() => setActivePage('home')}>Home</button>
            {projects.map((project) => (
              <button key={project.slug} onClick={() => setActivePage(project.slug)}>
                {project.navTitle}
              </button>
            ))}
            <button onClick={() => setActivePage('contact')}>Contact</button>
          </nav>
        </header>

        <main>
          {activePage === 'home' ? (
            <HomePage onOpenProject={setActivePage} />
          ) : activePage === 'contact' ? (
            <ContactPage />
          ) : (
            <ProjectPage
              project={currentProject}
              onBack={() => setActivePage('home')}
              onOpenProject={setActivePage}
              onOpenContact={() => setActivePage('contact')}
            />
          )}
        </main>

        <footer className="site-footer">
          <p>Dominykas Niaura · Vilnius, Lithuania</p>
          <div className="footer-links">
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={`mailto:${contactEmail}`}>Email</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
