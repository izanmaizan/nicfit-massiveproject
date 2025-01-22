import {articles} from "../assets/dummy/article";
import {categoryArticle} from "../assets/dummy/category-article";
import SectionWrapper from "../components/common/section-wrapper";
import NotFound from "../components/not-found/not-found";
import {Card, CardContent, CardFooter} from "../components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "../components/ui/carousel";
import AppLayout from "../layouts/app-layout";
// import { capitalizeFirstLetter } from "../lib/tailwind-utils";
import {Link, useParams} from "react-router-dom";

export default function Artikel() {
  const { slug } = useParams();

  const selectedArticle = articles.filter(
    (article) => article.slug === slug
  )[0];

  if (!selectedArticle) {
    return (
      <AppLayout>
        <SectionWrapper>
          <NotFound />
        </SectionWrapper>
      </AppLayout>
    );
  }

  return (
    <>
      <SectionWrapper className='max-w-[1200px] '>
        <div className='pt-[70px] '>
          <h2
            className='text-[40px] leading-[44px] font-bold '
            dangerouslySetInnerHTML={{ __html: selectedArticle.title }}
          />
          <div
            className='text-text14_20 text-color-3  pt-[12px] block'
            dangerouslySetInnerHTML={{ __html: selectedArticle.editor }}
          />
          <p
            className='text-text14_20 pt-1  block'
            dangerouslySetInnerHTML={{ __html: selectedArticle.date }}
          />
        </div>
        <div className='pt-[50px] space-y-5'>
          <div className='flex gap-5'>
            <img
              src={selectedArticle.images}
              alt=''
              className='w-[500px] h-[300px]   rounded-[20px] object-cover'
            />
            <div
              className='text-text18_28   text-justify'
              dangerouslySetInnerHTML={{ __html: selectedArticle.header }}
            />
          </div>
          <div
            className='text-text18_28   text-justify'
            dangerouslySetInnerHTML={{ __html: selectedArticle.text }}
          />
        </div>
      </SectionWrapper>
      <div className='mt-[60px] bg-[#F8FCF8ff] py-10'>
        <SectionWrapper className='max-w-[1200px] space-y-5'>
          <h1 className='text-center text-[40px] leading-[44px] font-bold'>
            Baca juga Artikel <span className='text-color-1'>Lainnya</span>{" "}
          </h1>
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
        </SectionWrapper>
      </div>
    </>
  );
}
