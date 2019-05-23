import request from '../request';
/**
 * @desc 获取公众号配置信息
 * @param {Sting} userId 用户id
 * @param {Sting} activityId 活动id
 * @param {Sting} title 题目
 * @param {Sting} content 内容 
 * @param {List<Sting>} imageKey 图片key 
 */
export const getTell = (userId, activityId,title,content,imageKey) => request('/activity/save.do', { userId, activityId,title,content,imageKey}, { loading: true });