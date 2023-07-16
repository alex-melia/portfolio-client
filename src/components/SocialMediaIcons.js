import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

const SocialMediaIcons = () => {
  return (
    <div className='hero-icons'>
      <a href='https://www.linkedin.com/in/alexmeliadev'>
        <AiFillLinkedin className='hero-icon' />
      </a>
      <a href='https://github.com/alex-melia'>
        <AiFillGithub className='hero-icon' />
      </a>
      <a href='mailto:alexmelia41@gmail.com'>
        <AiFillMail className='hero-icon' />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
