import {Link} from "react-router-dom";
import {categoryArticle} from "../assets/dummy/category-article";
import {Card, CardContent, CardFooter} from "../components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "../components/ui/carousel";
import {Input} from "../components/ui/input";
import SectionWrapper from "../components/common/section-wrapper";

function ArticlePage() {
  return (
    <SectionWrapper className='max-w-[1200px] '>
      <div className=' pt-[70px] flex items-center'>
        <div className='w-max space-y-12'>
          <h1 className='text-[60px] leading-[70px] font-semibold'>
            Pilihan <span className='text-color-1'>Artikel</span> Hari ini{" "}
            <br /> Untuk Anda
          </h1>
          <Input placeholder='Cari Artikel' />
        </div>
      </div>
      <div className='  space-y-10'>
        <div className='flex justify-between items-center '>
          <h1 className='text-[24px] font-bold leading-[44px]'>Kecanduan</h1>
          <Link
            to={"/artikel/kecanduan"}
            className='text-color-1 hover:underline hover:underline-offset-4 text-[20px] font-semibold leading-[28px]'
          >
            Lihat Semua
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className='w-full overflow-hidden '
        >
          <CarouselContent>
            {categoryArticle.map((cardData, index) => (
              <CarouselItem
                key={index + 1}
                className='md:basis-1/2 lg:basis-1/4 hover:drop-shadow-md cursor-pointer py-3'
              >
                <Card className='rounded-[20px]  w-full overflow-hidden '>
                  <CardContent className='w-full p-0   h-[360px] '>
                    <img
                      alt=''
                      src={cardData.images}
                      className='h-[48%] w-full object-cover'
                    />
                    <div className='p-5 space-y-4'>
                      <h1 className='text-text14_20 font-bold'>
                        {cardData.title}
                      </h1>
                      <p className='text-text12_20 text-color-4'>
                        {cardData.desc}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={"/"}
                      className='text-text14_20 text-color-1 hover:underline hover:underline-offset-4'
                    >
                      Baca Selengkapnya
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='  space-y-10'>
        <div className='flex justify-between items-center '>
          <h1 className='text-[24px] font-bold leading-[44px]'>Emosional</h1>
          <Link
            to={"/artikel/emosional"}
            className='text-color-1 hover:underline hover:underline-offset-4 text-[20px] font-semibold leading-[28px]'
          >
            Lihat Semua
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className='w-full overflow-hidden '
        >
          <CarouselContent>
            {categoryArticle.map((cardData, index) => (
              <CarouselItem
                key={index + 1}
                className='md:basis-1/2 lg:basis-1/4 hover:drop-shadow-md cursor-pointer py-3'
              >
                <Card className='rounded-[20px]  w-full overflow-hidden '>
                  <CardContent className='w-full p-0   h-[360px] '>
                    <img
                      alt=''
                      src={cardData.images}
                      className='h-[48%] w-full object-cover'
                    />
                    <div className='p-5 space-y-4'>
                      <h1 className='text-text14_20 font-bold'>
                        {cardData.title}
                      </h1>
                      <p className='text-text12_20 text-color-4'>
                        {cardData.desc}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={"/"}
                      className='text-text14_20 text-color-1 hover:underline hover:underline-offset-4'
                    >
                      Baca Selengkapnya
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}

export default ArticlePage;
