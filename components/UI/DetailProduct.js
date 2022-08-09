import React from "react";

function DetailProduct({ projectData }) {
  //remove '.' from beginning of string
  const mobImagePath = projectData.image.mobile.substring(1);
  const tabImagePath = projectData.image.tablet.substring(1);
  const desktopImagePath = projectData.image.desktop.substring(1);

  const mobGalleryFirst = projectData.gallery.first.mobile.substring(1);
  const tabGalleryFirst = projectData.gallery.first.tablet.substring(1);
  const desktopGalleryFirst = projectData.gallery.first.desktop.substring(1);

  const mobGallerySecond = projectData.gallery.second.mobile.substring(1);
  const tabGallerySecond = projectData.gallery.second.tablet.substring(1);
  const desktopGallerySecond = projectData.gallery.second.desktop.substring(1);

  const mobGalleryThird = projectData.gallery.third.mobile.substring(1);
  const tabGalleryThird = projectData.gallery.third.tablet.substring(1);
  const desktopGalleryThird = projectData.gallery.third.desktop.substring(1);

  return (
    <>
      {/* Main */}
      <div>
        <img
          src={mobImagePath}
          alt=''
          className='mx-auto rounded-lg object-contain md:hidden'
        />
        <img
          src={tabImagePath}
          alt=''
          className='mx-auto hidden rounded-lg object-contain md:block  lg:hidden'
        />
        <img
          src={desktopImagePath}
          alt=''
          className='mx-auto hidden rounded-lg object-contain lg:block'
        />
        <p>{projectData.new}</p>
        <h3>{projectData.name}</h3>
        <p>{projectData.description}</p>
        <p>${projectData.price}</p>
      </div>

      {/* Features */}
      <div>
        <h3>FEATURES</h3>
        <p>{projectData.features}</p>
      </div>

      {/* In the box */}
      <div>
        <h3>IN THE BOX</h3>
        <ul>
          {projectData.includes.map((boxItem, i) => (
            <li key={i}>
              <span>{boxItem.quantity}x</span> {boxItem.item}
            </li>
          ))}
        </ul>
      </div>
      {/* gallery */}
      <div>
        <img
          src={mobGalleryFirst}
          alt=''
          className='mx-auto rounded-lg object-contain md:hidden'
        />
        <img
          src={tabGalleryFirst}
          alt=''
          className='mx-auto hidden rounded-lg object-contain md:block  lg:hidden'
        />
        <img
          src={desktopGalleryFirst}
          alt=''
          className='mx-auto hidden rounded-lg object-contain lg:block'
        />
        <img
          src={mobGallerySecond}
          alt=''
          className='mx-auto rounded-lg object-contain md:hidden'
        />
        <img
          src={tabGallerySecond}
          alt=''
          className='mx-auto hidden rounded-lg object-contain md:block  lg:hidden'
        />
        <img
          src={desktopGallerySecond}
          alt=''
          className='mx-auto hidden rounded-lg object-contain lg:block'
        />
        <img
          src={mobGalleryThird}
          alt=''
          className='mx-auto rounded-lg object-contain md:hidden'
        />
        <img
          src={tabGalleryThird}
          alt=''
          className='mx-auto hidden rounded-lg object-contain md:block  lg:hidden'
        />
        <img
          src={desktopGalleryThird}
          alt=''
          className='mx-auto hidden rounded-lg object-contain lg:block'
        />
      </div>

      {/* others */}
    </>
  );
}

export default DetailProduct;
