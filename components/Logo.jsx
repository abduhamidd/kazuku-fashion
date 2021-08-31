import Link from 'next/link';
const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className="LogoImage"></a>
      </Link>
      <style jsx>
        {`
          .LogoImage {
            display: 'block';
            position: 'relative';
            width: 34px;
            height: 34px;

            background-image: url('/static/logo.jpg');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </>
  );
};

export default Logo;
