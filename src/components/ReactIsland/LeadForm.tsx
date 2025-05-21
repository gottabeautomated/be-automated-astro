import { useState } from 'react';

interface FormData {
  email: string;
  name: string;
  company: string;
  consent: boolean;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    consent: false,
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validierung
    if (!formData.email || !formData.name || !formData.consent) {
      setErrorMessage('Bitte fülle alle erforderlichen Felder aus und bestätige die Datenschutzerklärung.');
      return;
    }
    
    setFormState('submitting');
    
    try {
      // In einer echten Anwendung würdest du hier einen API-Endpunkt aufrufen
      // Beispiel: await fetch('/api/lead', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simuliere eine API-Verzögerung
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Erfolgreiche Übermittlung
      setFormState('success');
      
      // Optional: Leite zur Danke-Seite weiter
      // window.location.href = '/thank-you';
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      setErrorMessage('Beim Senden des Formulars ist ein Fehler aufgetreten. Bitte versuche es später erneut.');
    }
  };
  
  if (formState === 'success') {
    return (
      <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
        <p>Dein E-Book ist unterwegs zu deinem Posteingang. Schau bitte auch in deinem Spam-Ordner nach, falls du es nicht findest.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Hol dir unser kostenloses E-Book</h3>
      <p className="text-gray-600 mb-4">
        Trage dich ein und erhalte sofort unser E-Book "Automatisierung für Einsteiger" per E-Mail.
      </p>
      
      {formState === 'error' && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block mb-1 font-medium">
            Unternehmen
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-2"
            required
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            Ich akzeptiere die <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a> und stimme dem Erhalt des E-Books und gelegentlicher Updates zu. <span className="text-red-500">*</span>
          </label>
        </div>
        
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors ${
            formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {formState === 'submitting' ? 'Wird gesendet...' : 'E-Book herunterladen'}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          Du kannst dich jederzeit mit einem Klick abmelden.
        </p>
      </form>
    </div>
  );
}
