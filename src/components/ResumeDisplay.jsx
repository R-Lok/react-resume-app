import BasicInfoDisplay from "./BasicInfoDIsplay";
import ExperienceDetailsDisplay from "./ExperienceDetailsDisplay"

export function ResumeDisplay({ personalDetails, workDetails, educationDetails }) {

    const separator = <hr className='border-t-2 m-2'></hr>

    return (
        <div>
            <div className='bg-white text-black py-10 px-5 h-full max-w-[8.5in] max-h-[12in] truncate'>
                <BasicInfoDisplay personalDetails={personalDetails}></BasicInfoDisplay>
                {separator}
                <ExperienceDetailsDisplay experienceType='Education' experiences={educationDetails}></ExperienceDetailsDisplay>
                {separator}
                <ExperienceDetailsDisplay experienceType='Work' experiences={workDetails}></ExperienceDetailsDisplay>
            </div>
        </div>
    )

}