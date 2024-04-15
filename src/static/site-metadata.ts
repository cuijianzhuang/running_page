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
  siteUrl: 'https://www.cuijianzhuang.com',
  logo: 'https://avatars.githubusercontent.com/u/31424401?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://www.cuijianzhuang.com',
    },
    {
      name: 'About',
      url: 'https://github.com/cuijianzhuang',
    },
  ],
};

export default data;
