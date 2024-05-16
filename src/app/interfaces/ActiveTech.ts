export interface ActiveTech {
    backend: {
        readonly id: 0,
        readonly values: Record<string, string>,
        isActive: boolean
    },
    frontend: {
        readonly id: 1,
        readonly values: Record<string, string>,
        isActive: boolean
    },
    banco: {
        readonly id: 2,
        readonly values: Record<string, string>,
        isActive: boolean
    },
    devops: {
        readonly id: 3,
        readonly values: Record<string, string>,
        isActive: boolean
    },
    reset: () => void,
    techControlActive: (index: number) => void,
    textInvalid: string[]
}