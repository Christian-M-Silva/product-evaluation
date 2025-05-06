export interface IProduct{
    name: string,
    value: number,
    evaluation: 1|2|3|4|5,
    description: string,
    id: number
}

export type ParamEditEvaluation = Pick<IProduct, 'id'| 'evaluation'>