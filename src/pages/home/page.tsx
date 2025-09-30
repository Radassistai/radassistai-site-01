
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/ui/Logo';

export default function Home() {
  const [showPilotForm, setShowPilotForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://readdy.ai/api/search-image?query=Modern%20NHS%20hospital%20radiology%20department%20with%20advanced%20medical%20imaging%20equipment%2C%20clean%20professional%20healthcare%20environment%20with%20medical%20professionals%20working%20on%20patient%20care%2C%20bright%20clinical%20setting%20with%20state-of-the-art%20diagnostic%20technology%2C%20professional%20medical%20workspace%20with%20British%20healthcare%20standards%20and%20modern%20medical%20equipment&width=1920&height=1080&seq=radassist-hero&orientation=landscape",
      alt: "NHS Radiology Department"
    },
    {
      url: "https://readdy.ai/api/search-image?query=NHS%20radiologists%20analyzing%20medical%20scans%20on%20computer%20screens%20in%20modern%20hospital%20setting%2C%20healthcare%20professionals%20reviewing%20patient%20imaging%20results%20with%20AI%20assistance%20technology%2C%20clean%20bright%20medical%20workspace%20with%20multiple%20monitors%20displaying%20radiology%20images%20and%20diagnostic%20tools&width=1920&height=1080&seq=radassist-hero-2&orientation=landscape",
      alt: "NHS Radiologists with AI Technology"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handlePilotFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic
    console.log('Pilot form submitted');
    setShowPilotForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/hub-nigeria" className="text-gray-600 hover:text-blue-600 transition-colors">Nigeria Hub</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center pt-20 overflow-hidden">
        {/* Carousel Container */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image.url}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-30 cursor-pointer"
        >
          <i className="ri-arrow-left-line text-xl text-[#005EB8]"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-30 cursor-pointer"
        >
          <i className="ri-arrow-right-line text-xl text-[#005EB8]"></i>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Hook Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#005EB8] mb-6">
              Track Every Follow-Up
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              RadAssist AI ensures no critical radiology follow-up is ever missed in your NHS department. 
              AI-powered tracking, backlog forecasting, and real-time dashboards built specifically for NHS workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowPilotForm(true)}
                className="bg-[#005EB8] hover:bg-[#004494] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3"
              >
                <i className="ri-rocket-line text-xl"></i>
                Start 2-Week Pilot
              </button>
              <a
                href="#how-it-works"
                className="bg-white hover:bg-gray-50 text-[#005EB8] border-2 border-[#005EB8] px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3"
              >
                <i className="ri-play-line text-xl"></i>
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#007F3B]">30%</div>
              <p className="text-gray-600">
                of urgent follow-ups are delayed or missed in current NHS workflows
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#005EB8]">95%</div>
              <p className="text-gray-600">
                follow-up tracking accuracy with RadAssist AI implementation
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#007F3B]">2-4 weeks</div>
              <p className="text-gray-600">
                implementation time vs 6-12+ months for traditional solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About RadAssist AI Section */}
      <section className="py-20 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#005EB8] mb-4">About RadAssist AI</h2>
            <p className="text-xl text-gray-600">
              Empowering NHS radiology teams with AI-driven solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At RadAssist AI, our mission is simple: help NHS radiology teams deliver faster,
                safer care with the power of artificial intelligence.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Every year, thousands of patients experience delays because radiology teams face rising
                demand, growing backlogs, and limited staff capacity. Reports can be generated quickly,
                but follow-ups often slip through the cracks — putting patients at risk and creating more
                pressure on clinicians.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#005EB8]">That's where RadAssist AI comes in.</strong>
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We combine AI-driven follow-up tracking, backlog forecasting, and workflow dashboards
                to give radiology departments the tools they need to:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-[#007F3B] text-xl mt-1"></i>
                  <p className="text-lg text-gray-700">
                    Ensure every patient is safely followed up
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-[#007F3B] text-xl mt-1"></i>
                  <p className="text-lg text-gray-700">
                    Predict and manage backlog clearance more effectively
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-check-line text-[#007F3B] text-xl mt-1"></i>
                  <p className="text-lg text-gray-700">
                    Free up NHS staff to focus on the highest-value care
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-heart-pulse-line text-3xl text-[#005EB8]"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#005EB8] mb-2">Our Values</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-shield-check-line text-[#007F3B] text-lg mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Trust &amp; Safety</h4>
                      <p className="text-sm text-gray-600">
                        NHS standards, DTAC, GDPR, and Information Governance compliant from day one
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <i className="ri-user-heart-line text-[#005EB8] text-lg mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">People-First AI</h4>
                      <p className="text-sm text-gray-600">AI should empower people, not replace them</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <i className="ri-eye-line text-purple-600 text-lg mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparency</h4>
                      <p className="text-sm text-gray-600">
                        Clear visibility into how our AI makes decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#005EB8] mb-4">How RadAssist AI Works</h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your radiology workflow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-scan-line text-3xl text-[#005EB8]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#005EB8]">1. Scan Analysis</h3>
              <p className="text-gray-600">
                AI analyzes radiology reports and identifies findings requiring follow-up care or
                additional imaging.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-[#007F3B]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#005EB8]">2. Smart Tracking</h3>
              <p className="text-gray-600">
                Automatically creates follow-up schedules and tracks patient progress through your existing
                NHS systems.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-dashboard-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#005EB8]">3. Real-time Dashboards</h3>
              <p className="text-gray-600">
                Monitor backlog vs capacity, predict bottlenecks, and ensure no critical follow-up is missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#005EB8] mb-4">
              Why NHS Teams Choose RadAssist AI
            </h2>
            <p className="text-xl text-gray-600">
              Built specifically for NHS workflows and compliance requirements
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-eye-line text-[#007F3B] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#005EB8]">
                    Follow-Up Tracking That Actually Works
                  </h3>
                  <p className="text-gray-600">
                    Unlike report-only AI tools, we track what happens after the scan—ensuring critical
                    follow-ups don&apos;t get lost in busy NHS workflows.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-time-line text-[#005EB8] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#005EB8]">
                    Predictive Timeline Forecasting
                  </h3>
                  <p className="text-gray-600">
                    Know when backlogs will clear and predict capacity issues before they impact patient
                    care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-shield-check-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#005EB8]">NHS-First Compliance</h3>
                  <p className="text-gray-600">
                    DTAC, IG Toolkit, and GDPR compliance built-in from day one. No additional security reviews
                    needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Clean%20modern%20NHS%20radiology%20dashboard%20interface%20showing%20patient%20follow-up%20tracking%20system%20with%20colorful%20charts%20and%20progress%20indicators%2C%20medical%20professionals%20viewing%20real-time%20capacity%20management%20tools%20on%20computer%20screens%2C%20professional%20healthcare%20technology%20workspace%20with%20British%20healthcare%20branding%20elements&width=600&height=400&seq=radassist-dashboard&orientation=landscape"
                alt="RadAssist AI Dashboard"
                className="w-full h-80 object-cover object-top rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#005EB8] mb-4">How We Compare</h2>
            <p className="text-xl text-gray-600">
              See why NHS teams are choosing RadAssist AI over traditional solutions
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[#005EB8] to-[#007F3B] text-white">
                <tr>
                  <th className="text-left py-6 px-8 font-semibold text-lg">Feature</th>
                  <th className="text-center py-6 px-6 font-semibold text-lg">
                    Other AI Radiology Tools
                  </th>
                  <th className="text-center py-6 px-6 font-semibold text-lg">RadAssist AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-8 font-medium text-gray-900">Report Generation</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <i className="ri-check-line text-green-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Yes</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                      <span className="text-gray-500 text-sm">⚪</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Limited – we focus beyond reports
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-8 font-medium text-gray-900">Follow-Up Tracking</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                      <i className="ri-close-line text-red-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">No</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <i className="ri-check-line text-green-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Yes</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-8 font-medium text-gray-900">
                    Backlog + Capacity Dashboards
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                      <i className="ri-close-line text-red-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Rarely</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <i className="ri-check-line text-green-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Yes</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-8 font-medium text-gray-900">
                    NHS Compliance (DTAC, IG, GDPR)
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full">
                      <i className="ri-error-warning-line text-yellow-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Varies</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <i className="ri-check-line text-green-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Built-in from day one</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-8 font-medium text-gray-900">Transparency &amp; Audit Logs</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                      <i className="ri-close-line text-red-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Limited</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <i className="ri-check-line text-green-600 text-lg"></i>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Full visibility</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pilot Program Section */}
      <section id="pilot" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#005EB8] mb-8">
            Ready to Transform Your Radiology Workflow?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join NHS teams already using RadAssist AI to ensure no critical follow-up is ever missed
          </p>

          <div className="bg-gradient-to-r from-[#005EB8] to-[#007F3B] rounded-2xl p-8 mb-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">2-Week Implementation</h4>
                <p className="text-white/90 text-sm">Quick setup with your existing NHS systems</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">NHS Compliant</h4>
                <p className="text-white/90 text-sm">DTAC, IG Toolkit, and GDPR ready</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-heart-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Dedicated Support</h4>
                <p className="text-white/90 text-sm">UK-based team with NHS experience</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowPilotForm(true)}
            className="bg-[#005EB8] hover:bg-[#004494] text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-3"
          >
            <i className="ri-rocket-line text-xl"></i>
            Start Your 2-Week Pilot Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F3F3F3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#005EB8] mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to see how RadAssist AI can transform your radiology department?
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <i className="ri-mail-line text-xl text-[#005EB8]"></i>
              <a href="mailto:contact@radassistai.com" className="hover:text-[#005EB8] cursor-pointer">
                contact@radassistai.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <i className="ri-linkedin-line text-xl text-[#005EB8]"></i>
              <a
                href="https://www.linkedin.com/company/radassist-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#005EB8] cursor-pointer"
              >
                Linked In
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center rounded">
                  <Logo size="sm" />
                </div>
                <span className="text-xl font-bold">RadAssist AI</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Empowering NHS radiology teams with AI-driven follow-up tracking and workflow optimization.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:contact@radassistai.com" className="hover:text-white/90 cursor-pointer">
                  <i className="ri-mail-line text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/radassist-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/90 cursor-pointer"
                >
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#how-it-works" className="hover:text-white/90 cursor-pointer">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white/90 cursor-pointer">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="hover:text-white/90 cursor-pointer">
                    How We Compare
                  </a>
                </li>
                <li>
                  <a href="#pilot" className="hover:text-white/90 cursor-pointer">
                    Pilot Program
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} RadAssist AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Pilot Form Modal */}
      {showPilotForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#005EB8]">Start Your 2-Week Pilot</h3>
                <button
                  onClick={() => setShowPilotForm(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              <form className="space-y-6" onSubmit={handlePilotFormSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
                      placeholder="e.g., Consultant Radiologist"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
                      placeholder="your.email@nhs.net"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
                      placeholder="+44 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      NHS Trust/Hospital *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
                      placeholder="Your NHS Trust name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Department Size
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent pr-8">
                      <option value="">Select size</option>
                      <option value="small">Small (1-5 radiologists)</option>
                      <option value="medium">Medium (6-15 radiologists)</option>
                      <option value="large">Large (16+ radiologists)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#005EB8] mb-2">
                    Current Follow-up Challenges
                  </label>
                  <textarea
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent resize-none"
                    placeholder="Tell us about your current follow-up tracking challenges (max 500 characters)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#005EB8] mb-2">
                    Preferred Implementation Timeline
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent pr-8">
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 2 weeks)</option>
                    <option value="month">Within 1 month</option>
                    <option value="quarter">Within 3 months</option>
                    <option value="planning">Still planning</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 text-[#005EB8]"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to RadAssist AI contacting me about this pilot program and understand that this is not a
                    commitment to purchase.
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPilotForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#005EB8] text-white rounded-lg hover:bg-[#004494] whitespace-nowrap cursor-pointer"
                  >
                    Start Pilot Program
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
