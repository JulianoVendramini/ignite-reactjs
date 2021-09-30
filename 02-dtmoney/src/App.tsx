import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";

import { useState } from "react";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);
    
    function handleOpenNewTransactionModal(){
        setIsNewTransactionModal(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModal(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>   
      </Modal>

      <Dashboard />
    </>
  );
}
