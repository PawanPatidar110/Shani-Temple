import axios from "axios";
import constants from "../Helper/Constant";
import { toast } from "react-toastify";

const Util = {
    refreshPage: () => {
        window.location.reload(false);
    },
    getTokens: async () => {
        return localStorage.getItem("Token");
    },
    setStorage: async (name, value) => {
        return localStorage.setItem(name, value);
    },
    deleteStorage: async (name) => {
        return localStorage.removeItem(name);
    },
    getStorage: (name) => {
        return localStorage.getItem(name);
    },
    removeToken: async () => {
        localStorage.removeItem("Token");

        if (window.location.pathname !== "/login") {
            window.location.pathname = "/login";
            Util.refreshPage();
        }
    },
    // Logout
    logout: async () => {
        localStorage.removeItem("Token");
        // window.location.pathname = "/login";
        Util.refreshPage();
        Util.showToast("Logout Successfully", "success");
    },
    // To Calculate Age in years
    calculateAge: (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Adjust age if the birth month/day hasn't occurred yet this year
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    },
    // To Calculate exact age in years months days
    calculateAgeInYMD: (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get days in previous month
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { year: years, month: months, day: days };
    },
    // Convert YMD (age) to DOB
    ymdToDOB: (years, months, days) => {
        let today = new Date();
        today.setFullYear(today.getFullYear() - years);
        today.setMonth(today.getMonth() - months);
        today.setDate(today.getDate() - days);

        // Format to "YYYY-MM-DD"
        return today.toISOString().split("T")[0];
    },
    // Convert DOB to YMD
    dobToYMD: (dob) => {
        let birthDate = new Date(dob);
        let today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        // Adjust for negative values
        if (days < 0) {
            months -= 1;
            let prevMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
            days += prevMonth;
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return { years, months, days };
    },
    // Convert ISO Date to DD-MM-YYYY
    formatISODate: (isoDate) => {
        let date = new Date(isoDate);

        let day = String(date.getDate()).padStart(2, "0");
        let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        let year = date.getFullYear();

        return `${day}-${month}-${year}`;
    },
    // Convert ISO Date to DDMMYY
    isoDateToddmmyy: (isoDate) => {
        const dateObj = new Date(isoDate);

        const dd = String(dateObj.getUTCDate()).padStart(2, "0");
        const mm = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
        const yy = String(dateObj.getUTCFullYear()).slice(-2); // Get last 2 digits of year

        const formattedDate = `${dd}${mm}${yy}`;

        return formattedDate;
    },
    isAgeInRange: (P_age, minAge, maxAge) => {
        const minYears = minAge?.year ?? 0;
        const minMonths = minAge?.month ?? 0;
        const minDays = minAge?.day ?? 0;

        const maxYears = maxAge?.year ?? Infinity;
        const maxMonths = maxAge?.month ?? 11;
        const maxDays = maxAge?.day ?? 30;

        // Compare age in order of years > months > days
        if (P_age.year < minYears || P_age.year > maxYears) return false;
        if (P_age.year === minYears && P_age.month < minMonths) return false;
        if (
            P_age.year === minYears &&
            P_age.month === minMonths &&
            P_age.day < minDays
        )
            return false;

        if (P_age.year === maxYears && P_age.month > maxMonths) return false;
        if (
            P_age.year === maxYears &&
            P_age.month === maxMonths &&
            P_age.day > maxDays
        )
            return false;

        return true;
    },
    findRefRange: (rangeArray = [], P_dob, Pgender) => {
        if (!P_dob) return null;

        // Convert P_dob to an age object (years, months, days)
        const P_age = Util.calculateAgeInYMD(P_dob);

        // Sort the ranges based on priority: Full Age Match > Max Age Match > Min Age Match > No Age Limit
        const sortedRanges = rangeArray.sort((a, b) => {
            const aHasBothAges = a.minAge?.year !== null && a.maxAge?.year !== null;
            const bHasBothAges = b.minAge?.year !== null && b.maxAge?.year !== null;

            const aHasOnlyMax = a.minAge?.year === null && a.maxAge?.year !== null;
            const bHasOnlyMax = b.minAge?.year === null && b.maxAge?.year !== null;

            const aHasOnlyMin = a.minAge?.year !== null && a.maxAge?.year === null;
            const bHasOnlyMin = b.minAge?.year !== null && b.maxAge?.year === null;

            if (aHasBothAges !== bHasBothAges) return bHasBothAges - aHasBothAges;
            if (aHasOnlyMax !== bHasOnlyMax) return bHasOnlyMax - aHasOnlyMax;
            if (aHasOnlyMin !== bHasOnlyMin) return bHasOnlyMin - aHasOnlyMin;
            return 0; // Keep order if all are null
        });

        // Find the best match based on age & gender
        let exactMatch = sortedRanges.find((range) => {
            return (
                range.gender === Pgender &&
                Util.isAgeInRange(P_age, range.minAge, range.maxAge)
            );
        });

        // If no exact match, check for "all" gender fallback
        if (!exactMatch) {
            exactMatch = sortedRanges.find((range) => {
                return (
                    range.gender === "all" &&
                    Util.isAgeInRange(P_age, range.minAge, range.maxAge)
                );
            });
        }

        return exactMatch || "--"; // Return the first matched range, or null if nothing found
    },
    formatRefRangeText: (range) => {
        if (!range) return "N/A"; // Return "N/A" if range is missing

        const { min, max, gender } = range;
        let text = "";

        if (min !== null && max !== null) {
            text = `${min}-${max}`;
        } else if (min !== null) {
            text = `>${min}`;
        } else if (max !== null) {
            text = `<${max}`;
        } else {
            return "--"; // If no min or max is provided
        }

        if (gender !== "all") {
            text += ` (${gender[0].toUpperCase()})`; // Append first letter of gender (M/F)
        }

        return text;
    },
    showToast: (message, type = "success") => {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
            case "info":
                toast.info(message);
                break;
            case "warning":
                toast.warning(message);
                break;
            default:
                toast(message);
        }
    },
    get: async (uri_with_param, callback, controller, type) => {
        let URL;
        URL = constants.URL;
        let url = URL + uri_with_param;
        let token = "Bearer " + (await Util.getTokens());
        let resType;
        if (
            type == "arraybuffer" ||
            type == "blob" ||
            type == "document" ||
            type == "json" ||
            type == "text" ||
            type == "stream"
        ) {
            resType = type;
        }
        callApi_get(url, token, controller, resType)
            .then((res) => {
                if (callback) {
                    // console.log('get response =====> ', JSON.stringify(res.data));
                    callback(res.data, (status = true));
                }
            })
            .catch(function (error) {
                if (error.response !== undefined) {
                    console.log("get error =====> ", error.response);
                    if (axios.isCancel(error)) {
                        console.log("Request canceled", error.message);
                    } else if (
                        error.response.status == "401" ||
                        error.response.statusText == "Unauthorized"
                    ) {
                        console.log("Unauthorized");
                        Util.removeToken();
                    } else {
                        callback(error.response.data, (status = false));
                    }
                }
            });
    },
    Post: async (uri, collection, callback, type) => {
        let URL;
        URL = constants.URL;
        let url = URL + uri;
        console.log(url);
        let token = "Bearer " + (await Util.getTokens());
        let typeValue = "application/json";
        if (type == "multipart") {
            typeValue = "multipart/form-data";
        }
        console.log(url, ">>>>", collection, ">>>>", token, ">>>>", typeValue);

        callApi_post(url, collection, token, typeValue)
            .then((res) => {
                if (callback) {
                    // console.log("post response =====> ", JSON.stringify(res.data));
                    if (callback) {
                        callback(res.data, (status = true));
                    }
                }
            })
            .catch(function (error) {
                if (error.response !== undefined) {
                    console.log("get error =====> ", error.response);
                    if (error.response.statusText == "Unauthorized") {
                        console.log("Unauthorized");
                        Util.removeToken();
                    } else {
                        Util.showToast(
                            error?.response?.data?.message || "Something went wrong",
                            "error"
                        );
                        callback(error.response.data, (status = false));
                    }
                }
            });
    },
    Put: async (uri, collection, callback, type) => {
        let URL;
        URL = constants.URL;
        let url = URL + uri;
        let token = "Bearer " + (await Util.getTokens());
        let typeValue = "application/json";
        if (type == "multipart") {
            typeValue = "multipart/form-data";
        }
        // console.log(url, '>>>>', collection)
        callApi_put(url, collection, token, typeValue)
            .then((res) => {
                if (callback) {
                    // console.log("post response =====> ", JSON.stringify(res.data));
                    if (callback) {
                        callback(res.data, (status = true));
                    }
                }
            })
            .catch(function (error) {
                if (error.response !== undefined) {
                    console.log("get error =====> ", error.response);
                    if (error.response.statusText == "Unauthorized") {
                        console.log("Unauthorized");
                        Util.removeToken();
                    } else {
                        callback(error.response.data, (status = false));
                    }
                }
            });
    },
    Delete: async (uri, callback, type, collection = {}) => {
        let URL;
        URL = constants.URL;
        let url = URL + uri;
        let token = "Bearer " + (await Util.getTokens());
        let typeValue = "application/json";
        if (type == "multipart") {
            typeValue = "multipart/form-data";
        }
        //console.log('delete =====> ', url + ' ' + ' ' + typeValue);
        callApi_delete(url, token, typeValue, collection)
            .then((res) => {
                // console.log('post response =====> ', JSON.stringify(res.data));
                if (callback) {
                    callback(res.data, (status = true));
                }
            })
            .catch(function (error) {
                if (error.response !== undefined) {
                    console.log("get error =====> ", error.response);
                    if (error.response.statusText == "Unauthorized") {
                        console.log("Unauthorized");
                        Util.removeToken();
                    } else {
                        callback(error.response.data, (status = false));
                    }
                }
            });
    },
};

export const callApi_get = async (url, token, controller, resType) => {
    return await axios.get(url, {
        signal: controller ? controller.signal : undefined,
        ...(resType ? { responseType: resType } : {}),
        headers: {
            ...(token ? { Authorization: token } : {}),
            "Content-Type": "application/json",
        },
    });
};
const callApi_post = async function go(url, pram, token, type) {
    return await axios.post(url, pram, {
        headers: {
            Accept: "application/json",
            "Content-Type": type,
            Authorization: token,
        },
        crossDomain: true,
    });
};
const callApi_put = async function go(url, pram, token, type) {
    return await axios.put(url, pram, {
        headers: {
            Accept: "application/json",
            "Content-Type": type,
            Authorization: token,
        },
        crossDomain: true,
    });
};
const callApi_delete = async function go(url, token, type, pram) {
    return await axios.delete(url, {
        headers: {
            Accept: "application/json",
            "Content-Type": type,
            Authorization: token,
        },
        data: pram,
        crossDomain: true,
    });
};

export default Util;
