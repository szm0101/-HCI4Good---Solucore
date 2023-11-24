import React, { useEffect, useState } from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap';
import './DeviceInfo.css';
import { useCookies } from 'react-cookie';
import DoorIcon from "../../assets/doorIcon.png";
import RunningCheck from "../../assets/runningCheck.png";
const DeviceInfo = ({ buildingId, deviceId, onClose }) => {
    const [deviceInfo, setDeviceInfo] = useState([]);
    const [cookies] = useCookies();
    const token = cookies.token;
    const [buildingName, setBuildingName] = useState('');

    useEffect(() => {
        const headers = new Headers({
            'Valid-token': token,
        });

        // Make API call to get device information
        fetch(`https://services.solucore.com/solutrak/api/buildings/getDeviceInfos`, {
            "method": "GET",
            headers
        })
            .then((response) => response.json())
            .then((result) => {
                // Find the corresponding building name
                const selectedDevice = result.Data.find(device => device.deviceId === deviceId);
                setBuildingName(selectedDevice.buildingName);
                // Filter the devices that are only for this building
                const thisBuildingDevices = result.Data.filter(device => device.buildingId === buildingId);
                setDeviceInfo(thisBuildingDevices);
            })
            .catch((error) => {
                console.error('API Error:', error);
            });
    }, []);
    const numOfDevices = deviceInfo.length;
    // Format time stamp
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const dateString = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        const timeString = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
        return `${dateString} ${timeString}`;
    };
    return (
        <div className="device-info-main-container">
            <div className='device-info-small-container'>
                <h2>{buildingName}</h2>
                <p className='fs-5'>{numOfDevices} Devices</p>
                <div className='card-1'>
                    {deviceInfo.map(device => (
                        <div key={device.deviceId}>
                            {device.deviceName}<br />
                            {device.contractor}
                            <div className='guarded-type'>
                                <div className='guarded-1'>
                                    {deviceInfo.find(device => device.deviceId === deviceId)?.status === 30 ? (
                                        <>
                                            <h5>Guarded</h5>
                                        </>
                                    ) : deviceInfo.find(device => device.deviceId === deviceId)?.status === 10 ? (
                                        <>
                                            <h5>Running</h5>
                                        </>
                                    ) : (
                                        <h5>{deviceInfo.find(device => device.deviceId === deviceId)?.status}</h5>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='card-2'>
                    <img src={DoorIcon} alt="Door Icon" className="door-image" />
                    <div className='device-name'>
                        {deviceInfo.find(device => device.deviceId === deviceId)?.deviceName}
                        <div id='elevator'>
                            <h5>{deviceInfo.find(device => device.deviceId === deviceId)?.deviceType}</h5>
                        </div>
                    </div>
                    <div className='guarded-3'>
                        {deviceInfo.find(device => device.deviceId === deviceId)?.status === 30 ? (
                            <>
                                <h3>Guarded</h3>
                                <h5 className='status'>STATUS</h5>
                            </>
                        ) : deviceInfo.find(device => device.deviceId === deviceId)?.status === 10 ? (
                            <>
                                <h3>Running</h3>
                                <h5 className='status'>STATUS</h5>
                            </>
                        ) : (
                            <h3>{deviceInfo.find(device => device.deviceId === deviceId)?.status}</h3>
                        )}
                    </div>
                </div>
                <div className='card-3'>
                    {/* Currently, this table uses information from deviceInfo -> deviceEvents.
                    This is because there is no other APIs available to do this job.
                    This should be further clarified by the client. */}
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <span className='event-description'>
                                        Event/Description
                                    </span>
                                </th>
                                <th>
                                    <span className='date'>Date</span>
                                </th>
                                <th>
                                    <span className='code'>Code</span>
                                </th>
                                <th>
                                    <Button className='btn-primary'>VIEW ALL</Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <img src={RunningCheck} alt='running-check' className="runningCheck-image" />
                                </th>
                                <th style={{ width: '35%', textAlign: 'left', verticalAlign: 'middle', lineHeight: '1' }} className='text-wrap'>
                                    <span>{deviceInfo.find(device => device.deviceId === deviceId)?.deviceEvents[0].description}</span>
                                </th>
                                <th style={{ width: '15%', textAlign: 'left', verticalAlign: 'middle', lineHeight: '1.5' }} className='text-wrap'>
                                    <span >{formatTimestamp(deviceInfo.find(device => device.deviceId === deviceId)?.deviceEvents[0].date)}</span>
                                </th>
                                <th style={{ width: '15%', verticalAlign: 'middle' }} className='text-wrap'>
                                    <span>{deviceInfo.find(device => device.deviceId === deviceId)?.deviceEvents[0].code}</span>
                                </th>
                                <th style={{ verticalAlign: 'middle' }}>
                                    <span>View</span>
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};
export default DeviceInfo;
