import slugify from "slugify";

const articleHeaders = [
  {
    id: 1,
    images: "../../../public/images/article-parent.png",
    category: "kecanduan",
    title: "Mengakhiri Kebiasaan Merokok",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 2,
    images: "../../../public/images/article-kecanduan.png",
    category: "emosional",
    title: "Solusi untuk Generasi Penerus yang Sehat",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 3,
    images: "../../../public/images/article-rokok.png",
    category: "kecanduan",
    title: "Panduan Holistik untuk mengatasi ketergantungan",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 4,
    images: "../../../public/images/article-parent.png",
    category: "emosional",
    title: "Mengakhiri Kebiasaan Merokok",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 5,
    images: "../../../public/images/article-kecanduan.png",
    category: "kecanduan",
    title: "Solusi untuk Generasi Penerus yang Sehat",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 6,
    images: "../../../public/images/article-rokok.png",
    category: "emosional",
    title: "Panduan Holistik untuk mengatasi ketergantungan",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 7,
    images: "../../../public/images/article-parent.png",
    category: "kecanduan",
    title: "Mengakhiri Kebiasaan Merokok",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 8,
    images: "../../../public/images/article-kecanduan.png",
    category: "emosional",
    title: "Solusi untuk Generasi Penerus yang Sehat",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 9,
    images: "../../../public/images/article-rokok.png",
    category: "kecanduan",
    title: "Panduan Holistik untuk mengatasi ketergantungan",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 10,
    images: "../../../public/images/article-parent.png",
    category: "emosional",
    title: "Mengakhiri Kebiasaan Merokok",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 11,
    images: "../../../public/images/article-kecanduan.png",
    category: "kecanduan",
    title: "Solusi untuk Generasi Penerus yang Sehat",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
  {
    id: 12,
    images: "../../../public/images/article-rokok.png",
    category: "emosional",
    title: "Panduan Holistik untuk mengatasi ketergantungan",
    desc: "Merokok adalah salah satu kebiasaan paling berbahaya yang dapat merusak kesehatan.",
  },
];

export const categoryArticle = articleHeaders.map((articleHeader) => {
  return {
    ...articleHeader,
    slug: slugify(articleHeader.title, {
      lower: true,
    }),
  };
});
