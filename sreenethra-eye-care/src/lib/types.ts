// TypeScript interfaces for Sreenethra Eye Care

export interface Doctor {
  name: string;
  qualification: string;
  position: string;
  profile: string;
  specialties: string[];
  accolades: string[];
  contact: string;
  type: 'senior' | 'consultant';
}

export interface Department {
  name: string;
  description: string;
  procedures: string[];
  doctors: string[];
  equipment: string[];
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  distance?: string;
}

export interface HospitalInfo {
  name: string;
  tagline: string;
  description: string;
  mainBranch: {
    address: string;
    phone: string;
    phone2: string;
    careCoordinator: string;
  };
  distances: {
    airport: string;
    railway: string;
    busStation: string;
    rbi: string;
  };
}

export interface SupportServices {
  laboratory: string;
  pharmacy: string;
  opticalShop: string;
  insurance: string;
}

export interface OperationTheatre {
  description: string;
}
