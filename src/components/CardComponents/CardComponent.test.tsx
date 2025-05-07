import { fireEvent, render, screen } from "@testing-library/react"
import { Card } from "./CardComponent"
import { Provider } from "react-redux"
import { store } from "../../store"

describe('CardComponent', () => {
    it('should show description and evaluation', () => {
        render(
            <Provider store={store}>
                <Card name={"Teste name"} value={0} evaluation={2} description={"Descrição"} id={0} />
            </Provider>
        )

        const card = screen.getByText('Teste name')

        fireEvent.click(card)

        expect(screen.getByText('Avaliação:')).toBeInTheDocument()
        expect(screen.getByText('Descrição')).toBeInTheDocument()
    })
})