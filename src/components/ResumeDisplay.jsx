import { BasicInfoDisplay } from "./BasicInfoDIsplay";

export function ResumeDisplay({ personalDetails, workDetails, educationDetails }) {

    return (
        <div className='bg-white text-black flex-grow py-10 px-5'>
            <BasicInfoDisplay personalDetails={personalDetails}></BasicInfoDisplay>
            <hr className='border-t-2 m-2'></hr>
        </div>
    )

}