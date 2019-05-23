import request from '../request';
/**
 * @desc 获取活动模板详情
 * @param {string} userId 用户id
 * @param {string} activityId 活动id 后期统一在接口处添加

 */
export const getActivityDetail = (userId, activityId) => request('/activity/detail.do', { activityId, userId }, { loading: true });
/**
 * @desc 活动助力
 * @param {string} byUserId 用户id
 * @param {string} helpUserId 助力人Id
 * @param {string} activityId 活动id
 * @param {string} sourceType 来源 
 */
export const doHelp = (byUserId, userId, activityId, sourceType) => request('/activity/help.do', { byUserId, userId, activityId, sourceType });





























