import request from '../request';
/**
 * @desc 获取公众号配置信息
 * @param {Sting} userId 用户id
 * @param {Sting} activityId 活动id
 * @param {Object} pageInfo 分页对象 
 */
export const getTop = (userId, activityId,pageInfo) => request('/activity/ranking.do', { userId, activityId,pageInfo}, { loading: false });