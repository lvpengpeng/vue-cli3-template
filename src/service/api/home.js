import request from '../request';
/**
 * @desc 获取公众号配置信息
 * @param {*} openid 
 */
export const getRepConfig = (url, chantype) => request('/h5/eva/weixin/config.do', { url, chantype }, { loading: true });
/**
 * @desc 获取上传凭证
 * @param {*} isNew 是否生成新token 1 是 2 否
 * @param {*} scope 文件空间类型  1 公开 2 私密
 */
export const getUploadFileToken = (isNew = '1', scope = '1') => request('/common/uploadToken.do', { isNew, scope });
/**
 * @desc 获取首页数据
 * @param {string} activityId 活动id
 */
export const getActivityInfo = (activityId) => request('/activity/home.do', { activityId }, { loading: true });

