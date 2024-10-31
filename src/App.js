import React, { useState } from 'react';
import './App.css';

const buildings = {
    bima: { name: "비마관", image: process.env.PUBLIC_URL + "/images/bima_building.jpg", pageUrl: "/bima.html" },
    sebit: { name: "세빛관", image: process.env.PUBLIC_URL + "/images/sebit_building.jpg", pageUrl: "/sebit.html" },
    hwado: { name: "화도관", image: process.env.PUBLIC_URL + "/images/hwado_building.jpg", pageUrl: "/hwado.html" },
    ogui: { name: "옥의관", image: process.env.PUBLIC_URL + "/images/ogui_building.jpg", pageUrl: "/ogui.html" },
    chambit: { name: "참빛관", image: process.env.PUBLIC_URL + "/images/chambit_building.jpg", pageUrl: "/chambit.html" },
};

function App() {
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const showBuildingImage = (buildingKey) => {
        setSelectedBuilding(buildings[buildingKey]);
    };

    const hideBuildingImage = () => {
        setSelectedBuilding(null);
    };

    const goToBuildingPage = (pageUrl) => {
        window.location.href = pageUrl;
    };

    return (
        <div className="App">
            <header>
                <h1>광운대학교 건물 지도</h1>
            </header>

            <main>
                <section id="map" style={{ position: 'relative' }}>
                    <h2>학교 전체 지도</h2>
                    <img src={process.env.PUBLIC_URL + "/images/kwangwoon_map.png"} alt="광운대학교 지도" />

                    <div
                        className="map-area"
                        style={{ position: 'absolute', top: '588px', left: '609px', width: '68px', height: '121px' }}
                        onMouseOver={() => showBuildingImage('bima')}
                        onMouseOut={hideBuildingImage}
                        onClick={() => goToBuildingPage(buildings.bima.pageUrl)}
                    />
                    <div
                        className="map-area"
                        style={{ position: 'absolute', top: '702px', left: '721px', width: '73px', height: '21px' }}
                        onMouseOver={() => showBuildingImage('sebit')}
                        onMouseOut={hideBuildingImage}
                        onClick={() => goToBuildingPage(buildings.sebit.pageUrl)}
                    />
                    <div
                        className="map-area"
                        style={{ position: 'absolute', top: '449px', left: '668px', width: '74px', height: '113px' }}
                        onMouseOver={() => showBuildingImage('hwado')}
                        onMouseOut={hideBuildingImage}
                        onClick={() => goToBuildingPage(buildings.hwado.pageUrl)}
                    />
                    <div
                        className="map-area"
                        style={{ position: 'absolute', top: '626px', left: '434px', width: '89px', height: '56px' }}
                        onMouseOver={() => showBuildingImage('ogui')}
                        onMouseOut={hideBuildingImage}
                        onClick={() => goToBuildingPage(buildings.ogui.pageUrl)}
                    />
                    <div
                        className="map-area"
                        style={{ position: 'absolute', top: '764px', left: '664px', width: '38px', height: '62px' }}
                        onMouseOver={() => showBuildingImage('chambit')}
                        onMouseOut={hideBuildingImage}
                        onClick={() => goToBuildingPage(buildings.chambit.pageUrl)}
                    />
                </section>

                {selectedBuilding && (
                    <section id="building-info" className="visible">
                        <h2 id="building-name">{selectedBuilding.name}</h2>
                        <img
                            id="building-image"
                            src={selectedBuilding.image}
                            alt={`${selectedBuilding.name} 외부 사진`}
                        />
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
