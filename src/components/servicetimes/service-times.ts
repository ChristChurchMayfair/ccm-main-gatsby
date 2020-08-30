import { closestTo, isSameDay, isAfter, addHours, subHours } from "date-fns"

// Given a list of date times and a date time representing now, return the date times that fall next and are on the same day.
export function getNextServiceTimes(
    allServiceDateTimes: Array<Date>,
    now: Date
): Array<Date> {

    const nowMinusTwoHours = subHours(now, 2)
    // console.log(now)
    // console.log(nowPlusTwoHours)
    const futureServiceDateTimes = allServiceDateTimes.filter((date: Date) => {
        return isAfter(date, nowMinusTwoHours)
    })

    const closestServiceDateTime = closestTo(now, futureServiceDateTimes)

    const datesOnSameDayAsClosest = futureServiceDateTimes.filter(
        (serviceTime: Date) => {
            return isSameDay(serviceTime, closestServiceDateTime)
        }
    )

    return datesOnSameDayAsClosest
}
