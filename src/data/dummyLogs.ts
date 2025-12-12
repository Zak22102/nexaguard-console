export interface LogEntry {
  id: string;
  timestamp: string;
  source: string;
  level: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
  environment: string;
  message: string;
  suspicious: boolean;
  details?: string;
}

export const dummyLogs: LogEntry[] = [
  {
    id: '1',
    timestamp: '2024-01-15T14:32:00Z',
    source: 'Microsoft 365',
    level: 'CRITICAL',
    environment: 'Production',
    message: 'Unusual login attempt from unknown IP address (185.234.xx.xx) - potential brute force attack detected',
    suspicious: true,
    details: 'Multiple failed login attempts followed by successful authentication from previously unseen location.'
  },
  {
    id: '2',
    timestamp: '2024-01-15T14:28:00Z',
    source: 'Firewall',
    level: 'ERROR',
    environment: 'Production',
    message: 'Blocked connection attempt to known malware C2 server',
    suspicious: true,
    details: 'Outbound connection blocked to IP associated with known command and control infrastructure.'
  },
  {
    id: '3',
    timestamp: '2024-01-15T14:25:00Z',
    source: 'Endpoint',
    level: 'WARNING',
    environment: 'Production',
    message: 'Suspicious PowerShell execution detected on workstation WS-042',
    suspicious: true,
    details: 'Base64 encoded PowerShell command executed with elevated privileges.'
  },
  {
    id: '4',
    timestamp: '2024-01-15T14:20:00Z',
    source: 'Azure AD',
    level: 'WARNING',
    environment: 'Production',
    message: 'New conditional access policy bypass detected',
    suspicious: false,
    details: 'User accessed resources bypassing MFA requirement via legacy authentication.'
  },
  {
    id: '5',
    timestamp: '2024-01-15T14:15:00Z',
    source: 'Database',
    level: 'INFO',
    environment: 'Staging',
    message: 'Database backup completed successfully',
    suspicious: false
  },
  {
    id: '6',
    timestamp: '2024-01-15T14:10:00Z',
    source: 'API Gateway',
    level: 'ERROR',
    environment: 'Production',
    message: 'Rate limit exceeded for API endpoint /auth/login',
    suspicious: true,
    details: 'Over 500 requests in 60 seconds from single IP range.'
  },
  {
    id: '7',
    timestamp: '2024-01-15T14:05:00Z',
    source: 'Email Security',
    level: 'WARNING',
    environment: 'Production',
    message: 'Phishing email detected and quarantined',
    suspicious: true,
    details: 'Email impersonating CEO requesting wire transfer. Sender domain similar to company domain.'
  },
  {
    id: '8',
    timestamp: '2024-01-15T14:00:00Z',
    source: 'VPN',
    level: 'INFO',
    environment: 'Production',
    message: 'VPN tunnel established for remote user',
    suspicious: false
  },
  {
    id: '9',
    timestamp: '2024-01-15T13:55:00Z',
    source: 'Windows Server',
    level: 'CRITICAL',
    environment: 'Production',
    message: 'Privilege escalation attempt detected on domain controller',
    suspicious: true,
    details: 'Attempted use of known privilege escalation vulnerability CVE-2024-1234.'
  },
  {
    id: '10',
    timestamp: '2024-01-15T13:50:00Z',
    source: 'Network',
    level: 'WARNING',
    environment: 'Production',
    message: 'Unusual data exfiltration pattern detected',
    suspicious: true,
    details: 'Large volume of data transferred to external cloud storage service during off-hours.'
  },
  {
    id: '11',
    timestamp: '2024-01-15T13:45:00Z',
    source: 'Antivirus',
    level: 'ERROR',
    environment: 'Production',
    message: 'Malware detected and blocked: Trojan.GenericKD.46584532',
    suspicious: true
  },
  {
    id: '12',
    timestamp: '2024-01-15T13:40:00Z',
    source: 'Web Server',
    level: 'INFO',
    environment: 'Production',
    message: 'SSL certificate renewed successfully',
    suspicious: false
  },
];
