export type PubCategory =
  | 'Journal Publication'
  | 'Research Article'
  | 'Preprint'
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

// ─── VERIFIED: Exactly 8 items from ResearchGate profile/research ──────────
// Source: https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research
// Counts: Articles × 4, Thesis × 1, Preprints × 2, Research Proposal × 1
export const publications: Publication[] = [

  // ── PUBLISHED ARTICLES (4) ─────────────────────────────────────────────

  {
    id: 'bordered-justice',
    category: 'Research Article',
    title:
      'Bordered Justice: A Conflict Theory Analysis of Drug Tourism, Law Enforcement, and Sentencing Disparities in the United States',
    authors: 'Khan, F. B. I.',
    year: '2025',
    monthYear: 'May 2025',
    venue: null,
    status: 'Full-text available',
    abstract: null,
    tags: ['Drug Tourism', 'Conflict Theory', 'Law Enforcement', 'Sentencing Disparities', 'Drug Policy'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: null,
  },

  {
    id: 'legal-compliance-tannery',
    category: 'Journal Publication',
    title:
      'Legal Compliance of Waste Management in Tannery Industrial Estate in Bangladesh: An Assessment from Environmental Criminological Perspective',
    authors: 'Khan, F. B. I., & Akond, M. A.',
    year: '2024',
    monthYear: 'February 2024',
    venue: 'TWIST',
    status: 'Full-text available',
    abstract:
      'Examines the Savar BSCIC Tannery Industrial Estate — the only tannery industrial estate in Bangladesh — focusing on waste management practices and legal compliance. Findings show that lack of effective waste management regulations, substandard technology, and inadequate treatment facilities are causing significant environmental harm. Data were collected through qualitative methods including focus group discussions, in-depth interviews, and direct observation.',
    tags: ['Environmental Criminology', 'Waste Management', 'Bangladesh', 'Legal Compliance', 'Human Rights'],
    researchGateUrl:
      'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective',
    doi: '10.5281/zenodo.10049652',
    apa: 'Khan, F. B. I., & Akond, M. A. (2024). Legal compliance of waste management in tannery industrial estate in Bangladesh: An assessment from environmental criminological perspective. TWIST. https://doi.org/10.5281/zenodo.10049652',
  },

  {
    id: 'food-victimization',
    category: 'Journal Publication',
    title:
      'From Victimless Crime to Habitual Victim: An Empirical Study on Food Victimization',
    authors: 'Khan, F. B. I., & Tauhid, K.',
    year: '2023',
    monthYear: 'November 2023',
    venue: 'International Journal of Research and Innovation in Social Science',
    status: 'Full-text available',
    abstract: null,
    tags: ['Food Victimization', 'Victimology', 'Empirical Study', 'Social Science', 'Criminology'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: 'Khan, F. B. I., & Tauhid, K. (2023). From victimless crime to habitual victim: An empirical study on food victimization. International Journal of Research and Innovation in Social Science.',
  },

  {
    id: 'tourist-victimization-bangladesh',
    category: 'Journal Publication',
    title:
      'Nature of Crime Victimization Among Tourists in Bangladesh: An Analysis',
    authors: 'Khan, F. B. I., & Akter, M.',
    year: '2023',
    monthYear: 'July 2023',
    venue: 'International Journal of Law Management & Humanities',
    status: 'Full-text available',
    abstract:
      'Examines how tourism growth in Bangladesh correlates with increased criminal threats targeting visitors. Using opportunity theory, routine activity theory, and Butler\'s TALC model, the study identifies victimization patterns across tourist destinations. Key crimes include theft, robbery, sexual assault, and terrorism. Contributing factors include economic disadvantage, tourist vulnerability, underreported incidents, security gaps, and inadequate governance.',
    tags: ['Tourist Victimization', 'Crime', 'Bangladesh', 'Tourism', 'Routine Activity Theory'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: '10.10000/IJLMH.115097',
    apa: 'Khan, F. B. I., & Akter, M. (2023). Nature of crime victimization among tourists in Bangladesh: An analysis. International Journal of Law Management & Humanities. https://doij.org/10.10000/IJLMH.115097',
  },

  // ── PREPRINTS (2) ──────────────────────────────────────────────────────

  {
    id: 'drug-tourism-youth',
    category: 'Preprint',
    title:
      'Drug Tourism and Youth: Legal Awareness, Attitudes, and Policy Implications for Mississippi',
    authors: 'Khan, F. B. I., & Greenspan, R.',
    year: '2025',
    monthYear: 'April 2025',
    venue: null,
    status: 'File available',
    abstract: null,
    tags: ['Drug Tourism', 'Youth', 'Legal Awareness', 'Drug Policy', 'Mississippi'],
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
    apa: null,
  },

  {
    id: 'capital-punishment-disparities',
    category: 'Preprint',
    title:
      'Examining Disparities in Capital Punishment: An Evaluation of Sentencing Outcomes and Policy Responses in the United States',
    authors: 'Khan, F. B. I., & Brown, K. L.',
    year: '2024',
    monthYear: 'December 2024',
    venue: null,
    status: 'File available',
    abstract:
      'Critically examines racial, socioeconomic, and geographic disparities in capital punishment sentencing in the United States. Findings indicate that around 35% of all capital punishment cases after 1976 were declared in Texas alone, and that defendants whose victims were White faced persistent structural bias despite state-level reforms. The paper calls for an intersectional analysis of overlapping disparities in capital sentencing.',
    tags: ['Capital Punishment', 'Sentencing Disparities', 'Racial Bias', 'Death Penalty', 'Policy Reform'],
    researchGateUrl:
      'https://www.researchgate.net/publication/396973193_Examining_Disparities_in_Capital_Punishment_An_Evaluation_of_Sentencing_Outcomes_and_Policy_Responses_in_the_United_States',
    doi: '10.13140/RG.2.2.13556.62080',
    apa: 'Khan, F. B. I., & Brown, K. L. (2024). Examining disparities in capital punishment: An evaluation of sentencing outcomes and policy responses in the United States. https://doi.org/10.13140/RG.2.2.13556.62080',
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
    authors: 'Khan, F. B. I., & Walker, D.',
    year: '2026',
    monthYear: 'May 2026',
    venue: null,
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
  'Research Article',
  'Preprint',
  'Research Proposal',
  'Thesis',
]

export const categoryLabels: Record<PubCategory, string> = {
  'Journal Publication': 'Peer-Reviewed / Journal Publications',
  'Research Article':    'Research Articles',
  'Preprint':            'Working Papers & Preprints',
  'Research Proposal':   'Research Projects & Proposals',
  'Thesis':              'Thesis Research',
}

export const categoryDescriptions: Record<PubCategory, string> = {
  'Journal Publication': 'Articles published in verified peer-reviewed academic journals.',
  'Research Article':    'Scholarly research articles available on ResearchGate. No verified journal venue at this time.',
  'Preprint':            'Manuscripts available as preprints or currently under review.',
  'Research Proposal':   'Formal research proposals and in-progress research designs.',
  'Thesis':              'Graduate thesis research submitted for academic degree requirements.',
}

// ─── RESEARCH PROJECTS ────────────────────────────────────────────────────

export const researchProjects = [
  {
    title: 'The Racial Architecture of Drug Sentencing',
    status: 'In Progress',
    type: 'Dissertation',
    description:
      'This project examines how federal and state drug sentencing guidelines — particularly mandatory minimum statutes — have functioned as mechanisms of racial control. Drawing on sentencing commission data, court records, and legislative history, I analyze how ostensibly race-neutral policies produce racially disparate outcomes.',
    methods: ['Quantitative Analysis', 'Legal Archival Research', 'Policy Analysis'],
    keywords: ['Sentencing', 'Race', 'Drug Policy', 'Mandatory Minimums'],
  },
  {
    title: 'Harm Reduction as Criminal Justice Reform',
    status: 'Working Paper',
    type: 'Journal Article',
    description:
      'This paper evaluates the evidence base for harm reduction approaches — including needle exchange programs, overdose prevention sites, and supervised consumption facilities — as complements to, or substitutes for, punitive drug enforcement regimes.',
    methods: ['Systematic Review', 'Comparative Policy Analysis', 'Case Studies'],
    keywords: ['Harm Reduction', 'Overdose Prevention', 'Drug Policy', 'Public Health'],
  },
  {
    title: 'Prosecutorial Discretion and the War on Drugs',
    status: 'Conceptual Stage',
    type: 'Research Project',
    description:
      'An investigation of how prosecutorial charging decisions shape racial and socioeconomic disparities in drug case outcomes. This project examines variation in plea bargaining practices and charging patterns across jurisdictions with different drug policy regimes.',
    methods: ['Comparative Case Analysis', 'Prosecutorial Data', 'Interview Research'],
    keywords: ['Prosecution', 'Discretion', 'Plea Bargaining', 'Drug Courts'],
  },
  {
    title: 'The Political Economy of Drug Prohibition',
    status: 'Exploratory',
    type: 'Theoretical Paper',
    description:
      'A theoretical examination of how economic interests, political coalitions, and moral panics have sustained drug prohibition despite evidence of its failures. Engaging with criminological theory and political science, this work situates drug policy within broader structures of governance and social control.',
    methods: ['Historical Analysis', 'Political Economy Framework', 'Theoretical Synthesis'],
    keywords: ['Prohibition', 'Political Economy', 'Social Control', 'History'],
  },
]

// ─── RESEARCH AREAS ───────────────────────────────────────────────────────

export const researchAreas = [
  {
    area: 'Criminology and Criminal Justice',
    icon: '⚖️',
    description:
      'Broad engagement with criminological theory, criminal justice institutions, and the social conditions that produce crime and punishment.',
  },
  {
    area: 'Drug Policy',
    icon: '💊',
    description:
      'Historical development, implementation, and consequences of U.S. drug prohibition — from the Harrison Act to the Controlled Substances Act and beyond.',
  },
  {
    area: 'Tourist Victimization',
    icon: '🌍',
    description:
      'Examination of crime patterns targeting tourists and travelers, with attention to situational vulnerability and international comparative contexts.',
  },
  {
    area: 'Environmental Criminology',
    icon: '🌿',
    description:
      'Application of criminological frameworks to environmental crime, illegal waste management, and violations of environmental regulation.',
  },
  {
    area: 'Wildlife Crime',
    icon: '🦁',
    description:
      'Investigation of illegal wildlife trade, poaching, and environmental offenses through a criminological and regulatory lens.',
  },
  {
    area: 'Policing and Police Brutality',
    icon: '🚔',
    description:
      'Critical analysis of police use of force, accountability mechanisms, and the structural conditions that produce police violence.',
  },
  {
    area: 'Prisoner Reentry',
    icon: '🔓',
    description:
      'Study of the barriers and facilitators of successful reintegration for formerly incarcerated individuals into communities and labor markets.',
  },
  {
    area: 'Judicial Confidence',
    icon: '🏛️',
    description:
      'Examination of public trust in courts and legal institutions, and the factors that shape perceived legitimacy of the judiciary.',
  },
  {
    area: 'Youth and Adolescent Justice',
    icon: '👥',
    description:
      'Research on juvenile delinquency, the juvenile justice system, and evidence-based interventions for at-risk youth populations.',
  },
  {
    area: 'Comparative Criminal Justice',
    icon: '🌐',
    description:
      'Cross-national analysis of criminal justice systems, policies, and outcomes with focus on international differences in punishment and reform.',
  },
]

export const methodsExpertise = [
  'Quantitative Research',
  'Qualitative Research',
  'Mixed Methods',
]

export const softwareTools = [
  'SPSS', 'Stata', 'SAS', 'R', 'NVivo', 'ATLAS.ti', 'ArcGIS', 'Excel', 'Zotero', 'Mendeley',
]
