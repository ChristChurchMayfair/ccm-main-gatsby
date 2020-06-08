export type ValueEqual = {
    type: "valueEqualTo"
    otherFieldName: string
    hasValueEqualTo: any
}

export type ValueIn = {
    type: "valueInList"
    otherFieldName: string
    values: any[]
}

export type VisibilityCondition = ValueEqual | ValueIn | undefined

export function shouldShowField(
    showWhen: VisibilityCondition,
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