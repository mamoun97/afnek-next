import UploadImage from "../Inputs/UploadImage";

export default function PhotoGallery() {
  return (
    <div>
      <h1 className="text-primary  font-bold text-xl">
        Photo gallery
      </h1>
      <form>
        <div className="grid grid-cols-1  gap-4 pt-3 ">
          <p>
            Guests interact with photos more than any other part of your property listing, and the right ones can make a difference.
          </p>
          <h1 className="font-bold text-xl">
            Download hotel thumbnail photos
          </h1>
          <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            <UploadImage />
            <UploadImage />
          </div>
          <p className="text-sm">
            Résolution minimale de 350*250 px et pas plus de 2 Mo de taille pour chaque photo.
          </p>
          <h1 className="font-bold text-xl mt-6">
            Upload property photos
          </h1>
          <p className="text-sm">
            (at least 5 photos with a minimum resolution of 800 * 1200 px and no more than 2 MB in size for each photo)
          </p>
          <UploadImage />
          <p className="text-sm">
            Please note: Document file size must be less than 5MB, supported file format: JPG, PNG, PDF
          </p>
        </div>
      </form>
    </div>
  )
}
