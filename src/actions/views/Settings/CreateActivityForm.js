import React, { useState } from 'react';
import './CreateActivity.css'

function CreateActivityForm() {
    const [activityDate, setActivityDate] = useState('');
    const [reporter, setReporter] = useState('');
    const [entrapment, setEntrapment] = useState([]);
    const [activityType, setActivityType] = useState('');
    const [referenceNo, setReferenceNo] = useState('');
    const [status, setStatus] = useState('');
    const [closedDate, setClosedDate] = useState('');
    const [problemCode, setProblemCode] = useState('');
    const [mechanic, setMechanic] = useState('');

    const [visibility, setVisibility] = useState(true);
    function closeCreateActivity() {
        setVisibility(false);
    }

    return (
        <div>
            <form onSubmit={visibility} className="grid-container">
                <fieldset>
                    <div>
                        <label className='device'>DEVICE </label>
                        <input type="text" value='Elevator - A #60262' />
                    </div> <br></br>
                    <div>
                        <label className='activity'>ACTIVITY <br></br> DATE</label>
                        <input
                            type="datetime-local"
                            value={activityDate}
                            onChange={(e) => setActivityDate(e.target.value)}
                            className='datePicker'
                        />
                    </div><br></br>
                    <div>
                        <label className='reporter'>REPORTER</label>
                        <input
                            type="text"
                            value={reporter}
                            onChange={(e) => setReporter(e.target.value)}
                        />
                    </div> <br></br>
                    <label className='entrapment'>ENTRAPMENT</label>
                    <label>
                        <input
                            type="checkbox" id="entrapment" name="entrapment"
                        />
                    </label>
                    <div>
                        <br></br>
                        <label className='activity'>ACTIVIT <br></br> TYPE</label>
                        <select
                            value={activityType}
                            onChange={(e) => setActivityType(e.target.value)}
                            className='select'
                        >
                            <option value="">Select</option>
                            <option value="call-back">Call Back</option>
                            <option value="consultant-report">Consultant Report</option>
                            <option value="major-repair">Major Repair</option>
                        </select>
                    </div><br></br>
                    <div class="textarea">
                        <label className='problem' for='textarea'>PROBLEM</label>
                        <textarea id="textarea" rows="4" cols="35" className='problem'></textarea>
                    </div>
                    <br></br>
                    <label>REFERENCE <br></br> NO.</label>
                    <input
                        type="text"
                        value={referenceNo}
                        onChange={(e) => setReferenceNo(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <br></br>
                    <legend>REPAIR STATUS</legend>
                    <label className='status'>STATUS</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className='select'>
                        <option value="">Select</option>
                        <option value="status-option-1">Open</option>
                        <option value="status-option-2">Completed</option>
                    </select>
                    <div>
                        <br></br>
                        <label className='closeDate'>CLOSED <br></br> DATE</label>
                        <input
                            type="datetime-local"
                            value={closedDate}
                            onChange={(e) => setClosedDate(e.target.value)}
                            className='datePicker'
                        />
                    </div> <br></br>
                    <div>
                        <label className='problem'>PROBLEM <br></br> CODE</label>
                        <select value={problemCode}
                            onChange={(e) => setProblemCode(e.target.value)} className='select'>
                            <option value="">Select</option>
                            <option value="problem-code-1">Brake</option>
                            <option value="problem-code-2">Cab</option>
                            <option value="problem-code-2">Car Door</option>
                        </select>
                    </div> <br></br>
                    <div>
                        <label className='machanic'>MECHANIC</label>
                        <input
                            type="text"
                            value={mechanic}
                            onChange={(e) => setMechanic(e.target.value)}
                        />
                    </div> <br></br>
                    <div class="textarea">
                        <label for='textarea' className='problem'>RESOLUTION</label>
                        <textarea id="textare" rows="4" cols="35"></textarea>
                    </div>
                </fieldset>
                <div className='sumbitButton'>
                    <input type="submit" value="SAVE" onClick={closeCreateActivity} />
                </div>
            </form>
        </div>
    );
}

export default CreateActivityForm;
