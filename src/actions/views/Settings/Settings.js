//need install react-select --force for the import the "Select" component from the 'react-select' library.
import React, { useState } from 'react';
import Select, { NonceProvider } from 'react-select';
import './Settings.css';

//Create the filter use for choose Buildings and Devices
const buildings = [
    { value: '1', label: 'Building 1' },
    { value: '2', label: 'Building 2' },
    { value: '3', label: 'Building 3' },
    { value: '4', label: 'Building 4' },
    { value: '5', label: 'Building 5' },
    { value: '6', label: 'Building 6' },
];

const devices = [
    { value: '1', label: 'Device 1' },
    { value: '2', label: 'Device 2' },
    { value: '3', label: 'Device 3' },
    { value: '4', label: 'Device 4' },
    { value: '5', label: 'Device 5' },
    { value: '6', label: 'Device 6' },
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
    var formGroupDiv = document.getElementById("form-group");

    if (secondSelect.value != "0") {
        thirdSelectDiv.style.display = "block";
        formGroupDiv.style.height = "128px";

    } else {
        thirdSelectDiv.style.display = "none";
        formGroupDiv.style.height = "94px";
    }
}

function showTable1() {
    var detailsDiv = document.getElementById("mytabs");
    detailsDiv.style.display = "flex";
    var formGroupDiv = document.getElementById("form-group");
    formGroupDiv.style.height = "450px";


}

function hideSecondSelect() {
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
    const [fromDateTime, setFromDateTime] = useState('');
    const [toDateTime, setToDateTime] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

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
        setTableRows([...tableRows, { day: `Day ${tableRows.length + 1}`, openingTime: '', closingTime: '' }]);
    }
    // State variable to store the index of the row being edited
    function onEditClicked(index) {
        setEditRowIndex(index);
        setShowModel(true);
    }

    // Date and Time event handlers
    function showDatePickerInput() {
        setShowDatePicker(true);
    }
    function handleFromDateTimeChange(event) {
        setFromDateTime(event.target.value);
    }
    function handleToDateTimeChange(event) {
        setToDateTime(event.target.value);
    }

    function handleDeviceChange(selectedOption, buildingValue) {
    }

    return (
        <body>
            <div className="container">
                <div className="dateTimePicker">
                    <input
                        className="dateTime1"
                        type="datetime-local"
                        value={fromDateTime}
                        onChange={handleFromDateTimeChange}
                    />
                    <label className="labelTo">to</label>
                    <input
                        className="dateTime2"
                        type="datetime-local"
                        value={toDateTime}
                        onChange={handleToDateTimeChange}
                    />
                </div>
                <h2 className="header">    </h2>
                <div className="form-group" class="form-group" id="form-group">
                    <label id="selectLabel" for="firstSelect" >BUILDING:</label>
                    <select id="firstSelect" onChange={showSecondSelect} >
                        <option value="0" selected> </option>
                        <option value="1">Building 1</option>
                        <option value="2">Building 2</option>
                        <option value="3">Building 3</option>
                        <option value="4">Building 4</option>
                    </select>

                    <div class="secondSelectDiv" id="secondSelectDiv" >
                        <label for="secondSelect" id="selectLabel" > BANK ID and LOCATION:</label>
                        <select id="secondSelect" onChange={showThirdSelect}>
                            <option value="0" selected> </option>
                            <option value="1">Passenger</option>
                        </select>
                    </div>
                    <div class="thirdSelectDiv" id="thirdSelectDiv" >
                        <label for="thirdSelect" id="thirdLabel"> DEVICE:</label>
                        <select id="thirdSelect" onChange={showTable1}>
                            <option value="0" selected> </option>
                            <option value="1">Elevator 1</option>
                        </select>
                    </div>
                    <div class="mytabs" id="mytabs">
                        <input type="radio" id="deviceServices" name="mytabs" checked="checked" />
                        <label for="deviceServices">DEVICE SERVICES</label>
                        <div class="tab">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Device</th>
                                        <th scope="col">Device Status</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Username</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <input type="radio" id="operatingHours" name="mytabs" />
                        <label for="operatingHours">OPERATING HOURS</label>
                        <div class="tab">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Hour Interval</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <input type="radio" id="criticalHours" name="mytabs" />
                        <label for="criticalHours">CRITICAL HOURS</label>
                        <div class="tab">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Morning</th>
                                        <th scope="col">Lunch</th>
                                        <th scope="col">Evening</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </body>

    );
}

export default Settings;
