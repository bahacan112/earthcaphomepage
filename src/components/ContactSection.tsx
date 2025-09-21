import React from 'react';
import Image from 'next/image';
import contactData from '../../languages/contact.json';

export default function ContactSection() {
  const contact = contactData;

  return (
    <section className="bg-[#F8F6F4] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          {contact.title}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Information */}
            <div className="flex flex-col h-full">
              <div className="flex-1 space-y-4">
                {/* Business Hours */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {contact.businessHours.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-700 font-medium">{contact.businessHours.mondayThursday}</span>
                      <span className="text-slate-600">{contact.businessHours.mondayThursdayTime}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-700 font-medium">{contact.businessHours.friday}</span>
                      <span className="text-slate-600">{contact.businessHours.fridayTime}</span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {contact.address.title}
                  </h3>
                  <div className="text-slate-700 text-sm">
                    <p className="font-medium">{contact.address.headquarters}</p>
                    <p>{contact.address.street}</p>
                    <p>{contact.address.postalCode}, {contact.address.country}</p>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {contact.phone.title}
                    </h3>
                    <a 
                      href={`tel:${contact.phone.number}`}
                      className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors duration-200"
                    >
                      {contact.phone.number}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {contact.email.title}
                    </h3>
                    <a 
                      href={`mailto:${contact.email.address}`}
                      className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors duration-200 break-all"
                    >
                      {contact.email.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-sm h-auto">
                <Image
                  src="/images/contact.jpg"
                  alt={contact.imageAlt}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}