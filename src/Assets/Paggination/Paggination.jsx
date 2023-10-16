import './Paggination.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Paggination = ({ currentButton, setCurrentButton }) => {
  // ?page
  const pages = 4;
  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {currentButton === 1 ? (
          <></>
        ) : (
          <li
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }>
            <span>
              {' '}
              <FaAngleLeft />
            </span>
          </li>
        )}

        {numOfPages.map((page, index) => (
          <li
            key={index}
            className={`${
              currentButton === page ? 'pageItem active' : 'pageItem'
            }`}
            onClick={() => setCurrentButton(page)}>
            {page}
          </li>
        ))}
        {currentButton === numOfPages?.length ? (
          <></>
        ) : (
          <li
            className="last-child"
            onClick={() =>
              setCurrentButton((prev) =>
                prev === numOfPages?.length ? prev : prev + 1
              )
            }>
            <span>
              <FaAngleRight />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Paggination;
