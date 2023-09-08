const Contact = ({ text, link }) => (
  <a href={link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">

    {text}
  </a>
);

export default Contact;
