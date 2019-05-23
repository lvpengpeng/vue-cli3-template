import request from '../request';
/**
 * @desc 按钮埋点
 * @param {Sting} buttonLocationType 埋点位置 0	首页我要告白 1发布页 2帮助页 
 * @param {Sting} userId 用户id
 * @param {Sting} activityId 活动id
 */
export const buttonInvoke = (buttonLocationType,userId, activityId) => request('/activity/button/invoke.do', { buttonLocationType,userId, activityId}, {ignoreError:true });
/**
 * @desc 活动手机厂商埋点
 * @param {Sting} userId 用户id
 * @param {Sting} activityId 活动id
 * @param {Sting} phoneBrand 手机厂商 
 */
export const phoneInvoke = (userId, activityId,phoneBrand) => request('/activity/phone/invoke.do', { userId, activityId,phoneBrand}, { ignoreError:true });