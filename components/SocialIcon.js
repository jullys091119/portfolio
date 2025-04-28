import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => (
    <div className="social-icons">
        <div className='social-icons-icon'>
            <div className='social-icons-icon-rounded'>
                <FaGithub color='white' size={15} />
            </div>
        </div>
        <div className='social-icons-icon'>
            <div className='social-icons-icon-rounded'>
                <FaLinkedin color='white' size={15} />
            </div>
        </div>
        <div className='social-icons-icon'>
            <div className='social-icons-icon-rounded'>
                <FaTwitter color='white' size={15}/>
            </div>
        </div>
        <div className='social-icons-icon'>
            <div className='social-icons-icon-rounded'>
                <FaInstagram color='white'  size={15}/>
            </div>
        </div>
    </div>
);

export default SocialIcons