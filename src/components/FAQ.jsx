'use client'

import ContactButton from '@/components/ContactButton';
import { useState } from 'react';

export default function FaqSection() {
  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12">
      <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        <Accordion question='What services does Senfu offer?'>
          Senfu specializes in creating realistic visualizations of architectural projects by integrating 
          advanced drone photography with precise 3D modeling. Our services include creation of 
          accurate and immersive 360-degree panoramas and tailor-made drone missions for site photography
        </Accordion>
        <Accordion question='How do you ensure accuracy of the result?'>
          We correlate real-life GPS points with points in 3D model. When we have enough data, 
          algorithm finds the best flight path and creates it.
        </Accordion>
        <Accordion question='Can you work with projects at any stage of development?'>
          Yes, however, results are better when there are no obstacles around.
        </Accordion>
        <Accordion question='What makes your visualization services unique?'>
          Our approach allows us to provide highly accurate, realistic, and immersive visualizations that 
          traditional photography and 3D modeling alone cannot achieve.
        </Accordion>
        <Accordion question='How long does it take to complete a project?'>
          The timeline varies depending on the project&apos;s complexity and scope. Generally, a standard project 
          involving 16 spherical panoramas can be completed within a few days after the drone shoot. We work 
          closely with clients to meet their schedules and provide timely deliverables.
        </Accordion>
      </div>
      <h3 className="text-xl font-semibold">Still have questions?</h3>
      Feel free to reach out to us for any inquiries or questions you may have.
      <div className="mt-6 mb-10">
        <ContactButton />
      </div>
    </div>
  );
}

function Accordion({ question, children: answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t">
      <div className="text-left flex justify-between items-center p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-md md:text-xl font-semibold">{question}</h2>
        <div className="select-none">{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && <div className="text-left p-2">{answer}</div>}
    </div>
  );
}
