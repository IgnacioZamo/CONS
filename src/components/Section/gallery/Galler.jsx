import { useState, useEffect } from 'preact/hooks';
import { galleryy } from './imagenes/imagenesGallery.astro';

const Gallery = () => {
    const [selectedColor, setSelectedColor] = useState(''); // useState es una función
    const [filteredImages, setFilteredImages] = useState(galleryy); // useState también es una función

    const handleSelectChange = (event) => {
        setSelectedColor(event.target.value);
    };

    useEffect(() => {
        if (selectedColor === '' || selectedColor === 'all') {
            setFilteredImages(galleryy); // Mostrar todas las imágenes
        } else {
            setFilteredImages(galleryy.filter(img => img.color === selectedColor));
        }
    }, [selectedColor]);

    return (
        <div className="w-full h-full py-10 px-3">
            <div className="flex flex-col gap-3 mb-5">
                <h1 className="italic font-bold text-xl text-center">Galería de nuestros trabajos</h1>
                <p className="text-center">Les compartimos una muestra de nuestros trabajos. Aquí encontrarán tanto inspiraciones para sus decoraciones como ejemplos de los diferentes estilos decorativos.</p>
            </div>
            <div className="flex flex-col lg:block gap-2 mb-5">
                <h3 className="font-semibold">Seleccione color</h3>
                <select id="consulta" name="consulta" className="py-2 px-3" onChange={handleSelectChange}>
                    <option value="all">Todo</option>
                    <option value="beige">Beige</option>
                    <option value="azul">Azul</option>
                    <option value="verde">Verde oliva</option>
                </select>
            </div>
            <div className="flex flex-wrap gap-5 border justify-center">
                {filteredImages.map((img, index) => (
                    <div key={index} className="flex justify-center border-black border-2">
                        <img src={img.link} className="w-36 sm:w-56 lg:w-72 hover:cursor-pointer hover:scale-105 transition duration-100 ease-out" alt="Imagen de galería" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;