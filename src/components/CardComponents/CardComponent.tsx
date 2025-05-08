import { useState } from "react";
import { IProduct, ParamEditEvaluation } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { editEvaluation } from "../../store/ProductSlice";

export function Card(propsCard: IProduct) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded((prev) => !prev);
    };

    const dispatch = useDispatch<AppDispatch>();


    return (
        <div
            className="w-full max-w-md mx-auto transition-all duration-300 border border-gray-300 rounded-2xl shadow-sm overflow-hidden hover:shadow-md my-2"
        >
            {/* Cabeçalho com nome e valor */}
            <div className="flex justify-between items-center p-4 bg-white cursor-pointer" onClick={toggleCard}>
                <span className="text-lg font-semibold text-gray-800">{propsCard.name}</span>
                <span className="text-lg font-bold text-green-600">R$ {propsCard.value}</span>
            </div>

            {/* Seção expandida */}
            {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                    <p className="text-sm text-gray-600">{propsCard.description}</p>

                    {/* Avaliação */}
                    <div className="flex items-center space-x-2">
                        <label htmlFor="rating" className="text-sm text-gray-700">Avaliação:</label>
                        <select
                            id="rating"
                            className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={propsCard.evaluation}
                            onChange={(e) => dispatch(editEvaluation({ evaluation: Number(e.currentTarget.value) as ParamEditEvaluation['evaluation'], id: propsCard.id }))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}