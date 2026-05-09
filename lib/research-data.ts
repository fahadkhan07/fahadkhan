export type PubCategory =
  | 'Peer-Reviewed Publication'
  | 'Working Paper'
  | 'Conference Paper'
  | 'Thesis'

export interface Publication {
  id: string
  category: PubCategory
  title: string
  authors: string
  year: string
  venue: string
  status: string
  abstract: string
  tags: string[]
  researchGateUrl?: string
  doi?: string
  available: boolean
  apa: string
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

export const publications: Publication[] = [
  {
    id: 'tourist-victimization-bangladesh',
    category: 'Peer-Reviewed Publication',
    title:
      'Nature of Crime Victimization among Tourists in Bangladesh: An Analysis',
    authors: 'Khan, F. B. I., & Akter, M.',
    year: '2023',
    venue: 'International Journal of Law Management & Humanities (IJLMH), 6(3), 2711–2726',
    status: 'Published',
    abstract:
      'This study examines how tourism growth in Bangladesh correlates with increased criminal threats targeting visitors. Using opportunity theory, routine activity theory, and Butler\'s TALC model, the study identifies victimization patterns across tourist destinations. Key crimes include theft, robbery, sexual assault, and terrorism. Contributing factors include economic disadvantage, tourist vulnerability, underreported incidents, security gaps, and inadequate governance. The paper recommends coordinated government and law enforcement action to protect tourists.',
    tags: ['Tourist Victimization', 'Crime', 'Bangladesh', 'Tourism', 'Routine Activity Theory'],
    researchGateUrl:
      'https://www.researchgate.net/publication/340055853_Tourism_and_Crime_The_Case_of_Bangladesh',
    doi: '10.10000/IJLMH.115097',
    available: true,
    apa: 'Khan, F. B. I., & Akter, M. (2023). Nature of crime victimization among tourists in Bangladesh: An analysis. International Journal of Law Management & Humanities, 6(3), 2711–2726. https://doij.org/10.10000/IJLMH.115097',
  },
  {
    id: 'legal-compliance-tannery',
    category: 'Peer-Reviewed Publication',
    title:
      'Legal Compliance of Waste Management in Tannery Industrial Estate in Bangladesh: An Assessment from Environmental Criminological Perspective',
    authors: 'Khan, F. B. I., & Akond, M. A.',
    year: '2024',
    venue: 'TWIST, 19(1), 306–320',
    status: 'Published',
    abstract:
      'This study examines the Savar BSCIC Tannery Industrial Estate — the only tannery industrial estate in Bangladesh — focusing on waste management practices and legal compliance. Findings show that lack of effective waste management regulations, use of substandard technology, and inadequate treatment facilities are causing significant environmental harm. Data were collected through qualitative methods including focus group discussions, in-depth interviews, and direct observation.',
    tags: ['Environmental Criminology', 'Waste Management', 'Bangladesh', 'Legal Compliance', 'Human Rights'],
    researchGateUrl:
      'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective',
    doi: '10.5281/zenodo.10049652',
    available: true,
    apa: 'Khan, F. B. I., & Akond, M. A. (2024). Legal compliance of waste management in tannery industrial estate in Bangladesh: An assessment from environmental criminological perspective. TWIST, 19(1), 306–320. https://doi.org/10.5281/zenodo.10049652',
  },
  {
    id: 'capital-punishment-disparities',
    category: 'Working Paper',
    title:
      'Examining Disparities in Capital Punishment: An Evaluation of Sentencing Outcomes and Policy Responses in the United States',
    authors: 'Khan, F. B. I., & Brown, K. L.',
    year: '2024',
    venue: 'ResearchGate Preprint',
    status: 'Preprint',
    abstract:
      'This paper critically examines racial, socioeconomic, and geographic disparities in capital punishment sentencing in the United States. Findings indicate that around 35% of all capital punishment cases after 1976 were declared in Texas alone, that defendants whose victims were White faced persistent structural bias despite state-level reforms, and that the Supreme Court has confirmed such structural bias in death sentencing. The paper calls for an intersectional analysis of overlapping disparities in capital sentencing.',
    tags: ['Capital Punishment', 'Sentencing Disparities', 'Racial Bias', 'Death Penalty', 'Policy Reform'],
    researchGateUrl:
      'https://www.researchgate.net/publication/396973193_Examining_Disparities_in_Capital_Punishment_An_Evaluation_of_Sentencing_Outcomes_and_Policy_Responses_in_the_United_States',
    doi: '10.13140/RG.2.2.13556.62080',
    available: true,
    apa: 'Khan, F. B. I., & Brown, K. L. (2024). Examining disparities in capital punishment: An evaluation of sentencing outcomes and policy responses in the United States. ResearchGate. https://doi.org/10.13140/RG.2.2.13556.62080',
  },
]

export const pubCategories: PubCategory[] = [
  'Peer-Reviewed Publication',
  'Working Paper',
  'Conference Paper',
  'Thesis',
]

export const categoryLabels: Record<PubCategory, string> = {
  'Peer-Reviewed Publication': 'Peer-Reviewed Journal Articles',
  'Working Paper': 'Working Papers & Preprints',
  'Conference Paper': 'Conference Papers & Presentations',
  'Thesis': 'Thesis & Academic Research',
}

export const categoryDescriptions: Record<PubCategory, string> = {
  'Peer-Reviewed Publication': 'Articles published in peer-reviewed academic journals.',
  'Working Paper': 'Manuscripts under review, in preparation, or available as preprints.',
  'Conference Paper': 'Papers presented at academic conferences and symposia.',
  'Thesis': 'Graduate thesis research submitted in partial fulfillment of degree requirements.',
}

export const researchProjects: ResearchProject[] = [
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

export const researchAreas: ResearchArea[] = [
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
