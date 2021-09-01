import Link from 'next/link';
const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className="LogoImage" />
      </Link>
      <style jsx>
        {`
          .LogoImage {
            display: block;
            position: relative;
            width: 34px;
            height: 34px;
            background-image: url('/static/logo.jpg');
            background-size: cover;
            background-position: center;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default Logo;
