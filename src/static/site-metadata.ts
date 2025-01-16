interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://cuijianzhuang.com',
  logo: 'https://avatars.githubusercontent.com/u/31424401?s=400&v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'HomePage',
      url: 'https://cuijianzhuang.com',
    },
    {
      name: 'About',
      url: 'https://github.com/cuijianzhuang/cuijianzhuang/blob/master/README.md',
    },
  ],
};

export default data;
