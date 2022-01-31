import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        const {personal:personalInfo, education:educationInfo, experience:experienceInfo}=this.props.data;
        const educationDivs=educationInfo.history.map((item,index)=>(            
            <div key={index}>
                <div className='d-flex flex-row justify-content-between'>
                    <div>
                        <h4>{`${item.location}`}</h4>
                    </div>
                    <div>
                        <h2><b>{`${item.instituteName}`}</b></h2>
                    </div>
                    <div>
                        <h4>{`${item.from}`} - {`${item.to}`}</h4>
                    </div>
                </div>
                <div>
                    <p>{`${item.qual}`}</p>
                </div>
            </div>
            ));
        const experienceDivs=experienceInfo.history.map((item, index)=>(            
            <div key={index}>
                <div className='d-flex flex-row justify-content-between'>
                    <div>
                        <h2><b>{`${item.companyName}`}</b></h2>
                    </div>
                    <div>
                        <h3>{`${item.from}`} - {`${item.to}`}</h3>
                    </div>
                </div>
                <div>
                    <h3>{`${item.location}`}</h3>
                </div>
                <div>
                    <h4>{`${item.role}`}</h4>
                </div>
            </div>
            ));
        console.log(this.props);
        return (
            <div className='container border border-3 m-2'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='d-flex flex-column'>
                        <h4>{`${personalInfo.location}`}</h4>
                        <h4>{`${personalInfo.mobileNo}`}</h4>
                    </div>
                    <div className='d-flex flex-column'>
                        <h2><b>{`${personalInfo.firstName}`}</b></h2>
                        <h2><b>{`${personalInfo.lastName}`}</b></h2>
                    </div>    
                    <div className='d-flex flex-column'>
                        <h4>{`${personalInfo.email}`}</h4>
                        <h4>{`${null}`}</h4>
                    </div>
                </div>
                <h2>Education</h2>
                <hr />
                <div className='d-flex flex-column justify-content-center'>
                    {educationDivs}
                </div>
                <h2>Experience</h2>
                <hr />
                <div>
                    {experienceDivs}
                </div>
            </div>
        );
    }
}
