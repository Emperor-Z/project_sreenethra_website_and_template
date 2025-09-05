import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import DoctorsHero from '@/components/doctors/DoctorsHero';
import SeniorConsultants from '@/components/doctors/SeniorConsultants';
import Consultants from '@/components/doctors/Consultants';
import DoctorsCTA from '@/components/doctors/DoctorsCTA';

export const metadata: Metadata = {
  title: 'Our Expert Doctors | Sreenethra Eye Care',
  description: 'Meet our team of highly qualified and experienced eye care specialists at Sreenethra Eye Care.',
};

export default function DoctorsPage() {
  return (
    <Layout>
      <DoctorsHero />
      <SeniorConsultants />
      <Consultants />
      <DoctorsCTA />
    </Layout>
  );
}
