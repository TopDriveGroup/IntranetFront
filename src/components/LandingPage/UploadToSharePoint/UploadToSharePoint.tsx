
import { useState } from 'react';
// import jsCookie from 'js-cookie';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { sendDocumentToSharePoint } from '../../../redux/SharePoint/actions';
import type { RootState, AppDispatch } from '../../../redux/store';
//ELEMENTOS DEL COMPONENTE

function UploadToSharePoint() {
    // const token = jsCookie.get('token') || '';
    const dispatch: AppDispatch = useDispatch();

    // Estados de Redux
    const sharePointErrors = useSelector((state: RootState) => state.sharePoint.sharePointErrors);

    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!file) {
            setError('Por favor, selecciona un archivo');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            // Aquí llamas a tu action de Redux
            await dispatch(sendDocumentToSharePoint(formData));
            // setStatus('Archivo subido con éxito');
            setError(null);
        } catch (error: unknown) {
            setError('Error al subir el archivo');
            setStatus(null);
            console.log('Error: ', error);
        }
    };

    return (
        <div>
            <h1>Subir Archivo a SharePoint</h1>

            {Array.isArray(sharePointErrors) && sharePointErrors?.map((error, i) => (
                <div key={i} >{error}</div>
            ))}
            <input
                type="file"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
            <button onClick={handleSubmit}>Subir Archivo</button>
            {status && <p>{status}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default UploadToSharePoint;