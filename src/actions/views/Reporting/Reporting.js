import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import './Reporting.css'; 

export default function App() {
return (
    <div>
        <div className = 'settings-title'>
        <h2>Report Elevator Issue</h2>
        </div>
        <div className = 'settings-form'>
        <Form>
            <div class="form-group">
                <Form.Label>Building name:</Form.Label>
                <Form.Control type="text"
                            placeholder="Enter building name" />
            </div>
            <div class="form-group">
                <Form.Label>Elevator number:</Form.Label>
                <Form.Control type="text"
                            placeholder="Enter elevator number" />
            </div>
            <div class="form-group">
                <Form.Label>Enter issue piority:</Form.Label>
                <Form.Control type="number" placeholder="1-5 piority (1 highest)" />
            </div>
            <div class="form-group">
                <Form.Label>Enter report description:</Form.Label>
                <div className = 'description-size'>
                <Form.Control type="text"
                            placeholder="max 500 word" />
                </div>
            </div>
            <div class="form-group">
                <input type="file" id="input-file-upload" multiple={true} />
                    <label id="label-file-upload" htmlFor="input-file-upload">
                        <div>
                        <p>Drag and drop your file here</p>
                        <button className="upload-button">Upload a file</button>
                        </div> 
                    </label>
                </div>
            <div class="form-group">
                <Form.Label>Contact through registered phone number:</Form.Label>
                <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>
            </div>
            <button class="button-65" role="button">Submit Report</button>
        </Form>
        </div>
        </div>
);
}
