'use client'

import { createContext, useContext, useEffect, useState } from 'react';

export const PopupContext = createContext();

export default function ContactPopup() {
  const { popup, setPopup } = useContext(PopupContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const close = () => setPopup(false);
  const patchFormData = (values) => setFormData(prev => ({ ...prev, ...values }));
  const handleInputChange = (e) => patchFormData({ [e.target.name]: e.target.value });

  useEffect(() => {
    if (popup) {
      document.body.classList.add('overflow-y-hidden');
    }
    else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [popup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch('https://formsubmit.co/ajax/ea2686d2e535145ba6644b94f777b485', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      setPopup('done');
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='text-gray-200'>
      {popup && <div className="fixed inset-0 bg-black bg-opacity-80 z-10" onClick={close} />}
      {popup === 'contact' && (
        <div className="z-20 fixed inset-0 flex flex-col justify-center px-6 bg-c1 p-4 md:p-8 mx-4 rounded max-w-lg mt-16 md:my-40 sm:mx-auto h-fit">
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          We will be happy to answer any questions or arrange a new project.
          <form onSubmit={handleSubmit} className="space-y-4 mt-4 md:mt-6">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder='Email'
              className="outline-none w-full py-2 border-b border-b-white bg-transparent"
            />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder='Name'
              className="outline-none w-full py-2 border-b border-b-white bg-transparent"
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Message'
              className="outline-none w-full py-2 border-b border-b-white bg-transparent"
              rows="3"
            />
            <div className="space-x-4 mt-8 flex justify-end">
              <button onClick={close} className="px-6 py-3 rounded font-bold bg-c2 text-c3">Cancel</button>
              {
                isLoading
                  ? <svg className="w-8 h-8 animate-spin self-center" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" className='stroke-c2 fill-transparent' stroke-width="10"/>
                      <path d='M 50 5 A 45 45 0 0 0 5 50' className='stroke-c3 fill-transparent' stroke-width="10" />
                    </svg>
                  : <button type="submit" className="px-6 py-3 rounded font-bold bg-c3 text-c2">Send</button>
              }
            </div>
          </form>
        </div>
      )}
      {popup === 'done' && (
        <div className="z-20 fixed inset-0 flex flex-col justify-center px-6 bg-c1 p-4 md:p-8 rounded max-w-lg my-auto mx-4 md:mx-auto h-fit">
          <h2 className="text-xl font-bold text-white">Thank you!</h2>
          Your form has been submitted. <br />
          We will contact you as soon as possible!
          <button onClick={close} className="self-end w-fit mt-8 px-6 py-3 rounded font-bold bg-c3 text-c2">Close</button>
        </div>
      )}
    </div>
  );
}
