export enum ItemType {
    AUDIO = "audio",
    TEXT = "text"
}

export interface Item {
    _id: string,
    type: ItemType,
    headline: string,
    subheadline: string,
    content: string,
    time: string,
    link: string
} 