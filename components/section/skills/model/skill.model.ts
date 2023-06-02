export interface SkillModel {
    section: string,
    details: Details[];
}

export interface SkillList {
    id: string
    name: string

}

export interface Details {
    id: string,
    title: string,
    textColor?: string,
    classes: string,
    hover: string,
    icon: JSX.Element,
    list: SkillList[]
}