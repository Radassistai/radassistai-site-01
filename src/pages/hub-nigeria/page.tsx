
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/ui/Logo';

export default function HubNigeria() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://readdy.ai/api/search-image?query=Group%20of%20focused%20African%20Nigerian%20university%20students%20studying%20computer%20science%20and%20technology%20in%20modern%20university%20library%20or%20computer%20lab%2C%20diverse%20students%20working%20on%20laptops%20and%20coding%20projects%2C%20bright%20academic%20environment%20with%20books%20and%20digital%20resources%2C%20professional%20educational%20setting%20with%20students%20concentrating%20on%20healthcare%20AI%20innovation%20and%20software%20development&width=1920&height=1080&seq=nigeria-hub-students&orientation=landscape",
      alt: "Nigerian Students in Technology"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Young%20African%20Nigerian%20professionals%20collaborating%20on%20AI%20and%20healthcare%20technology%20projects%20in%20modern%20workspace%2C%20diverse%20team%20of%20developers%20and%20researchers%20working%20together%20on%20computers%20with%20medical%20data%20visualization%2C%20innovative%20tech%20startup%20environment%20with%20bright%20lighting%20and%20contemporary%20design&width=1920&height=1080&seq=nigeria-hub-professionals&orientation=landscape",
      alt: "Nigerian AI Healthcare Professionals"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic
    console.log('Application submitted');
    setShowApplicationForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/hub-nigeria" className="text-blue-600 font-medium">Nigeria Hub</Link>
              <a
                href="https://trello.com/b/f8i39h6l/radassist-ai-nigeria-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col gap-4 pt-4">
                <a href="/" className="text-gray-700 hover:text-[#005EB8] font-medium cursor-pointer transition-colors">
                  Home
                </a>
                <a href="#what-we-do" className="text-gray-700 hover:text-[#005EB8] font-medium cursor-pointer transition-colors">
                  What We Do
                </a>
                <a href="#roles" className="text-gray-700 hover:text-[#005EB8] font-medium cursor-pointer transition-colors">
                  Roles
                </a>
                <a href="#get-involved" className="text-gray-700 hover:text-[#005EB8] font-medium cursor-pointer transition-colors">
                  Get Involved
                </a>
                <a href="/hub-nigeria" className="text-[#005EB8] font-semibold cursor-pointer">
                  Nigeria Hub
                </a>
                <a
                  href="https://www.linkedin.com/company/radassist-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#005EB8] font-medium cursor-pointer transition-colors"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        {/* Background Image Carousel Section */}
        <div className="relative h-screen overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${image.url}')`,
                }}
              ></div>
            </div>
          ))}

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
        </div>

        {/* Text Content Section */}
        <div className="relative bg-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#007F3B] text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <i className="ri-map-pin-line"></i>
              Nigeria Hub
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#005EB8] mb-8 leading-tight">
              Empowering Nigerian Talent in
              <span className="block text-[#007F3B]">Healthcare AI Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Join Nigeria's brightest minds in building cutting-edge AI solutions for the NHS. 
              Gain real-world experience while contributing to global healthcare innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="w-full sm:w-auto bg-[#005EB8] hover:bg-[#004494] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3 shadow-lg"
              >
                <i className="ri-user-add-line text-xl"></i>
                Apply Now
              </button>
              
              <a
                href="#roles"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#005EB8] border-2 border-[#005EB8] px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3 shadow-lg"
              >
                <i className="ri-briefcase-line text-xl"></i>
                View Available Roles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005EB8] mb-4">Our Growing Community</h2>
            <p className="text-lg text-gray-600">Nigerian students leading healthcare AI innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#005EB8] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-3xl text-white"></i>
              </div>
              <div className="text-4xl font-bold text-[#007F3B] mb-2">50+</div>
              <h3 className="text-lg font-semibold text-[#005EB8] mb-2">Active Students</h3>
              <p className="text-gray-600">Talented individuals working on healthcare AI</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#007F3B] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-briefcase-line text-3xl text-white"></i>
              </div>
              <div className="text-4xl font-bold text-[#005EB8] mb-2">6</div>
              <h3 className="text-lg font-semibold text-[#005EB8] mb-2">Role Types</h3>
              <p className="text-gray-600">Diverse opportunities across tech disciplines</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hospital-line text-3xl text-white"></i>
              </div>
              <div className="text-4xl font-bold text-[#007F3B] mb-2">NHS</div>
              <h3 className="text-lg font-semibold text-[#005EB8] mb-2">Global Impact</h3>
              <p className="text-gray-600">Supporting UK healthcare innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005EB8] mb-4">What We Do</h2>
            <p className="text-lg md:text-xl text-gray-600">Supporting healthcare innovation while building local talent</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-hospital-line text-3xl text-[#005EB8]"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-[#005EB8]">Support NHS-Focused AI</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007F3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Research and development for NHS radiology solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007F3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">AI prototyping and testing for healthcare applications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007F3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Medical data preparation and analysis support</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-3xl text-[#007F3B]"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-[#005EB8]">Create Opportunities</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007F3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Job creation for Nigerian IT and medical students</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007F3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Real-world experience in healthcare technology</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007F3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Global collaboration and innovation partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005EB8] mb-4">Available Roles</h2>
            <p className="text-lg md:text-2xl text-gray-600">Join our team and gain valuable experience in healthcare AI</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* AI/Data Intern */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-brain-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-center text-[#005EB8]">AI/Data Intern</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">KEY TASKS:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-purple-600 mt-0.5 text-xs"></i>
                    <p>Collect and clean datasets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-purple-600 mt-0.5 text-xs"></i>
                    <p>Run ML experiments</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-purple-600 mt-0.5 text-xs"></i>
                    <p>Annotate medical images</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">SKILLS NEEDED:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">Python</span>
                  <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">ML Libraries</span>
                  <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">Data Viz</span>
                </div>
              </div>
            </div>

            {/* Frontend/Backend Developer */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-code-line text-2xl text-[#005EB8]"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-center text-[#005EB8]">Frontend/Backend Developer</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">KEY TASKS:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#005EB8] mt-0.5 text-xs"></i>
                    <p>Build dashboard mockups</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#005EB8] mt-0.5 text-xs"></i>
                    <p>Create NHS interfaces</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#005EB8] mt-0.5 text-xs"></i>
                    <p>Website updates</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">SKILLS NEEDED:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-[#005EB8] px-2 py-1 rounded-lg text-xs font-medium">React</span>
                  <span className="bg-blue-50 text-[#005EB8] px-2 py-1 rounded-lg text-xs font-medium">TypeScript</span>
                  <span className="bg-blue-50 text-[#005EB8] px-2 py-1 rounded-lg text-xs font-medium">APIs</span>
                  <span className="bg-blue-50 text-[#005EB8] px-2 py-1 rounded-lg text-xs font-medium">GitHub</span>
                </div>
              </div>
            </div>

            {/* Research & Writing Assistant */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-search-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-center text-[#005EB8]">Research & Writing Assistant</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">KEY TASKS:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-emerald-600 mt-0.5 text-xs"></i>
                    <p>Research NHS challenges</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-emerald-600 mt-0.5 text-xs"></i>
                    <p>Write reports</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-emerald-600 mt-0.5 text-xs"></i>
                    <p>Support grant applications</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">SKILLS NEEDED:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium">Writing</span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium">Research</span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium">Healthcare</span>
                </div>
              </div>
            </div>

            {/* AI Content Creator */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-megaphone-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-center text-[#005EB8]">Content Creator &amp; Social Media</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">KEY TASKS:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-orange-600 mt-0.5 text-xs"></i>
                    <p>Create viral content</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-orange-600 mt-0.5 text-xs"></i>
                    <p>Manage social channels</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-orange-600 mt-0.5 text-xs"></i>
                    <p>Grow engagement</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">SKILLS NEEDED:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded-lg text-xs font-medium">Copywriting</span>
                  <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded-lg text-xs font-medium">Social Media</span>
                  <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded-lg text-xs font-medium">AI Tools</span>
                </div>
              </div>
            </div>

            {/* Azure Cloud Intern */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-cloud-line text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-center text-[#005EB8]">Azure Cloud Intern</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">KEY TASKS:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-indigo-600 mt-0.5 text-xs"></i>
                    <p>Setup Azure resources</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-indigo-600 mt-0.5 text-xs"></i>
                    <p>Support deployments</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-indigo-600 mt-0.5 text-xs"></i>
                    <p>Configure CI/CD</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">SKILLS NEEDED:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium">Azure</span>
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium">DevOps</span>
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium">CI/CD</span>
                </div>
              </div>
            </div>

            {/* Graphic Designer */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-palette-line text-2xl text-pink-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-center text-[#005EB8]">Graphic Designer</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">KEY TASKS:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-pink-600 mt-0.5 text-xs"></i>
                    <p>Design engaging visuals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-pink-600 mt-0.5 text-xs"></i>
                    <p>Create infographics</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-pink-600 mt-0.5 text-xs"></i>
                    <p>Support presentations</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005EB8] mb-3 text-sm">SKILLS NEEDED:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded-lg text-xs font-medium">Canva</span>
                  <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded-lg text-xs font-medium">Figma</span>
                  <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded-lg text-xs font-medium">AI Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005EB8] mb-8">Ready to Get Involved?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Join Nigeria's brightest minds in building the future of healthcare AI
          </p>

          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-line text-[#007F3B] text-2xl"></i>
                </div>
                <h4 className="font-semibold text-[#005EB8] mb-3">Flexible Schedule</h4>
                <p className="text-gray-600">Part-time opportunities that fit your studies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-[#005EB8] text-2xl"></i>
                </div>
                <h4 className="font-semibold text-[#005EB8] mb-3">Global Impact</h4>
                <p className="text-gray-600">Work on projects that impact NHS healthcare</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-purple-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-[#005EB8] mb-3">Career Growth</h4>
                <p className="text-gray-600">Build skills for your future career</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:nigeria@radassistai.com"
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-[#005EB8] cursor-pointer transition-colors bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200"
            >
              <i className="ri-mail-line text-xl"></i>
              nigeria@radassistai.com
            </a>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005EB8] mb-4">Get Started</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Check available tasks on Trello, complete the work, then submit your deliverables via the form.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="https://trello.com/b/f8i39h6l/radassist-ai-nigeria-hub"
              target="_blank"
              rel="noopener"
              aria-label="View tasks on Trello (opens in new tab)"
              className="w-full md:w-auto bg-[#005EB8] hover:bg-[#004494] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3 shadow-lg"
            >
              <i className="ri-clipboard-line text-xl"></i>
              View Tasks on Trello
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScq9SEOj3TYhflaEa1G4BW8s-IZQ_JcBLgkTRPMLe8jL8FKqQ/viewform?usp=header"
              target="_blank"
              rel="noopener"
              aria-label="Submit your task deliverables (opens in new tab)"
              className="w-full md:w-auto bg-white hover:bg-gray-50 text-[#005EB8] border-2 border-[#005EB8] px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-3 shadow-lg"
            >
              <i className="ri-upload-line text-xl"></i>
              Submit Your Task
            </a>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <i className="ri-money-dollar-circle-line text-[#007F3B] text-xl"></i>
              <p className="text-[#007F3B] font-semibold">Payments are processed every Friday after review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size="sm" />
                <span className="text-xl font-bold">RadAssist AI</span>
              </div>
              <p className="text-gray-300 mb-4">
                RadAssist AI Hub (Nigeria) — Empowering talent, supporting healthcare innovation.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:nigeria@radassistai.com"
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  <i className="ri-mail-line text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/radassist-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Built with React + TypeScript /radassistai</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 RadAssist AI. All rights reserved.</p>
        </div>
      </footer>

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#005EB8]">Apply to Join Our Team</h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#005EB8] mb-2">
                      University/Institution
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-colors"
                      placeholder="Your university"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#005EB8] mb-2">
                    Preferred Role
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005EB8] focus:border-transparent pr-8 transition-colors">
                    <option value="">Select a role</option>
                    <option value="ai-data">AI/Data Intern</option>
                    <option value="developer">Frontend/Backend Developer</option>
                    <option value="research">Research &amp; Writing Assistant</option>
                    <option value="content">Content Creator &amp; Social Media</option>
                    <option value="cloud">Azure Cloud Intern</option>
                    <option value="design">Graphic Designer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#005EB8] mb-2">
                    Tell us about your experience
                  </label>
                  <textarea
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border 
                    border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-[#005EB8] focus:border-transparent 
                    resize-none transition-colors"
                    placeholder="Share your relevant skills and 
                    experience (max 500 characters)"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text 
                    gray-700 hover:bg-gray-100 whitespace 
                    nowrap cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#005EB8] text-white rounded-lg hover:bg-[#004494] whitespace 
                    nowrap cursor-pointer transition-colors"
                  >
                    Submit Application
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
