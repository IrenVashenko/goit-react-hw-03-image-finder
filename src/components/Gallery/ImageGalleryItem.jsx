const ImageGalleryItem = ({ tags, previewImg, selectedImg }) => {
    return (
        <>
            <li className="ImageGalleryItem">
                <img src={previewImg} alt={tags} className="ImageGalleryItem-image" onClick={selectedImg} />
            </li>
        </>
    )
}

export default ImageGalleryItem;

