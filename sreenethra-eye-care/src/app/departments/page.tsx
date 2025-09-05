import Layout from '@/components/layout/Layout';
import DepartmentsHero from '@/components/departments/DepartmentsHero';
import DepartmentsGrid from '@/components/departments/DepartmentsGrid';
import DepartmentsCTA from '@/components/departments/DepartmentsCTA';

export default function DepartmentsPage() {
  return (
    <Layout>
      <DepartmentsHero />
      <DepartmentsGrid />
      <DepartmentsCTA />
    </Layout>
  );
}
