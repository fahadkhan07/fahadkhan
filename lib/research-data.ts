export type PubCategory =
  | 'Journal Publication'
  | 'Accepted for Publication'
  | 'Conference Presentation'
  | 'Research Proposal'
  | 'Thesis'

export interface Publication {
  id: string
  category: PubCategory
  title: string
  authors: string
  year: string
  monthYear: string
  venue: string | null
  status: 'Full-text available' | 'File available'
  abstract: string | null
  tags: string[]
  researchGateUrl: string
  doi: string | null
  apa: string | null
}

export interface ResearchProject {
  title: string
  authors: string
  status: string
  type: string
  description: string
  methods: string[]
  keywords: string[]
}

export interface ResearchArea {
  area: string
  icon: string
  description: string
}

// ─── VERIFIED: Exactly 8 items from CV ─────────────────────────────────────
// Counts: Journal Publication × 3, Accepted for Publication × 1,
//         Conference Presentation × 2, Research Proposal × 1, Thesis × 1
export const publications: Publication[] = [

  // ── PEER-REVIEWED JOURNAL ARTICLES (3) ────────────────────────────────

  {
    id: 'legal-compliance-tannery',
    category: 'Journal Publication',
    title:
      'Legal Compliance of Waste Management in Savar BSCIC Tannery Industrial Estate: An Assessment from Environmental Criminological Perspective',
    authors: 'Khan, F. B. I. and Akond, A.',
    year: '2024',
    monthYear: 'February 2024',
    venue: 'TWIST International Multidisciplinary Journal',
    status: 'Full-text available',
    abstract:
      'Examines the Savar BSCIC Tannery Industrial Estate, the only tannery industrial estate in Bangladesh, focusing on waste management practices and legal compliance. Findings show that lack of effective waste management regulations, substandard technology, and inadequate treatment facilities are causing significant environmental harm. Data were collected through qualitative methods including focus group discussions, in-depth interviews, and direct observation.',
    tags: ['Environmental Criminology', 'Waste Management', 'Bangladesh', 'Legal Compliance', 'Human Rights'],
    researchGateUrl:
      'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective',
    doi: '10.5281/zenodo.10049652',
    apa: 'Khan, F. B. I. and Akond, A. (2024). Legal compliance of waste management in Savar BSCIC tannery industrial estate: An assessment from environmental criminological perspective. TWIST International Multidisciplinary Journal, 19(1), 306-320. https://twistjournal.net/twist/article/view/131',
  },

  {
    id: 'tourist-victimization-bangladesh',
    category: 'Journal Publication',
    title:
      'Nature of Crime Victimization Among Tourists in Bangladesh: An Analysis',
    authors: 'Khan, F. B. I. and Akter, M.',
    year: '2023',
    monthYear: 'July 2023',
    venue: 'International Journal of Law Management and Humanities',
    status: 'Full-text available',
    abstract:
      'Examines how tourism growth in Bangladesh correlates with increased criminal threats targeting visitors. Using opportunity theory, routine activity theory, and Butler\'s TALC model, the study identifies victimization patterns across tourist destinations. Key crimes include theft, robbery, sexual assault, and terrorism. Contributing factors include economic disadvantage, tourist vulnerability, underreported incidents, security gaps, and inadequate governance.',
    tags: ['Tourist Victimization', 'Crime', 'Bangladesh', 'Tourism', 'Routine Activity Theory'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: '10.10000/IJLMH.115097',
    apa: 'Khan, F. B. I. and Akter, M. (2023). Nature of crime victimization among tourists in Bangladesh: An analysis. International Journal of Law Management and Humanities, 6(3), 2711-2726. https://doij.org/10.10000/IJLMH.115097',
  },

  {
    id: 'food-victimization',
    category: 'Journal Publication',
    title:
      'From Victimless Crime to Habitual Victim: An Empirical Study on Food Victimization',
    authors: 'Akter, M., Kazi, T. and Khan, F. B. I.',
    year: '2023',
    monthYear: 'November 2023',
    venue: 'International Journal of Research and Innovation in Social Science',
    status: 'Full-text available',
    abstract: null,
    tags: ['Food Victimization', 'Victimology', 'Empirical Study', 'Social Science', 'Criminology'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: '10.47772/IJRISS.2023.701133',
    apa: 'Akter, M., Kazi, T. and Khan, F. B. I. (2023). From victimless crime to habitual victim: An empirical study on food victimization. International Journal of Research and Innovation in Social Science, 7(10), 1729-1750. https://dx.doi.org/10.47772/IJRISS.2023.701133',
  },

  // ── ACCEPTED FOR PUBLICATION (1) ──────────────────────────────────────

  {
    id: 'drug-tourism-youth',
    category: 'Accepted for Publication',
    title:
      'Drug Tourism and Youth: Legal Awareness, Attitudes, and Policy Implications for Mississippi',
    authors: 'Khan, F. B. I. and Greenspan, R.',
    year: '2025',
    monthYear: '2025',
    venue: 'International Journal for Crime, Justice and Social Democracy',
    status: 'File available',
    abstract: null,
    tags: ['Drug Tourism', 'Youth', 'Legal Awareness', 'Drug Policy', 'Mississippi'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: 'Khan, F. B. I. and Greenspan, R. (2025). Drug tourism and youth: Legal awareness, attitudes, and policy implications for Mississippi. International Journal for Crime, Justice and Social Democracy.',
  },

  // ── CONFERENCE PRESENTATIONS (2) ──────────────────────────────────────

  {
    id: 'asc-2025-drug-policy',
    category: 'Conference Presentation',
    title:
      'Punitive vs. Rehabilitative Drug Policies: A Comparative Analysis across U.S. States',
    authors: 'Khan, F. B. I.',
    year: '2025',
    monthYear: '2025',
    venue: 'American Society of Criminology Annual Meeting, Washington, D.C., USA',
    status: 'File available',
    abstract: null,
    tags: ['Drug Policy', 'Comparative Analysis', 'Punishment', 'Rehabilitation', 'U.S. States'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: 'Khan, F. B. I. (2025). Punitive vs. rehabilitative drug policies: A comparative analysis across U.S. states. Paper presented at the American Society of Criminology Annual Meeting, Washington, D.C., USA.',
  },

  {
    id: 'esc-warsaw-2026',
    category: 'Conference Presentation',
    title:
      'Western Paradigm, Epistemic Colonialism and Pedagogical Challenges: Toward a Quest for Decolonizing Criminology in Bangladesh',
    authors: 'Islam, M. J., Hossain, M. L., Khan, F. B. I. and Tazally, U. A.',
    year: '2026',
    monthYear: '2026',
    venue: 'European Society of Criminology Annual Conference, Warsaw, Poland',
    status: 'File available',
    abstract: null,
    tags: ['Criminology', 'Decolonization', 'Bangladesh', 'Pedagogy', 'Comparative Criminology'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: 'Islam, M. J., Hossain, M. L., Khan, F. B. I. and Tazally, U. A. (2026). Western paradigm, epistemic colonialism and pedagogical challenges: Toward a quest for decolonizing criminology in Bangladesh. Paper accepted for presentation at the European Society of Criminology Annual Conference, Warsaw, Poland.',
  },

  // ── RESEARCH PROPOSAL (1) ──────────────────────────────────────────────

  {
    id: 'police-brutality-comparative',
    category: 'Research Proposal',
    title:
      'Victimization and Police Brutality: A Comparative Study of Nigeria and Bangladesh',
    authors: 'Khan, F. B. I. (Principal Investigator)',
    year: '2024',
    monthYear: 'December 2024',
    venue: null,
    status: 'File available',
    abstract: null,
    tags: ['Police Brutality', 'Victimization', 'Nigeria', 'Bangladesh', 'Comparative Study', 'Policing'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: null,
  },

  // ── THESIS (1) ────────────────────────────────────────────────────────

  {
    id: 'institutional-strain-marijuana',
    category: 'Thesis',
    title:
      'Institutional Strain and Substance Coping: Analyzing Perceived Racial Discrimination as a Predictor of Adolescent Marijuana Use',
    authors: 'Khan, F. B. I.',
    year: '2026',
    monthYear: 'May 2026',
    venue: 'University of Mississippi',
    status: 'Full-text available',
    abstract: null,
    tags: ['Adolescent Substance Use', 'Racial Discrimination', 'Strain Theory', 'Marijuana', 'Youth Justice'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: null,
  },
]

// ─── SECTION CONFIG ────────────────────────────────────────────────────────

export const pubCategories: PubCategory[] = [
  'Journal Publication',
  'Accepted for Publication',
  'Conference Presentation',
  'Research Proposal',
  'Thesis',
]

export const categoryLabels: Record<PubCategory, string> = {
  'Journal Publication':       'Peer-Reviewed Journal Publications',
  'Accepted for Publication':  'Accepted for Publication',
  'Conference Presentation':   'Conference Presentations',
  'Research Proposal':         'Research Projects and Proposals',
  'Thesis':                    'Thesis Research',
}

export const categoryDescriptions: Record<PubCategory, string> = {
  'Journal Publication':       'Articles published in verified peer-reviewed academic journals.',
  'Accepted for Publication':  'Manuscripts accepted for publication in peer-reviewed journals.',
  'Conference Presentation':   'Papers presented or accepted for presentation at academic conferences.',
  'Research Proposal':         'Formal research proposals and in-progress research designs.',
  'Thesis':                    'Graduate thesis research submitted for academic degree requirements.',
}

// ─── RESEARCH PROJECTS ────────────────────────────────────────────────────

export const researchProjects: ResearchProject[] = [
  {
    title: 'Drug Tourism and Youth: Legal Awareness, Attitudes, and Policy Implications for Mississippi',
    authors: 'Khan, F. B. I. and Greenspan, R.',
    status: 'Accepted for Publication',
    type: 'Journal Article',
    description:
      'Accepted for publication in the International Journal for Crime, Justice and Social Democracy. Examines legal awareness and attitudes toward drug tourism among youth in Mississippi, with implications for state drug policy.',
    methods: ['Survey Research', 'Quantitative Analysis', 'Policy Analysis'],
    keywords: ['Drug Tourism', 'Youth', 'Mississippi', 'Drug Policy', 'Legal Awareness'],
  },
  {
    title: 'The Role of Television Media and Deviant Behaviour Among Secondary School Going Children: An Empirical Study',
    authors: 'Akter, M., Khan, F. B. I., Ahmed, P. and Hasan, M.',
    status: 'University Funded Project',
    type: 'Research Project',
    description:
      'A university-funded research project at Mawlana Bhashani Science and Technology University (MBSTU). Empirically examines the relationship between television media consumption and deviant behaviour among secondary school children.',
    methods: ['Empirical Study', 'Survey Research', 'Quantitative Analysis'],
    keywords: ['Media and Crime', 'Deviant Behaviour', 'Youth', 'Television', 'Bangladesh'],
  },
  {
    title: 'Nature of Cross-Border Wildlife Crime in Bangladesh: An Analysis on the Current Crisis and Prospect for a Secure Future',
    authors: 'Khan, F. B. I. and Miah, A. K.',
    status: 'Under Review',
    type: 'Journal Article',
    description:
      'Currently under review. Analyzes cross-border wildlife crime patterns in Bangladesh, examines the current crisis, and proposes pathways toward more secure wildlife governance.',
    methods: ['Qualitative Analysis', 'Policy Analysis', 'Comparative Analysis'],
    keywords: ['Wildlife Crime', 'Environmental Criminology', 'Bangladesh', 'Cross-Border Crime'],
  },
  {
    title: 'Confidence over Judicial Proceedings from the Perception of Plaintiff and Defendant: An Empirical Study on Tangail Court',
    authors: 'Khan, F. B. I., Hasan, N. and Aziz, M. B.',
    status: 'Accepted for Publication',
    type: 'Journal Article',
    description:
      'Accepted for publication. Empirically examines public confidence in judicial proceedings from the dual perspectives of plaintiffs and defendants in Tangail Court, Bangladesh.',
    methods: ['Empirical Study', 'Survey Research', 'In-depth Interviews'],
    keywords: ['Judicial Confidence', 'Court Proceedings', 'Bangladesh', 'Legitimacy'],
  },
  {
    title: 'The Current Status of Forensic Psychology in Bangladesh: A Review Analysis',
    authors: 'Khandaker, A. N., Akter, M. and Khan, F. B. I.',
    status: 'Academic Seminar Paper',
    type: 'Seminar Paper',
    description:
      'Academic seminar paper presented at the Department of Criminology and Police Science, MBSTU. Reviews the current development and challenges of forensic psychology as a discipline in Bangladesh.',
    methods: ['Literature Review', 'Systematic Review'],
    keywords: ['Forensic Psychology', 'Bangladesh', 'Criminal Justice', 'Review Analysis'],
  },
  {
    title: 'Socio-Psychological Condition of Released Female Prisoner: An Exploratory Study on Mymensingh District',
    authors: 'Khan, F. B. I., Akter, M. and Yesmen, N.',
    status: 'In Processing',
    type: 'Research Project',
    description:
      'An exploratory study examining the socio-psychological conditions facing released female prisoners in Mymensingh District, Bangladesh, and the barriers to successful reintegration.',
    methods: ['Qualitative Research', 'In-depth Interviews', 'Case Studies'],
    keywords: ['Prisoner Reentry', 'Female Prisoners', 'Reintegration', 'Bangladesh', 'Socio-Psychology'],
  },
  {
    title: 'Fear of Sexual Harassment among Adolescent Girls: A Study on the School Going Students of Tangail District',
    authors: 'Hasan, M., Khan, F. B. I. and Talukder, M. I. A.',
    status: 'In Processing',
    type: 'Research Project',
    description:
      'Examines the prevalence of fear of sexual harassment among adolescent school girls in Tangail District, Bangladesh, and its effects on educational participation and social behavior.',
    methods: ['Survey Research', 'Qualitative Research', 'Focus Group Discussion'],
    keywords: ['Sexual Harassment', 'Adolescent Girls', 'Fear of Crime', 'Bangladesh', 'Education'],
  },
  {
    title: 'Impact of Occupational Stress among Police Personnel: An Exploratory Study on Tangail Model Thana',
    authors: 'Hossain, D., Khan, F. B. I. and Akter, M.',
    status: 'In Processing',
    type: 'Research Project',
    description:
      'An exploratory study investigating occupational stress among police personnel at Tangail Model Thana, Bangladesh, with attention to its effects on police performance and well-being.',
    methods: ['Qualitative Research', 'In-depth Interviews', 'Observation Method'],
    keywords: ['Police Stress', 'Occupational Stress', 'Policing', 'Bangladesh', 'Police Well-being'],
  },
]

// ─── RESEARCH AREAS ───────────────────────────────────────────────────────

export const researchAreas = [
  {
    area: 'Drug Policy and Enforcement',
    icon: '💊',
    description:
      'Historical development, implementation, and consequences of U.S. drug prohibition — from the Harrison Act to the Controlled Substances Act and beyond.',
  },
  {
    area: 'Comparative Criminology',
    icon: '🌐',
    description:
      'Cross-national analysis of criminal justice systems, policies, and outcomes with focus on international differences in punishment, law, and reform.',
  },
  {
    area: 'Criminal Justice Policy',
    icon: '⚖️',
    description:
      'Broad engagement with criminological theory, criminal justice institutions, and the social conditions that produce crime and punishment.',
  },
  {
    area: 'Race, Crime, and Justice',
    icon: '🏛️',
    description:
      'Investigation of racial disparities across policing, prosecution, sentencing, and incarceration within U.S. criminal justice.',
  },
  {
    area: 'Policing and Prison',
    icon: '🚔',
    description:
      'Critical analysis of police use of force, carceral systems, accountability mechanisms, and the structural conditions that shape institutional violence.',
  },
  {
    area: 'Environmental Criminology',
    icon: '🌿',
    description:
      'Application of criminological frameworks to environmental crime, illegal waste management, and violations of environmental regulation.',
  },
  {
    area: 'Tourist Victimization',
    icon: '🌍',
    description:
      'Examination of crime patterns targeting tourists and travelers, with attention to situational vulnerability and international comparative contexts.',
  },
  {
    area: 'Wildlife Crime',
    icon: '🦁',
    description:
      'Investigation of illegal wildlife trade, poaching, and environmental offenses through a criminological and regulatory lens.',
  },
  {
    area: 'Judicial Confidence',
    icon: '📋',
    description:
      'Examination of public trust in courts and legal institutions, and the factors that shape perceived legitimacy of the judiciary.',
  },
  {
    area: 'Youth and Adolescent Justice',
    icon: '👥',
    description:
      'Research on juvenile delinquency, the juvenile justice system, and evidence-based interventions for at-risk youth populations.',
  },
]

export const methodsExpertise = [
  'Quantitative Research',
  'Qualitative Research',
  'Mixed Methods',
  'Survey Research',
  'Focus Group Discussion',
  'In-depth Interviews',
  'Observation Method',
  'Policy Analysis',
  'Literature Review',
  'Data Analysis and Interpretation',
]

export const softwareTools = [
  'SPSS', 'R', 'Stata', 'SAS', 'ATLAS.ti', 'NVivo', 'UCINet', 'ArcGIS',
  'Kobo Toolbox', 'Twitter API', 'Zotero', 'Mendeley',
  'Microsoft Office Suite', 'Google Workspace', 'Adobe Illustrator',
]
