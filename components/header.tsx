import rdsCarcenterPic from '@/assets/images/header-foto.webp';
import Image from 'next/image';
const Header = () => {
  return (
    <header style={{height: "15rem"}}>
        <Image src={rdsCarcenterPic} alt="RDS Carcenter logo" />
    </header>
  )
}

export default Header;