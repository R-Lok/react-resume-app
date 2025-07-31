import { BasicInfoDisplay } from "./BasicInfoDIsplay";

export function ResumeDisplay({ personalDetails, workDetails, educationDetails }) {
    return (
        <div className='bg-white text-black flex-grow'>
            <BasicInfoDisplay personalDetails={personalDetails}></BasicInfoDisplay>
        </div>
    )

}