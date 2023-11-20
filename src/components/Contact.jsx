'use client'

import { createContext, useContext, useState } from 'react';

export const PopupContext = createContext();

export default function ContactPopup() {
  const { popup, setPopup } = useContext(PopupContext);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const close = () => setPopup(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API
    setPopup('done');
  };

  return (
    <div className='text-gray-200'>
      {popup && <div className="fixed inset-0 bg-black bg-opacity-80" onClick={close} />}
      {popup === 'contact' && (
        <div className="fixed inset-0 flex flex-col justify-center px-6 bg-c1 p-4 md:p-8 rounded max-w-lg my-auto mx-4 md:mx-auto h-fit">
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          We will be happy to answer any of your questions or arrange a call regarding new project setup.
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
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
              rows="4"
            />
            <div className="space-x-4 mt-8 flex justify-end">
              <button type="submit" className="px-6 py-3 rounded font-bold bg-c2 text-c3">Send</button>
              <button onClick={close} className="px-6 py-3 rounded font-bold bg-c3 text-c2">Cancel</button>
            </div>
          </form>
        </div>
      )}
      {popup === 'done' && (
        <div className="fixed inset-0 flex flex-col justify-center px-6 bg-c1 p-4 md:p-8 rounded max-w-lg my-auto mx-4 md:mx-auto h-fit">
          <h2 className="text-xl font-bold text-white">Thank you!</h2>
          Your form has been submitted. <br />
          We will contact you as soon as possible!
          <button onClick={close} className="self-end w-fit mt-8 px-6 py-3 rounded font-bold bg-c3 text-c2">Close</button>
        </div>
      )}
    </div>
  );
}
