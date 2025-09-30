
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "NHS Trust Reduces Diagnostic Time by 60%",
      hospital: "Royal London Hospital",
      location: "London, UK",
      specialty: "Emergency Radiology",
      image: "https://readdy.ai/api/search-image?query=modern%20hospital%20emergency%20department%20with%20advanced%20medical%20imaging%20equipment%2C%20clean%20white%20medical%20environment%2C%20professional%20healthcare%20setting%20with%20CT%20scanners%20and%20radiologists%20working%2C%20bright%20clinical%20lighting%2C%20contemporary%20medical%20facility%20design&width=600&height=400&seq=case1&orientation=landscape",
      challenge: "Emergency department facing critical delays in CT scan interpretation, leading to extended patient wait times and potential missed diagnoses during peak hours.",
      solution: "Implemented RadAssist AI for emergency CT screening with real-time triage capabilities and automated preliminary reporting system.",
      results: [
        "60% reduction in average diagnostic turnaround time",
        "95% accuracy in critical finding detection",
        "40% improvement in patient satisfaction scores",
        "25% reduction in radiologist overtime costs"
      ],
      testimonial: "RadAssist AI has transformed our emergency radiology workflow. We can now provide faster, more accurate diagnoses, especially during night shifts when radiologist coverage is limited.",
      author: "Dr. Sarah Mitchell",
      position: "Head of Emergency Radiology"
    },
    {
      id: 2,
      title: "Regional Medical Center Achieves 99% Accuracy in Lung Cancer Screening",
      hospital: "Manchester Medical Center",
      location: "Manchester, UK",
      specialty: "Thoracic Imaging",
      image: "https://readdy.ai/api/search-image?query=advanced%20medical%20imaging%20center%20with%20chest%20CT%20scanners%2C%20radiologists%20analyzing%20lung%20scans%20on%20high-resolution%20monitors%2C%20modern%20healthcare%20technology%2C%20professional%20medical%20environment%20with%20clean%20white%20walls%20and%20sophisticated%20equipment&width=600&height=400&seq=case2&orientation=landscape",
      challenge: "High volume of lung cancer screening cases overwhelming radiology department, with concerns about consistency in nodule detection across different radiologists.",
      solution: "Deployed RadAssist AI lung cancer screening module with automated nodule detection, classification, and follow-up recommendations.",
      results: [
        "99% accuracy in nodule detection",
        "50% increase in screening capacity",
        "30% earlier detection of malignant cases",
        "Standardized reporting across all radiologists"
      ],
      testimonial: "The AI system has become an invaluable second opinion tool. It catches subtle findings that might be missed and ensures consistent quality across our entire screening program.",
      author: "Prof. James Thompson",
      position: "Director of Thoracic Imaging"
    },
    {
      id: 3,
      title: "Private Clinic Expands Services with AI-Powered Musculoskeletal Imaging",
      hospital: "Birmingham Imaging Clinic",
      location: "Birmingham, UK",
      specialty: "Musculoskeletal Radiology",
      image: "https://readdy.ai/api/search-image?query=modern%20private%20medical%20clinic%20with%20MRI%20machines%20and%20orthopedic%20imaging%20equipment%2C%20elegant%20healthcare%20facility%20with%20comfortable%20patient%20areas%2C%20professional%20radiologists%20examining%20bone%20and%20joint%20scans%2C%20contemporary%20medical%20design&width=600&height=400&seq=case3&orientation=landscape",
      challenge: "Limited radiologist availability for specialized musculoskeletal cases, leading to referral delays and lost revenue opportunities.",
      solution: "Integrated RadAssist AI musculoskeletal module for automated fracture detection, joint analysis, and sports injury assessment.",
      results: [
        "200% increase in musculoskeletal case volume",
        "48-hour average reporting turnaround",
        "35% revenue growth in orthopedic imaging",
        "98% patient satisfaction with report quality"
      ],
      testimonial: "RadAssist AI allowed us to expand into specialized musculoskeletal imaging without hiring additional radiologists. Our orthopedic partners are impressed with the detailed, consistent reports.",
      author: "Dr. Michael Roberts",
      position: "Medical Director"
    },
    {
      id: 4,
      title: "University Hospital Enhances Stroke Care with AI-Powered Neuroimaging",
      hospital: "Edinburgh University Hospital",
      location: "Edinburgh, Scotland",
      specialty: "Neuroradiology",
      image: "https://readdy.ai/api/search-image?query=university%20hospital%20neuroimaging%20department%20with%20advanced%20brain%20MRI%20and%20CT%20scanners%2C%20medical%20professionals%20analyzing%20stroke%20scans%2C%20modern%20neurology%20unit%20with%20sophisticated%20imaging%20technology%2C%20academic%20medical%20center%20environment&width=600&height=400&seq=case4&orientation=landscape",
      challenge: "Critical need for rapid stroke assessment and treatment decisions, with limited neuroradiology coverage during off-hours affecting patient outcomes.",
      solution: "Implemented RadAssist AI stroke detection system with automated ASPECTS scoring and large vessel occlusion identification.",
      results: [
        "75% faster stroke assessment",
        "90% accuracy in large vessel occlusion detection",
        "45% improvement in door-to-treatment times",
        "20% better patient outcomes at discharge"
      ],
      testimonial: "In stroke care, every minute counts. RadAssist AI helps us make critical treatment decisions faster, ultimately saving lives and improving patient outcomes.",
      author: "Dr. Emma Wilson",
      position: "Consultant Neuroradiologist"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-teal-600" style={{ fontFamily: '"Pacifico", serif' }}>
                RadAssist AI
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link to="/solutions" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Solutions
                </Link>
                <Link to="/case-studies" className="text-teal-600 px-3 py-2 text-sm font-medium">
                  Case Studies
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Blog
                </Link>
                <Link to="/hub-nigeria" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Hub Nigeria
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-teal-600 p-2">
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Results from
              <span className="text-teal-600"> Real Healthcare Partners</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how leading healthcare institutions are transforming patient care with RadAssist AI. 
              From emergency departments to specialized clinics, see the measurable impact of AI-powered radiology.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-gray-600">Healthcare Partners</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-teal-600">1M+</div>
                <div className="text-gray-600">Scans Analyzed</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-teal-600">95%</div>
                <div className="text-gray-600">Average Accuracy</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-teal-600">60%</div>
                <div className="text-gray-600">Time Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">{study.specialty}</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i>
                      {study.location}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{study.title}</h2>
                  <h3 className="text-xl text-teal-600 font-semibold">{study.hospital}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <i className="ri-check-line text-teal-600"></i>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-teal-600 text-xl"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{study.author}</div>
                        <div className="text-sm text-gray-600">{study.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Radiology Department?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join leading healthcare institutions worldwide in delivering faster, more accurate diagnoses with RadAssist AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors whitespace-nowrap cursor-pointer">
              Download Case Study Report
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>RadAssist AI</h3>
              <p className="text-gray-400">
                Transforming healthcare through intelligent radiology solutions powered by advanced AI technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Radiology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lung Cancer Screening</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Musculoskeletal Imaging</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stroke Detection</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">White Papers</a></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 RadAssist AI. All rights reserved.</p>
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-white transition-colors">
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudies;
