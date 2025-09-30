
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReducingRadiologyBacklogsDataDriven() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();
    
    // Convert FormData to URLSearchParams for application/x-www-form-urlencoded
    for (const [key, value] of formData.entries()) {
      data.append(key, value.toString());
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d3da8gtngf3dnfa3umi0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-4">NHS Innovation</span>
            <span>RadAssist AI Team</span>
            <span className="mx-2">•</span>
            <span>September 27, 2025</span>
            <span className="mx-2">•</span>
            <span>6 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Reducing Radiology Backlogs: A Data-Driven Approach
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how NHS radiology departments can leverage data analytics and AI to tackle growing backlogs, 
            reduce waiting times, and improve patient outcomes through smarter resource management.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="https://readdy.ai/api/search-image?query=NHS%20radiology%20department%20with%20data%20analytics%20dashboards%20and%20charts%20showing%20workflow%20optimization%2C%20medical%20professionals%20analyzing%20performance%20metrics%20on%20digital%20screens%2C%20modern%20healthcare%20technology%20environment%20with%20clean%20professional%20lighting%20and%20blue%20color%20scheme&width=1200&height=600&seq=blog-hero&orientation=landscape"
            alt="NHS radiology department with data analytics"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            NHS radiology departments across the UK are facing unprecedented challenges. Growing patient demand, 
            staff shortages, and increasing complexity of imaging studies have created significant backlogs that 
            impact patient care and staff wellbeing. However, innovative data-driven approaches are emerging as 
            powerful solutions to these persistent challenges.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Scale of the Challenge</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Recent NHS England data reveals that radiology waiting times have increased by over 40% in the past 
            two years. With over 1.5 million patients currently waiting for diagnostic imaging, the need for 
            innovative solutions has never been more urgent.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Statistics</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• 1.5M+ patients waiting for diagnostic imaging</li>
              <li>• 40% increase in waiting times over 2 years</li>
              <li>• 25% of urgent scans delayed beyond target times</li>
              <li>• £2.3B annual cost of radiology backlogs to the NHS</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Data-Driven Solutions in Action</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Forward-thinking NHS trusts are turning to data analytics and AI to transform their radiology operations. 
            By analyzing historical patterns, predicting demand, and optimizing resource allocation, these departments 
            are achieving remarkable improvements in efficiency and patient outcomes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Predictive Demand Modeling</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Advanced analytics can predict imaging demand with up to 85% accuracy, allowing departments to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
            <li>Anticipate seasonal variations in scan volumes</li>
            <li>Identify peak demand periods for different imaging modalities</li>
            <li>Plan staff schedules and equipment maintenance proactively</li>
            <li>Optimize appointment scheduling to minimize wait times</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Real-Time Capacity Management</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dynamic dashboards provide real-time visibility into department performance, enabling managers to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
            <li>Monitor current backlog levels across all modalities</li>
            <li>Track radiologist productivity and reporting times</li>
            <li>Identify bottlenecks before they impact patient care</li>
            <li>Redistribute workload to optimize resource utilization</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. AI-Powered Workflow Optimization</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Machine learning algorithms analyze workflow patterns to suggest improvements:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
            <li>Automatic prioritization of urgent cases</li>
            <li>Intelligent case routing to appropriate specialists</li>
            <li>Predictive maintenance scheduling for imaging equipment</li>
            <li>Automated quality assurance and error detection</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Success: Key Performance Indicators</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Successful data-driven initiatives focus on measurable outcomes that directly impact patient care:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-green-900 mb-3">Efficiency Metrics</h4>
              <ul className="space-y-2 text-green-800">
                <li>• Average reporting turnaround time</li>
                <li>• Equipment utilization rates</li>
                <li>• Staff productivity measures</li>
                <li>• Cost per examination</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Quality Indicators</h4>
              <ul className="space-y-2 text-purple-800">
                <li>• Diagnostic accuracy rates</li>
                <li>• Patient satisfaction scores</li>
                <li>• Clinical outcome improvements</li>
                <li>• Error reduction percentages</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Best Practices</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Successful implementation of data-driven approaches requires careful planning and stakeholder engagement:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Start Small, Scale Fast</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Begin with pilot projects focusing on specific modalities or workflows. This allows teams to demonstrate 
            value quickly while building confidence and expertise for larger implementations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Engage Clinical Staff Early</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Radiologists and technologists are key to success. Involve them in solution design and provide comprehensive 
            training to ensure adoption and maximize benefits.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Focus on Data Quality</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Accurate, complete data is essential for effective analytics. Invest in data governance and quality 
            assurance processes from the beginning.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Case Study: Transforming Backlog Management</h2>
          
          <div className="bg-gray-50 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Example Scenario: Metropolitan NHS Trust</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Imagine a busy NHS radiology department processing 2,000 scans monthly. By applying data-driven 
              backlog management (predictive modelling, workload dashboards, and smarter scheduling), such a 
              Trust could realistically see results like:
            </p>
            
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>40% reduction</strong> in average waiting times</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>25% increase</strong> in daily scan capacity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>Significant boost</strong> in staff satisfaction</span>
              </li>
            </ul>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              This illustrates how data and AI can relieve pressure, free up capacity, and ultimately improve 
              both staff and patient experiences.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of Radiology Operations</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As data analytics and AI technologies continue to evolve, we can expect even more sophisticated 
            solutions for radiology workflow optimization. Future developments may include:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
            <li>Advanced natural language processing for automated report generation</li>
            <li>Computer vision algorithms for automated image quality assessment</li>
            <li>Integrated patient pathway optimization across multiple specialties</li>
            <li>Real-time resource allocation based on dynamic demand patterns</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For NHS radiology departments ready to embrace data-driven approaches, the key is to start with 
            clear objectives and measurable goals. Whether focusing on backlog reduction, workflow optimization, 
            or quality improvement, success depends on choosing the right technology partners and maintaining 
            focus on patient outcomes.
          </p>

          <div className="bg-blue-600 text-white p-8 rounded-xl my-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Department?</h3>
            <p className="text-lg mb-6">
              RadAssist AI specializes in helping NHS radiology departments implement data-driven solutions 
              that reduce backlogs and improve patient care.
            </p>
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Learn More About Our Solutions
            </button>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            The transformation of NHS radiology through data-driven approaches is not just a technological 
            evolution—it's a fundamental shift toward more efficient, effective, and patient-centered care. 
            By embracing these innovations, radiology departments can overcome current challenges while 
            building resilience for future demands.
          </p>
        </div>
      </article>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600">Get Started with RadAssist AI</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="ri-check-circle-line text-green-600 text-xl"></i>
                    <p className="text-green-800 font-medium">Thank you for your interest! We'll contact you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="ri-error-warning-line text-red-600 text-xl"></i>
                    <p className="text-red-800 font-medium">Failed to submit form. Please try again.</p>
                  </div>
                </div>
              )}

              <form 
                id="blog-contact-form"
                className="space-y-6" 
                onSubmit={handleContactFormSubmit}
                data-readdy-form
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="e.g., Consultant Radiologist"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your.email@nhs.net"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="+44 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your NHS Trust or Hospital"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">
                    How can we help you?
                  </label>
                  <select 
                    name="inquiryType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-8"
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Schedule a demo</option>
                    <option value="pilot">Start a pilot program</option>
                    <option value="pricing">Get pricing information</option>
                    <option value="integration">Discuss integration</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Describe your current challenges and how RadAssist AI can help (max 500 characters)"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="w-4 h-4 text-blue-600"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to RadAssist AI contacting me about my inquiry and understand this is not a commitment to purchase.
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 whitespace-nowrap cursor-pointer"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
