import { closestTo, isSameDay, isAfter } from "date-fns"

// Given a list of date times and a date time representing now, return the date times that fall next and are on the same day.
export function getNextServiceTimes(
    allServiceDateTimes: Array<Date>,
    now: Date
): Array<Date> {
    const futureServiceDateTimes = allServiceDateTimes.filter((date: Date) => {
        return isAfter(date, now)
    })

    const closestServiceDateTime = closestTo(now, futureServiceDateTimes)

    const datesOnSameDayAsClosest = futureServiceDateTimes.filter(
        (serviceTime: Date) => {
            return isSameDay(serviceTime, closestServiceDateTime)
        }
    )

    return datesOnSameDayAsClosest
}
