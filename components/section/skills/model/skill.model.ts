export interface SkillModel {
    id: string,
    title: string,
    icon: JSX.Element,
    list: SkillList[]
}

export interface SkillList {
    id: string
    name: string

}