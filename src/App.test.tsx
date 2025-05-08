import { IProduct } from "./types";
import { mediaProduct } from "./utils/utils";

describe('AppComponent', () => {
    it('should show result 4', () => {
        const products : IProduct[] = [
          {
            id: 1,
            name: "Smartphone X1",
            value: 1999.99,
            evaluation: 3,
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

        expect(mediaProduct(products)).toBe(4)
    })
    
    it('should show result 4.25', () => {
        const products : IProduct[] = [
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

        expect(mediaProduct(products)).toBe(4.25)
    })
})