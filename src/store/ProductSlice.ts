import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ParamEditEvaluation } from "../types";

const initialState: IProduct[] = [
  {
    id: 1,
    name: "Smartphone X1",
    value: 1999.99,
    evaluation: 4,
    description:
      "Smartphone com tela AMOLED, 128GB de armazenamento e câmera tripla.",
  },
  {
    id: 2,
    name: "Notebook Pro 15",
    value: 5999.0,
    evaluation: 5,
    description: "Notebook com processador Intel i7, 16GB RAM e SSD de 512GB.",
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    value: 299.9,
    evaluation: 3,
    description: "Fones com cancelamento de ruído e bateria de longa duração.",
  },
  {
    id: 4,
    name: "Monitor 27” 4K",
    value: 1499.0,
    evaluation: 5,
    description: "Monitor UHD com painel IPS e suporte a HDR.",
  },
  {
    id: 5,
    name: "Teclado Mecânico RGB",
    value: 429.5,
    evaluation: 4,
    description: "Teclado com switches azuis e iluminação personalizável.",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    editEvaluation: (products, action: PayloadAction<ParamEditEvaluation>) => {
      const product = products.find((obj) => obj.id === action.payload.id);

      if (product) {
        product.evaluation = action.payload.evaluation;
      }
    },
  },
});

export const { editEvaluation } = productSlice.actions;
export default productSlice.reducer;
