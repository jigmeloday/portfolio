export interface SkillModel {
    title: string,
    icon: JSX.Element,
    list: SkillList[]
}

export interface SkillList {
    name: string
}