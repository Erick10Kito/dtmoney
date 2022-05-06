import { Container } from "./style";
import IconeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalIcone from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IconeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong> -R$1000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalIcone} alt="Total" />
        </header>
        <strong>R$0,00</strong>
      </div>
    </Container>
  );
}
