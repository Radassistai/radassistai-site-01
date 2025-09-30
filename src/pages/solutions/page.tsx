
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactSubmitStatus, setContactSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const solutions = [
    {
      title: "Follow-Up Tracking",
      description: "Comprehensive tracking system for all imaging pathways to ensure no critical follow-up is ever missed.",
      features: ["Real-time monitoring", "Automated alerts", "Priority scoring", "Integration with PACS"],
      icon: "ri-search-eye-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20NHS%20radiology%20department%20with%20advanced%20AI%20monitoring%20systems%20displaying%20patient%20follow-up%20tracking%20dashboards%20on%20multiple%20screens%2C%20professional%20healthcare%20environment%20with%20radiologists%20working%20efficiently%2C%20clean%20medical%20facility%20with%20state-of-the-art%20technology%2C%20bright%20lighting%20and%20organized%20workspace&width=600&height=400&seq=solutions-followup&orientation=landscape"
    },
    {
      title: "Backlog Management",
      description: "Connect backlog volumes directly with actual radiologist reporting capacity for optimal resource allocation.",
      features: ["Capacity planning", "Workload distribution", "Performance analytics", "Resource optimization"],
      icon: "ri-bar-chart-line",
      image: "https://readdy.ai/api/search-image?query=NHS%20radiology%20workflow%20optimization%20dashboard%20showing%20backlog%20management%20charts%20and%20capacity%20planning%20analytics%2C%20modern%20healthcare%20technology%20interface%20with%20data%20visualization%2C%20professional%20medical%20environment%20with%20efficient%20resource%20allocation%20displays&width=600&height=400&seq=solutions-backlog&orientation=landscape"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics to identify patterns, predict bottlenecks, and optimize radiology workflows.",
      features: ["Predictive modeling", "Pattern recognition", "Workflow optimization", "Performance insights"],
      icon: "ri-brain-line",
      image: "https://readdy.ai/api/search-image?query=Advanced%20AI%20analytics%20dashboard%20for%20NHS%20radiology%20showing%20predictive%20modeling%20charts%20and%20workflow%20optimization%20metrics%2C%20sophisticated%20healthcare%20technology%20interface%20with%20machine%20learning%20visualizations%2C%20modern%20medical%20facility%20with%20data-driven%20insights&width=600&height=400&seq=solutions-ai&orientation=landscape"
    }
  ];

  const handleDemoFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      const response = await fetch('https://readdy.ai/api/form/d3d7m62jhk2flsgm20vg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setShowDemoForm(false);
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

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();
    
    // Convert FormData to URLSearchParams for application/x-www-form-urlencoded
    for (const [key, value] of formData.entries()) {
      data.append(key, value.toString());
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d3d8o9h0o0a6mrted1gg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      if (response.ok) {
        setContactSubmitStatus('success');
        setTimeout(() => {
          setShowContactForm(false);
          setContactSubmitStatus('idle');
        }, 2000);
      } else {
        setContactSubmitStatus('error');
      }
    } catch (error) {
      setContactSubmitStatus('error');
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-brain-line text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">RadAssist AI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/solutions" className="text-blue-600 font-medium">Solutions</Link>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Solutions for
              <span className="text-blue-600"> NHS Radiology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how RadAssist AI transforms radiology workflows with intelligent follow-up tracking, 
              backlog management, and AI-powered analytics designed specifically for NHS requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <i className={`${solution.icon} text-2xl text-blue-600`}></i>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Radiology Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join NHS trusts already using RadAssist AI to prevent missed follow-ups and optimize their radiology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowDemoForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Demo
            </button>
            <Link to="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap">
              Learn More
            </Link>
          </div>
        </div>
      </section>

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

              {contactSubmitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="ri-check-circle-line text-green-600 text-xl"></i>
                    <p className="text-green-800 font-medium">Thank you for your interest! We'll contact you soon.</p>
                  </div>
                </div>
              )}

              {contactSubmitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="ri-error-warning-line text-red-600 text-xl"></i>
                    <p className="text-red-800 font-medium">Failed to submit form. Please try again.</p>
                  </div>
                </div>
              )}

              <form 
                id="contact-form"
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

      {/* Demo Form Modal */}
      {showDemoForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600">Schedule Your Demo</h3>
                <button
                  onClick={() => setShowDemoForm(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="ri-check-circle-line text-green-600 text-xl"></i>
                    <p className="text-green-800 font-medium">Demo request submitted successfully! We'll contact you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="ri-error-warning-line text-red-600 text-xl"></i>
                    <p className="text-red-800 font-medium">Failed to submit request. Please try again.</p>
                  </div>
                </div>
              )}

              <form 
                id="demo-form"
                className="space-y-6" 
                onSubmit={handleDemoFormSubmit}
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      NHS Trust/Hospital *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your NHS Trust name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      Department Size
                    </label>
                    <select 
                      name="departmentSize"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-8"
                    >
                      <option value="">Select size</option>
                      <option value="small">Small (1-5 radiologists)</option>
                      <option value="medium">Medium (6-15 radiologists)</option>
                      <option value="large">Large (16+ radiologists)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">
                    Solutions of Interest
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="solutions" value="Follow-Up Tracking" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Follow-Up Tracking</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="solutions" value="Backlog Management" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Backlog Management</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="solutions" value="AI Analytics" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">AI Analytics</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">
                    Preferred Demo Time
                  </label>
                  <select 
                    name="preferredTime"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-8"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9:00 - 12:00)</option>
                    <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                    <option value="evening">Evening (17:00 - 19:00)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">
                    Current Challenges
                  </label>
                  <textarea
                    name="challenges"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your current radiology workflow challenges (max 500 characters)"
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
                    I consent to RadAssist AI contacting me about this demo request and understand that this is not a commitment to purchase.
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowDemoForm(false)}
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
                    {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
