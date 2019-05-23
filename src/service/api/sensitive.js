import request from '../request';
/**
 * @desc 获取公众号配置信息
 * @param {Sting} lastNanoTime 最新记录纳秒数 
 */
export const sensitiveWord = (userId, activityId,lastNanoTime) => request('/sensitiveWord/sync.do', {userId, activityId, lastNanoTime}, { loading: false });