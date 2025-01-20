import { useState, useEffect } from 'react';
import { Field, Label, Switch } from '@headlessui/react';

export default function ContactModal({ isOpen, toggleModal, togglePrivacyModal }) {
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(false);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [ privacyErrorMessage, setPrivacyErrorMessage ] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    first: '',
    last: '',
    company: '',
    email: '',
  });

  useEffect(() => {
    if (isOpen) {
      // Show overlay and content
      setShouldRenderOverlay(true);
      setTimeout(() => setShouldRenderContent(true), 150); // Delay to stagger the animations
    } else {
      // Hide content first, then overlay
      setShouldRenderContent(false);
      setTimeout(() => setShouldRenderOverlay(false), 300); // Match the animation duration
    }
  }, [isOpen]);

  if (!shouldRenderOverlay) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreed) {
      setPrivacyErrorMessage(true);
      return;
    };

    setIsSubmitting(true);
    setIsSubmitted(true);
  
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeSGqOrNfbJwQgm6meX9dBuxzYA_ujuMAVSgFLrVryBCda87w/formResponse";
  
    const formPayload = new URLSearchParams();
    formPayload.append('entry.2005620554', encodeURIComponent(formData.first));  // First name
    formPayload.append('entry.203788129', encodeURIComponent(formData.last));   // Last name
    formPayload.append('entry.1065046570', encodeURIComponent(formData.company)); // Company
    formPayload.append('entry.1045781291', encodeURIComponent(formData.email));   // Email
  
    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formPayload,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        setTimeout(() => {
          toggleModal();
          setPrivacyErrorMessage(false);
        }, 1000);

      } else {
        console.log('Failed to submit the form!');
        setTimeout(() => {
          toggleModal();
          setPrivacyErrorMessage(false);
        }, 1000);
      }
    } catch (error) {
      console.log('Error submitting form: ' + error.message);
      setTimeout(() => {
        toggleModal();
        setPrivacyErrorMessage(false);
      }, 1000);
    }
  };
  

  return (
    <div
      className={`fixed inset-0 z-[50] bg-black/50 ${
        isOpen ? 'animate-fade-in' : 'animate-fade-out'
      }`}
    >
      {shouldRenderContent && (
        <div
          onAnimationEnd={() => !isOpen && setShouldRenderOverlay(false)}
          className={`${
            isOpen ? 'animate-fade-in-scale' : 'animate-fade-out-scale'
          } isolate bg-n-8 px-6 py-14 sm:py-28 lg:px-8 relative rounded-lg shadow-lg h-screen`}
        >
          {/* Close Button */}
          <button
            onClick={toggleModal}
            className="absolute top-10 right-10 md:top-15 md:right-15 lg:top-20 lg:right-20 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 p-2"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance mb-15 md:text-6xl font-semibold tracking-tight text-4xl">Get in touch</h2>
        </div>
        <form action="#" method="POST" className="mx-auto max-w-xl px-[2rem] sm:mt-15" onSubmit={handleSubmit}>
          {/* Form Content */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/4">
                First name *
              </label>
              <div className="mt-2.5">
                <input
                  required
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  onChange={handleChange}
                  className="block w-full rounded-md bg-n-2 text-gray-900 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/4">
                Last name *
              </label>
              <div className="mt-2.5">
                <input
                required
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  onChange={handleChange}
                  className="block w-full rounded-md bg-n-2 text-gray-900 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/4">
              Company *
            </label>
            <div className="mt-2.5">
              <input
              required
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                onChange={handleChange}
                className="block w-full rounded-md bg-n-2 text-gray-900 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/4">
              Email *
            </label>
            <div className="mt-2.5">
              <input
              required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                className="block w-full rounded-md bg-n-2 text-gray-900 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
            </div>
          </div>
          
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a onClick={togglePrivacyModal} className="font-semibold text-indigo-600 cursor-pointer">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
          </div>

          {privacyErrorMessage && (
            <div className='mt-3 text-red-900 text-sm font-semibold animate__animated animate__headShake'>
              <span role="img" aria-label="warning">⚠️ </span>
                You must agree to the privacy policy.
            </div>
          )}
  
          <div className="mt-10 flex justify-center">
          <button
    disabled={isSubmitting}
    type="submit"
    className={`flex items-center justify-center px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-500 ease-in-out ${
      isSubmitted
        ? "w-16 h-16 rounded-full bg-indigo-600"
        : "w-full rounded-md bg-indigo-600 hover:bg-indigo-500"
    }`}
  >
    {isSubmitted && isSubmitting ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white animate-draw"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ) : (
      "Let's talk"
    )}
  </button>
          </div>

        </form>
        </div>
      )}
    </div>
  );
}
