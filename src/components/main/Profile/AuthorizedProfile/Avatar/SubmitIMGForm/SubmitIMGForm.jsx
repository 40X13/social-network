const SubmitIMGForm = ({setIMG}) => {
    const submit = e => {
        e.preventDefault();
        setIMG(e.target[0].files[0])
        e.target[0].value = ''
    }
    return (
        <form onSubmit={submit}>
            <input type="file"/>
            <button>send</button>
        </form>
    );
}

export default SubmitIMGForm;