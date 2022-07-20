
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


// import React, { Component } from "react";

// import Loader from "components/Loader/Loader";
// import galleryAPI from '../serves/gallery-api'

// class ImageGalleryItem extends Component {
//     state = {
//         pixabay: [],
//         loading: false,
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.pixabayImg;
//         const nextName = this.props.pixabayImg;
//         if (prevName !== nextName) {
//             console.log('Изменилось')
//             this.setState({ loading: true });

//             galleryAPI
//                 .fetchGalleryApi(nextName)
//                 .then(data => { return data.hits })
//                 .then(pixabay => this.setState({ pixabay }))
//                 .finally(() => this.setState({ loading: false }))
//         }
//     }

//     render() {
//         const { pixabay, loading } = this.state;
//         return (
//             <>
//                 {loading && <Loader />}
//                 {pixabay.map((elem) => (
//                     <li className="ImageGalleryItem" key={elem.id}>
//                         <img src={elem.webformatURL} alt={elem.tags} className="ImageGalleryItem-image" />
//                     </li>
//                 ))}
//             </>
//         )
//     }
// }