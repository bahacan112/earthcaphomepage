import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import GoogleMap from '@/components/GoogleMap';
import languageData from '../../../languages/language.json';

export default function ContactPage() {
  const { contact } = languageData;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Haben Sie Fragen zu unseren Produkten oder benötigen Sie Unterstützung? 
              Wir sind gerne für Sie da und helfen Ihnen weiter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schreiben Sie uns
                </h2>
                <p className="text-lg text-gray-600">
                  Nutzen Sie unser Kontaktformular für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen zurück.
                </p>
              </div>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+49 123 456 789"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Bitte wählen Sie ein Thema</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="festgeld">Festgeld</option>
                    <option value="tagesgeld">Tagesgeld</option>
                    <option value="account">Konto & Registrierung</option>
                    <option value="technical">Technische Probleme</option>
                    <option value="partnership">Partnerschaft</option>
                    <option value="press">Presse</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                    Ich habe die{' '}
                    <a href="/datenschutz" className="text-blue-600 hover:text-blue-700 underline">
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Weitere Kontaktmöglichkeiten
                </h2>
                <p className="text-lg text-gray-600">
                  Sie können uns auch direkt kontaktieren oder uns in unserer Zentrale in Berlin besuchen.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Telefonischer Support</h3>
                      <p className="text-sm text-gray-600">Sprechen Sie direkt mit unserem Team</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${contact.phone.number}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                  >
                    {contact.phone.number}
                  </a>
                  <div className="mt-2 text-sm text-gray-600">
                    <p><strong>Montag - Donnerstag:</strong> 10:00 - 18:00 Uhr</p>
                    <p><strong>Freitag:</strong> 10:00 - 17:00 Uhr</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">E-Mail Support</h3>
                      <p className="text-sm text-gray-600">Schreiben Sie uns eine E-Mail</p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${contact.email.address}`}
                    className="text-green-600 hover:text-green-700 font-semibold text-lg break-all"
                  >
                    {contact.email.address}
                  </a>
                  <p className="mt-2 text-sm text-gray-600">
                    Wir antworten in der Regel innerhalb von 24 Stunden
                  </p>
                </div>

                {/* Address Card */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Besuchen Sie uns</h3>
                      <p className="text-sm text-gray-600">Unsere Zentrale in Berlin</p>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-medium">{contact.address.headquarters}</p>
                    <p>{contact.address.street}</p>
                    <p>{contact.address.postalCode}, {contact.address.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Contact Section */}
      <ContactSection />

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              So finden Sie uns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Besuchen Sie uns in unserer Zentrale in Berlin. Wir freuen uns auf Ihren Besuch!
            </p>
          </div>
          
          <GoogleMap 
            address="Saarbrücker Str. 36, 10405 Berlin, Deutschland"
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Produkten und Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie kann ich ein Konto eröffnen?
              </h3>
              <p className="text-gray-600">
                Die Kontoeröffnung ist einfach und dauert nur wenige Minuten. Klicken Sie auf &ldquo;Registrieren&rdquo; 
                und folgen Sie den Anweisungen. Sie benötigen lediglich einen gültigen Ausweis.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Sind meine Einlagen sicher?
              </h3>
              <p className="text-gray-600">
                Ja, Ihre Einlagen sind durch die gesetzliche Einlagensicherung bis zu 100.000 € pro Bank 
                und Kunde geschützt. Zusätzlich arbeiten wir nur mit regulierten Banken zusammen.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Welche Gebühren fallen an?
              </h3>
              <p className="text-gray-600">
                Die Kontoeröffnung und -führung ist kostenlos. Es fallen keine versteckten Gebühren an. 
                Alle Kosten werden transparent vor Vertragsabschluss angezeigt.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie lange dauert eine Auszahlung?
              </h3>
              <p className="text-gray-600">
                Auszahlungen werden in der Regel innerhalb von 1-3 Werktagen bearbeitet. 
                Bei Tagesgeld ist Ihr Geld täglich verfügbar.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Haben Sie weitere Fragen? Wir helfen gerne weiter!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Alle FAQs anzeigen
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}