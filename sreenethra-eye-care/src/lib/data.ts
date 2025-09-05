// Sreenethra Eye Care - Content Data
// All content extracted from content.txt file

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

export const hospitalInfo = {
  name: "Sreenethra Eye Care",
  tagline: "A world made brighter & clearer awaits you at Sreenethra Eye Care",
  description: "Finding expert eye care that is both affordable and compassionate can often be a challenge. Sreenethra Eye Care, a premier tertiary eye care centre located in Thiruvananthapuram, Kerala's exotic capital city is one such centre. Utilising internationally accepted standards of treatment and state-of-the-art technology, our experienced doctors are equipped to handle any complexities of eye health to restore your vision to its fullest potential.",
  mainBranch: {
    address: "Bakery Junction, Nandavanam Road, Thiruvananthapuram, Kerala",
    phone: "04712 322 322",
    phone2: "8590604204",
    careCoordinator: "85906 04204"
  },
  distances: {
    airport: "4.9km",
    railway: "2.3 km", 
    busStation: "2 km",
    rbi: "200 mt"
  }
};

export const departments: Department[] = [
  {
    name: "Cataract",
    description: "At Sreenethra Eye Care, we offer advanced, patient-friendly cataract surgery using state-of-the-art technology and minimally invasive techniques. Unlike older methods that required large incisions, stitches, and long recovery times, our modern approach uses tiny incisions and anesthetic eye drops, helping patients return to normal life within days.",
    procedures: [
      "Phacoemulsification",
      "IOL Master 700",
      "Tomey Specular microscope",
      "BioMedix ECHORULE PRO USB A-Scan",
      "Appasamy MARVEL B-Scan",
      "Zeiss Visulas YAG III Plus Laser"
    ],
    doctors: [
      "Dr. Ashad Sivaraman",
      "Dr. Swapna Nair", 
      "Dr. Mahadevan K",
      "Dr. Anoop Sivaraman",
      "Dr. Harshali Yadav",
      "Dr. Anila George",
      "Dr Malavika G",
      "Dr. Arvin Ponnat",
      "Dr. Shabna A",
      "Dr. Sreelekhsmi S.R",
      "Dr. Shihail Jinna"
    ],
    equipment: [
      "Alcon Centurion",
      "J&J Whitestar Signature Pro & Veritas Vision System phaco machines",
      "Carl Zeiss Lumera operating microscope",
      "IOL Master 700",
      "Tomey Specular microscope",
      "BioMedix ECHORULE PRO USB A-Scan",
      "Appasamy MARVEL B-Scan",
      "Zeiss Visulas YAG III Plus Laser"
    ]
  },
  {
    name: "Cornea & Refractive Surgery",
    description: "The Cornea department covers conditions like corneal dystrophies, degenerations, inflammations, infections namely ulcers, keratitis, toxic keratopathy, corneal foreign bodies, chemical and traumatic corneal injuries, dry eye disease etc. The department of refractive surgery deals with procedures that can correct refractive errors like nearsightedness, farsightedness, and astigmatism and improve vision in patients.",
    procedures: [
      "Keratoplasties",
      "Cornea collagen cross-linking (C3R)",
      "Phototherapeutic keratectomy (PTK)",
      "Amniotic membrane transplant",
      "Limbal stem cell transplant",
      "LASIK",
      "TransPRK",
      "ICL (Implantable Collamer Lens) surgery",
      "ICRS (Intracorneal Ring Segment) surgery"
    ],
    doctors: ["Dr. Swapna Nair"],
    equipment: [
      "SCHWIND Amaris TransPRK machine",
      "Tomey Specular microscope",
      "Appasamy Corneal Cross-Linking System (UV)",
      "Carl Zeiss lumera operating microscope",
      "OCT- Cirrus 6000",
      "Moria microkeratome machine",
      "IOL Master 700",
      "Schwind Sirius+ topography"
    ]
  },
  {
    name: "Retina and Vitreous",
    description: "The Retina department covers conditions like retinal detachments, diabetic retinopathy, macular holes, vitreomacular traction and interface disorders. We provide comprehensive retinal care with advanced diagnostic and surgical capabilities.",
    procedures: [
      "Minimally Invasive Vitreoretinal Surgery (MIVS)",
      "Retinal Detachment repair",
      "Diabetic Retinopathy surgery",
      "Macular Hole Surgery",
      "Vitreomacular Traction and Interface Disorders",
      "ROP screening",
      "Intravitreal Injections",
      "Retinal Laser Photocoagulation"
    ],
    doctors: [
      "Dr. Ashad Sivarman",
      "Dr. Anoop Sivarman", 
      "Dr. Mahadevan",
      "Dr. Harshali Yadav",
      "Dr.Malavika.G",
      "Dr Shabna A"
    ],
    equipment: [
      "Widefield Fundus Fluorescein Angiography (WF-FFA)",
      "Optical Coherence Tomography Angiography (OCTA)",
      "Ultrasonography",
      "Retinal lasers (Green laser – Double frequency Ndi YAG)",
      "Constellation vitrectomy systems"
    ]
  },
  {
    name: "Glaucoma",
    description: "Our Glaucoma Department focuses on diagnosing, managing and treating all types of glaucoma utilizing advanced technology and a team of experienced specialists, we provide comprehensive care of patients with varying stages of the disease, by effectively controlling intraocular pressure and thus visual loss.",
    procedures: [
      "Trabeculectomy",
      "MIGS",
      "GATT",
      "iStent"
    ],
    doctors: ["Dr. Arvin Ponnat"],
    equipment: [
      "Humphrey Field Analyzer (HFA)",
      "Optical coherence tomography (OCT - RNFL)",
      "Pachymetry",
      "Carl Zeiss Lumera operating microscope",
      "IOL Master 700",
      "Alconbury Centurion Phaco Machine",
      "Johnson & Johson veritas Phaco machine"
    ]
  },
  {
    name: "Paediatric Ophthalmology and strabismus or Squint",
    description: "The department offers specialized services to address a range of eye conditions in children. It includes diagnosis and management of all types of refractive errors, strabismus and amblyopia thus ensuring early intervention to promote healthy vision. Our myopia clinic focuses on strategies to prevent the progression of myopia.",
    procedures: [
      "Spectacles for Refractive Errors",
      "Low Vision Aids (LVA)",
      "Surgical Correction for Strabismus",
      "Surgical Correction for Paediatric Cataract",
      "Screening for Retinopathy of Prematurity (ROP)"
    ],
    doctors: ["Dr Swapna Nair", "Dr. Anila George"],
    equipment: [
      "Loose prisms",
      "Charts for orthoptic exercises",
      "Carl Zeiss Lumera operating microscope",
      "IOL Master 700",
      "Alconbury Centurion Phaco Machine",
      "J&J veritas Phaco Machine",
      "J&J Whitestar signature Pro Phaco Machine"
    ]
  },
  {
    name: "Uvea",
    description: "Uvea is the vascular middle coat of the eyeball and swelling of the uveal tissues by a group of inflammatory diseases is called uveitis. It can also affect the anterior structures of the eye, lens, retina, optic nerve, and vitreous, producing redness, photophobia, pain, reduced vision or blindness.",
    procedures: [
      "Spectacles for Refractive Errors",
      "Low Vision Aids (LVA)",
      "Surgical Correction for Strabismus",
      "Surgical Correction for Paediatric Cataract",
      "Screening for Retinopathy of Prematurity (ROP)"
    ],
    doctors: ["Dr. Harshali Yadav"],
    equipment: [
      "Widefield Fundus Fluorescein Angiography (WF-FFA)",
      "Optical Coherence Tomography Angiography (OCTA)",
      "Ultrasonography",
      "Constellation vitrectomy system",
      "Appasamy slit lamp",
      "Retinal lasers (Green laser – Double frequency Nd YAG)",
      "Tomey Specular microscope",
      "OCT- Cirrus 6000"
    ]
  },
  {
    name: "Neuro-Ophthalmology",
    description: "Our neuro-ophthalmology department focuses on diagnosing and treating problems directly related to nervous system including those affecting optic nerve, visual pathways in the brain and eye movements. This specialty essentially bridges the field of ophthalmology and neurology.",
    procedures: [
      "Diagnosis of optic neuropathies",
      "Neurovascular eye disorders",
      "Visual field analysis",
      "Pupil examination",
      "Color vision testing"
    ],
    doctors: ["Dr. Harshali Yadav"],
    equipment: [
      "Widefield Fundus Fluorescein Angiography (WF-FFA)",
      "Optical Coherence Tomography Angiography (OCTA)",
      "Ultrasonography",
      "Retinal lasers (Green laser – Double frequency Ndi YAG)",
      "Constellation vitrectomy systems"
    ]
  },
  {
    name: "Orbit, Oculoplasty, prosthetics and oncology",
    description: "The department specializes in the diagnosis and management of eyelid, lacrimal, and orbital conditions. It treats a range of disorders including abnormalities of the nasolacrimal duct, ptosis, entropion, ectropion, trichiasis, distichiasis, and eyelid tumours.",
    procedures: [
      "Blepharoplasty",
      "Ptosis Repair",
      "Ectropion and Ectropion",
      "Dacryocystorhinostomy (DCR)",
      "Canthal Resection, Canthectomy, canthoplasty"
    ],
    doctors: ["Dr. Shabna A"],
    equipment: [
      "Carl Zeiss lumera operating microscope",
      "Alcon Centurion phaco machine",
      "J&J, Whitestar Signature Pro phaco machine",
      "Johnson & Johson veritas vision system (Phaco machine)"
    ]
  },
  {
    name: "General Ophthalmology",
    description: "The clinic provides routine screening for refractive errors, cataract, glaucoma, diabetic retinopathy, ocular Inflammation, macular degeneration, eye injuries etc and work in close association with other subspecialities. The optometry services conduct comprehensive vision examination to assess eye health and vision needs, and provides vision correction with glasses or contact lenses.",
    procedures: [
      "Routine eye examination",
      "Refractive error screening",
      "Cataract screening",
      "Glaucoma screening",
      "Diabetic retinopathy screening",
      "Macular degeneration screening",
      "Eye injury assessment"
    ],
    doctors: ["All doctors"],
    equipment: [
      "Comprehensive eye examination equipment",
      "Refraction equipment",
      "Slit lamp biomicroscopy",
      "Fundus photography",
      "Visual field analyzer"
    ]
  }
];

export const seniorConsultants: Doctor[] = [
  {
    name: "Dr. Ashad Sivaraman",
    qualification: "MBBS, DO, FRVS, MD (Hamburg)",
    position: "Director, Senior Consultant - Vitreoretinal Surgery",
    profile: "Dr. Ashad Sivaraman is a highly skilled vitreoretinal and cataract surgeon who has conducted over 60,000 cataract surgeries so far. With over 20 years of experience in the field, he has worked in various eye hospitals across India including Mumbai, Tiruchirappalli, Madurai, Chennai, and Thiruvananthapuram. He completed his postgraduation in Ophthalmology from Joseph Eye Hospital, Tiruchirappalli, Tamil Nadu and worked as Medical Superintendent at CSI Zeon Eye Hospital at Marandahally in Dharmapuri, Tamil Nadu. He then completed fellowship in vitreoretinal surgery at Aditya Jyot Eye Hospital under Dr. S. Natarajan who is an ex-president of the All India Ophthalmic Society and Vitreo-Retinal Society of India. His training also includes research work at University of Hamburg in Germany under Prof. Gisbert Richard on Artificial Retina. Dr.Ashad Sivaraman founded and worked as the director of Precise Eye Care, Thiruvananthapuram, before starting Sreenethra Eye Care in 2014 where he currently serves as the director. Passionate about community service, he also dedicates much of his career to providing comprehensive eye care in rural India through charitable initiatives, and is a passionate film maker and photographer in his free time.",
    specialties: ["Vitreo-Retinal Surgery", "Cataract Surgery"],
    accolades: [
      "Presented papers at national and international ophthalmic and retinal surgery conferences",
      "Contributed to various chapters in multiple ophthalmic textbooks multiple national and international ophthalmic journals"
    ],
    contact: "+91 94000 04421",
    type: "senior"
  },
  {
    name: "Dr. Swapna Nair",
    qualification: "MBBS, DO, FAICO, FRCS (Glasgow)",
    position: "Head of the departments - Cornea, Cataract & Refractive surgery, Consultant - Paediatric Ophthalmology",
    profile: "Dr. Swapna Nair is an accomplished ophthalmologist specialized in cornea, cataract, and refractive services. Along with a strong educational foundation from prestigious medical colleges in Kerala, she has also honed her skills through advanced fellowships and courses. She is also a recognized speaker at national medical conferences and serves as faculty at American Society of Cataract and Refractive Surgery (ASCRS) and American Academy of Ophthalmology (AAO).",
    specialties: [
      "Adult & Pediatric Cataract Surgeries",
      "Femtolaser Assisted Cataract Surgery (FLACS)",
      "Microkeratome & Femtosecond LASIK (MK & FS LASIK)",
      "Phakic Intraocular Lenses (PIOLs)",
      "Anterior Segment Reconstructive Surgeries",
      "Femtosecond Corneal Lamellar Surgeries"
    ],
    accolades: [
      "Won the Best Paper Award in the FLACS and FS LASIK sessions at ASCRS 2015",
      "Received the IIRSI Gold Medal and ISCKRS Young Achievers Award"
    ],
    contact: "91 85906 04208",
    type: "senior"
  },
  {
    name: "Dr. K. Mahadevan",
    qualification: "MBBS, MS, Retd Professor (RIO, Trivandrum), HOD (Sree Gokulam Medical College)",
    position: "Senior Consultant - Vitreoretinal Surgery",
    profile: "Dr. K. Mahadevan is a legendary ophthalmologist with a rich background in medical education and clinical practice. He is a skilled vitreoretinal surgeon and a cataract surgeon. He began his career at Aravind Eye Hospital, Madurai and served as a Registrar in Neurosurgery at Sree Chitra Tirunal Institute for Medical Sciences & Technology atTrivandrum. After joining the Medical Education Service in Kerala, he rose through the ranks to retire as a Professor at the Regional Institute of Ophthalmology and Medical College, Trivandrum.",
    specialties: ["Vitreoretinal surgery", "Cataract Surgery"],
    accolades: [
      "Ex-President of the Kerala Society of Ophthalmic Surgeons (KSOS)",
      "Editor of Kerala Society of Ophthalmic Surgeons Journal in 1983 & 1992 - 1996",
      "Has presented papers on Retinal & Vitreous Surgery Diabetic Retinopathy at KSOS conferences and ocular trauma at AOC New Delhi 2003",
      "Authored a chapter on the retina in Ophthalmology for Undergraduates",
      "Winner of 1999 Best Paper Award - Dr. Sankaran Menon Memorial Medal instituted by Kerala State Ophthalmological Society on the subject of suture less vitrectomy"
    ],
    contact: "+91 85906 04216",
    type: "senior"
  },
  {
    name: "Dr. Harshali Yadav",
    qualification: "MBBS, MS, FMRF, FAICO (Uvea), Fellowship Vitreo retinal surgery from Sankara Nethralaya, FAICO (Uvea), Fellowship (phacoemulsification) FAICO(Neuro Ophthalmology)",
    position: "Senior Consultant - Vitreoretinal Surgery, Uvea and Neuro-ophthalmology",
    profile: "Dr. Harshali Yadav is an accomplished ophthalmologist with advanced expertise in vitreoretinal disorders and uveitis. She gained her vast experience from prestigious institutions like Sankara Nethralaya, Chennai and Aravind Eyecare Coimbatore. Further enhancing her skills, Dr. Harshali Yadav underwent specialized training in phacoemulsification techniques and received the FAICO fellowship in Uvea, solidifying her expertise in managing ocular inflammatory disorders. Dr. HarshaliYadav's clinical focus includes a strong interest in neuro-ophthalmology, particularly in diagnosing and managing visual disturbances related to neurological conditions like optic neuropathies and neurovascular eye disorders.She received FAICO fellowship in Neuro Ophthalmology. Her diverse training allows her to approach complex cases with a comprehensive, holistic view, ensuring optimal outcomes for her patients. Dr. Harshali Yadav is an active member of several prestigious medical societies, including the All-India Ophthalmological Society, the Vitreo-Retina Society of India, the Indian Neuro-ophthalmology Society, and the Uveitis Society of India. She is also a frequent speaker at national conferences.",
    specialties: ["Vitreoretinal Surgery", "Diseases of uvea", "Neuro-ophthalmology", "Cataract Surgery"],
    accolades: [
      "Co-author of 'The Sankara Nethralaya Atlas of Ophthalmic Ultrasound'",
      "Contributed chapters in 'Principles and Practice of Vitreoretinal Surgery' and 'Vitreoretinal Surgery in Eyes with Permanent Keratoprosthesis'",
      "Published research on endophthalmitis and choroiditis in peer-reviewed journals"
    ],
    contact: "+91 85890 60642",
    type: "senior"
  },
  {
    name: "Dr. Anoop Sivaraman",
    qualification: "MBBS, DNB, FVRS (Frankfurt)",
    position: "Senior Consultant - Vitreoretinal Surgery",
    profile: "Dr. Anoop Sivaraman is a highly regarded vitreoretinal and cataract surgeon with extensive clinical experience in managing complicated disorders of the eye, especially diabetic retinopathy. He is an active researcher who has participated in various clinical trials, has co-authored books in vitreo retina, authored peer-reviewed medical journals and has presented at various international and national conferences. He gained his clinical expertise under his mentors Prof. R Ramakrishnan (Aravind Eye Care System, Tamil Nadu), Prof Natarajan S (Aditya Jyot Retina Institute, Mumbai) and Prof. Frank Kock (University of Frankfurt, Germany). His international experience includes an observership at the Mayo Clinic, USA, faculty trainer in Brazzaville, Republic of Congo, charity surgical projects under Mercy Ships in Point Noire, East Africa and the Twinkling Little Eyes Projects in the slums of Mumbai, which was mentored by the late President of India, Prof. APJ Abdul Kalam.",
    specialties: ["Vitreoretinal Surgery", "Cataract Surgery", "Clinical Research"],
    accolades: [
      "Co-author of 'A case of central retinal artery occlusion in a patient with protein S deficiency' presented at Euretina, Hamburg 2013",
      "Co-author of 'Intraocular pressure changes following use of heavy silicon oil and standard silicon oil' presented at the 9th International Symposium of Ophthalmology, Guangzhou, 2013",
      "First Author of an original article titled 'Diagnosis of Endophthalmitis with amplification of syndrome specific signature genes by Syndrome Evaluation System'; Annals Of Applied Biosciences A1-4, Vol 3 Issue 1, 2016",
      "Contributor to Gass Atlas of Macular Diseases, 6th Edition",
      "Co-author of a chapter in Textbook on Ocular Therapeutics, 3rd Edition, Jaypee Publications"
    ],
    contact: "+91 85906 04216",
    type: "senior"
  },
  {
    name: "Dr. Anila George",
    qualification: "MBBS, MS, FPOS",
    position: "Head - Paediatric Ophthalmology & Adult Strabismus",
    profile: "Dr. Anila George is a senior ophthalmologist specialized in Paediatric ophthalmology and adult strabismus who has completed a long-term fellowship in the same at Aravind Eye Hospital, Tirunelveli. Passionate about community service, she has participated in numerous initiatives to raise awareness about common eye diseases in rural areas. She is also engaged in several medical education programs and has made numerous contributions to the academic field through paper and poster presentations.",
    specialties: ["Paediatric Ophthalmology & Adult Strabismus", "Cataract surgery", "Glaucoma Management"],
    accolades: [
      "Published paper: 'Comparison of Mydriasis Obtained by Tropicamide and PhenylEphrine in Type 2 Diabetic and Non-Diabetic Patients' in the International Journal of Preventive and Therapeutic Medicine (2014)",
      "Poster presentation on Haberland syndrome"
    ],
    contact: "+91 85906 04215",
    type: "senior"
  },
  {
    name: "Dr. Shabna A",
    qualification: "MBBS, DO, DNB, FICO",
    position: "Consultant - Comprehensive Ophthalmology & Medical Retina",
    profile: "Dr. Shabna A. is a highly skilled ophthalmologist with extensive experience in the field of eye care. She graduated from the Government Medical College, Kottayam, and further pursued her postgraduate studies, obtaining a PG Diploma in Ophthalmology from the prestigious Regional Institute of Ophthalmology, Thiruvananthapuram and completed her DNB in Ophthalmology from Chaithanya Eye Hospital and Research Institute, Thiruvananthapuram. She has previously worked at Iris Eye Hospital and Aradhana Eye Institute, where she honed her skills in various ophthalmic procedures and patient care. She is also actively involved in academic contributions, having presented papers at All Kerala Ophthalmology Conferences.",
    specialties: ["Cataract Surgery", "Medical Retina"],
    accolades: [
      "Published paper 'Comparison between Octopus Polar Analysis and OCT RNFLT analysis for early detection of glaucoma'",
      "Published paper 'A comparative study between portable tonometers and GAT for IOP measurement'"
    ],
    contact: "+91 95675 55646",
    type: "senior"
  }
];

export const consultants: Doctor[] = [
  {
    name: "Dr. Malavika Jayakumar",
    qualification: "MBBS (Govt. T.D. Medical College, Alappuzha), MS Ophthalmology (Sree Gokulam Medical College, Trivandrum), Fellowship in Vitreoretinal Surgery (Aravind Eye Hospital, Tirunelveli)",
    position: "Consultant Vitreoretinal Surgeon",
    profile: "Dr. Malavika Jayakumar is a consultant vitreoretinal surgeon at Sreenethra Eye Care Hospital, Trivandrum, with expertise in laser treatments and surgical management of diabetic retinopathy, retinal detachment, vitreomacular interface disorders, uveitis, and retinopathy of prematurity. A dedicated clinician and researcher, she has published work on diabetic retinopathy awareness among primary care patients. She also holds the distinction of being crowned Kalathilakam of Kerala in 2004, reflecting her accomplishments as a classical dancer and underscoring her unique blend of medical precision and artistic grace.",
    specialties: ["Vitreoretinal Surgery", "Diabetic Retinopathy", "Retinal Detachment", "Uveitis", "ROP"],
    accolades: ["Published work on diabetic retinopathy awareness among primary care patients", "Kalathilakam of Kerala in 2004"],
    contact: "+91 90379 80826",
    type: "consultant"
  },
  {
    name: "Dr. Arvin Ponnat",
    qualification: "MBBS, MS, FIGS",
    position: "Senior Consultant - Glaucoma",
    profile: "Dr. Arvin Ponnat is a dedicated glaucoma consultant with specialised training in various surgical and laser procedures, including trabeculectomy and glaucoma drainage devices. He completed his glaucoma fellowship from Aravind Eye Hospital, Madurai where he honed his skills in managing complex glaucoma cases. After his fellowship, he worked at Aravind Eye Hospital for two years, furthering his expertise in the field. He also gained valuable experience at Globe Eye Foundation in Hoskote in 2018.",
    specialties: ["Glaucoma Surgery", "Trabeculectomy", "Glaucoma Drainage Devices", "Laser Procedures"],
    accolades: ["Glaucoma fellowship from Aravind Eye Hospital, Madurai", "Two years experience at Aravind Eye Hospital"],
    contact: "+91 85906 04216",
    type: "consultant"
  },
  {
    name: "Dr. Pinki L. P.",
    qualification: "MBBS (Govt. Medical College, Alappuzha), DO (Govt. Medical College, Kottayam)",
    position: "Consultant Ophthalmologist",
    profile: "Dr. Pinki L. P. is a skilled ophthalmologist with over a decade of clinical experience. She was previously employed in Kerala Health Services for four years and has been instrumental in diagnosing and treating a wide range of eye conditions at Sreenethra Eye Care Hospital, Kottarakkara, Kollam. She also attends the KSOS State Conference annually to stay updated on the latest advancements in ophthalmology.",
    specialties: ["General Ophthalmology", "Eye Disease Diagnosis", "Treatment of Eye Conditions"],
    accolades: ["Over a decade of clinical experience", "Previously employed in Kerala Health Services for four years"],
    contact: "+91 90484 84922",
    type: "consultant"
  },
  {
    name: "Dr. Aiswaria P.",
    qualification: "MBBS (Govt. Medical College, Trivandrum), DNB Ophthalmology (Chaithanya Eye Hospital and Research Institute, Trivandrum)",
    position: "Consultant Vitreoretinal Surgeon",
    profile: "Dr. Aiswaria P. is a highly qualified ophthalmologist with extensive clinical experience. She was previously employed as a consultant ophthalmologist at Ahalia Foundation Eye Hospital and Al Hiba Eye Hospital in Trivandrum. She currently works at Sreenethra Eye Care Hospital, Kattakkada, Trivandrum. She attends the KSOS State conference annually and has presented her post-doctoral thesis on Microbial Keratitis in a tertiary eye care centre at the conference in 2015.",
    specialties: ["Vitreoretinal Surgery", "Microbial Keratitis", "General Ophthalmology"],
    accolades: ["Presented post-doctoral thesis on Microbial Keratitis in a tertiary eye care centre at KSOS State conference in 2015"],
    contact: "+91 85890 60643",
    type: "consultant"
  },
  {
    name: "Dr. Rajalekshmi S.",
    qualification: "MBBS (Govt. Medical College, Manjeri), MS Ophthalmology (Pushpagiri Institute of Medical Science and Research Centre, Thiruvalla)",
    position: "Consultant Ophthalmologist",
    profile: "Dr. Rajalekshmi S. is a skilled ophthalmologist and an ardent researcher who strives to make contributions to the field of ophthalmology. She is currently employed at Sreenethra Eye Care Hospital, Kottarakkara, Kollam. She has conducted case presentations at the Glaucoma Society of India's National Meet 2021. She also presented a poster at the KSOS State Annual Conference 2022 and a paper titled 'Frequency of Presbyopia' the following year at the same conference.",
    specialties: ["General Ophthalmology", "Glaucoma", "Presbyopia Research"],
    accolades: [
      "Case presentations at the Glaucoma Society of India's National Meet 2021",
      "Poster presentation at the KSOS State Annual Conference 2022",
      "Paper titled 'Frequency of Presbyopia' at KSOS State Annual Conference 2023"
    ],
    contact: "+91 90484 84922",
    type: "consultant"
  },
  {
    name: "Dr. Krishna G. S.",
    qualification: "MBBS (Sree Gokulam Medical College and Research Foundation, Trivandrum), DNB Ophthalmology (Dr. Agarwals Eye Hospital and Research Centre, Chennai)",
    position: "Consultant Ophthalmologist",
    profile: "Dr. Krishna G. S. is a highly skilled ophthalmologist with extensive training in various diagnostic and surgical procedures. She has previously worked at a community health centre at Nedumoncavu, Kollam and is currently employed at Sreenethra Eye Care Hospital, Neyattinkara. She is trained in Phacoemulsification, SICS, and ECCE, and completed her thesis on postoperative astigmatism comparison between Toric and Non-Toric Intraocular lenses in patients with corneal astigmatism.",
    specialties: ["Phacoemulsification", "SICS", "ECCE", "Toric IOLs", "Corneal Astigmatism"],
    accolades: ["Completed thesis on postoperative astigmatism comparison between Toric and Non-Toric Intraocular lenses in patients with corneal astigmatism"],
    contact: "+91 85906 04217",
    type: "consultant"
  }
];

export const branches: Branch[] = [
  {
    name: "Thiruvananthapuram",
    address: "Bakery Junction, Nandavanam Road, Thiruvananthapuram, Kerala",
    phone: "04712 322 322, 8590604204"
  },
  {
    name: "Kottarakkara",
    address: "Kottarakkara, Kollam",
    phone: "Contact main branch"
  },
  {
    name: "Kattakkada",
    address: "Kattakkada, Trivandrum",
    phone: "Contact main branch"
  },
  {
    name: "Neyyattinkara",
    address: "Neyyattinkara, Trivandrum",
    phone: "Contact main branch"
  },
  {
    name: "Chirayinkeezhu",
    address: "Chirayinkeezhu, Trivandrum",
    phone: "Contact main branch"
  }
];

export const supportServices = {
  laboratory: "Our laboratory provides essential diagnostic services tailored for eye care, ensuring accurate and timely results for effective patient management. We specialize in areas such as bacteriology and serology to identify infectious conditions affecting the eyes, as well as biochemistry and haematology for assessing systemic health that impacts vision. Equipped with advanced technology and a dedicated team of skilled technicians, we prioritize quality and efficiency in all procedures, seamlessly supporting your eyes health needs.",
  pharmacy: "Our pharmacy is fully stocked with a complete range of ophthalmic medications, featuring products from all major brands. We provide essential oral, intravenous, and intravitreal drugs specifically tailored for the treatment of various ophthalmological conditions. Our knowledgeable pharmacists are available to offer personalized consultations, ensuring that you receive the right medication and guidance for your treatment plan.",
  opticalShop: "The optical shop offers a diverse selection of high-quality spectacles from top brands at affordable prices. Managed by qualified optometrists and skilled technicians, our team is dedicated in helping you find the perfect pair of glasses that suits your needs and personal style. We also provide comprehensive eye examinations to ensure accurate prescriptions and offer a variety of frames and lenses to fit your lifestyle.",
  insurance: "We accept medical policies from a wide range of insurance companies across India, making healthcare more accessible for our patients. Our collaboration with various insurers allows us to provide you with flexible payment options and coverage for a variety of treatments and services. For more details and an updated list of accepted policies, we encourage you to contact our Insurance Department staff. They are available to assist you with inquiries about coverage, claims processing, and any other questions you may have regarding your insurance options."
};

export const operationTheatre = {
  description: "At Sreenethra Eye Hospital, we uphold a global standard of excellence in surgical eye care. Our world-class operation theatres are designed and maintained with unwavering attention to hygiene, precision, and safety, ensuring optimal conditions for every procedure. Outfitted with advanced infrastructure, including vertical laminar airflow systems and HEPA filtration, our surgical suites meet the highest benchmarks of sterility and infection control. Electro-hydraulic operating tables provide precision positioning for a wide range of ophthalmic interventions, enabling superior surgical access and patient comfort. Our surgeons, who are renowned experts in their specialties, are supported by a skilled clinical team and the most advanced ophthalmic technology available. For cataract surgery, we employ cutting-edge phacoemulsification systems such as the Alcon Centurion and Abbott Whitestar Signature, alongside Carl Zeiss Lumera i operating microscopes for superior visual precision. Vitreoretinal procedures are performed using the highly advanced Constellation Vision System. For LASIK and PresbyMAX treatments, we utilize the Moria Microkeratome, and for no-touch refractive corrections, we rely on the SCHWIND TransPRK system. Every detail at Sreenethra, from infrastructure to instrumentation, reflects our commitment to delivering surgical outcomes on par with the finest eye hospitals worldwide and our dedicated physicians harness this environment to achieve what matters most: a brighter and clearer tomorrow."
};
