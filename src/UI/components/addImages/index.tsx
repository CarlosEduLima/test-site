import React, { useState } from 'react';
import { Button } from '../Button';
import Modal from '../modal';
import discardImage from '../../../assets/discardImage.svg';
import Image from 'next/image';
import api from '../../../services/api'
import { SubTitle, Container, ButtonContainer, Input, InputContainer, ImagesContainer, ImagesCropped, DiscardImage } from './styles';


const AddImages = () => {

    const [image, setImage] = useState();
    const [images, setImages] = useState([]);
    const [imageFile, setImageFile] = useState();
    const [imagesFile, setImagesFile] = useState([]);
    const [response, setResponse] = useState([]);

    const CloseModal = () => {
        setImage(undefined);
        setImageFile(undefined);
    };

    const SaveModal = () => {
        setImages([...images, image]);
        setImage(undefined);

        setImagesFile([...imagesFile, imageFile]);
        setImageFile(undefined);
    };

    const DiscardImg = (i) => {
        images.splice(i, 1);
        setImages([...images]);

        imagesFile.splice(i, 1);
        setImagesFile([...imagesFile]);
    };

    const SendFile = async () => {
        response.splice(0)

        for (let item of imagesFile) {
            var formData = new FormData();
            formData.append("file[]", item)

            setResponse(await api.post('/files?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDEyMzQ0NjksIm5iZiI6MTY0MTIzNDQ2OSwianRpIjoiN2xUcmw0OU1JbWJWNHRLRSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sfZ3v5IZPDUfHE11tw7Gd6nHHD1NtWTcJGOzTPY30Vs',
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }))
        }
    }

    return (
        <>
            <Container>
                <SubTitle>Adicione fotos para receber orçamentos mais precisos!</SubTitle>
                <ImagesContainer>
                    {images?.map((item, i) => (
                        <ImagesCropped img={item} >
                            <DiscardImage onClick={() => DiscardImg(i)}>
                                <Image src={discardImage} width={10} height={10} />
                            </DiscardImage>
                        </ImagesCropped>
                    ))}
                    <InputContainer>
                        <Input type="file" name="file" accept="image/*"
                            onChange={(e) => {
                                const file: any = e.target.files[0]
                                const blob: any = URL.createObjectURL(file)
                                setImageFile(file)
                                setImage(blob)
                            }} />
                    </InputContainer>
                </ImagesContainer>
                <ButtonContainer onClick={SendFile} >
                    <Button children={'Próximo'} variant={'secondary'} widthCircle={''} heightCircle={''} height='35px' />
                </ButtonContainer>
            </Container>
            {image &&
                <Modal
                    image={image}
                    buttonClose={CloseModal}
                    buttonSave={SaveModal}
                />}
        </>
    )
}

export default AddImages;