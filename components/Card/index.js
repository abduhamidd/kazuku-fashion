import Link from 'next/link';
import {motion} from 'framer-motion';

const Card = ({HREF, SRC, ALT, engCL, jpCL, Year, AS}) => {
  return (
    <>
      <Link href={HREF} as={AS}>
        <a className="card">
          <motion.div
            className="card__img"
            layoutId={SRC}
            transition={{duration: 0}}
          >
            <img src={SRC} alt={ALT} />
            <div className="card__tags">
              <div className="card__tags-line">
                <h6>
                  {engCL}/ <span>{jpCL}</span>
                </h6>
                <div className="card__tags-time">{Year}</div>
              </div>
            </div>
          </motion.div>
        </a>
      </Link>
    </>
  );
};
export default Card;
