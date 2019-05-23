import {apiEvalStauts, apiEvalIsNewUser} from '@/service/api/evaluation';
import store from '../store';

const moduleCode = store.getters.moduleCode;

/**
 * 检验用户是否评测
 * @param {*} moduleCode
 */
export const isEval = () => {
    return new Promise((resolve, reject) => {
        apiEvalStauts(moduleCode).then(res => {
            if (res.retCode == 'SUCCESS') {
                resolve(res);
            } else {
                reject(res.retCode + res.retInfo);
            }
        })
    });
}


/**
 * 用户信息
 * @returns {Promise<any>}
 */
export const isNewUser = () => {
    return new Promise((resolve, reject) => {
        apiEvalIsNewUser().then(res => {
            if (res.retCode == 'SUCCESS') {
                resolve(res);
            } else {
                reject(res.retCode + res.retInfo);
            }
        })
    });
}

