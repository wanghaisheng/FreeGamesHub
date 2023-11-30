import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from '@nextui-org/react';

// interface Data {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     placeformat: string;
//     genre: string;
// }

// type Props = {
//     data: Data[];
//     children: React.ReactNode;
//     effect: 'coverflow' | 'slide';
// }

const CustomPrevArrow = () => (
    <div
        className='swiper-button-prev'
        style={{
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            left: "10px"
        }}
    >
        <Button isIconOnly size='sm' color="default" radius='full' >
            <MdNavigateBefore />
        </Button>
    </div>
);

const CustomNextArrow = () => (
    <div
        className='swiper-button-next'
        style={{
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            right: "10px"
        }}
    >
        <Button isIconOnly size='sm' color="default" radius='full' >
            <MdNavigateNext />
        </Button>
    </div>
);

export const SwiperSlider = (props: any) => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[Navigation, EffectCoverflow]}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }}
            effect={props.effect}
            breakpoints={{
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },

                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                }
            }}
            style={{ padding: "10px" }}
        >
            <CustomPrevArrow />
            <CustomNextArrow />
            {
                [1, 2, 3, 4, 5, 6].map((item) => (
                    <SwiperSlide key={item}>
                        {props.children}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}