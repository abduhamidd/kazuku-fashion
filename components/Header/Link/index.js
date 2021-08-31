import Link from 'next/link';
import SpanText from './../../SpanText/index';
const CustomLink = ({href, text, className}) => {
  return (
    <>
      <li>
        <Link href={href}>
          <a className={className}>
            <SpanText text={text} />
          </a>
        </Link>
      </li>
    </>
  );
};
export default CustomLink;
