<template>
    <FSpace vertical>
        最大日期为今天：
        <FDatePicker :maxDate="new Date()" />
        最小日期为今天：
        <FDatePicker :minDate="new Date()" />
        每个月7号不能选：
        <FDatePicker :disabledDate="disabledDate" />
        最大日期范围为7天：
        <FDatePicker type="daterange" maxRange="7D" />
        控制可选时间范围为: 09:00:00 - 18:00:00：
        <FDatePicker
            type="datetimerange"
            :defaultTime="['09:00:00', '18:00:00']"
            :disabledTime="disabledTime"
        />
        最小月份为当前月份：
        <FDatePicker
            :minDate="new Date()"
            type="month"
            placeholder="选择月份"
        />
        最大年份为当前年份：
        <FDatePicker :maxDate="new Date()" type="year" placeholder="选择年份" />
    </FSpace>
</template>

<script>
export default {
    setup() {
        const disabledDate = (date) => {
            if (date.getDate() === 7) return true;
            return false;
        };
        const disabledTime = (date, phase) => {
            // phase: left | right
            return {
                disabledHours: (hour) => {
                    if (phase === 'left') {
                        return hour > 9;
                    }
                    return hour < 18;
                },
            };
        };

        return {
            disabledDate,
            disabledTime,
        };
    },
};
</script>
