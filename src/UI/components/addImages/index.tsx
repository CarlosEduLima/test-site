import React, { useState } from 'react';
import { Button } from '../Button';
import Modal from './modal';
import discardImage from '../../../assets/discardImage.svg';
import Image from 'next/image';
import api from '../../../services/api'
import {
    SubTitle,
    Container,
    ButtonContainer,
    Input,
    InputContainer,
    ImagesContainer,
    ImagesCropped,
    DiscardImage
} from './styles';

const AddImages = () => {

    const [image, setImage] = useState();
    const [imagesGallery, setImagesGallery] = useState([]);
    const [imagesFile, setImagesFile] = useState([]);
    const [response, setResponse] = useState([]);
    const [limitImage, setLimitImage] = useState(0);

    const handleLimitImage = () => {
        setLimitImage(limitImage + 1)
    };

    const CloseModal = () => {
        setImage(undefined);
    };

    const DiscardImg = (i) => {
        imagesGallery.splice(i, 1);

        imagesFile.splice(i, 1);

        setLimitImage(limitImage - 1);
    };

    const SendFile = async () => {
        if (imagesGallery.length > 0 && imagesFile.length > 0) {
            response.splice(0)
        }

        for (let item of imagesFile) {
            let formData = new FormData();
            formData.append("file[]", item)

            setResponse(await api.post('/files?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDEyMzQ0NjksIm5iZiI6MTY0MTIzNDQ2OSwianRpIjoiN2xUcmw0OU1JbWJWNHRLRSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sfZ3v5IZPDUfHE11tw7Gd6nHHD1NtWTcJGOzTPY30Vs',
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }))
        }
        setLimitImage(0);
        setImagesFile([]);
        setImagesGallery([]);
    }

    return (
        <>
            <Container>
                <SubTitle>Adicione fotos para receber orçamentos mais precisos!</SubTitle>
                <ImagesContainer>
                    {imagesGallery?.map((item, i) => (
                        <ImagesCropped img={item} >
                            <DiscardImage onClick={() => DiscardImg(i)}>
                                <Image src={discardImage} width={10} height={10} />
                            </DiscardImage>
                        </ImagesCropped>
                    ))}
                    {limitImage < 5 && (
                        <InputContainer>
                            <Input
                                type="file" name="file" accept="image/*"
                                onChange={(e) => {
                                    const file: any = e.target.files[0]
                                    const reader: any = new FileReader()

                                    reader.addEventListener('load', () => {
                                        setImage(reader.result)
                                    }, false)

                                    if (file) {
                                        reader.readAsDataURL(file)
                                    }
                                }} />
                        </InputContainer>
                    )}
                </ImagesContainer>
                <ButtonContainer onClick={SendFile} >
                    <Button children={'Próximo'} variant={'secondary'} widthCircle={''} heightCircle={''} height='35px' />
                </ButtonContainer>
            </Container>
            {image &&
                <Modal
                    image={image}
                    imagesGallery={imagesGallery}
                    imagesFile={imagesFile}
                    buttonClose={CloseModal}
                    setImagesGallery={setImagesGallery}
                    setImagesFile={setImagesFile}
                    handleLimitImage={handleLimitImage}
                />}
        </>
    )
}

export default AddImages;