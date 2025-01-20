import { useState, useEffect } from 'react';

export default function PrivacyModal({ togglePrivacyModal, isPrivacyOpen }) {
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(isPrivacyOpen);
  const [shouldRenderModal, setShouldRenderModal] = useState(isPrivacyOpen);

  useEffect(() => {
    if (isPrivacyOpen) {
      const scrollY = window.scrollY; // Get current scroll position
      document.body.style.position = 'fixed'; // Fix the body
      document.body.style.top = `-${scrollY}px`; // Offset to prevent jumping
      document.body.style.width = '100%'; // Ensure the body doesn't shrink
      setShouldRenderOverlay(true);
      setShouldRenderModal(true);
    } else {
      const modalTimeout = setTimeout(() => setShouldRenderModal(false), 0);
      const overlayTimeout = setTimeout(() => {
        setShouldRenderOverlay(false);
        const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
        document.body.style.position = ''; // Restore position
        document.body.style.top = ''; // Reset top offset
        document.body.style.width = ''; // Reset width
        window.scrollTo(0, scrollY); // Restore scroll position
      }, 0);
  
      return () => {
        clearTimeout(modalTimeout);
        clearTimeout(overlayTimeout);
      };
    }
  }, [isPrivacyOpen]);

  if (!shouldRenderOverlay) return null;

  return (
    <div className="fixed inset-0 z-[50]">
      {/* Overlay */}
      {shouldRenderOverlay && (
        <div
          className={`absolute inset-0 bg-black/50 ${
            isPrivacyOpen ? 'animate-fade-in' : 'animate-fade-out'
          }`}
        />
      )}

      {/* Modal */}
      {shouldRenderModal && (
        <div
          onAnimationEnd={() => {
            if (!isPrivacyOpen) setShouldRenderModal(false);
          }}
          className={`${
            isPrivacyOpen ? 'animate-fade-in' : 'animate-fade-out'
          } isolate bg-n-8 px-6 py-24 sm:py-28 lg:px-8 relative rounded-lg shadow-lg max-h-screen overflow-y-auto z-10`}
        >
          {/* Close Button */}
          <button
            onClick={togglePrivacyModal}
            className="absolute top-10 right-10 md:top-15 md:right-15 lg:top-20 lg:right-20 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 p-2"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: '#333' }}
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
        aria-hidden="true"
        className="fixed blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

          {/* Modal Content */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance mb-15 md:text-6xl font-semibold tracking-tight text-4xl">
              Privacy Policy
            </h2>
            <p className="text-sm font-light text-left">
              At Monarcha Consulting, your privacy is of utmost importance to us. We are committed to safeguarding your personal information and ensuring transparency in how we handle your data. This Privacy Policy explains the types of information we collect, how we use it, and the steps we take to protect it. By accessing our website or using our services, you acknowledge that you have read, understood, and agree to this policy.
            </p>
            <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            1. Information We Collect
          </h3>
          <p className="text-sm font-light text-left">
            We collect information to better understand your needs and provide tailored services. The types of information we collect include:
          </p>
          <br />
          <h4 className="text-base text-left font-semibold">1.1 Personal Information</h4>
          <br />
          <p className="text-sm font-light text-left">
            When you interact with us, we may collect the following details:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Full name, email address, phone number, and business name.</li>
            <li>- Other details you voluntarily provide, such as project requirements or preferences.</li>
          </ul>
          <br />
          <h4 className="text-base text-left font-semibold">1.2 Usage Data</h4>
          <br />
          <p className="text-sm font-light text-left">
            We automatically collect certain data when you visit our website, including:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Your IP address, browser type, operating system, and device information.</li>
            <li>- Pages visited, time spent on pages, and other browsing behavior.</li>
            <li>- Referral source (e.g., the website or ad that directed you to us).</li>
          </ul>
          <br />
          <h4 className="text-base text-left font-semibold">1.3 Cookies and Tracking Technologies</h4>
          <br />
          <p className="text-sm font-light text-left">
            To improve your user experience, we may use cookies and similar tracking tools. These allow us to:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Remember your preferences.</li>
            <li>- Analyze website traffic and user behavior.</li>
            <li>- Deliver targeted advertisements (where applicable).</li>
          </ul>
          <br />
          <p className="text-sm font-light text-left">
            You can manage or disable cookies through your browser settings; however, some features of our website may not function properly without cookies.
          </p>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            2. How We Use Your Information
          </h3>
          <p className="text-sm font-light text-left">
            The information we collect is utilized to provide high-quality services and improve your experience. Specifically, we use your data to:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Deliver and enhance our services, including brand development, lead generation, and sales strategies.</li>
            <li>- Respond to inquiries, schedule consultations, and communicate effectively.</li>
            <li>- Send promotional materials, newsletters, or updates about our services (with your explicit consent).</li>
            <li>- Monitor website performance, gather analytics, and optimize user experience.</li>
            <li>- Detect and prevent fraudulent or unauthorized activity.</li>
          </ul>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            3. Data Security
          </h3>
          <p className="text-sm font-light text-left">
            We are committed to protecting your data through:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Secure servers and encrypted communication channels (e.g., HTTPS).</li>
            <li>- Regular audits and updates to ensure compliance with data protection standards.</li>
            <li>- Limited access to personal data, restricted only to authorized personnel and trusted partners.</li>
          </ul>
          <br />
          <p className="text-sm font-light text-left">
            While we strive to implement robust security measures, no method of internet transmission or electronic storage is entirely secure. We cannot guarantee absolute protection of your data but take every reasonable precaution to minimize risks.
          </p>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            4. Sharing Your Information
          </h3>
          <p className="text-sm font-light text-left">
            Your privacy is a priority, and we do not sell or rent your personal information. However, we may share data under the following circumstances:
          </p>
          <br />
          <h4 className="text-base text-left font-semibold">4.1 With Trusted Service Providers</h4>
          <br />
          <p className="text-sm font-light text-left">
            We work with third-party vendors to support our business operations, including:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Hosting providers and email delivery services.</li>
            <li>- Marketing platforms for campaign management.</li>
            <li>- Payment processors, where applicable.</li>
          </ul>
          <br />
          <p className="text-sm font-light text-left">
            All service providers are contractually obligated to protect your data and use it solely for the services they perform for us.
          </p>
          <br />
          <h4 className="text-base text-left font-semibold">4.2 Legal Requirements</h4>
          <br />
          <p className="text-sm font-light text-left">
            We may disclose your personal information if required by law, subpoena, or legal process, or if we believe disclosure is necessary to:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Protect our legal rights.</li>
            <li>- Prevent harm or fraud.</li>
            <li>- Comply with government regulations.</li>
          </ul>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            5. Your Rights
          </h3>
          <p className="text-sm font-light text-left">
            As a user, you have the following rights regarding your personal data:
          </p>
          <br />
          <ul className="text-sm font-light text-left">
            <li>- Access: Request a copy of the data we hold about you.</li>
            <li>- Correction: Update or correct inaccurate or incomplete information.</li>
            <li>- Deletion: Request the deletion of your personal data (subject to legal or contractual obligations).</li>
            <li>- Restriction: Restrict how we process your data in certain circumstances.</li>
            <li>- Opt-out: Unsubscribe from marketing communications at any time.</li>
          </ul>
          <br />
          <p className="text-sm font-light text-left">
            To exercise your rights, please email us. We aim to respond to all requests within 30 days.
          </p>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            6. Children’s Privacy
          </h3>
          <p className="text-sm font-light text-left">
            Our services are not directed toward individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently gathered data from a child, we will promptly delete it.
          </p>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            7. International Data Transfers
          </h3>
          <p className="text-sm font-light text-left">
            If you are accessing our services from outside the United States, please note that your data may be transferred to and processed in countries where data protection laws may differ from your jurisdiction. By using our services, you consent to such transfers.
          </p>
          <h3 className="text-left my-5 text-2xl font-semibold tracking-tight sm:text-2xl">
            8. Changes to This Privacy Policy
          </h3>
          <p className="text-sm font-light text-left">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When we make significant updates, we will notify you through our website or other appropriate channels. We encourage you to review this policy regularly to stay informed.
          </p>
          </div>
        </div>
      )}
    </div>
  );
}