import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutStats from '@/components/about/AboutStats';
import AboutTeam from '@/components/about/AboutTeam';
import AboutFacilities from '@/components/about/AboutFacilities';

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      <AboutFacilities />
    </Layout>
  );
}
