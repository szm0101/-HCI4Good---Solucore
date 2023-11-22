import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './DeviceInfo.css';
import { useCookies } from 'react-cookie';
import DoorIcon from "../../assets/doorIcon.png";
import RunningCheck from "../../assets/runningCheck.png";

const DeviceInfo = ({ buildingId, onClose }) => {
    const [deviceInfo, setDeviceInfo] = useState({});
    const [cookies] = useCookies();
    const token = cookies.token;


    useEffect(() => {
        const headers = new Headers({
            'Valid-token': token,
        });


        // Make API call to get building information
        fetch(`https://services.solucore.com/solutrak/api/buildings/getDeviceInfos`, {
            "method": "GET",
            headers
        })
            .then((response) => response.json())
            .then((result) => {
                setDeviceInfo(result.Data);
            })
            .catch((error) => {
                console.error('API Error:', error);
            });
    }, []);

    return (
        <div className="device-info-main-container">
            <div className='device-info-small-container'>
                <h2>Cherniak Manor- 120 Oak</h2>
                <p>2 Devices</p>
                <div className='card-1'>
                    <div>
                        A #19796<br />Riverside Elevators Inc.
                        <div className='guarded-type'>
                            <div className='guarded-1'>
                                GUARDED
                            </div>
                        </div>
                    </div>
                    <div>
                        B #19797 <br />Riverside Elevators Inc.
                        <div className='guarded-type'>
                            <div className='guarded-2'>
                                GUARDED
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-2'>
                    <img src={DoorIcon} alt="Door Icon" className="door-image" />
                    <div className='device-name'>
                        B #19797
                        <div id='elevator'>ELEVATOR</div>
                    </div>
                    <div className='guarded-3'>
                        <h3>GUARDED</h3>
                        <h5 className='status'>STATUS</h5>
                    </div>
                </div>
                <div className='card-3'>
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
                                <th>
                                    <span>Door: Close(0)</span>
                                </th>
                                <th>
                                    <span>11/30/2023</span>
                                </th>
                                <th>
                                    <span>100010165</span>
                                </th>
                                <th>
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
