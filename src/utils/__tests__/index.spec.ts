import { sortedWithPriority } from ".."

test("sortedWithPriority", () => {
    expect(sortedWithPriority([0, 1, 2], a => a, [1])).toEqual([1, 0, 2])
    expect(
        sortedWithPriority(
            [{ id: "a" }, { id: "b" }, { id: "c" }],
            obj => obj.id,
            ["c", "a"]
        )
    ).toEqual([{ id: "c" }, { id: "a" }, { id: "b" }])
    expect(() => sortedWithPriority([0, 1, 2], a => a, [3])).toThrow(
        new Error("Could not find index of key '3'")
    )
    expect(sortedWithPriority([0, 1, 2], a => a, [])).toEqual([0, 1, 2])
})
