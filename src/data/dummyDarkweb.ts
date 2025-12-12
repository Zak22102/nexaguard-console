export interface DarkWebLeak {
  id: string;
  email: string;
  foundDate: string;
  source: string;
  risk: 'Low' | 'Medium' | 'High';
  type: 'email' | 'password' | 'domain';
  details?: string;
}

export const dummyDarkweb: DarkWebLeak[] = [
  {
    id: '1',
    email: 'admin@virksomhed.dk',
    foundDate: '2024-01-14',
    source: 'RaidForums Leak 2024',
    risk: 'High',
    type: 'password',
    details: 'Password hash found in leaked database'
  },
  {
    id: '2',
    email: 'cfo@virksomhed.dk',
    foundDate: '2024-01-12',
    source: 'Telegram Channel',
    risk: 'High',
    type: 'email',
    details: 'Email listed in targeted phishing campaign'
  },
  {
    id: '3',
    email: 'it-support@virksomhed.dk',
    foundDate: '2024-01-10',
    source: 'Dark Web Marketplace',
    risk: 'Medium',
    type: 'password',
    details: 'Credentials found in combo list'
  },
  {
    id: '4',
    email: 'hr@virksomhed.dk',
    foundDate: '2024-01-08',
    source: 'Pastebin',
    risk: 'Low',
    type: 'email',
    details: 'Email address exposed in public paste'
  },
  {
    id: '5',
    email: 'sales@virksomhed.dk',
    foundDate: '2024-01-05',
    source: 'Data Breach Collection',
    risk: 'Medium',
    type: 'email',
    details: 'Part of historical LinkedIn breach'
  },
];

export interface DarkWebStats {
  leakedEmails: number;
  exposedPasswords: number;
  domainMentions: number;
  lastScan: string;
}

export const dummyDarkwebStats: DarkWebStats = {
  leakedEmails: 12,
  exposedPasswords: 5,
  domainMentions: 3,
  lastScan: '2024-01-15T12:00:00Z'
};
