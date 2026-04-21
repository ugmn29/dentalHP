'use client';

import RecruitHeader from './components/Header';
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
import RecruitFooter from './components/Footer';

export default function RecruitClient() {
  return (
    <>
      <RecruitHeader />
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
      <RecruitFooter />
    </>
  );
}
