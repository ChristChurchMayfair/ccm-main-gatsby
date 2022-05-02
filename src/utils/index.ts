/**
 * Returns a copy of the array with the prioritised items followed
 * by the original order of the unspecified items. Throws an error
 * if a given key does not exist.
 * sortedWithPriority([0, 1, 2], n => n, [1]) returns [1, 0, 2]
 *
 */
export const sortedWithPriority = <T, K>(
    array: ReadonlyArray<T>,
    keyExtractor: (_: T) => K,
    priorities: ReadonlyArray<K>
): Array<T> => {
    // Make a copy so we can mutate
    const copy = array.slice(0)
    const output: Array<T> = []
    for (const key of priorities) {
        const index = copy.findIndex(item => keyExtractor(item) === key)
        if (index === -1) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            throw new Error(`Could not find index of key '${key}'`)
        }
        // Remove our prioritised items from the array
        const item = copy.splice(index, 1)[0]
        output.push(item)
    }

    return [...output, ...copy]
}
