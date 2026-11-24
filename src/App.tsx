
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomVisualizer } from './components/RoomVisualizer/RoomVisualizer';
import { AIRedesignTool } from './components/AIRedesignTool';
import { ProjectShowcase } from './components/ProjectShowcase';
import { MaterialLibrary } from './components/MaterialLibrary';
import { CostEstimator } from './components/CostEstimator';
import { DesignersDirectory } from './components/DesignersDirectory';
import { StyleQuizModal } from './components/StyleQuizModal';
import { SavedMoodboardsDrawer } from './components/SavedMoodboardsDrawer';
import { Footer } from './components/Footer';
import { DesignStyle } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('visualizer');
  const [savedItems, setSavedItems] = useState<any[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  const handleSaveItem = (item: any) => {
    setSavedItems((prev) => [...prev, item]);
  };

  const handleRemoveSavedItem = (id: string) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuizResultSelect = (style: DesignStyle) => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400 selection:text-zinc-950 antialiased">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        savedCount={savedItems.length}
        openSavedDrawer={() => setIsSavedDrawerOpen(true)}
        openQuiz={() => setIsQuizOpen(true)}
      />

      <main>
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('visualizer');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onQuizClick={() => setIsQuizOpen(true)}
        />

        <RoomVisualizer onSaveToBoard={handleSaveItem} />

        <AIRedesignTool />

        <ProjectShowcase onSaveHotspot={handleSaveItem} />

        <MaterialLibrary onSaveMaterial={handleSaveItem} />

        <CostEstimator />

        <DesignersDirectory />
      </main>

      <Footer />

      {/* Modals & Drawers */}
      <StyleQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectResultStyle={handleQuizResultSelect}
      />

      <SavedMoodboardsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItems={savedItems}
        onRemoveItem={handleRemoveSavedItem}
      />
    </div>
  );
}

export default App;