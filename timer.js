function calculateValidTimeCountdown(createTimeMS, validTimeMinutes) {
    let now = +new Date();
    let validTime = parseInt(createTimeMS) + parseInt(validTimeMinutes) * 60 * 1000;
    let time = validTime - now;
    if (time > 0) {
        let H = (time / (1000 * 60 * 60)) >> 0;
        let M = ((time % (1000 * 60 * 60)) / (60 * 1000)) >> 0;
        let S = (time % (60 * 60) / (1000)) >> 0;
        return `核验码将在${H > 0 ? H < 9 ? '0' + H + '时' : H + '时' : ''}${M < 10 ? '0' + M : M}分${S < 10 ? '0' + S : S}秒后重置`;
    } else {
        return "核验码将在00分00秒后重置";
    }
}

console.log(calculateValidTimeCountdown("1584688871684","60"));