import { useContext, useEffect, useRef, useState } from 'react';
import './Language.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { mainContext } from '../../utils/ContextApi';

const Language = () => {
  const { header, setHeader } = useContext(mainContext);
  const [selected, setSelected] = useState('Az');
  const languageRef = useRef(null);
  const dropdownOptions = [
    { id: 1, label: 'Az' },
    { id: 2, label: 'En' },
  ];

  const handleSelect = async (selectedLabel) => {
    setSelected(selectedLabel);
    setHeader((prevHeader) => ({
      ...prevHeader,
      click: false,
    }));
  };
  const handleClick = () => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      click: !prevHeader.click,
      userVisible: false,
    }));
  };
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setHeader((prevHeader) => ({
          ...prevHeader,
          click: false,
        }));
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [setHeader]);

  return (
    <div className="language">
      <button className="select-btn" ref={languageRef} onClick={handleClick}>
        {selected}
        {header.click ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {header.click && (
        <ul className="select-list">
          {dropdownOptions?.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleSelect(item.label);
                setHeader((prevHeader) => ({
                  ...prevHeader,
                  click: false,
                }));
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
