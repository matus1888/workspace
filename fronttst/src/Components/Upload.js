import {AxiosInstance as axios} from "axios";

const Upload = () => {
    const OnSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target.form);

        axios
            .post("http://localhost:3000/upload", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(`Success` + res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={OnSubmit}>
            <h1>Зона тестов</h1>
            <input className='btn btn-secondary'
                accept="image"
                id="contained-button-content"
                name="customFile"
                type="file"
            />
            <button  className='btn btn-primary'>
                Сохранить и закрыть
            </button>
        </form>
    );
};
 export  default Upload