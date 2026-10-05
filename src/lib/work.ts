import type { FlowStep } from '@/components/SystemFlow'

// Client wording reproduced exactly as supplied. Do not correct or reword.

export const healthMattersQuotes = {
  elaine: {
    quote:
      "The booking check is much cleaner, the data feels far less overwhelming, and you've somehow managed to achieve the rare feat of making a spreadsheet more user-friendly without breaking everyone's spirit in the process.",
    name: 'Elaine McCrory',
    role: 'Operations Coordinator',
  },
  shaun: {
    quote:
      "Conrad took the time to understand how we work before he built anything. The new system has taken real pressure off the admin team, and I'd recommend him to any business.",
    name: 'Shaun Doran',
    role: 'Owner',
  },
} as const

// Schematic flows. Every label and detail restates a fact from the case study copy.

export const healthMattersFlow: FlowStep[] = [
  { label: 'Booking', detail: 'Staff pick the company and the service' },
  { label: 'Invoice details', detail: 'Filled in automatically, with the price' },
  { label: 'Missing info flagged', detail: 'Before anything reaches accounts' },
  { label: 'Accounts' },
]

export const eastBorderFlow: FlowStep[] = [
  { label: 'Request', detail: 'Annual leave, time in lieu or mileage' },
  { label: 'Manager approval', detail: 'Replacing paper and email' },
  { label: 'Logged', detail: 'One system for requests and approvals' },
  { label: 'Project coded', detail: 'Mileage coded to the right EU-funded project' },
]
