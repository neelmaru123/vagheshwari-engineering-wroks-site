import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <Image
                src="/uploads/logo.png"
                alt="Vageshwari Engineering Works"
                width={240}
                height={80}
                className="h-24 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="mb-4">
              Manufacturer of high-quality hydraulic brick making machines and
              equipment. Trusted by businesses across India for reliable,
              efficient production solutions.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/share/14R9QAC2aaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/vagheshwari_engineering_works?utm_source=qr&igsh=MWxqbjVwd2lmc2NxNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/shree-vagheshwari-engineering-works/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Fully Automatic Brick Making Machines
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Semi Automatic Brick Making Machines
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Claybricks Making Machines
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Paver Block Making Machines
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>2, Lati plot, Morbi (Gujarat) - 363641, India</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 9879277425</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>vew.machines@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p>
            © {currentYear} Vageshwari Engineering Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
