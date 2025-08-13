import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Plane, Hotel, Play, RotateCcw, X } from 'lucide-react';

interface WestSouthTourPageProps {
  onPageChange: (page: string) => void;
}

const WestSouthTourPage: React.FC<WestSouthTourPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const flipCards = [
    {
      front: 'ניסיון של 15 שנה',
      back: 'מלכה חיה בהודו מאז 2010 ומכירה את המדינה כמו כף ידה. ניסיון עשיר בהדרכה ותכנון טיולים.'
    },
    {
      front: 'מדריכה דוברת עברית',
      back: 'הדרכה מקצועית בעברית עם הבנה עמוקה של הצרכים הישראליים והתרבות המקומית.'
    },
    {
      front: 'קבוצות קטנות',
      back: 'עד 12 משתתפים בלבד לחוויה אישית ומותאמת לכל אחד מהמשתתפים.'
    },
    {
      front: 'מלונות נבחרים',
      back: 'מלכה בודקת כל מלון בעצמה ובוחרת רק את המלונות הטובים ביותר עבורכם.'
    },
    {
      front: 'תמיכה 24/7',
      back: 'זמינות מלאה לאורך כל הטיול לכל שאלה, בעיה או צורך שיעלה.'
    },
    {
      front: 'מחירים שקופים',
      back: 'ללא עלויות נסתרות - כל המחירים ברורים ושקופים מראש.'
    },
    {
      front: 'חוויות אותנטיות',
      back: 'לא רק אתרים תיירותיים - חוויות אמיתיות של התרבות וההיסטוריה ההודית.'
    }
  ];

  const tabContent = {
    itinerary: {
      title: 'מסלול הטיול',
      content: (
        <div className="space-y-8">
          {/* Itinerary Timeline */}
          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 1: מומבאי</h3>
                      <p className="text-gray-600 hebrew-text">הגעה והתמצאות בעיר</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">הגעה לנמל התעופה מומבאי</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">הסעה למלון ואכלוס</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">פגישת היכרות עם הקבוצה</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור ראשוני בסביבת המלון</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/mumbai gateway.jpg" alt="יום 1 - מומבאי" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 2: מומבאי</h3>
                      <p className="text-gray-600 hebrew-text">סיור מקיף בעיר</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בשער הכניסה להודו</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור במלון טאג' מהאל</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">טיול במרין דרייב</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ארוחת ערב במסעדה מקומית</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/mumbai gateway.jpg" alt="יום 2 - שער הכניסה להודו" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 3: מומבאי</h3>
                      <p className="text-gray-600 hebrew-text">חקר העיר העתיקה</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור בסלאם דהרבי</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בשוק קרופורד</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">מקדש מהלקשמי</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">צפייה בשליחי המזון</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/mumbai slum.jpg" alt="יום 3 - סלאם דהרבי" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 4: מומבאי / בנגלור</h3>
                      <p className="text-gray-600 hebrew-text">מעבר לבירת הטכנולוגיה</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ארוחת בוקר במלון</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">טיסה למומבאי לבנגלור</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">הגעה לבנגלור ואכלוס במלון</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור ראשוני בעיר הגנים</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" alt="יום 4 - בנגלור" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 5: בנגלור / מייסור</h3>
                      <p className="text-gray-600 hebrew-text">מסע לעיר הארמונות</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בארמון טיפו סולטן</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה למייסור (3 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס במלון במייסור</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור ערב בשווקי מייסור</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" alt="יום 5 - מייסור" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 6 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">6</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 6: מייסור / קביני</h3>
                      <p className="text-gray-600 hebrew-text">מסע לשמורת הטבע</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בארמון מייסור המפואר</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לקביני (2 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס בלודג' בשמורת הטבע</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ספארי ערב ראשון</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" alt="יום 6 - קביני" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 7 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">7</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 7: קביני / ווייאנאד</h3>
                      <p className="text-gray-600 hebrew-text">מעבר לקרלה הירוקה</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ספארי בוקר אחרון בקביני</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לווייאנאד, קרלה (3 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס במלון בווייאנאד</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור במטעי התבלינים</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/Kerala.png" alt="יום 7 - ווייאנאד" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 8 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">8</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 8: ווייאנאד</h3>
                      <p className="text-gray-600 hebrew-text">חקר הטבע הקרלי</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור במערות אדקל</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">טיול לאגם קרפדם</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בשמורת חיות הבר</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">עיסוי איורוודי מסורתי</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/kerala boat.jpg" alt="יום 8 - טבע ווייאנאד" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 9 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">9</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 9: ווייאנאד / תריסור</h3>
                      <p className="text-gray-600 hebrew-text">מסע לעיר התרבות</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ארוחת בוקר ויציאה מהמלון</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לתריסור (4 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס במלון בתריסור</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור במקדש גורוויור</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/dancers.png" alt="יום 9 - תריסור" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 10 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">10</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 10: תריסור / קוצ'י</h3>
                      <p className="text-gray-600 hebrew-text">מלכת הים הערבי</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בפסטיבל פורם</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לקוצ'י (2 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס במלון בקוצ'י</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור ברשתות הדיג הסיניות</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/kerala boat.jpg" alt="יום 10 - קוצ'י" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 11 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">11</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 11: קוצ'י / פרייאר</h3>
                      <p className="text-gray-600 hebrew-text">מסע להרי התבלינים</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור בפורט קוצ'י העתיקה</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור בבית הכנסת הפרדסי</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לפרייאר (4 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס במלון בהרי התבלינים</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" alt="יום 11 - פרייאר" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 12 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">12</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 12: פרייאר</h3>
                      <p className="text-gray-600 hebrew-text">יום מלא בשמורת הטבע</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ספארי בוקר בשמורת פרייאר</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">שייט באגם פרייאר</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ביקור במטעי התבלינים</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">הופעת מחול קתקלי מסורתי</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/dancers.png" alt="יום 12 - מחול קתקלי" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 13 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">13</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 13: פרייאר / אלפי (לינה בסירת בית)</h3>
                      <p className="text-gray-600 hebrew-text">חוויה ייחודית על המים</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לאלפי (3 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">עלייה לסירת בית מסורתית</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">שייט בתעלות המים הרגועות</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">לינה על המים - חוויה בלתי נשכחת</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/kerala boat.jpg" alt="יום 13 - סירת בית באלפי" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 14 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">14</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 14: אלפי / קוצ'י</h3>
                      <p className="text-gray-600 hebrew-text">חזרה לעיר הנמל</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ארוחת בוקר על סירת הבית</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">שייט אחרון בתעלות</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">נסיעה לקוצ'י (1.5 שעות)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">אכלוס במלון בקוצ'י</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/kerala boat.jpg" alt="יום 14 - חזרה לקוצ'י" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Day 15 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">15</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hebrew-text">יום 15: קוצ'י</h3>
                      <p className="text-gray-600 hebrew-text">יום האחרון והחזרה</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">ארוחת בוקר במלון</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">סיור אחרון בשוק התבלינים</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">קניות מזכרות אחרונות</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                      <span className="hebrew-text text-gray-700">הסעה לנמל התעופה</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img src="/kerala boat.jpg" alt="יום 15 - יציאה מקוצ'י" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    accommodation: {
      title: 'לינה',
      content: (
        <>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>מומבאי</strong> – Taj Vivanta by President (03 Nights)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>בנגלור</strong> – Taj Vivanta by MG Road (01 Night)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>מייסור</strong> – Radisson Blu (01 Night)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>קביני</strong> – The Serai (01 Night)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>וויאנאד</strong> – Wayanadu Wild by CGH (02 Nights)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>טריסור</strong> – Hyatt (01 Night)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>קוצ'ין</strong> – Fragrant Nature (01 Night)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>פריאר</strong> – Spice Village (02 Nights)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>אלפי</strong> – BJ Luxury Houseboat (01 Night)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800 hebrew-text"><strong>קוצ'ין</strong> – Flora (01 Night)</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 hebrew-text text-center font-medium">
                מלונות אלו או דומיהם משמשים אותנו בטיולים
              </p>
            </div>
          </div>
        </>
      )
    },
    included: {
      title: 'כלול במחיר',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Airplane Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">טיסות</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  טיסות פנים בהודו<br/>
                  <span className="text-red-600 font-medium">שימו לב!</span> המשקל המותר למזוודה בטיסות פנימיות בהודו הוא 15 ק"ג בלבד ותיק יד במשקל של 7 ק"ג (טיסות פנים בלבד)
                </p>
              </div>
            </div>

            {/* Hotel Card */}
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Hotel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">בתי מלון</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  בתי מלון ברמת 5 כוכבים או דומה בהתאם למסלול
                </p>
              </div>
            </div>

            {/* Meals Card */}
            <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-utensils text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">ארוחות</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  ארוחות בוקר וערב + כל הארוחות בבית הסירה
                </p>
              </div>
            </div>

            {/* Transportation Card */}
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">תחבורה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  רכב תיירים ממוזג עם נהג מקצועי לאורך כל הטיול
                </p>
              </div>
            </div>

            {/* Entry Tickets Card */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-ticket-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">כניסות</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  כל הכניסות לאתרים ואטרקציות
                </p>
              </div>
            </div>

            {/* Guidance Card */}
            <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">הדרכה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  הדרכה של מלכה אירני לאורך כל המסע עם מדריך מקומי נוסף
                </p>
              </div>
            </div>

            {/* Online Meeting Card */}
            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-video text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">מפגש קבוצה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  מפגש קבוצה באון ליין לפני היציאה לטיול
                </p>
              </div>
            </div>

            {/* Houseboat Card */}
            <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-ship text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">בית סירה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  שייט בבית סירה מפנק עם כל הארוחות
                </p>
              </div>
            </div>

            {/* Safari Card */}
            <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-binoculars text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">ספארי</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                  2 טיולי ספארי
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    included: {
      title: 'כלול במחיר',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Airplane Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">טיסות</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  טיסות פנים בהודו<br/>
                  <span className="text-red-600 font-medium">שימו לב!</span> המשקל המותר למזוודה בטיסות פנימיות בהודו הוא 15 ק"ג בלבד ותיק יד במשקל של 7 ק"ג (טיסות פנים בלבד)
                </p>
              </div>
            </div>

            {/* Hotel Card */}
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Hotel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">בתי מלון</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  בתי מלון ברמת 5 כוכבים או דומה בהתאם למסלול
                </p>
              </div>
            </div>

            {/* Meals Card */}
            <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-utensils text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">ארוחות</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  ארוחות בוקר וערב + כל הארוחות בבית הסירה
                </p>
              </div>
            </div>

            {/* Transportation Card */}
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">תחבורה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  רכב תיירים ממוזג עם נהג מקצועי לאורך כל הטיול
                </p>
              </div>
            </div>

            {/* Entry Tickets Card */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-ticket-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">כניסות</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  כל הכניסות לאתרים ואטרקציות
                </p>
              </div>
            </div>

            {/* Guidance Card */}
            <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">הדרכה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  הדרכה של מלכה אירני לאורך כל המסע עם מדריך מקומי נוסף
                </p>
              </div>
            </div>

            {/* Online Meeting Card */}
            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-video text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">מפגש קבוצה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  מפגש קבוצה באון ליין לפני היציאה לטיול
                </p>
              </div>
            </div>

            {/* Houseboat Card */}
            <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-ship text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">בית סירה</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  שייט בבית סירה מפנק עם כל הארוחות
                </p>
              </div>
            </div>

            {/* Safari Card */}
            <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className="fas fa-binoculars text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 hebrew-text mb-2">ספארי</h3>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed text-right">
                  2 טיולי ספארי
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    notIncluded: {
      title: 'לא כלול',
      content: (
        <div className="space-y-3">
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">טיסות בינלאומיות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ארוחות צהריים וערב</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">הוצאות אישיות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ויזה להודו</span>
          </div>
        </div>
      )
    },
    pricing: {
      title: 'מחיר',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$1,400</div>
            <div className="text-gray-700 hebrew-text">מחיר לאדם בחדר זוגי</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2 hebrew-text">הנחות</h4>
              <p className="text-gray-700 hebrew-text text-sm">הנחה של 10% לזוגות צעירים</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">תשלומים</h4>
              <p className="text-gray-700 hebrew-text text-sm">אפשרות לתשלום במספר תשלומים</p>
            </div>
          </div>
        </div>
      )
    },
    terms: {
      title: 'תנאים',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">ביטול</h4>
            <p className="text-gray-700 hebrew-text text-sm">ביטול עד 30 יום לפני הטיול - החזר מלא</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2 hebrew-text">שינויים</h4>
            <p className="text-gray-700 hebrew-text text-sm">שינויים במסלול אפשריים עד 14 יום לפני היציאה</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-900 mb-2 hebrew-text">דרישות</h4>
            <p className="text-gray-700 hebrew-text text-sm">נדרש דרכון בתוקף לפחות 6 חודשים וויזה להודו</p>
          </div>
        </div>
      )
    },
    notes: {
      title: 'הערות',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">המסלול עשוי להשתנות בהתאם לתנאי מזג האוויר ונסיבות מקומיות.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">מומלץ להגיע יום לפני תחילת הטיול להתאקלמות.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">כל המשתתפים מקבלים חבילת מידע מפורטת לפני היציאה.</p>
          </div>
        </div>
      )
    }
  };

  const futureTours = [
    {
      name: 'הודו בשלושה טעמים',
      dates: '15-30 במרץ 2024',
      guide: 'מלכה אירני',
      status: 'פתוח להרשמה'
    },
    {
      name: 'הודו בשלושה טעמים',
      dates: '10-25 באפריל 2024',
      guide: 'מלכה אירני',
      status: 'מלא'
    },
    {
      name: 'הודו בשלושה טעמים',
      dates: '5-20 במאי 2024',
      guide: 'מלכה אירני',
      status: 'פתוח להרשמה'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/Kerala.png" 
            alt="טיול ממערב לדרום הודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 hebrew-text">
              טיול ממערב לדרום הודו
            </h1>
            <p className="text-lg mb-8 leading-relaxed hebrew-text opacity-95">
              מסע של 15 ימים ממומבאי דרך בנגלור ועד לקרלה הקסומה
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              גלו את המחירים
            </button>
          </div>
        </div>
      </section>

      {/* Section 1 - Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              טעימה מהאזור
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-xl">
              <video 
                className="w-full aspect-video"
                controls
                poster="/Kerala.png"
              >
                <source src="/KERALA.mp4" type="video/mp4" />
                <source src="/BANGALORE.mp4" type="video/mp4" />
                הדפדפן שלכם לא תומך בתגית וידאו.
              </video>
            </div>
            <p className="text-center text-gray-600 hebrew-text mt-4 italic">
              עוד לא יצאתם – אבל כבר אפשר לדמיין אתכם שם
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Photo + Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              המסע – הסיפור המלא
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/Kerala.png" 
                alt="קרלה הקסומה"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                טיול שמתחיל בקצב המהיר של מומבאי, העיר הענקית והמרתקת שמציעה שילוב בלתי נגמר של המודרני והמסורתי. 
                תיהנו מהרחובות הסואנים, מהשווקים הצבעוניים ומתרבות עשירה, ותבינו את מהות העיר שתמיד במרוץ קדימה.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                לאחר מכן, תעברו לבנגלור, בירת הטכנולוגיה של הודו, מקום שבו היי-טק וחדשנות נפגשים עם קסם מקומי. 
                כאן תרגישו את האווירה המיוחדת של העיר, המשלבת בין עתיד לבין מסורת, בין תעשייה לבין טבע.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                החלק האחרון יוביל אתכם לקרלה – האזור הירוק, השקט והקסום של הודו. 
                כאן תצללו לתוך חוויות טבע מרהיבות, תיהנו מתעלות מים יפהפיות, תיהנו מהשקט ומהשלווה של האזור, 
                ותתמלאו באנרגיה מחודשת מהסביבה המיוחדת הזו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - 7 Flip Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למה לטייל עם מלכה אירני?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flipCards.map((card, index) => (
              <div 
                key={index}
                className="relative h-48 cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}>
                  {/* Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-6">
                    <div className="text-center">
                      <RotateCcw className="w-8 h-8 text-white mx-auto mb-3" />
                      <h3 className="text-white font-bold hebrew-text text-lg">{card.front}</h3>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg flex items-center justify-center p-6 rotate-y-180 border border-gray-200">
                    <p className="text-gray-700 hebrew-text text-center leading-relaxed">{card.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מוכנים לצאת לדרך? הנה הפרטים
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-gray-200">
              {Object.entries(tabContent).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-4 font-medium hebrew-text transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {tabContent[activeTab as keyof typeof tabContent].content}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Future Tours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              טיולים עתידיים
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">שם הטיול</th>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">תאריכים</th>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">מדריכה</th>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">סטטוס טיול</th>
                </tr>
              </thead>
              <tbody>
                {futureTours.map((tour, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 hebrew-text font-medium">{tour.name}</td>
                    <td className="px-6 py-4 hebrew-text">{tour.dates}</td>
                    <td className="px-6 py-4 hebrew-text">{tour.guide}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium hebrew-text ${
                        tour.status === 'פתוח להרשמה' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {tour.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WestSouthTourPage;