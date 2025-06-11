export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublish } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    // Check if all fields are present

    if(!title || !description || !category || !imageFile){
        return res.json({success:false, message:"Missing required fields"});
    }

    

  } catch (error) {}
};
