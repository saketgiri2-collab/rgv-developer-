import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { LeadFormData } from '../types';
import { validateLeadForm, submitLead } from '../services/leadService';
import {
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Car,
  Clock,
  Send,
  Loader2,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Building,
  MapPin
} from 'lucide-react';

interface SiteVisitFormProps {
  initialProject?: string;
  onSuccess?: () => void;
  onOpenBookingModal?: (project?: string) => void;
}

export const SiteVisitForm: React.FC<SiteVisitFormProps> = ({ initialProject, onSuccess }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredProject: initialProject || 'New City North',
    preferredDate: minDateStr,
    preferredSlot: 'Morning (10:00 AM – 1:00 PM)',
    requirementType: 'Plotted Land / Villa Plot',
    message: '',
    source: 'On-Page Site Visit Section',
  });

  const [wantsPickup, setWantsPickup] = useState(true);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateLeadForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitLead({
        ...formData,
        message: wantsPickup
          ? `[Cab Pickup Requested] ${formData.message || ''}`.trim()
          : formData.message,
      });

      if (result.success) {
        setSubmissionSuccess(result.message);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        setErrors({ fullName: result.message });
      }
    } catch {
      setErrors({ fullName: 'Could not process request. Please call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#DDD4C5] p-6 sm:p-10 lg:p-12 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Details & Trust */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F4EE] border border-[#B89452]/40 mb-3 shadow-xs">
              <CalendarCheck className="w-3.5 h-3.5 text-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                VIP SITE VISIT
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#25231F] tracking-tight">
              Schedule Your Private Site Tour
            </h2>
            <p className="text-sm text-[#6F6A61] mt-2 leading-relaxed font-normal">
              Experience the actual layout avenues, clubhouse zones, and plot boundaries with our senior property advisors.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] flex items-start gap-3">
              <Car className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-[#25231F] block">
                  Complimentary Chauffeur Pickup
                </span>
                <span className="text-xs text-[#6F6A61]">
                  Door-to-door AC cab pickup available anywhere across Bengaluru, 7 days a week.
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-[#25231F] block">
                  Transparent Legal Desk
                </span>
                <span className="text-xs text-[#6F6A61]">
                  Review original survey maps, conversion orders, and planning blueprints on-site.
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-[#25231F] block">
                  Visiting Hours
                </span>
                <span className="text-xs text-[#6F6A61]">
                  Monday to Sunday: 9:00 AM – 6:30 PM (Site visits operating 7 days).
                </span>
              </div>
            </div>
          </div>

          {/* Quick Phone Call Action */}
          <div className="p-5 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#6F6A61] uppercase tracking-wider block">
                Direct Hotline
              </span>
              <a href="tel:7624997854" className="font-display font-bold text-xl text-[#25231F] hover:text-[#B89452]">
                7624997854
              </a>
            </div>
            <a
              href="tel:7624997854"
              className="p-3 bg-white border border-[#DDD4C5] hover:border-[#B89452] text-[#B89452] transition-colors shadow-xs"
              title="Call 7624997854"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-[#F7F4EE] p-6 sm:p-8 lg:p-10 border border-[#DDD4C5] shadow-xs">
          {submissionSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#25231F]">
                Site Visit Request Received
              </h3>
              <p className="text-sm text-[#6F6A61] max-w-md mx-auto leading-relaxed font-normal">
                {submissionSuccess}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmissionSuccess(null)}
                  className="gold-button text-white px-6 py-3 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Schedule Another Visit
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#DDD4C5] pb-3 mb-4">
                <h3 className="font-display font-bold text-xl text-[#25231F]">
                  Book a Site Visit
                </h3>
                <p className="text-xs text-[#6F6A61] mt-0.5">
                  Fill in your details below to confirm your site tour schedule.
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-[#25231F] placeholder:text-[#6F6A61]/50 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-[#DDD4C5] focus:border-[#B89452]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-[#25231F] placeholder:text-[#6F6A61]/50 focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-[#DDD4C5] focus:border-[#B89452]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-[#25231F] placeholder:text-[#6F6A61]/50 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#DDD4C5] focus:border-[#B89452]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Project */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                  Select Township / Project <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                    <Building className="w-4 h-4" />
                  </div>
                  <select
                    name="preferredProject"
                    value={formData.preferredProject}
                    onChange={handleChange}
                    className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#DDD4C5] text-xs text-[#25231F] focus:outline-none focus:border-[#B89452]"
                  >
                    <option value="New City North" className="bg-white text-[#25231F]">New City North (Near Rajankunte — ₹1,799/sq.ft.)</option>
                    <option value="New City" className="bg-white text-[#25231F]">New City (Doddaballapura — ₹1,199/sq.ft.)</option>
                    <option value="Both Projects" className="bg-white text-[#25231F]">Both Projects (General Inquiry)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    min={minDateStr}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-[#DDD4C5] text-xs text-[#25231F] focus:outline-none focus:border-[#B89452]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      name="preferredSlot"
                      value={formData.preferredSlot}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#DDD4C5] text-xs text-[#25231F] focus:outline-none focus:border-[#B89452]"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)" className="bg-white text-[#25231F]">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:00 PM)" className="bg-white text-[#25231F]">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 6:30 PM)" className="bg-white text-[#25231F]">Evening (4:00 PM – 6:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                  Message / Pickup Address (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Please arrange cab pickup from Yelahanka / Interested in 30x40 East facing plot"
                  className="w-full px-3 py-2 bg-white border border-[#DDD4C5] text-xs text-[#25231F] focus:outline-none focus:border-[#B89452] placeholder:text-[#6F6A61]/50"
                />
              </div>

              {/* Complimentary Cab Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="pickup-checkbox"
                  checked={wantsPickup}
                  onChange={(e) => setWantsPickup(e.target.checked)}
                  className="w-4 h-4 accent-[#B89452]"
                />
                <label htmlFor="pickup-checkbox" className="text-xs text-[#25231F] cursor-pointer">
                  Request complimentary AC door-to-door cab pickup for my family
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button text-white w-full py-4 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  id="submit-site-visit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Scheduling Visit...</span>
                    </>
                  ) : (
                    <span>BOOK SITE VISIT</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
