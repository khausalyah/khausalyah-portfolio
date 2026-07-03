import React from 'react';
import WelcomeIntro from './components/WelcomeIntro';
import JobTitle from './components/JobTitle';
import IdentityProfile from './components/IdentityProfile';
import ShowcaseTabs from './components/ShowcaseTabs';
import ArchitexAI from './components/ArchitexAI'; 

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <WelcomeIntro />
      <JobTitle />
      <IdentityProfile />
      <ShowcaseTabs />
      <ArchitexAI />
    </div>
  );
}