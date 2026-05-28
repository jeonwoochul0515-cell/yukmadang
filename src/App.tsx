// 육마당 사상본점 홈페이지의 루트 컴포넌트 — 모든 섹션을 순서대로 조립
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { SignatureMenu } from './components/SignatureMenu';
import { FullMenu } from './components/FullMenu';
import { Reviews } from './components/Reviews';
import { InstagramSection } from './components/InstagramSection';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <SignatureMenu />
        <FullMenu />
        <Reviews />
        <InstagramSection />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

export default App;
