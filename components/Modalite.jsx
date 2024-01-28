import React, { useState } from 'react';
import { Modal, Portal, Text, Button, Provider as PaperProvider } from 'react-native-paper';
import BtnApp from './BtnApp';
import NameListe from './NameListe';

const Modalite = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
        
    <PaperProvider>
      <Portal>
        {visible && (
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <NameListe/>
            <BtnApp />
            <Text>Cliquez a l'exterieur pour sortir !</Text>
            
          </Modal>
        )}
      </Portal>
      
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
      
    </PaperProvider>
  );
};

export default Modalite;
