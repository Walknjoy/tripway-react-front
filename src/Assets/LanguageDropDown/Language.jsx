import { useContext, useState } from 'react';
import './Language.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { mainContext } from '../../utils/ContextApi';
const Language = () => {
  const [selected, setSelected] = useState('Az');
  const { click, setClick ,setUserVisible} = useContext(mainContext);
  const dropdownOptions = [
    { id: 1, label: 'Az' },
    { id: 2, label: 'En' },
  ];
  const handleSelect = async (selectedLabel) => {
    setSelected(selectedLabel);
    setClick(false);
  };
  return (
    <div className="language">
      <button
        className="select-btn"
        onClick={() => {
          setClick((e) => !e);
          setUserVisible(false);
        }}>
        {selected}
        {click ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {
        <ul className={`select-list ${click ? 'active' : ''}`}>
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
      }
    </div>
  );
};

export default Language;
