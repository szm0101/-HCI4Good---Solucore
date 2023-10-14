//need install react-select --force for the import the "Select" component from the 'react-select' library.
import React, { useState } from 'react';
import Select, { NonceProvider } from 'react-select';
import './Settings.css';

//Create the filter use for choose Buildings and Devices
const buildings = [
    {value: '1', label: 'Building 1'},
    {value: '2', label: 'Building 2'},
    {value: '3', label: 'Building 3'},
    {value: '4', label: 'Building 4'},
    {value: '5', label: 'Building 5'},
    {value: '6', label: 'Building 6'},
];

const devices = [
    {value: '1', label: 'Device 1'},
    {value: '2', label: 'Device 2'},
    {value: '3', label: 'Device 3'},
    {value: '4', label: 'Device 4'},
    {value: '5', label: 'Device 5'},
    {value: '6', label: 'Device 6'},
];

function showSecondSelect() {
 
    var firstSelect = document.getElementById("firstSelect");
    var secondSelectDiv = document.getElementById("secondSelectDiv");

    if (firstSelect.value != "0") {
        secondSelectDiv.style.display = "block";
    } else {
        secondSelectDiv.style.display = "none";
    }
}
function showThirdSelect() {
 
    var secondSelect = document.getElementById("secondSelect");
    var thirdSelectDiv = document.getElementById("thirdSelectDiv");

    if (secondSelect.value != "0") {
        thirdSelectDiv.style.display = "block";
    } else {
        thirdSelectDiv.style.display = "none";
    }
}
function hideSecondSelect(){
    var secondSelectDiv = document.getElementById("secondSelectDiv");
    secondSelectDiv.style.display = "none";
}
//Create the Critical Hours and table show the Elevator Day time work information(like dummy code Time 1 and Time 2)
function Settings() {
    //Use basic Hooks (useState) from react ref "https://legacy.reactjs.org/docs/hooks-reference.html#usestate"
    const [currentSettings, setCurrentSettings] = useState({ 'mysettings.general.name': '', 'mysettings.general.device': '' });
    const [showTable, setShowTable] = useState(false);
    const [tableRows, setTableRows] = useState([]);
    const [showModel, setShowModel] = useState(false);
    const [editRowIndex, setEditRowIndex] = useState(-1);
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");

    // Update the time value(Opening/Closing time) when click the edited button
    function onModelClose(save) {
        if (save) {
            // Update the opening and closing times in the tableRows state
            setTableRows(tableRows.map((row, index) => index === editRowIndex ? { ...row, openingTime, closingTime } : row));
        }
        setShowModel(false);
    }
    //Initial the Critical Hours value when the Building or Elevator changed
    function settingsChanged(newSettings) {
        setCurrentSettings(newSettings);
    }
    // State variable to store the table rows for the selected building and device
    function addRow() {
        setTableRows([...tableRows, {day: `Day ${tableRows.length + 1}`, openingTime: '', closingTime: ''}]);
    }
    // State variable to store the index of the row being edited
    function onEditClicked(index) {
        setEditRowIndex(index);
        setShowModel(true);
    }

    function handleDeviceChange(selectedOption, buildingValue) {
    }

    return (
        
        <div className="container">
            <h2 className="header">Settings</h2>
            <div class="datetimepicker">
                    <input type="date" id="date" value="2023-10-03"/>
                    <span></span>
                    <input type="time" id="time" value="08:00"/>
                <span class="input-addon">to</span>
                <input type="date" id="date2" value="2023-10-10"/>
                    <span></span>
                    <input type="time" id="time2" value="08:00"/>
            </div>
            <div className="form-group">

            <label for="firstSelect">BUILDING:</label>
                        <select id="firstSelect" onChange={showSecondSelect} >
                            <option value="0" selected> </option>
                            <option value="1">Building 1</option>
                            <option value="2">Building 2</option>
                            <option value="3">Building 3</option>
                            <option value="4">Building 4</option>
                        </select>

                   <div class="secondSelectDiv" id="secondSelectDiv" >
                        <label for="secondSelect"> Bank ID and Location:</label>
                            <select id="secondSelect" onChange={showThirdSelect}>
                                <option value="0" selected> </option>
                                <option value="1">Passenger</option>
                            </select>
                    </div>
        
                    <div class="thirdSelectDiv" id="thirdSelectDiv" >
                        <label for="thirdSelect"> Device:</label>
                            <select id="thirdSelect">
                                <option value="0" selected> </option>
                                <option value="1">Elevator 1</option>
                            </select>
                    </div>
                    
            </div>

            {/*button to show the result matching the filter*/}
            <div className="buttons-container">
                <button className="button" onClick={() => setShowTable(!showTable)}>
                    Critical Hours
                </button>
                <button className="button1" onClick={addRow}>
                    Add Day
                </button>
            </div>

            {/*showing table elements, like Day,Edit, Opening time and Closing time */}
            {showTable && (
                <div className="table-container">
                    <table className="table">

                        <thead>
                        <tr>
                            <th className="cell table-header-cell">Day</th>
                            <th className="cell table-header-cell">Opening time</th>
                            <th className="cell table-header-cell">Closing time</th>
                            <th className="cell table-header-cell">Edit</th>
                        </tr>
                        </thead>
                        {/*showing the output/data of day, openingTime and closingTime*/}
                        <tbody>
                        {tableRows.map((row, index) => (
                            <tr key={index}>
                                <td className="cell">{row.day}</td>
                                <td className="cell">{row.openingTime}</td>
                                <td className="cell">{row.closingTime}</td>
                                <td className="cell">
                                    {/*the Edit button used to input the Opening/Closing time for a Day*/}
                                    <button onClick={() => onEditClicked(index)} className="button2">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            )}

            {/*Show the Time model when click the Edit button */}
            {showModel && (
                <div className="overlay">
                    <div className="model-container">
                        <h2 className="model-header">EDIT CRITICAL HOURS</h2>

                        <div className="model-row">
                            <label>Opening Time:</label>
                            {/*Opening time input Selector*/}
                            <input type="time" id="openingTimeInput"
                                   defaultValue={tableRows[editRowIndex]?.openingTime}
                                   onChange={e => setOpeningTime(e.target.value)} />
                        </div>
                        <div className="model-row">
                            <label>Closing Time:</label>
                            {/*Closing time input Selector*/}
                            <input type="time" id="closingTimeInput"
                                   defaultValue={tableRows[editRowIndex]?.closingTime}
                                   onChange={e => setClosingTime(e.target.value)} />
                        </div>

                        <div className="buttons-container">
                            {/*submit button*/}
                            <button onClick={() => onModelClose(true)} className="button">
                                Save
                            </button>
                            {/*cancel button*/}
                            <button onClick={() => onModelClose(false)} className="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Settings;
