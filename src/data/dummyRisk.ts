export interface RiskData {
  score: number;
  level: 'Low' | 'Medium' | 'High';
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  factors: {
    name: string;
    score: number;
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

export const dummyRisk: RiskData = {
  score: 72,
  level: 'Medium',
  trend: 'up',
  lastUpdated: '2024-01-15T14:35:00Z',
  factors: [
    { name: 'Unusual login attempts', score: 25, impact: 'negative' },
    { name: 'Patch compliance', score: 85, impact: 'positive' },
    { name: 'Endpoint protection', score: 92, impact: 'positive' },
    { name: 'Data exfiltration alerts', score: 15, impact: 'negative' },
    { name: 'Email security', score: 78, impact: 'neutral' },
  ]
};

export interface AISummary {
  observations: string[];
  risks: string[];
  recommendations: string[];
  generatedAt: string;
}

export const dummyAISummary: AISummary = {
  observations: [
    'Der er registreret 3 kritiske hændelser inden for de sidste 24 timer',
    'Usædvanlig loginaktivitet fra IP-range 185.234.x.x observeret',
    'PowerShell-baserede angrebsforsøg detekteret på flere endpoints',
    'Email-baserede phishing-forsøg er steget 40% denne uge'
  ],
  risks: [
    'Potentiel brute-force kampagne mod Microsoft 365 konti',
    'Mulig insider threat baseret på usædvanlige dataoverførselsmønstre',
    'Risiko for lateral movement efter privilege escalation forsøg'
  ],
  recommendations: [
    'Implementér IP-blokering for mistænkelige IP-ranges',
    'Gennemfør password reset for berørte konti',
    'Aktiver enhanced monitoring på kritiske systemer',
    'Gennemgå og opdater conditional access policies'
  ],
  generatedAt: '2024-01-15T14:35:00Z'
};

export interface TimelineEvent {
  id: string;
  timestamp: string;
  type: 'incident' | 'alert' | 'info' | 'resolved';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export const dummyTimeline: TimelineEvent[] = [
  {
    id: '1',
    timestamp: '2024-01-15T14:32:00Z',
    type: 'incident',
    title: 'Kritisk login anomali',
    description: 'Usædvanlig loginaktivitet detekteret fra ukendt lokation',
    severity: 'critical'
  },
  {
    id: '2',
    timestamp: '2024-01-15T14:25:00Z',
    type: 'alert',
    title: 'Mistænkelig PowerShell aktivitet',
    description: 'Base64-kodet kommando udført på WS-042',
    severity: 'high'
  },
  {
    id: '3',
    timestamp: '2024-01-15T14:10:00Z',
    type: 'alert',
    title: 'API rate limit overskredet',
    description: 'Muligt brute force angreb på /auth/login',
    severity: 'medium'
  },
  {
    id: '4',
    timestamp: '2024-01-15T14:00:00Z',
    type: 'resolved',
    title: 'Phishing email blokeret',
    description: 'CEO impersonation email sat i karantæne',
    severity: 'low'
  },
  {
    id: '5',
    timestamp: '2024-01-15T13:55:00Z',
    type: 'incident',
    title: 'Privilege escalation forsøg',
    description: 'Detekteret på domain controller DC-01',
    severity: 'critical'
  },
];
