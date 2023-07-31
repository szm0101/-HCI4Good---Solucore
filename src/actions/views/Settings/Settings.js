//need install react-select for the import the "Select" component from the 'react-select' library.
import { useState } from 'react';
import Select from 'react-select';


//Create the filter use for choose Buildings and Devices
function Settings() {
    const buildings = [
        { value: 'building1', label: 'Building 1' },
        { value: 'building2', label: 'Building 2' },
        { value: 'building3', label: 'Building 3' },
        { value: 'building4', label: 'Building 4' },
        { value: 'building5', label: 'Building 5' },
        { value: 'building6', label: 'Building 6' },
    ];
    const devices = [
        { value: 'device1', label: 'Elevator-A' },
        { value: 'device2', label: 'Elevator-B' },
        { value: 'device3', label: 'Elevator-C' },
        { value: 'device4', label: 'Elevator-D' },
        { value: 'device5', label: 'Elevator-E' },
        { value: 'device6', label: 'Elevator-F' },
    ];

    //Create the Critical Hours and table show the Elevator Day time work information(like dummy code Time 1 and Time 2)
    const initialBuildingData = {
        building1: {
            devices: {
                device1: [{ day: 'Day 1', openingTime: 'Time 1', closingTime: 'Time 2' }],
            },
        },
    };
    //Use basic Hooks (useState) from react ref "https://legacy.reactjs.org/docs/hooks-reference.html#usestate"
    const [currentSettings, setSettings] = useState({
        'mysettings.general.name': null,
        'mysettings.general.device': null,
    });
    //Initial the Critical Hours value when the Building or Elevator changed
    const settingsChanged = (selectedOption, actionMeta) => {
        setSettings({ ...currentSettings, [actionMeta.name]: selectedOption });
        setShowTable(false);
        setTableRows([]);
        setShowModel(false);
    };

    const [showTable, setShowTable] = useState(false);
    const [showModel, setShowModel] = useState(false);

    // State variable to store the table rows for the selected building and device
    const [tableRows, setTableRows] = useState([]);

    // State variable to store the index of the row being edited
    const [editRowIndex, setEditRowIndex] = useState(null);

    const onEditClicked = (index) => {
        setEditRowIndex(index);
        setShowModel(true);
    };

    const onModelClose = () => {
        // Update the time value(Opening/Closing time) when click the edited button
        if (editRowIndex !== null) {
            const updatedTableRows = [...tableRows];
            updatedTableRows[editRowIndex] = {
                ...updatedTableRows[editRowIndex],
                openingTime: document.getElementById('openingTimeInput').value,
                closingTime: document.getElementById('closingTimeInput').value,
            };
            setTableRows(updatedTableRows);
            setEditRowIndex(null);
        }
        setShowModel(false);
    };

    const addRow = () => {
        //Create the new row and order the row based on the Day value :Day+1 (1.to..n)
        const sortedRows = [...tableRows].sort((a, b) => a.day.localeCompare(b.day));
        let newDayNumber = 1;
        if (sortedRows.length > 0) {
            const lastDayNumber = parseInt(sortedRows[sortedRows.length - 1].day.replace('Day ', ''), 10);
            newDayNumber = lastDayNumber + 1;
        }

        const newRow = {
            day: `Day ${newDayNumber}`,
            openingTime: '',
            closingTime: '',
        };
        setTableRows([...sortedRows, newRow]);
    };

    const handleDeviceChange = (selectedOption) => {
        setSettings({ ...currentSettings, 'mysettings.general.device': selectedOption });
        // Set the table rows for the selected building and device
        const buildingData = initialBuildingData[currentSettings['mysettings.general.name'].value];
        const deviceData = buildingData?.devices[selectedOption.value] || [];
        setTableRows(deviceData);
        // Show the table when the device from filter is selected
        setShowTable(true);
        // Hide the model when a different device is selected
        setShowModel(false);
    };
    /** Use React "Style" in JavaScript to define properties and values from .css (Inline Styles)
     ref: "https://legacy.reactjs.org/docs/dom-elements.html#style" **/

    const tableStyle = {
        border: '1px solid black',
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'left',
    };

    const cellStyle = {
        border: '1px solid black',
        padding: '8px',
    };

    const containerStyle = {
        marginLeft: '200px',
        padding: '20px',
    };

    const headerStyle = {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const formGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        alignItems: 'center',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginRight: '10px',
    };

    const buttonsContainerStyle = {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const buttonStyle = {
        padding: '10px 16px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const tableContainerStyle = {
        width: '100%',
        marginBottom: '20px',
    };

    const tableHeaderCellStyle = {
        ...cellStyle,
        backgroundColor: '#f0f0f0',
    };

    const modelStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '50px',
        zIndex: '1000',
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: '1000',
    };

    const modelContainerStyle = {
        modelStyle,
        padding: '20px',
    };

    const modelHeaderStyle = {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
    };

    const modelRowStyle = {
        marginBottom: '10px',
    };

    //Implement the Table UI, Building and Device filter UI
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Settings</h2>
            <div style={formGroupStyle}>

                {/*building selector/filter, user can choose one from a list*/}
                <fieldset className="form-group" style={{ flex: '1', marginRight: '10px' }}>
                    <label style={labelStyle} htmlFor="general.name">
                        Building:
                    </label>
                    <Select
                        options={buildings}
                        name="mysettings.general.name"
                        onChange={settingsChanged}
                        value={currentSettings['mysettings.general.name']}
                        isSearchable
                    />
                </fieldset>

                {/*device filter, user can choose one from a list*/}
                <fieldset className="form-group" style={{ flex: '1' }}>
                    <label style={labelStyle} htmlFor="general.device">
                        Device:
                    </label>
                    <Select
                        options={devices}
                        name="mysettings.general.device"
                        onChange={(selectedOption) =>
                            currentSettings['mysettings.general.name'] &&
                            handleDeviceChange(selectedOption, currentSettings['mysettings.general.name'].value)}
                        value={currentSettings['mysettings.general.device']}
                        isSearchable
                    />
                </fieldset>
            </div>

            {/*button to show the result matching the filter*/}
            <div style={buttonsContainerStyle}>
                <button style={buttonStyle} onClick={() => setShowTable(!showTable)}>
                    Critical Hours
                </button>
                <button style={buttonStyle} onClick={addRow}>
                    Add Day
                </button>
            </div>

            {/*showing table elements, like Day,Edit, Opening time and Closing time */}
            {showTable && (
                <div style={tableContainerStyle}>
                    <table style={{ tableStyle, width: '100%' }}>

                        <thead>
                        <tr>
                            <th style={{ cellStyle, tableHeaderCellStyle }}>Day</th>
                            <th style={{ cellStyle, tableHeaderCellStyle }}>Opening time</th>
                            <th style={{ cellStyle, tableHeaderCellStyle }}>Closing time</th>
                            <th style={{ cellStyle, tableHeaderCellStyle }}>Edit</th>
                        </tr>
                        </thead>
                        {/*showing the output/data of day, openingTime and closingTime*/}
                        <tbody>
                        {tableRows.map((row, index) => (
                            <tr key={index}>
                                <td style={cellStyle}>{row.day}</td>
                                <td style={cellStyle}>{row.openingTime}</td>
                                <td style={cellStyle}>{row.closingTime}</td>
                                <td style={cellStyle}>
                                    {/*the Edit button used to input the Opening/Closing time for a Day*/}
                                    <button onClick={() => onEditClicked(index)} style={buttonStyle}>
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
                <div style={overlayStyle}>
                    <div style={modelContainerStyle}>
                        <h2 style={modelHeaderStyle}>EDIT CRITICAL HOURS</h2>

                        <div style={modelRowStyle}>
                            <label>Opening Time:</label>
                            {/*Opening time input Selector*/}
                            <input type="time" id="openingTimeInput"
                                   defaultValue={tableRows[editRowIndex]?.openingTime} />
                        </div>
                        <div style={modelRowStyle}>
                            <label>Closing Time:</label>
                            {/*Closing time input Selector*/}
                            <input type="time" id="closingTimeInput"
                                   defaultValue={tableRows[editRowIndex]?.closingTime} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {/*submit button*/}
                            <button onClick={onModelClose} style={buttonStyle}>
                                Save
                            </button>
                            {/*cancel button*/}
                            <button onClick={onModelClose} style={buttonStyle}>
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
