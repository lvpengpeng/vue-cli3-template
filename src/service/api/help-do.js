import request from '../request';
/**
 * @desc 获取活动助力信息 活动助力模板
 * @param {string} userId 被助力人id
 * @param {string} openId 打开人id
 * @param {string} activityId 活动id
 */
export const getHelpInfo=(userId,openId,activityId)=>request('/activity/help/info.do',{userId,activityId,openId},{loading:true});
/**
 * @desc 微信活动助力
 * @param {string} byUserId 用户id
 * @param {string} openId 助力人Id
 * @param {string} activityId 活动id
 * @param {string} sourceType 来源 
 */
export const doHelp = (byUserId, openId, activityId, sourceType) => request('/activity/help.do', { byUserId, openId, activityId, sourceType }, { loading: true });