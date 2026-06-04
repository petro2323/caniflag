const Footer = () => {
  return (
    <footer className="text-white px-6 py-6">
      
      <div className="flex flex-col items-center gap-3 text-sm text-gray-400">
        
        <div className="flex gap-6">
          <a href="mailto:aleksandarpetronijevic65@gmail.com" className="hover:text-yellow-400 transition">Contact</a>
          <a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-yellow-400 transition">Terms and Conditions</a>
          
        </div>

        <span>
          &copy; {new Date().getFullYear()} caniflag.com. All rights reserved. Developed by <a href="https://github.com/petro2323" target="_blank" className="hover:text-yellow-400 transition">petro2323</a>.
        </span>

      </div>

    </footer>
  )
}

export default Footer;