import * as React from 'react';

import {IHomeContainerProps} from "../../../containers/sections/student/HomeContainer";
import {GLOBAL_IMAGES, ICONS} from "../../../constants/images";
import {SearchComponent} from "../../generic/SearchComponent";
import {SvgImport} from "../../../utils/ImgUtils";
import SelectorWithSectionsComponent from "../../generic/SelectorWithSectionsComponent";
import ButtonComponent from "../../generic/ButtonComponent";

export default class HomeView extends React.Component<IHomeContainerProps> {
    render() {
        const selectorOptions = [
            {
                name: 'Mi cuenta',
                icon: ICONS.ACCOUNT,
                iconSmall: true,
                section: 'A'
            },
            {
                name: 'Ajustes',
                icon: ICONS.SETTINGS,
                iconSmall: true,
                section: 'A'
            },
            {
                name: 'Salir',
                icon: ICONS.POWER,
                iconSmall: true,
                section: 'A'
            }
        ];
        return (
            <div className="home-student-view">
                <div className="header-student border-b border-secondary border-lighten-4 p-l-lg p-r-lg">
                    <div>
                        <img src={GLOBAL_IMAGES.BRAND} className="brand-header"/>
                    </div>
                    <div className="search-student-header">
                        <SearchComponent value={''} onChangeSearch={() => null} actionSearch={() => null} placeholder={'Buscar...'} big={true} />
                    </div>
                    <div className="flex-row flex-no-wrap notifications-account-content">
                        <div className="icon-notification border-r border-secondary border-lighten-3 flex-row flex-middle">
                            <SvgImport icon={ICONS.NOTIFICATION} className="icon-small" />
                        </div>
                        <div className="account-selector-student">
                            <SelectorWithSectionsComponent options={selectorOptions} labelSectionA={'Cuenta'} onClickOption={() => null} value={''} name={'Marco Espinosa'} mainIcon={ICONS.AVATAR} />
                        </div>
                    </div>
                </div>
                <div className="p-lg-all">
                    <div className="container">
                        <div className="row">
                            <div className="col-s12 col-m3 p-none">
                                <div className="side-nav-component bg-secondary bg-lighten-6">
                                    <div className="bg-primary p-all header-side-nav text-white secondary-font letter-spacing-1x flex-row flex-middle">
                                        <SvgImport icon={ICONS.MENU} className="icon-small" />
                                        <div className="p-l">
                                            Categorías de libros
                                        </div>
                                    </div>
                                    <div className="p-all p-l p-r flex-row flex-middle border-b border-secondary border-lighten-4 cursor-pointer">
                                        Tecnología
                                    </div>
                                    <div className="p-all p-l p-r flex-row flex-middle border-b border-secondary border-lighten-4 cursor-pointer">
                                        Diseño
                                    </div>
                                    <div className="p-all p-l p-r flex-row flex-middle border-b border-secondary border-lighten-4 cursor-pointer">
                                        Economía
                                    </div>
                                    <div className="p-all p-l p-r flex-row flex-middle border-b border-secondary border-lighten-4 cursor-pointer">
                                        Medicina
                                    </div>
                                    <div className="p-all p-l p-r flex-row flex-middle border-b border-secondary border-lighten-4 cursor-pointer p-b">
                                        Gastronomía
                                    </div>
                                </div>
                            </div>
                            <div className="col-s12 col-m9 slider-container">
                                <div className="slider-img" style={{backgroundImage: `url(${GLOBAL_IMAGES.SLIDER})`}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-lg-all">
                    <div className="container">
                        <div className="row">
                            <div className="col-s12 text-secondary strong secondary-font size-3 p-b border-b border-secondary border-lighten-4">
                                Libros recientemente agregados
                            </div>
                            <div className="card col-s12 col-m3 m-t-lg cursor-pointer">
                                <div className="secondary-font text-secondary text-lighten-1 p-t p-b-s size-4">
                                    Programacion
                                </div>
                                <div className="secondary-font text-secondary size-4 p-t-s p-b">
                                    Hacking-Etico
                                </div>
                                <div className="width-100 flex-row flex-center">
                                    <div className="card-image" style={{backgroundImage: `url(${GLOBAL_IMAGES.HACKING})`}}>
                                    </div>
                                </div>
                                <div className="secondary-font text-secondary p-t p-b">
                                    Anonimo
                                </div>
                            </div>
                            <div className="card col-s12 col-m3 m-t-lg cursor-pointer">
                                <div className="secondary-font text-secondary text-lighten-1 p-t p-b-s size-4">
                                    Programacion
                                </div>
                                <div className="secondary-font text-secondary size-4 p-t-s p-b">
                                    Hacking-Etico
                                </div>
                                <div className="width-100 flex-row flex-center">
                                    <div className="card-image" style={{backgroundImage: `url(${GLOBAL_IMAGES.HACKING})`}}>
                                    </div>
                                </div>
                                <div className="secondary-font text-secondary p-t p-b">
                                    Anonimo
                                </div>
                            </div>
                            <div className="card col-s12 col-m3 m-t-lg cursor-pointer">
                                <div className="secondary-font text-secondary text-lighten-1 p-t p-b-s size-4">
                                    Programacion
                                </div>
                                <div className="secondary-font text-secondary size-4 p-t-s p-b">
                                    Hacking-Etico
                                </div>
                                <div className="width-100 flex-row flex-center">
                                    <div className="card-image" style={{backgroundImage: `url(${GLOBAL_IMAGES.HACKING})`}}>
                                    </div>
                                </div>
                                <div className="secondary-font text-secondary p-t p-b">
                                    Anonimo
                                </div>
                            </div>
                            <div className="card col-s12 col-m3 m-t-lg cursor-pointer">
                                <div className="secondary-font text-secondary text-lighten-1 p-t p-b-s size-4">
                                    Programacion
                                </div>
                                <div className="secondary-font text-secondary size-4 p-t-s p-b">
                                    Hacking-Etico
                                </div>
                                <div className="width-100 flex-row flex-center">
                                    <div className="card-image" style={{backgroundImage: `url(${GLOBAL_IMAGES.HACKING})`}}>
                                    </div>
                                </div>
                                <div className="secondary-font text-secondary p-t p-b">
                                    Anonimo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-student p-all border-t border-secondary border-lighten-4 m-t-lg">
                    <div>
                        <img src={GLOBAL_IMAGES.BRAND} className="brand-header"/>
                    </div>
                    <div className="secondary-font text-secondary size-4">
                        develop by: marcoespinosa12@gmail.com
                    </div>
                </div>
            </div>
        );
    }
}
