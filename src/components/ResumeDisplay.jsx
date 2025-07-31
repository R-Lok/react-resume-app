import BasicInfoDisplay from "./BasicInfoDIsplay";
import ExperienceDetailsDisplay from "./ExperienceDetailsDisplay"

export function ResumeDisplay({ personalDetails, workDetails, educationDetails }) {

    const separator = <hr className='border-t-2 m-2'></hr>

    return (
        <div className='bg-white text-black flex-grow py-10 px-5'>
            <BasicInfoDisplay personalDetails={personalDetails}></BasicInfoDisplay>
            {separator}
            <ExperienceDetailsDisplay experienceType='Education' experiences={educationDetails}></ExperienceDetailsDisplay>
            {separator}
            <ExperienceDetailsDisplay experienceType='Work' experiences={workDetails}></ExperienceDetailsDisplay>
        </div>
    )

}