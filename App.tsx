import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

function App() {
  const [state, handleSubmit] = useForm("xrbpwgke");
  const [formData, setFormData] = useState({
    fullName: '',
    guests: 1
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedData = {
      "שם מלא": formData.fullName,
      "מספר אורחים": formData.guests,
      "_replyto": "ceoofmicrosoft132@gmail.com"
    };

    await handleSubmit(formattedData);
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-600 to-blue-600 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="text-blue-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">תודה על הרשמתך!</h2>
          <p className="text-gray-600">פרטי ההרשמה נשלחו בהצלחה</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-700 to-blue-700 px-8 py-12 text-center relative overflow-hidden">
            <div className="flex justify-center gap-8 mb-8">
            </div>
            <div className="relative">
              <h1 className="text-4xl font-bold text-white mb-6">הזמנה לבר המצווה של עידן</h1>
              <div className="space-y-4 text-white">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blue-200" />
                    <Clock className="w-6 h-6 text-blue-200" />
                    <p className="text-xl">עלייה לתורה - 16:00</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-blue-200" />
                    <a 
                      href="https://ul.waze.com/ul?place=ChIJQ9fYMpu2AhURFZzmM8W_-_E&ll=31.93653750%2C34.80681420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                      className="text-xl underline hover:text-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      בית הכנסת בן פורת יוסף, נס ציונה
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-200" />
                    <p className="text-xl">אירוע - 18:30</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-blue-200" />
                    <a 
                      href="https://ul.waze.com/ul?place=ChIJp2MVEOu2AhURBUuAm9V5eZA&ll=31.92383620%2C34.79970910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                      className="text-xl underline hover:text-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      בית נועם, נס ציונה
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <a 
                    href="https://drive.google.com/file/d/1WuRN9gxt0PHVJQCwGsDoriGh_5EFeJbt/view?usp=sharing"
                    className="text-lg underline hover:text-blue-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    הסבר להגעה לאולם
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Title */}
          <div className="bg-gray-50 px-8 py-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">לאישור הגעה</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="px-8 py-6 space-y-6" dir="rtl">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                שם מלא
              </label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                מספר אורחים
              </label>
              <input
                type="number"
                name="guests"
                min="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-gray-700 to-blue-700 text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {state.submitting ? 'שולח...' : 'שליחת טופס'}
            </button>
          </form>

          {/* Footer */}
          <div className="bg-gray-100 px-8 py-4 flex justify-between text-sm text-gray-600">
            <div>נבנה על ידי עידן וסרמן</div>
            <div>כל הזכויות שמורות לעידן וסרמן</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;