import SectionWrapper from "../components/common/section-wrapper";
import {Input} from "../components/ui/input";
import {capitalizeFirstLetter} from "../lib/strings";
import {categoryArticle} from "../assets/dummy/category-article";
import {Card, CardContent, CardFooter} from "../components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../components/ui/pagination";
import {Link, useParams} from "react-router-dom";

function CategoryArticle() {
  const { category } = useParams();

  console.log({ category, categoryArticle });
  return (
    <SectionWrapper className='max-w-[1200px] space-y-12 pb-[64px]'>
      <div className=' pt-[70px] flex items-center'>
        <div className='w-max space-y-12'>
          <h1 className='text-[60px] leading-[70px] font-semibold'>
            Pilihan <span className='text-color-1'>Artikel</span> Hari ini{" "}
            <br /> Untuk Anda
          </h1>
          <Input placeholder='Cari Artikel' />
        </div>
      </div>
      <div className='space-y-[70px]'>
        <h1 className='text-center text-[40px] leading-[44px] font-bold'>
          {capitalizeFirstLetter(category)}
        </h1>
        <div className='grid grid-cols-4 gap-[16px]'>
          {categoryArticle.map((categoryData) => {
            console.log({
              slug: categoryData.slug,
              category,
            });
            return (
              <Card
                key={categoryData.id}
                className='rounded-[20px]  w-full overflow-hidden '
              >
                <CardContent className='w-full p-0   h-[360px] '>
                  <img
                    alt=''
                    src={categoryData.images}
                    className='h-[48%] w-full object-cover'
                  />
                  <div className='p-5 space-y-4'>
                    <h1 className='text-text14_20 font-bold'>
                      {categoryData.title}
                    </h1>
                    <p className='text-text12_20 text-color-4'>
                      {categoryData.desc}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    to={`/artikel/${category}/${categoryData.slug}`}
                    className='text-text14_20 text-color-1 hover:underline hover:underline-offset-4'
                  >
                    Baca Selengkapnya
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' className={"text-color-2"} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' className={"bg-color-2 text-white"}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' className={"text-color-2"}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' className={"text-color-2"}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' className={"text-color-2"}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className={"text-color-2"} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' className={"text-color-2"} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </SectionWrapper>
  );
}

export default CategoryArticle;
