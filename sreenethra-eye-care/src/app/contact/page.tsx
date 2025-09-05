import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/contact/ContactHero';
import ContactLocations from '@/components/contact/ContactLocations';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Contact Us | Sreenethra Eye Care',
  description: 'Get in touch with Sreenethra Eye Care. Find our locations, contact information, and send us a message. We\'re here to help with all your eye care needs.',
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactLocations />
      <ContactForm />
      <ContactMap />
    </Layout>
  );
}
