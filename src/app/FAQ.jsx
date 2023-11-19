'use client'

import { useState } from 'react';

export default function FaqSection() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          <Accordion q='What services does Senfu offer?' a='Senfu specializes in creating realistic visualizations of architectural projects by integrating advanced drone photography with precise 3D modeling. Our services include creation of accurate and immersive 360-degree panoramas and tailor-made drone missions for site photography.' />
          <Accordion q='How do you ensure accuracy of the result?' a='We correlate real-life GPS points with points in 3D model. When we have enough data, algorithm finds the best flight path and creates it.'/>
          <Accordion q='Can you work with projects at any stage of development?' a='Yes, however, results are better when there are no obstacles around.'/>
          <Accordion q='What makes your visualization services unique?' a='Our approach allows us to provide highly accurate, realistic, and immersive visualizations that traditional photography and 3D modeling alone cannot achieve.'/>
          <Accordion q='How long does it take to complete a project?' a="The timeline varies depending on the project's complexity and scope. Generally, a standard project involving 16 spherical panoramas can be completed within a few days after the drone shoot. We work closely with clients to meet their schedules and provide timely deliverables."/>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="mb-6">Feel free to reach out to us for any inquiries or questions you may have.</p>
          <div className="space-x-4 mt-10">
            <button className="bg-white text-c2 px-6 py-2 rounded font-bold">Contact</button>
        </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t my-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold">{q}</h2>
        <div className="select-none">
          {isOpen ? '▲' : '▼'}
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
          {a}
        </div>
      )}
    </div>
  );
}
