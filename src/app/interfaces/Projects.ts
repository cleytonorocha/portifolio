export interface Projects {
    readonly title: string,
    readonly thumbnailURL : string,
    readonly image: {
        imageUrl : string[],
        alt : string
    },
    readonly shortExplication: string,
    readonly tech: string[],
    readonly github: string,
    readonly longText: string
}