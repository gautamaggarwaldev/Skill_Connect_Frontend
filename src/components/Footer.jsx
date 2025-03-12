const Footer = () => {
  return (
    <div>
      <footer className="px-8 py-10 text-white bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p>Follow us on social media for updates and mentorship tips!</p>
          <p className="mt-4">
            <a href="www.linkedin.com/in/gautam-aggarwal-" target="_blank" className="hover:text-[#00DFBD]">
              Facebook
            </a>{" "}
            |{" "}
            <a href="www.linkedin.com/in/gautam-aggarwal-" target="_blank" className="hover:text-[#00DFBD]">
              Twitter
            </a>{" "}
            |{" "}
            <a href="www.linkedin.com/in/gautam-aggarwal-" target="_blank" className="hover:text-[#00DFBD]">
              LinkedIn
            </a>
          </p>
          <p className="mt-4">&copy; 2025 SkillConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
