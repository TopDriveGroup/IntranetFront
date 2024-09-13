/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { sendDocumentToSharePoint } from '../../../redux/SharePoint/actions';
//ELEMENTOS DEL COMPONENTE
import styles from './styles.module.css';

interface UploadToSharePointProps {
    addNotification: (type: 'success' | 'error', message: string) => void;
}

function UploadToSharePoint({ addNotification }: UploadToSharePointProps) {
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const sharePointErrors = useSelector((state: RootState) => state.sharePoint.sharePointErrors);

    const { register, handleSubmit } = useForm();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            const formData = new FormData();
            if (data.attachments && data.attachments.length > 0) {
                const file = data.attachments[0];               // SELECCIONA EL PRIMER ARCHIVO (PARA SUBIR SOLOR UN ARCHIVO POR SERVICIO)
                formData.append('attachments', file);
                const fileName = file.name;                     // SETEA EL NOMBRE DEL ARCHIVO
                formData.append('attachmentName', fileName); 
                dispatch(sendDocumentToSharePoint(formData));
                setFormSubmitted(true);
                addNotification('success', 'Archivo almacenado con éxito!');
            }
        } catch {
            throw new Error('Error al enviar el archivo');
        }
    };
    
    return (
        <div>
            <h1>Subir Archivo a SharePoint</h1>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={`${styles.form} position-relative`} 
                encType="multipart/form-data"
            >
                {formSubmitted && (
                    <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>
                        El archivo se ha subido con éxito
                    </div>
                )}
                {Array.isArray(sharePointErrors) && sharePointErrors?.map((error, i) => (
                    <div key={i}>{error}</div>
                ))}

                {/* Archivos: Solo un archivo permitido */}
                <input
                    {...register('attachments', { required: 'Por favor selecciona un archivo' })}
                    className={`${styles.input__File} p-2 border`}
                    type="file"
                    multiple={false}
                />
                <button type='submit' className={`${styles.button__Submit} border-0 rounded text-decoration-none`}>
                    Subir Archivo
                </button>
            </form>
        </div>
    );
}

export default UploadToSharePoint;