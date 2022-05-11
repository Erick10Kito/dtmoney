import { useState } from "react";
import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";
import Modal from "react-modal";

interface IModalProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: IModalProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
