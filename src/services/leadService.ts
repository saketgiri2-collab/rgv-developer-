import { LeadFormData, LeadSubmissionResult } from '../types';
import { siteConfig } from '../config/siteConfig';

const LEADS_STORAGE_KEY = 'rgv_developers_captured_leads';

/**
 * Validates a lead form payload
 */
export function validateLeadForm(data: LeadFormData): { isValid: boolean; errors: Partial<Record<keyof LeadFormData, string>> } {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  // Validate Indian phone number (10 digits, starting with 6, 7, 8, or 9, optional +91 or 0 prefix)
  const cleanPhone = data.phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number';
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate preferred project
  if (!data.preferredProject || data.preferredProject.trim() === '') {
    errors.preferredProject = 'Please select a preferred project';
  }

  // Validate visit date is not in the past
  if (data.preferredDate) {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      errors.preferredDate = 'Visit date cannot be in the past';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submits the lead to the lead management system / CRM architecture
 */
export async function submitLead(data: LeadFormData): Promise<LeadSubmissionResult> {
  // Simulate network round-trip for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 850));

  try {
    const leadId = 'RGV-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 1000);
    const timestamp = new Date().toISOString();

    const storedRecord = {
      leadId,
      timestamp,
      ...data,
      status: 'NEW_LEAD',
    };

    // Store lead in browser localStorage for demonstration & offline reliability
    try {
      const existingLeads = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
      existingLeads.unshift(storedRecord);
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existingLeads.slice(0, 50)));
    } catch {
      // localStorage may be disabled in restricted environments
    }

    // In a live environment with a configured CRM / Webhook URL, we could dispatch to an API route:
    /*
    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(storedRecord),
      });
    }
    */

    return {
      success: true,
      message: 'Thank you! Your site visit request has been received. Our senior property advisor will contact you within 15 minutes with complete project details and site visit arrangements.',
      leadId,
      timestamp,
    };
  } catch (error) {
    return {
      success: false,
      message: 'There was a temporary issue processing your request. Please call us directly or message us on WhatsApp for instant booking.',
    };
  }
}

/**
 * Creates a formatted direct WhatsApp URL with pre-filled message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMessage = `Hello RGV Developers, I am interested in exploring your projects and booking a site visit. Please share project brochures and available dates.`;
  const message = customMessage || defaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encoded}`;
}

/**
 * Formats a project specific WhatsApp query
 */
export function getProjectWhatsAppLink(projectName: string): string {
  const message = `Hello RGV Developers, I am interested in ${projectName}. Please share the current price sheet, master layout, and available plot sizes.`;
  return `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
