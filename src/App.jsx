import { useState } from 'react'
import './AppV2.css'
import { nonTechnicalEvents, schedule, technicalEvents } from './data'
import ContactSection from './components/ContactSection'
import AnimatedOverlay from './components/AnimatedOverlay'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import SiteNav from './components/SiteNav'

function IntroStrip() {
    return <section className="intro-strip"><p><span className="strip-dot"></span> One campus. Two tracks. Endless ways to win.</p><p className="scroll-note">Scroll to discover <span>↓</span></p></section>
}

function App() {
    const [theme, setTheme] = useState('default')

    return <main className={`theme-${theme}`}><AnimatedOverlay /><SiteNav /><Hero /><IntroStrip /><EventsSection technicalEvents={technicalEvents} nonTechnicalEvents={nonTechnicalEvents} /><Schedule items={schedule} /><ContactSection technicalEvents={technicalEvents} nonTechnicalEvents={nonTechnicalEvents} /><Footer theme={theme} onThemeChange={setTheme} /></main>
}

export default App
