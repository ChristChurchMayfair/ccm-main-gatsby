import { getNextServiceTimes } from "./service-times"

test("getNextServices_canFindNextServices", () => {
    // Given
    const serviceTimes = [
        // Sunday (aka tomorrow)
        new Date("2020-08-16T10:00:00"),
        new Date("2020-08-16T11:00:00"),
        // Sunday next week
        new Date("2020-08-23T11:00:00"),
    ]
    const saturdayBeforeServices = new Date("2020-08-15T09:00:00")

    // When
    const nextServiceTimes = getNextServiceTimes(
        serviceTimes,
        saturdayBeforeServices
    )

    // Then
    expect(nextServiceTimes).toHaveLength(2)
    expect(nextServiceTimes).toContainEqual(new Date("2020-08-16T10:00:00"))
    expect(nextServiceTimes).toContainEqual(new Date("2020-08-16T11:00:00"))
    expect(nextServiceTimes).not.toContainEqual(new Date("2020-08-23T11:00:00"))
})

test("getNextServices_doesNotReturnServicesInThePast", () => {
    // Given
    const serviceTimes = [
        // Last sunday
        new Date("2020-08-09T10:00:00"),
        // Next Sunday
        new Date("2020-08-16T10:00:00"),
        new Date("2020-08-16T11:00:00"),
        // Sunday after
        new Date("2020-08-23T11:00:00"),
    ]
    const monday = new Date("2020-08-10T09:00:00")

    // When
    const nextServiceTimes = getNextServiceTimes(serviceTimes, monday)

    // Then
    expect(nextServiceTimes).not.toContainEqual(new Date("2020-08-09T10:00:00"))

    expect(nextServiceTimes).toHaveLength(2)
    expect(nextServiceTimes).toContainEqual(new Date("2020-08-16T10:00:00"))
    expect(nextServiceTimes).toContainEqual(new Date("2020-08-16T11:00:00"))

    expect(nextServiceTimes).not.toContainEqual(new Date("2020-08-23T11:00:00"))
})

test("getNextServices_doesNotReturnServicesInThePastWithAMarginOfTwoHours", () => {
    // Given
    const serviceTimes = [
        // This sunday
        new Date("2020-08-09T18:00:00Z"),
        // Next Sunday
        new Date("2020-08-16T10:00:00Z"),
        new Date("2020-08-16T11:00:00Z"),
        // Sunday after
        new Date("2020-08-23T11:00:00Z"),
    ]
    const now = new Date("2020-08-09T18:15:00Z")

    // When
    const nextServiceTimes = getNextServiceTimes(serviceTimes, now)

    // Then
    expect(nextServiceTimes).toContainEqual(new Date("2020-08-09T18:00:00Z"))

    expect(nextServiceTimes).toHaveLength(1)
    expect(nextServiceTimes).not.toContainEqual(new Date("2020-08-16T10:00:00Z"))
    expect(nextServiceTimes).not.toContainEqual(new Date("2020-08-16T11:00:00Z"))

    expect(nextServiceTimes).not.toContainEqual(new Date("2020-08-23T11:00:00"))
})
