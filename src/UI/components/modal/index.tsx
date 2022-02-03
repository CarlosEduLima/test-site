import React, { useCallback, useState } from 'react';
import NextImage from 'next/image';
import { Button } from '../Button';
import Cropper from 'react-easy-crop'
import closeModal from '../../../assets/closeModal.svg';
import {
    Container,
    BackgroundModal,
    ContainerModal,
    HeaderModal,
    ImageModal,
    ButtonModal,
    TitleModal,
    CloseModal,
    Images,
} from './styles'

const Modal = ({ image, buttonClose, buttonSave }) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [cropped, setCropped] = useState()

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCropped(croppedAreaPixels)
    }, [cropped])

    return (
        <Container>
            <BackgroundModal onClick={buttonClose} />
            <ContainerModal>
                <HeaderModal>
                    <TitleModal>Ajuste a sua foto</TitleModal>
                    <CloseModal onClick={buttonClose}>
                        <NextImage src={closeModal} />
                    </CloseModal>
                </HeaderModal>
                <ImageModal>
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 3}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        style={{
                            cropAreaStyle: {
                                backgroundColor: 'rgba(0, 130, 255, 0.14)',
                                borderColor: '#0082FF',
                                color: '#0000',
                            },
                            mediaStyle: {
                                height: 'auto',
                                width: 'auto',
                                maxHeight: '100%',
                                maxWidth: '100%',
                            },
                        }}
                    />
                </ImageModal>
                <ButtonModal onClick={buttonSave}>
                    <Button variant={'secondary'} widthCircle={''} heightCircle={''} height='35px'>SALVAR</Button>
                </ButtonModal>
            </ContainerModal>
        </Container>
    )
}

export default Modal;