export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  skillArea: string;
  message: string;
  createdAt: string;
}

// In-memory lead store (resets on server restart — swap for DB in production)
const leads: Lead[] = [];

export function saveLead(data: Omit<Lead, "id" | "createdAt">): Lead {
  const lead: Lead = {
    ...data,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  leads.push(lead);
  return lead;
}

export function getLeads(): Lead[] {
  return [...leads];
}
