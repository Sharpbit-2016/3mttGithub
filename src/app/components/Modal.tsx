import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from "@chakra-ui/react";

const Modal =({isConfirmationModalOpen, closeConfirmationModal, header, body, handleDeleteRepo})=>{
    return (
        <Modal isOpen={isConfirmationModalOpen} onClose={closeConfirmationModal}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {body}
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="red" onClick={handleDeleteRepo}>Yes, Delete</Button>
                <Button variat="ghost" onClick={closeConfirmationModal}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    );
}