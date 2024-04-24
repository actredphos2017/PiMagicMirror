export type VCalendarAttributes = {
    key: string,
    highlight?: boolean | string | VCalendarHighlight | {
        start: VCalendarHighlight,
        base: VCalendarHighlight,
        end: VCalendarHighlight
    },
    dot?: boolean | string | {
        color?: string,
        class?: string,
        style?: any,
    },
    bar?: boolean | string | {
        color?: string,
        class?: string,
        style?: any,
    },
    content?: boolean | string | {
        color?: string,
        class?: string,
        style?: any,
    },
    dates: VCalendarHighlightDate | VCalendarHighlightDate[]
}[]

export type VCalendarHighlightDate = Date | [Date, Date] | { start: Date, end: Date }

export interface VCalendarHighlight {
    color?: string,
    fillMode?: string,
    class?: string,
    contentClass?: string,
    style?: any,
    contentStyle?: any
}