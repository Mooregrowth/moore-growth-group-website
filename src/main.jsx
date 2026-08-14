import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  ['01', 'Growth Strategy', 'Clear positioning, market insight, and focused plans built to drive real traction.'],
  ['02', 'Fractional CMO Leadership', 'Senior strategic leadership that brings direction and momentum—without the full-time overhead.'],
  ['03', 'Marketing Intelligence', 'Data-led insight to guide decisions, sharpen budgets, and scale smarter.'],
  ['04', 'Operational Strategy', 'Connected processes and priorities that improve clarity, efficiency, and margins.'],
  ['05', 'Systems Development', 'Practical systems that help your team work with greater consistency and confidence.'],
  ['06', 'Business Advisory', 'A trusted strategic partner for complex decisions, new opportunities, and growth.'],
  ['07', 'Website Strategy & Development', 'Strategic, considered digital experiences designed to build trust and convert.'],
]

function Brand() {
  return <a className="brand" href="#top" aria-label="Moore Growth Group home"><img src="/logo.png" alt="Moore Growth Group" /></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header" id="top"><Brand /><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav">{open ? 'Close' : 'Menu'}</button><nav id="nav" className={open ? 'open' : ''} onClick={() => setOpen(false)}><a href="#services">Services</a><a href="#approach">Approach</a><a href="#results">Results</a><a className="button dark" href="#contact">Let’s talk <span>↗</span></a></nav></header>
}

function Hero() {
  return <main><section className="hero"><div className="hero-copy"><p className="eyebrow">Strategy that builds what’s next.</p><h1>Clarity.<br />Strategy.<br /><em>Growth.</em></h1><p className="lede">We partner with founders and leadership teams to turn big goals into measurable progress—through strategy, systems, and smart execution.</p><a className="text-link" href="#contact">Let’s build your plan <span>↗</span></a></div><div className="hero-art" role="img" aria-label="A warm, editorial workspace"><div className="arch"></div><div className="strategy-card"><span>Move with</span><strong>intention.</strong><small>Strategy / Systems / Growth</small></div><div className="desk-line"></div></div></section>
  <section className="credibility" aria-labelledby="cred-title"><p id="cred-title">Trusted strategic perspective across industries</p><div className="industry-list"><span>Beauty</span><span>Automotive</span><span>Home Services</span><span>Apparel</span><span>SaaS</span></div><small>Industry experience shown—not client logos or endorsements.</small></section>
  <Services /><Approach /><Results /><Contact /></main>
}

function Services() {
  return <section className="section services" id="services"><div className="section-intro"><p className="eyebrow">What we do</p><h2>Strategy that touches <em>every</em><br />part of your business.</h2></div><div className="service-grid">{services.map(([n, title, text]) => <article className="service" key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
}

function Approach() {
  return <section className="approach" id="approach"><div className="approach-visual"><p>Perspective<br />before<br /><em>prescription.</em></p><div className="linework"></div></div><div className="approach-copy"><p className="eyebrow">Our approach</p><h2>Less guesswork.<br />More clarity.<br /><em>Better decisions.</em></h2><p>We look at the full picture—your brand, operations, systems, and market—then build a plan that works in the real world.</p><ol><li>Understand the full business</li><li>Identify leverage points</li><li>Build the strategy and systems</li><li>Support execution and iteration</li><li>Measure what matters</li></ol><a href="#contact" className="text-link">Explore our approach <span>↗</span></a></div></section>
}

function Results() {
  return <section className="section results" id="results"><div><p className="eyebrow">Real strategy. Meaningful progress.</p><h2>Helping businesses grow<br /><em>with intention.</em></h2></div><div className="results-copy"><p>Our work is designed to create the focus, infrastructure, and leadership alignment required for sustainable growth.</p><div className="proof"><div><strong>Clarity</strong><span>Sharper priorities</span></div><div><strong>Alignment</strong><span>Connected teams</span></div><div><strong>Momentum</strong><span>Confident execution</span></div></div><small>Qualitative outcomes only. Specific client results available once approved.</small></div></section>
}

function Contact() {
  return <section className="contact" id="contact"><p className="eyebrow">Your next chapter</p><div><h2>Ready to grow<br />with a plan?</h2><div><p>Let’s talk about your business, your goals, and how we can help you get there.</p><a className="button light" href="mailto:hello@mooregrowthgroup.com">Start a conversation <span>↗</span></a><small>Please confirm preferred contact email before launch.</small></div></div></section>
}

function Footer() {
  return <footer><Brand /><div className="footer-links"><a href="#services">Services</a><a href="#approach">Approach</a><a href="#results">Results</a><a href="#contact">Contact</a></div><p>© {new Date().getFullYear()} Moore Growth Group, Inc.</p></footer>
}

function App() { return <><Header /><Hero /><Footer /></> }

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
