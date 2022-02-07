function formatData(props) {
    const {personal, education, experience}=props;
    const personalInfo={
        ...personal,
        firstName:personal.firstName.toUpperCase(),
        lastName:personal.lastName.toUpperCase(),
    };
    const educationInfo={
        ...education,
        history:[...formatArray(education.history)],
    };
    const experienceInfo={
        ...experience,
        history:[...formatArray(experience.history)]
    }
    return {personalInfo, educationInfo, experienceInfo};
}
function formatArray(data) {
    return data.map((item)=>{
        let keys=Object.keys(item);
        return{
            ...item,
            [keys[0]]:item[keys[0]].toUpperCase(),
            from:new Date(item.from).getFullYear(),
            to:new Date(item.to).getFullYear(),
        };
    });
}
export default formatData;