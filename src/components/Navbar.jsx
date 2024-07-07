import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import resumeFile from '../assets/DebayanDas_FullStackDev_Resume.pdf';
import ContactForm from './ContactForm';

function Navbar() {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(new Blob([resumeFile]));
    downloadLink.download = 'DebayanDas_FullStackDev_Resume.pdf';
    downloadLink.click();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    setIsOpen(true);
  };

  const handleContactFormClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-0 px-0'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className="text-xl typing-animation text-white mx-0">Deb.Folio</h1>
      </div>
      <div className="m-6 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/debayandas13"><FaLinkedin /></a>
        <a href="https://github.com/noobiethe13"><FaGithub /></a>
        <a href="#" onClick={handleDownloadResume}><FaRegFilePdf /></a>
        <a href="#" onClick={handleContactClick}><GrContact /></a>
      </div>
      {isOpen && <ContactForm onClose={handleContactFormClose} />}
    </nav>
  );
}

export default Navbar;