import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "himalaya-wala";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5ZMFFmeFJBQUFDUUFoNWpT.AD_vv73vv70oPO-_ve-_ve-_vXnvv73vv71SEO-_ve-_ve-_vVE2QhPvv73vv71mYALvv73vv73vv73vv71hQA",
});
