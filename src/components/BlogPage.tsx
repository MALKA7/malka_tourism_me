import React from 'react';
import { Calendar, User, ArrowLeft, Camera, MapPin, Clock, Tag, Share2, BookOpen, Compass } from 'lucide-react';

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onPageChange }) => {
  const featuredPost = {
    id: 1,
    title: 'המדריך המלא לטיול בקרלה - גן עדן ירוק בדרום הודו',
    excerpt: 'קרלה, המכונה "ארץ האל שלו", היא אחת המדינות היפות ביותר בהודו. עם תעלות המים הרגועות, החופים הטרופיים והיערות הירוקים, קרלה מציעה חוויה בלתי נשכחת לכל מטייל.',
    image: '/Kerala.png',
    author: 'מלכה אירני',
    date: '15 מרץ 2024',
    readTime: '8 דקות קריאה',
    category: 'יעדי טיול',
    tags: ['קרלה', 'דרום הודו', 'טבע', 'תרבות']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'סיור במומבאי: המדריך השלם לעיר שלא ישנה',
      excerpt: 'מומבאי, הבירה הכלכלית של הודו, היא עיר של ניגודים מרתקים. מגורדי השחקים המודרניים ועד לשכונות העוני, מבוליווד ועד לשווקים המסורתיים.',
      image: '/mumbai gateway.jpg',
      author: 'מלכה אירני',
      date: '10 מרץ 2024',
      readTime: '6 דקות קריאה',
      category: 'סיורי ערים',
      tags: ['מומבאי', 'סיורים', 'תרבות עירונית']
    },
    {
      id: 3,
      title: 'המסורות הצבעוניות של הודו: חגים ופסטיבלים',
      excerpt: 'הודו היא ארץ של חגים וצבעים. מחג הצבעים הולי ועד לפסטיבל האורות דיוואלי, כל חג בהודו הוא חוויה תרבותית עשירה ומרגשת.',
      image: '/Holi girl.png',
      author: 'מלכה אירני',
      date: '5 מרץ 2024',
      readTime: '5 דקות קריאה',
      category: 'תרבות',
      tags: ['חגים', 'מסורות', 'פסטיבלים']
    },
    {
      id: 4,
      title: 'המטבח ההודי: מסע קולינרי בין טעמים וריחות',
      excerpt: 'המטבח ההודי הוא אחד העשירים והמגוונים בעולם. מהקארי החריף של הדרום ועד לנאן הרך של הצפון, כל מנה מספרת סיפור.',
      image: '/Paneer.png',
      author: 'מלכה אירני',
      date: '28 פברואר 2024',
      readTime: '7 דקות קריאה',
      category: 'אוכל',
      tags: ['מטבח הודי', 'אוכל רחוב', 'קולינריה']
    },
    {
      id: 5,
      title: 'הריקודים המסורתיים של הודו: אמנות בתנועה',
      excerpt: 'הריקוד בהודו הוא לא רק אמנות, אלא דרך לספר סיפורים ולהעביר מסורות מדור לדור. כל מדינה בהודו יש לה את הסגנון הייחודי שלה.',
      image: '/dancers.png',
      author: 'מלכה אירני',
      date: '20 פברואר 2024',
      readTime: '6 דקות קריאה',
      category: 'אמנות',
      tags: ['ריקוד', 'אמנות', 'מסורת']
    },
    {
      id: 6,
      title: 'קולקטה: הבירה התרבותית של הודו',
      excerpt: 'קולקטה, הידועה כבירה התרבותית של הודו, היא עיר של שירה, אמנות וספרות. זוהי עיר שבה העבר והעתיד נפגשים ברחובות הצבעוניים.',
      image: '/kolkata.png',
      author: 'מלכה אירני',
      date: '15 פברואר 2024',
      readTime: '8 דקות קריאה',
      category: 'יעדי טיול',
      tags: ['קולקטה', 'תרבות', 'אמנות']
    }
  ];

  const categories = [
    { name: 'יעדי טיול', count: 12, icon: MapPin },
    { name: 'סיורי ערים', count: 8, icon: Camera },
    { name: 'תרבות', count: 15, icon: BookOpen },
    { name: 'אוכל', count: 6, icon: Compass },
    { name: 'אמנות', count: 4, icon: User }
  ];

  const recentPosts = [
    'טיפים לטיול בטוח בהודו',
    'מה לארוז לטיול בהודו',
    'השפה ההינדית - מילים בסיסיות',
    'המטבע ההודי והמרת כסף',
    'התחבורה הציבורית בהודו'
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 hebrew-text">
            בלוג הודו עם מלכה
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto hebrew-text leading-relaxed">
            מדריכים, טיפים וסיפורים מהודו המופלאה - הכל מהניסיון האישי של מלכה אירני
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hebrew-text">פוסט מומלץ</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hebrew-text font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 hebrew-text leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-500 ml-2" />
                    <span className="text-gray-700 hebrew-text">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-500 ml-2" />
                    <span className="text-gray-700 hebrew-text">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-500 ml-2" />
                    <span className="text-gray-700 hebrew-text">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hebrew-text">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  קראו עוד
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 hebrew-text">פוסטים אחרונים</h2>
              
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hebrew-text font-medium">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 hebrew-text leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 ml-1" />
                            <span className="hebrew-text">{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 ml-1" />
                            <span className="hebrew-text">{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 ml-1" />
                            <span className="hebrew-text">{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hebrew-text">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <button className="text-blue-600 hover:text-blue-800 font-semibold hebrew-text flex items-center">
                          קראו עוד
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* About Malka */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border border-gray-200">
                <div className="text-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                    alt="מלכה אירני"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
                  />
                  <h3 className="text-xl font-bold text-gray-900 hebrew-text">מלכה אירני</h3>
                  <p className="text-gray-600 hebrew-text">מדריכה ישראלית בהודו</p>
                </div>
                <p className="text-gray-700 hebrew-text text-sm leading-relaxed mb-4">
                  חיה בהודו מאז 2010 ומתמחה בטיולים מותאמים אישית לישראלים. 
                  בעלת ניסיון עשיר בהדרכה ותכנון טיולים ברחבי הודו.
                </p>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  צרו קשר
                </button>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">קטגוריות</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                      <div className="flex items-center">
                        <category.icon className="w-5 h-5 text-blue-600 ml-3" />
                        <span className="hebrew-text font-medium">{category.name}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">פוסטים אחרונים</h3>
                <div className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                      <span className="hebrew-text text-sm font-medium">{post}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Compass className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            רוצים לחוות את הודו בעצמכם?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            צרו קשר עם מלכה אירני לתכנון הטיול המושלם שלכם להודו - 
            עם כל הידע והניסיון שקראתם עליו בבלוג
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              תכננו את הטיול שלכם
            </button>
            <button 
              onClick={() => onPageChange('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              השירותים שלנו
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;