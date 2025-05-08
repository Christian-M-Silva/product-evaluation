import { Provider } from "react-redux";
import { IProduct } from "./types";
import { mediaProduct } from "./utils/utils";
import { store } from "./store";
import App from "./App";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('AppComponent', () => {
    it('should show media 4', () => {
        const products: IProduct[] = [
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

    it('should show media 4.25', () => {
        const products: IProduct[] = [
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

    it('should show average 4.4 after changing rating', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        const card = screen.getByText('Smartphone X1')

        fireEvent.click(card)

        const select = screen.getByLabelText('Avaliação:');

        userEvent.selectOptions(select, '5')

        const spanElement = screen.getByText(/Média de avaliação/);
        const textContent = spanElement.textContent as string
        
        const rating = textContent.trim().split(' ').pop();
        
        expect(rating).toBe('4.4');
    })
})