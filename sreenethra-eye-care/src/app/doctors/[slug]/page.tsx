import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import DoctorDetails from '@/components/doctors/DoctorDetails';
import { seniorConsultants, consultants } from '@/lib/data';

interface DoctorPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const allDoctors = [...seniorConsultants, ...consultants];
  
  return allDoctors.map((doctor) => ({
    slug: doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''),
  }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const allDoctors = [...seniorConsultants, ...consultants];
  const doctor = allDoctors.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '') === params.slug
  );

  if (!doctor) {
    return {
      title: 'Doctor Not Found | Sreenethra Eye Care',
    };
  }

  return {
    title: `${doctor.name} - ${doctor.position} | Sreenethra Eye Care`,
    description: `Meet ${doctor.name}, ${doctor.position} at Sreenethra Eye Care. ${doctor.qualification}. Specializing in ${doctor.specialties.join(', ')}.`,
  };
}

export default function DoctorPage({ params }: DoctorPageProps) {
  const allDoctors = [...seniorConsultants, ...consultants];
  const doctor = allDoctors.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '') === params.slug
  );

  if (!doctor) {
    notFound();
  }

  return (
    <Layout>
      <DoctorDetails doctor={doctor} />
    </Layout>
  );
}
