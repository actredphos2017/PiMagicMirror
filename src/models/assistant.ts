export interface AskContent {
    content: string,
    end: boolean
}

export interface AnswerContent {
    content: string
}

export interface QASession {
    ask: AskContent,
    answer?: AnswerContent
}

export type AssistantExpression = "normal" | "thinking" | "talking" | "waiting"