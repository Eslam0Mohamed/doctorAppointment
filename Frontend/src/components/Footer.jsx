import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-main text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div>
            <h2 className="text-2xl font-bold">ClinicCare</h2>
            <p className="text-sm text-white/80 mt-1">
              Your trusted healthcare partner.
            </p>
          </div>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-tertiary transition">
              Home
            </Link>
            <Link to="/doctors" className="hover:text-tertiary transition">
              Doctors
            </Link>
            <Link to="/departments" className="hover:text-tertiary transition">
              Departments
            </Link>
            <Link to="/appointments" className="hover:text-tertiary transition">
              Appointments
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-white/70">
          © {new Date().getFullYear()} ClinicCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;