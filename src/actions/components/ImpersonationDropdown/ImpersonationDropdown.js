import React, { useState, useEffect } from 'react';
import './ImpersonationDropdown.css';
import { Dropdown } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

const ImpersonationDropDown = () => {

    const [cookies, setCookie] = useCookies(); // Initialize the isLoggedIn cookie
    const token = cookies.token;
    
    // const items = impersonationList;
    const [impersonationList, setImpersonationList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedID, setSelectedID] = useState(null);
    console.log(selectedID);
    
    useEffect(() => {
        // Run performLogic when the component is loaded
        performLogic(token);
      }, [token]);

  const handleDropdownChange = (selectedCompany, companyID) => {
    // Call another function and pass the selected value
    // performLogic(token);

    // Update the state with the selected value
    setSelectedItem(selectedCompany);
    setSelectedID(companyID);
  };

  const performLogic = (token) => {
    var myHeaders = new Headers();
        myHeaders.append("Valid-token", token);

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://services.solucore.com/solutrak/api/accounts/getAllowedImpersonatedOrganizationListItems", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                const status = data.IsSuccess;

                if(status) {
                    const companies = data.Data;
                    console.log(companies);
                    setImpersonationList(companies);
                    console.log(impersonationList)

                } else{
                    console.log(data.IsSuccess + data.Message);
                }
            })
            .catch(error => console.log('error', error));
            setSelectedItem(null);
  };

//   const impersonationList = performLogic(token);

  const handleReset = () => {
        setSelectedItem(null);
        setSelectedID(null);
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
          {impersonationList.map((item, index) => (
            <Dropdown.Item key={index} onClick={() => handleDropdownChange(item.company_name, item.company_id)}>
              {item.company_name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
  );
};

export default ImpersonationDropDown;
