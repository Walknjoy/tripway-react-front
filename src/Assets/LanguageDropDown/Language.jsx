import { useContext, useEffect, useRef, useState } from 'react';
import './Language.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { mainContext } from '../../utils/ContextApi';

const Language = () => {
  const [selected, setSelected] = useState('Az');
  const { click, setClick, setUserVisible } = useContext(mainContext);
  const languageRef = useRef(null);
  const dropdownOptions = [
    { id: 1, label: 'Az' },
    { id: 2, label: 'En' },
  ];

  const handleSelect = async (selectedLabel) => {
    setSelected(selectedLabel);
    setClick(false);
  };
  const handleClick = () => {
    setClick(!click);
    setUserVisible(false);
  };
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [setClick]);

  return (
    <div className="language">
      <button className="select-btn" ref={languageRef} onClick={handleClick}>
        {selected}
        {click ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {click && (
        <ul className="select-list">
          {dropdownOptions?.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleSelect(item.label);
                setClick(false);
              }}>
              <span> {item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
