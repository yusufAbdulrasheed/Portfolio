import styles from '@/styles/ContactCode.module.css';
import { 
  FaInstagram, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';


const contactItems = [
  {
    social: 'website',
    href: 'https://www.instagram.com/code_with_rash',
    icon: FaInstagram,
  },
  {
    social: 'email',
    href: 'mailto:yusufabdulrasheed200@gmail.com',
    icon: FaEnvelope,
  },
  {
    social: 'github',
    href: 'https://github.com/yusufAbdulrasheed',
    icon: FaGithub,
  },
  {
    social: 'linkedin',
    href: 'https://www.linkedin.com/in/yusuf-abdulrasheed-adinoyi/',
    icon: FaLinkedin,
  },
  {
    social: 'twitter',
    href: 'https://x.com/iamAdinoyi',
    icon: FaTwitter,
  },
  {
    social: 'facebook',
    href: 'https://www.facebook.com/share/16ovynUSw6/',
    icon: FaFacebook,
  },
  {
    social: 'whatsapp',
    href: 'https://wa.me/qr/ECRGPQ26EJQ2F1',
    icon: FaWhatsapp,
  },

  {
    social: 'Youtube',
    href: 'https://www.youtube.com/@codewith_rash',
    icon: FaYoutube
  },
];

const ContactCode = () => {
  return (
    <div className={styles.socialIcons}>
      {contactItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <a 
            key={index}
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title={`Visit my ${item.social}`}
            aria-label={`Visit my ${item.social}`}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default ContactCode;