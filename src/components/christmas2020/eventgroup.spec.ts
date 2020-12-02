import { EventGroup, hasEventGroupPassedFilter } from "./eventgroup"

test("event group filter", () => {
    // Given
    const event_group: EventGroup = {
        title: "title",
        description: "",
        styles: {},
        events: [
            {
                description: "blah",
                datetime: new Date("2020-08-15T09:00:00"),
                styles: {},
            },
        ],
    }

    // When
    const passedFilter = hasEventGroupPassedFilter(
        new Date("2020-08-15T09:00:00"),
        { hours: 2 }
    )
    const result = passedFilter(event_group)

    // Then
    expect(result).toBeTruthy()
})

test("event group filter new", () => {
    // Given
    const event_group: EventGroup = {
        title: "title",
        description: "",
        styles: {},
        events: [
            {
                description: "blah",
                datetime: new Date("2020-08-15T10:00:00"),
                styles: {},
            },
        ],
    }

    // When
    const passedFilter = hasEventGroupPassedFilter(
        new Date("2020-08-15T09:00:00"),
        { hours: 2 }
    )
    const result = passedFilter(event_group)

    // Then
    expect(result).toBeTruthy()
})
