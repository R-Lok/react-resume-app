import NamedInput from './NamedInput'

export default function PersonalDetailsEditor({ personalDetails, setPersonalDetails }) {

    const title = "Personal Details";

    function setName(newName) {
        setPersonalDetails(prev => ({...prev, name: newName}))
    }

    function setEmail(newEmail) {
        setPersonalDetails(prev => ({...prev, email: newEmail}))
    }

    function setPhoneNum(newPhoneNum) {
        setPersonalDetails(prev => ({...prev, phone: newPhoneNum}))
    }

    return (
        <div>
        <h1>{title}</h1>
        <NamedInput id='name-input' inputType='text' fieldName='Full Name' currentValue={personalDetails.name} setter={setName}></NamedInput>
        <NamedInput id='email-input' inputType='email' fieldName='Email Address' currentValue={personalDetails.email} setter={setEmail}></NamedInput>
        <NamedInput id='phone-input' inputType='tel' fieldName='Phone Number' currentValue={personalDetails.phone} setter={setPhoneNum}></NamedInput>
        </div>
    )
}