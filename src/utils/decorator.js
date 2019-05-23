/**
 * @desc "防抖节流"
 * @param {number} deylay当函数执行完后再次执行的时间间隔单位ms
 */
function Throttle(deylay = 0) {
    let isPending = false;
    /**
     * @desc 防抖节流
     * @param {number} deylay当函数执行完后再次执行的时间间隔
     */
    return (target, name, descriptor) => {
        var oldValue = descriptor.value;
        //重写函数
        descriptor.value = async function (...args) {
            if (isPending) return;
            isPending = true;
            try {
                await oldValue.apply(this, args);
            } catch (err) {
                //do nothing
                console.error(err)
            }
            if (!deylay) return isPending = false;
            setTimeout(() => {
                isPending = false;
            }, deylay);
        };
        return descriptor;
    };
}
/**
 * @desc 记录函数请求耗时
 */
function TimeCost(_target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = async function (...args) {
        const timeStart = new Date().getTime()
        try {
            await oldValue.apply(this, args);
        } catch (err) {
            console.error(err);
        }
        console.log(`function:${name} costs: ${new Date().getTime() - timeStart}ms`);
    };
    return descriptor;
}
export {
    Throttle,
    TimeCost,
}