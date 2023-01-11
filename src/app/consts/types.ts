export type SidebarElementType = {
    id : string,
    name : string
}
type SelectOption = {
    value: string,
    title: string
}
export type InputType = {
    name : string,
    placeholder? : string,
    type? : string,
    value? : string,
    disabled? : boolean,
    checked? : boolean,
    selected? : boolean,
    options? : SelectOption[],
    label? : string,
}

export type MockType = {
    sidebar : SidebarElementType[],
    viewForm : InputType[]
}