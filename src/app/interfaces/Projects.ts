export interface Projects {
    readonly title: string,
    readonly thumbnailURL : string,
    readonly imagesURL: string[],
    readonly shortExplication: string,
    readonly tech: Record<string, string>,
    readonly longText: string,
    readonly github: string
}