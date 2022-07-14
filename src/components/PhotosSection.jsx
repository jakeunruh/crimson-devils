import BandTruck from "../img/epk/crimson-devils-truck-small.jpg";
import BandTruckHi from "../img/epk/crimson-devils-truck.png";
import Curt from "../img/curt.jpg";
import Patrick from "../img/patrick.jpg";
import Jake from "../img/jake.jpg";
import "../styles/photos-section.scss";

function PhotosSection() {
    const photoInfo = [
        {
            imageThumb: BandTruck,
            imageLink: BandTruckHi,
            altText: "Crimson Devils"
        },
        {
            imageThumb: Curt,
            imageLink: Curt,
            altText: "Curt Christenson"
        },
        {
            imageThumb: Patrick ,
            imageLink: Patrick,
            altText: "Patrick Pascucci"
        },
        {
            imageThumb: Jake,
            imageLink: Jake,
            altText: "Jake Unruh"
        }
    ];
    const renderPhoto = (photo) => {
        return (
            <div className="main__photos-photo">
                <a href={photo.imageLink}><img src={photo.imageThumb} alt={photo.altText} /></a>
            </div>
        );
    };
    return (
        <>
            {photoInfo.map(renderPhoto)}
        </>
    );
};

export default PhotosSection
