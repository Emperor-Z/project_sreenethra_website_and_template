import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import ScheduleHero from '@/components/schedule/ScheduleHero';
import AppointmentForm from '@/components/schedule/AppointmentForm';
import ScheduleInfo from '@/components/schedule/ScheduleInfo';

export const metadata: Metadata = {
  title: 'Schedule Appointment | Sreenethra Eye Care',
  description: 'Book your appointment with our expert eye care specialists at Sreenethra Eye Care. Choose your preferred doctor, date, and time for a convenient consultation.',
};

export default function SchedulePage() {
  return (
    <Layout>
      <ScheduleHero />
      <AppointmentForm />
      <ScheduleInfo />
    </Layout>
  );
}
