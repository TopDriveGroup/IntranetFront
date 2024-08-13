/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import styles from './styles.module.css';

const setItemInLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = (key: string, initialValue: any) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
};

function SideBarDocuments() {
    const location = useLocation();

    //DECLARAR LOS ESTADOS PARA CADA SUBMENU
    const [subMenuFinantial, setSubMenuFinantial] = useState(() => getItemFromLocalStorage('finantial', false));

    //DECLARAR LAS REFERENCIAS PARA CADA SUBMENU
    const subMenuFinantialRef = useRef<HTMLDivElement>(null);

    //MENU DE FINANCIERO
    const handleSubMenuFinantial = () => {
        setSubMenuFinantial((prev: any) => {
            setItemInLocalStorage('finantial', !prev);
            return !prev;
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                subMenuFinantialRef.current && !subMenuFinantialRef.current.contains(event.target as Node)
            ) {
                setSubMenuFinantial(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/documents" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/documents" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Documentos</Link>
                        </div>
                    )}
                </div>

                <div ref={subMenuFinantialRef} className={`${styles.container__Section} ${location.pathname === '/documents/finantial' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment} onClick={handleSubMenuFinantial}/>
                    </div>
                    <Link to="/documents/finantial" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Financiero</div>
                    </Link>
                    <div className={`collapse ${subMenuFinantial ? 'show' : ''}`}>
                        <div className={`${styles.menu} d-flex flex-column align-items-start w-100`}>
                            <Link to='/inventories/consult-assets' className={`${styles.link__SideBar} text-decoration-none ${(location.pathname === '/inventories/consult-assets' || location.pathname === '/inventories/create-assets') ? styles.active : ''} `}>Top Drive Group SAS</Link>
                            <Link to='/inventories/consult-merchandises' className={`${styles.link__SideBar} text-decoration-none ${(location.pathname === '/inventories/consult-merchandises' || location.pathname === '/inventories/create-merchandises') ? styles.active : ''} `}>World Electric Telecom Solutions SAS</Link>
                            <Link to='/inventories/consult-products' className={`${styles.link__SideBar} text-decoration-none ${(location.pathname === '/inventories/consult-products'|| location.pathname === '/inventories/create-products' ) ? styles.active : ''} `}>West Cargo Logistics SAS</Link>
                            <Link to='/inventories/consult-raw-materals' className={`${styles.link__SideBar} text-decoration-none ${(location.pathname === '/inventories/consult-raw-materals' || location.pathname === '/inventories/create-raw-materals') ? styles.active : ''}`}>Kowa Coworking Warehouse</Link>
                        </div>
                    </div>
                </div>










                <div className={`${styles.container__Section} ${location.pathname === '/documents/marketing' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/documents/marketing" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Marketing</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/documents/administrative' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/documents/administrative" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Administrativo</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideBarDocuments;