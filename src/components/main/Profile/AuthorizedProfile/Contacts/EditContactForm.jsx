import {Field, Form, Formik} from "formik";

const EditContactForm = ({profile, contacts, setProfileDescriptionThunk, setEditMode}) => {

    function stringReplacement(obj) {
        let copyObj = {}
        for (let key in obj) {
            if ({}.toString.call(obj[key]) === '[object Object]') {
                copyObj[key] = stringReplacement(obj[key]);
            } else {
                copyObj[key] = obj[key] === null ? '' : obj[key]
            }
        }
        return copyObj;
    }
    const copyProfile = stringReplacement(profile);

    return (
        <Formik
            initialValues={{
                fullName: copyProfile.fullName,
                aboutMe: copyProfile.aboutMe,
                lookingForAJob: copyProfile.lookingForAJob,
                lookingForAJobDescription: copyProfile.lookingForAJobDescription,
                contacts: {...copyProfile.contacts},

            }}
            onSubmit={(values, formik) => {
                setProfileDescriptionThunk(values, formik.setStatus, setEditMode, formik.setSubmitting);
            }}
        >
            {formik => {
                return(
                    <Form>
                    <div>
                        <label htmlFor='fullName'>Full Name: </label>
                        <Field type="text" name='fullName'/>
                    </div>
                    <div>
                        <label htmlFor='aboutMe'>About me: </label>
                        <Field type="text" name='aboutMe'/>
                    </div>
                    <div>
                        <label htmlFor='lookingForAJob'>Looking for a job: </label>
                        <Field type="text" name='lookingForAJob'/>
                    </div>
                    <div>
                        <label htmlFor='lookingForAJobDescription'>looking for a job description: </label>
                        <Field type="text" name='lookingForAJobDescription'/>
                    </div>

                    {Object.keys(contacts).map(k => {
                        return (
                            <div key={k}>
                                <label htmlFor={k}>{k}: </label>
                                <Field type="text" name={`contacts.${k}`}/>
                            </div>
                        )
                    })}

                    <div>{formik.status}</div>
                    <button type="submit" disabled={formik.isSubmitting}>
                        Save
                    </button>
                </Form>
            )}}
        </Formik>
    );
}


export default EditContactForm;

