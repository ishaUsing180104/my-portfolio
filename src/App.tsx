import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, ExternalLink, Download, Star } from 'lucide-react';
import branding_image1 from './images/branding_image1.jpg';
import branding_image2 from './images/branding_image2.jpg';
import logo1 from './images/logo1.jpg';
import logo2 from './images/logo2.jpg';
import logo3 from './images/logo3.jpg';
import interior_design from './images/interior_design.jpg';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding",
    image: branding_image1,
    description: "Complete brand identity design for tech startup",
    client: "TechFlow Inc."
  },
  {
    id: 2,
    title: "Modern Brand Identity",
    category: "Branding",
    image: logo1,
    description: "Complete brand identity design for tech startup",
    client: "Fashion Forward"
  },
  {
    id: 3,
    title: "E Book Brochure",
    category: "Print",
    image: logo2,
    description: "Professional tri-fold brochure design",
    client: "Business Solutions"
  },
  {
    id: 4,
    title: "Modern Brand Identity",
    category: "Branding",
    image: logo3,
    description: "Clean and intuitive mobile app design",
    client: "MobileFirst"
  },
  {
    id: 5,
    title: "Logo Collection",
    category: "Branding",
    image: branding_image2,
    description: "Various logo designs for different industries",
    client: "Multiple Clients"
  },
  {
    id: 6,
    title: "Magazine Layout",
    category: "Print",
    image: interior_design,
    description: "Editorial magazine spread design",
    client: "Design Monthly"
  }
];

const services = [
  {
    title: "Brand Identity",
    description: "Complete brand development including logo, color palette, and brand guidelines",
    icon: "🎨",
    price: "Starting at $1,500"
  },
  {
    title: "Web Design",
    description: "Responsive website design that converts visitors into customers",
    icon: "💻",
    price: "Starting at $500"
  },
  {
    title: "Print Design",
    description: "Professional print materials from business cards to large format displays",
    icon: "📄",
    price: "Starting at $500"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design for web and mobile applications",
    icon: "📱",
    price: "Starting at $1,000"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors duration-200 hover:text-[#332147] ${
                    activeSection === id ? 'text-[#332147] font-medium' : 'text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-800 text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left py-2 px-4 rounded-md transition-colors duration-200 ${
                      activeSection === id 
                        ? 'bg-[#332147]/20 text-[#332147] font-medium' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Creative
                  <span className="text-[#332147]"> Design</span>
                  <br />
                  Solutions
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate graphic designer with experience of creating 
                  compelling visual stories that help brands connect with their audiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-[#332147] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#332147]/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  View My Work
                  <ChevronDown size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#332147] p-6 rounded-2xl shadow-lg border border-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-bold text-white">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of my best projects across various design disciplines
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-[#332147] text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-[#332147] px-2 py-1 rounded">{item.category}</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">About Me</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm Isha, a passionate graphic designer. 
                  With over a year of experience in the industry, I've had the privilege 
                  of working with startups, established brands, and everything in between.
                </p>
                <p>
                  My design philosophy centers around creating meaningful connections between 
                  brands and their audiences through thoughtful, strategic design. I believe 
                  great design isn't just about looking good—it's about solving problems and 
                  telling compelling stories.
                </p>
                <p>
                  When I'm not designing, you can find me exploring local coffee shops, 
                  hiking the beautiful mountain trails, or experimenting with new 
                  typography trends.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Adobe Creative Suite',
                    'Figma & Sketch',
                    'Brand Strategy',
                    'Web Design',
                    'Print Design',
                    'Typography',
                    'Illustration',
                    'UI/UX Design'
                  ].map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#332147] rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 border border-gray-600">
                <Download size={20} />
                Download Resume
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Designer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600 hover:border-gray-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-[#332147] font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-[#332147]" size={24} />
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-300">ishasharma180104@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-[#332147]" size={24} />
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-gray-300">+91 7645934801</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#332147]" size={24} />
                  <div>
                    <div className="font-medium text-white">Location</div>
                    <div className="text-gray-300">Patna, Bihar</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Quick Response Time</h3>
                <p className="text-gray-300 mb-4">
                  I typically respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call directly.
                </p>
                <div className="text-[#fefae0] font-medium">
                  Average response time: 4 hours
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-[#332147] focus:outline-none transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-[#332147] focus:outline-none transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-[#332147] focus:outline-none transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-[#332147] focus:outline-none transition-colors duration-200 text-white">
                  <option>Brand Identity</option>
                  <option>Web Design</option>
                  <option>Print Design</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-[#332147] focus:outline-none transition-colors duration-200 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#332147] text-white py-4 rounded-lg font-medium hover:bg-[#332147]/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Portfolio</div>
            <p className="text-gray-400 mb-6">
              Creating beautiful, functional design solutions
            </p>
            <div className="text-gray-500">
              © 2024 Isha Design Studio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;