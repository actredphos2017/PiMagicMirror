export interface AskContent {
    content: string,
    end: boolean
}

export interface AnswerContent {
    content: string
}

export class QASession {
    constructor(ask: AskContent = {content: "", end: false}) {
        this.ask = ask
    }
    ask: AskContent
    answer?: AnswerContent
    updateAsk(ask: AskContent) {
        this.ask = ask
    }
    updateAnswer(answer: AnswerContent) {
        this.answer = answer
    }
    askFinish() {
        return this.ask.end
    }
    answerFinish() {
        return !!this.answer
    }
}

export class QASessionQueue {
    qaQueue: QASession[] = []
    putAsk(ask: AskContent) {
        if (this.qaQueue.length == 0 || this.qaQueue[this.qaQueue.length - 1].askFinish()) {
            this.qaQueue.push(new QASession(ask));
        } else {
            this.qaQueue[this.qaQueue.length - 1].updateAsk(ask);
        }
    }
    putAnswer(answer: AnswerContent) {
        if (this.qaQueue.length > 0)
            this.qaQueue[this.qaQueue.length - 1].updateAnswer(answer);
    }
    clear() {
        this.qaQueue = []
    }
}