import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ pixabay, selectedImg }) => {
    return (
        <>
            <ul className="ImageGallery">
                {pixabay.map(({ id, webformatURL, tags, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        previewImg={webformatURL}
                        tags={tags}
                        selectedImg={() => selectedImg(largeImageURL, tags)}
                    />
                ))}
            </ul>
        </>
    )
}

export default ImageGallery;