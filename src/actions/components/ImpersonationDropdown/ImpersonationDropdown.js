import React, { useState } from 'react';
import './ImpersonationDropdown.css';
import { Dropdown } from 'react-bootstrap';

const ImpersonationDropDown = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownChange = (selectedValue) => {
    // Call another function and pass the selected value
    performLogic(selectedValue);

    // Update the state with the selected value
    setSelectedItem(selectedValue);
  };

  const performLogic = (selectedValue) => {
    // Perform your logic here using the selected value
    console.log(`Selected item: ${selectedValue}`);
    // You can add more logic as needed
  };

  const handleReset = () => {
    // Reset the selected item
    setSelectedItem(null);
  };


  return (
    <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic" className='impersonation-dropdown'>
        {selectedItem ? (
            <>
              {selectedItem}
              <button className="btn btn-primary btn-close" onClick={handleReset} style={{ marginLeft: '8px'}}>
              </button>
            </>
          ) : (
            'Select a company'
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map((item, index) => (
            <Dropdown.Item key={index} onClick={() => handleDropdownChange(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
  );
};

export default ImpersonationDropDown;
