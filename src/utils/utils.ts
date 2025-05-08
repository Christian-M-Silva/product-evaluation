import { IProduct } from "../types";

export function mediaProduct(products:IProduct[]) {
    const sumAllEvaluation = products.reduce((accumulator, object) => accumulator + object.evaluation, 0)

    return sumAllEvaluation / products.length
}