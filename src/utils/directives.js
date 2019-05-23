/**
 * @example v-longtouch:1500="handleLongTouch" //1500ms后执行methods里的 handleLongTouch 并将el传递进去
 */
export const longtouch = (el, binding) => {
    let isFingerleave = false;

    const limit = binding.arg ? Number(binding.arg) : 500;//默认长按时长'
    if (limit.toString() === "NaN") throw TypeError(`时长应为一个数字`);
    const touchstart = (e) => {

        e.stopPropagation();

        isFingerleave = false;
        setTimeout(() => {
            if (!isFingerleave && binding.value) {

                binding.value(el)



            }
        }, limit);

    };
    el.ontouchstart = touchstart;
    el.ontouchend = (e) => isFingerleave = true;
    el.ontouchcancel = () => isFingerleave = true;
}