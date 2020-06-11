export type ValueEqual = {
    type: "valueEqualTo"
    otherFieldName: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hasValueEqualTo: any
}

export type ValueIn = {
    type: "valueInList"
    otherFieldName: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: any[]
}

export type VisibilityCondition = ValueEqual | ValueIn | undefined

export function shouldShowField(
    showWhen: VisibilityCondition,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    watch: any //TODO - use a proper type
): boolean {
    if (showWhen === undefined) {
        return true
    }

    switch (showWhen.type) {
        case "valueEqualTo": {
            return watch(showWhen.otherFieldName) === showWhen.hasValueEqualTo
        }
        case "valueInList": {
            return showWhen.values.includes(watch(showWhen.otherFieldName))
        }
    }
}
