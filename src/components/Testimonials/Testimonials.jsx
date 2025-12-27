import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Mohammed Abdu",
    text: "የላካችሁልኝ ዕቃ ጥሩ ጥራት ያላቸው ናቸው በተጨማሪም ለምሰሩት አገልግሎት ለደንበኛ ያላቺሁ አክብሮት ደሊቨሪ አሰጣታቺሁ ሕለሁሉም ነገር አመሰግናለሁ ",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Mohammed Juhar",
    text: "የላካችሁልኝ ዕቃ ጥሩ ጥራት ያላቸው ናቸው በተጨማሪም ለምሰሩት አገልግሎት ለደንበኛ ያላቺሁ አክብሮት ደሊቨሪ አሰጣታቺሁ ሕለሁሉም ነገር አመሰግናለሁ ",
   img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ahmed Seid",
    text: "The items you sent me are of good quality, and I also thank you for the service you have done for the customer, and for the respect you have shown for the delivery service.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Awol Akam",
    text: "The items you sent me are of good quality, and I also thank you for the service you have done for the customer, and for the respect you have shown for the delivery service.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,        // ✅ added
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-md text-primary">
            What our customers are saying
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            When you shop on Ad Shopping, trust, joy, happiness, discount,
             quality, our profile is, shop without doubt.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="my-6">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-secondary dark:bg-gray-800 relative">
                
                <img
                  src={data.img}
                  alt={data.name}
                  className="rounded-full w-20 h-20 mx-auto"
                />

                <p className="text-xs text-white text-center">
                  {data.text}
                </p>

                <h1 className="text-xl font-bold text-center text-white dark:text-white">
                  {data.name}
                </h1>

                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default Testimonials;
