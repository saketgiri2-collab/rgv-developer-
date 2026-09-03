import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { LeadFormData } from '../types';
import { validateLeadForm, submitLead } from '../services/leadService';
import {
  X,
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Car,
  Clock,
  Send,
  Loader2,
  Phone,
  User,
  Mail,
  Building
} from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
  isBrochureMode?: boolean;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialProject,
  isBrochureMode = false,
}) => {
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
    source: isBrochureMode ? 'Brochure Download Request' : 'Modal Site Visit Booking',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  // Synchronize when opened with a specific project
  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({ ...prev, preferredProject: initialProject }));
    }
    setSubmissionSuccess(null);
    setErrors({});
  }, [initialProject, isOpen, isBrochureMode]);

  if (!isOpen) return null;

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
        source: isBrochureMode ? 'Brochure Download Request' : 'Modal Site Visit Booking',
      });

      if (result.success) {
        setSubmissionSuccess(result.message);
      } else {
        setErrors({ fullName: result.message });
      }
    } catch {
      setErrors({ fullName: 'Unable to submit request. Please reach out via phone.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#25231F]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#DDD4C5] shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#F7F4EE] border-b border-[#DDD4C5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white border border-[#B89452]/40 flex items-center justify-center text-[#B89452] shadow-xs">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#25231F]">
                {isBrochureMode ? 'Request Project Brochure' : 'Book a VIP Site Visit'}
              </h3>
              <p className="text-xs text-[#6F6A61]">
                {isBrochureMode
                  ? 'Receive floor plans, layout blueprints and price sheets'
                  : 'Complimentary private cab pickup & guided plot tour'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6F6A61] hover:text-[#25231F] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-white">
          {submissionSuccess ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-[#25231F]">
                Site Visit Request Confirmed
              </h4>
              <p className="text-sm text-[#6F6A61] max-w-md mx-auto leading-relaxed">
                {submissionSuccess}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:7624997854`}
                  className="w-full sm:w-auto px-5 py-2.5 border border-[#DDD4C5] text-xs font-bold tracking-wider text-[#25231F] uppercase hover:border-[#B89452] transition-all flex items-center justify-center gap-2 bg-[#F7F4EE] shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#B89452]" />
                  <span>Call 7624997854</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto gold-button text-white px-6 py-2.5 text-xs font-bold tracking-wider uppercase cursor-pointer shadow-md"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
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

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
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
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
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

              {/* Project Selection */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
                  Select Project <span className="text-rose-500">*</span>
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
                    <option value="New City North" className="bg-white text-[#25231F]">New City North (Near Rajankunte - ₹1,799/sq.ft.)</option>
                    <option value="New City" className="bg-white text-[#25231F]">New City (Doddaballapura - ₹1,199/sq.ft.)</option>
                    <option value="Both Projects" className="bg-white text-[#25231F]">Both Projects (General Inquiry)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="preferredDate"
                      min={minDateStr}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-[#DDD4C5] text-xs text-[#25231F] focus:outline-none focus:border-[#B89452]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
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
                <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1.5">
                  Message / Special Request (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Please arrange cab pickup from Hebbal / Plot size requirement 30x40"
                  className="w-full px-3 py-2 bg-white border border-[#DDD4C5] text-xs text-[#25231F] focus:outline-none focus:border-[#B89452] placeholder:text-[#6F6A61]/50"
                />
              </div>

              {/* Complimentary Cab Note */}
              <div className="flex items-center gap-2 p-2.5 bg-[#F7F4EE] border border-[#DDD4C5] text-xs text-[#6F6A61]">
                <Car className="w-4 h-4 text-[#B89452] shrink-0" />
                <span>Complimentary door-to-door cab pickup available 7 days a week.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="gold-button text-white w-full py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processing Site Visit...</span>
                  </>
                ) : (
                  <span>BOOK SITE VISIT</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
