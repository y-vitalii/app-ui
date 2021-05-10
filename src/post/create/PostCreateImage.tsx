import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import styles from './PostCreate.module.css';
import {useState} from "react";


const getColor = (props: { isDragAccept: any; isDragReject: any; isDragActive: any; }) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props: any) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  width: 95%;
  box-sizing: border-box;
  margin: 0 auto;
`;

interface ImageFile extends File {
    preview: string
}

const initialState: ImageFile[] = [];

const PostCreateImage = (props: any) => {

    const [files, setFiles] = useState(initialState);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop: acceptedFiles => {
            const images = files.concat(acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)})));
            setFiles(images)
            props.setValue("file", images);
        }
    });

    return (
        <div className={styles['post_create-image']}>
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </Container>
            <div className={styles['post_create-image_review']}>
                {files.map((img, idx) =>
                    <div className={styles['post_create-image_review__img']} key={idx}>
                        <img src={img.preview} key={idx}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostCreateImage;