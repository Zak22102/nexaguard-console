export interface NIS2Category {
  id: string;
  name: string;
  score: number;
  status: 'compliant' | 'partial' | 'non-compliant';
  requirements: number;
  fulfilled: number;
}

export const dummyNis2Categories: NIS2Category[] = [
  {
    id: 'governance',
    name: 'Governance',
    score: 85,
    status: 'compliant',
    requirements: 12,
    fulfilled: 10
  },
  {
    id: 'incident',
    name: 'Incident Handling',
    score: 70,
    status: 'partial',
    requirements: 15,
    fulfilled: 11
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    score: 90,
    status: 'compliant',
    requirements: 10,
    fulfilled: 9
  },
  {
    id: 'risk',
    name: 'Risk Management',
    score: 65,
    status: 'partial',
    requirements: 18,
    fulfilled: 12
  },
  {
    id: 'documentation',
    name: 'Documentation',
    score: 45,
    status: 'non-compliant',
    requirements: 20,
    fulfilled: 9
  }
];

export interface NIS2Violation {
  id: string;
  requirement: string;
  category: string;
  severity: 'Low' | 'Medium' | 'High';
  description: string;
  deadline?: string;
}

export const dummyNis2Violations: NIS2Violation[] = [
  {
    id: '1',
    requirement: 'Art. 21(2)(a) - Risk policies',
    category: 'Risk Management',
    severity: 'High',
    description: 'Manglende dokumenteret risikostyringsproces for alle kritiske systemer',
    deadline: '2024-03-01'
  },
  {
    id: '2',
    requirement: 'Art. 21(2)(b) - Incident handling',
    category: 'Incident Handling',
    severity: 'Medium',
    description: 'Incident response plan mangler opdatering for 2024',
    deadline: '2024-02-15'
  },
  {
    id: '3',
    requirement: 'Art. 23 - Reporting',
    category: 'Documentation',
    severity: 'High',
    description: 'Procedure for NIS2-rapportering til myndigheder ikke implementeret',
    deadline: '2024-02-01'
  },
  {
    id: '4',
    requirement: 'Art. 21(2)(g) - Security training',
    category: 'Governance',
    severity: 'Medium',
    description: '15% af medarbejdere mangler årlig sikkerhedstræning',
    deadline: '2024-04-01'
  }
];

export interface NIS2Recommendation {
  id: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  effort: 'Low' | 'Medium' | 'High';
  description: string;
}

export const dummyNis2Recommendations: NIS2Recommendation[] = [
  {
    id: '1',
    title: 'Implementér centraliseret logning',
    priority: 'High',
    effort: 'Medium',
    description: 'Saml alle sikkerhedslogs i ét centralt system for bedre overblik og compliance.'
  },
  {
    id: '2',
    title: 'Opdater incident response plan',
    priority: 'High',
    effort: 'Low',
    description: 'Gennemgå og opdater eksisterende incident response procedurer til NIS2 krav.'
  },
  {
    id: '3',
    title: 'Gennemfør risiko assessment',
    priority: 'Medium',
    effort: 'High',
    description: 'Udfør komplet risikovurdering af alle kritiske systemer og dataflows.'
  },
  {
    id: '4',
    title: 'Etabler rapporteringsworkflow',
    priority: 'High',
    effort: 'Medium',
    description: 'Opsæt automatiseret workflow for NIS2-påkrævet rapportering til myndigheder.'
  }
];

export const dummyNis2OverallScore = 71;
