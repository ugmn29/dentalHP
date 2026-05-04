'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import GrowthPath from './components/GrowthPath';
import DayInLife from './components/DayInLife';
import Numbers from './components/Numbers';
import Philosophy from './components/Philosophy';
import Message from './components/Message';
import Requirements from './components/Requirements';
import Career from './components/Career';
import Honest from './components/Honest';
import FAQ from './components/FAQ';
import Entry from './components/Entry';
import FloatingLine from './components/FloatingLine';

export default function RecruitClient() {
  return (
    <div className="recruit-page" style={{ overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <GrowthPath />
        <DayInLife />
        <Numbers />
        <Philosophy />
        <Message />
        <Requirements />
        <Career />
        <Honest />
        <FAQ />
        <Entry />
      </main>
      <Footer />
      <FloatingLine />
    </div>
  );
}
