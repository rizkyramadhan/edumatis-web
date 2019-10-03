import {DatePickerAndroid, TimePickerAndroid} from "react-native";

export const openDatePicker = async (selectedDate: Date = new Date()) => {
    try {
        // @ts-ignore
        const {action, year, month, day} = await DatePickerAndroid.open({
            date: selectedDate
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            return new Date(year, month, day);
        }
        return false;
    } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
        return false;
    }
};

(String.prototype as any).padLeft = function (paddingValue: any) {
    return String(paddingValue + this).slice(-paddingValue.length);
};

export const openTimePicker = async (selectedTime: string = "00:00") => {
    try {
        const split = selectedTime.split(":");
        const h = split[0];
        const m = split[1];

        // @ts-ignore
        const {action, hour, minute} = await TimePickerAndroid.open({
            hour: parseInt(h),
            minute: parseInt(m),
            is24Hour: true,
        });
        if (action !== TimePickerAndroid.dismissedAction) {
            // Selected hour (0-23), minute (0-59)
            return hour.toString().padLeft('00') + ":" + minute.toString().padLeft('00');
        }
        return false;
    } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
        return false;
    }
};
