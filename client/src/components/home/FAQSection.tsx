import { HelpCircle } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept a wide variety of local and international health insurance plans including Mediclaim, HDFC ERGO, Star Health, and Bajaj Allianz. Please contact our dedicated insurance desk or check with your provider for specific coverage details, cashless approvals, and reimbursement processes."
    },
    {
      question: "How do I book an appointment with a specialist?",
      answer: "You can book an appointment directly through our website by clicking the 'Book Appointment' button, using our mobile app, or by calling our 24/7 hotline at 1-800-NUCLEUS. We also accept walk-ins for emergency and trauma cases."
    },
    {
      question: "What are your general and ICU visiting hours?",
      answer: "General visiting hours are from 10:00 AM to 8:00 PM daily. However, ICU and specialized ward timings are strictly regulated to two visitors per patient between 4:00 PM and 6:00 PM to maintain a sterile and peaceful environment. Children under 12 are generally not permitted in the ICU."
    },
    {
      question: "Do you offer telemedicine or online video consultations?",
      answer: "Yes, our expert doctors provide secure online video consultations for non-emergency conditions, follow-up checkups, and second opinions. You can easily schedule a virtual visit through our online patient portal from the comfort of your home."
    },
    {
      question: "Does the hospital have in-house diagnostic and pharmacy services?",
      answer: "Absolutely. Nucleus Hospital is equipped with a state-of-the-art 24/7 NABL-accredited diagnostic laboratory, advanced imaging center (MRI, CT Scan, X-Ray), and a fully stocked 24-hour pharmacy to ensure you get everything under one roof."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 relative z-10 overflow-hidden">
      <FadeIn delay={0.1} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider mb-6">
          <HelpCircle className="h-4 w-4" />
          <span>Need Answers?</span>
        </div>
        <h2 className="text-4xl font-extrabold mb-4 text-base-content">Frequently Asked Questions</h2>
        <p className="text-xl text-base-content/70">Find quick answers to common questions about our hospital.</p>
      </FadeIn>

      <StaggerContainer staggerDelay={0.1} className="space-y-4">
        {faqs.map((faq, i) => (
          <StaggerItem key={i} className="collapse collapse-arrow bg-base-100 border border-base-200 shadow-sm rounded-2xl">
            <input type="radio" name="faq-accordion" defaultChecked={i === 0} /> 
            <div className="collapse-title text-xl font-semibold text-base-content">
              {faq.question}
            </div>
            <div className="collapse-content"> 
              <p className="text-base-content/70 leading-relaxed text-lg pb-4">{faq.answer}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
