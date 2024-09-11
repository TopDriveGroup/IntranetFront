import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { sendDocumentToSharePoint } from '../../../redux/SharePoint/actions';
import styles from './styles.module.css';

function UploadToSharePoint() {
    const dispatch: AppDispatch = useDispatch();
    const sharePointErrors = useSelector((state: RootState) => state.sharePoint.sharePointErrors);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!file) {
                setError('Por favor, selecciona un archivo');
                return;
            }
            const formData = new FormData();
            formData.append('file', file);
            // Enviar el FormData a tu acción de Redux
            dispatch(sendDocumentToSharePoint(formData));
            setFormSubmitted(true);
            setError(null);
        } catch (error) {
            console.log('Error: ', error);
            setError('Error al subir el archivo');
            setStatus(null);
            throw new Error('Error al enviar el archivo');
        }
    };
    
    
    return (
        <div>
            <h1>Subir Archivo a SharePoint</h1>
            <form onSubmit={sendEmail} className={`${styles.form} position-relative`} encType="multipart/form-data">
                {formSubmitted && (
                    <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>
                        El archivo se ha subido con éxito
                    </div>
                )}
                {Array.isArray(sharePointErrors) && sharePointErrors?.map((error, i) => (
                    <div key={i}>{error}</div>
                ))}
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />
                <div className="mb-4 d-flex align-items-center justify-content-center">
                    <button type='submit' className={`${styles.button__Submit} border-0 rounded text-decoration-none`}>
                        Subir Archivo
                    </button>
                </div>
                {status && <p>{status}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default UploadToSharePoint;