import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Card } from "./components/CardComponents/CardComponent";
import { useEffect, useState } from "react";

function App() {
  const products = useSelector((state: RootState) => state.product);
  const [valueMedia, setValueMedia] = useState(0)

  useEffect(() => {
    setValueMedia(() => {
      const sumAllEvaluation = products.reduce((accumulator, object) => accumulator + object.evaluation, 0)

      return sumAllEvaluation / products.length
    })
  }, [products]);

  return (
    <>
      {products.map((product) => <Card description={product.description} evaluation={product.evaluation} id={product.id} name={product.name} value={product.value} key={product.id} />)}

      <span>Média de avaliação {valueMedia}</span>
    </>
  );
}

export default App;
