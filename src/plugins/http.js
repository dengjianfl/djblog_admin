import axios from 'axios';

export default {
    install (Vue) {
        Vue.prototype.$ajax = ({
            url = '',
            data = {}
        }) => {
            return axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: [function (data) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                }]
            }).then(res => {
                if (!res.data.isSuccess && res.data.error === '200') {
                    location.href = '/';
                    return false;
                }
                return Promise.resolve(res.data);
            }, err => {
                return Promise.reject(err);
            });
        };
    }
};
