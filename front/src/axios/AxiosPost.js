import axios from 'axios';

const AxiosPost = (uri, data) => {
    const response = async (resolve, reject) => {
        try {
            const url = `http://localhost:5000/post/${uri}`;
            await axios.post(url, data);
            resolve();
        } catch (e) {
            reject();
            alert('Something went wrong.');
        }
    }

    return new Promise(response);
}

export default AxiosPost;