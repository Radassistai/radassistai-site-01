
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Reducing Radiology Backlogs: A Data-Driven Approach",
      excerpt: "Discover how NHS radiology departments can leverage data analytics and AI to tackle growing backlogs, reduce waiting times, and improve patient outcomes through smarter resource management.",
      author: "RadAssist AI Team",
      date: "September 27, 2025",
      readTime: "6 min read",
      category: "NHS Innovation",
      image: "https://readdy.ai/api/search-image?query=NHS%20radiology%20department%20with%20data%20analytics%20dashboards%20and%20charts%20showing%20workflow%20optimization%2C%20medical%20professionals%20analyzing%20performance%20metrics%20on%20digital%20screens%2C%20modern%20healthcare%20technology%20environment%20with%20clean%20professional%20lighting%20and%20blue%20color%20scheme&width=600&height=400&seq=blog-data-driven&orientation=landscape",
      slug: "reducing-radiology-backlogs-data-driven"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://static.readdy.ai/image/a4ac012d2ef5b8e88ed8146b71225bab/b1c8596c1e2ca6b3cbc519a115d43820.png"
                alt="RadAssist AI"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">RadAssist AI</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</Link>
              <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
              <Link to="/hub-nigeria" className="text-gray-600 hover:text-blue-600 transition-colors">Nigeria Hub</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RadAssist AI <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Insights, innovations, and best practices in NHS radiology, AI healthcare solutions, 
              and the future of medical imaging technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer text-lg"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with RadAssist AI
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest insights on NHS radiology innovation, AI healthcare solutions, 
              and industry best practices delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm-flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://static.readdy.ai/image/a4ac012d2ef5b8e88ed8146b71225bab/b1c8596c1e2ca6b3cbc519a115d43820.png"
                  alt="RadAssist AI"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold">RadAssist AI</span>
              </div>
              <p className="text-gray-400">
                AI-powered solutions for NHS radiology departments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/solutions" className="hover:text-white transition-colors">Follow-Up Tracking</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">Backlog Management</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">AI Analytics</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@radassistai.com</li>
                <li>+44 7823577177</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 RadAssist AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
