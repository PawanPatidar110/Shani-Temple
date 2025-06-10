

const getApiUrl = () => {
    return import.meta.env.VITE_URL;
};

const constants = {
    URL: getApiUrl(),
    BASE_URL: getApiUrl(),
};

export default constants;



