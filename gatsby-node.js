exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
  
    const openGraphImage = createOpenGraphImage(createPage, {
      path: "/src/images/FB Event Flyer w entities.png",
      component: path.resolve(`src/templates/index.og-image.js`),
      size: {
        width: 400,
        height: 50,
      },
      context: {
        description: "a image created with gatsby-plugin-open-graph-images",
      },
    });
  };